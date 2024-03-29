<template>
  <q-page class="flex" padding>
    <q-form ref="frm" class="q-mx-auto" @submit="submitForm" @validation-error="hasErrors">
      <div class="justify-center q-pb-lg flex">
        <q-btn-group push>
          <q-btn name="preview" color="primary" outline @click="dlgPreview = true">
            {{ $t('buttons.preview') }}
          </q-btn>
          <SwitchLanguage v-if="!toolbar" class="q-mx-auto" />
          <q-btn name="abort" color="negative" @click="abortForm">{{ $q.platform.is.mobile ? $t('buttons.cancel') : $t('abortForm') }}</q-btn>
        </q-btn-group>
      </div>
      <!-- eslint-disable quasar/no-invalid-props -->
      <q-stepper
        ref="stepper"
        v-model="currentStep"
        animated
        bordered
        header-nav
        all-panels
        :swipeable="$q.platform.is.mobile"
        :contracted="$q.platform.is.mobile"
        header-class="yawik-stepper"
      >
        <!-- eslint-enable quasar/no-invalid-props -->
        <q-step v-for="stepName in steps" :key="stepName" :name="stepName" :prefix="steps.indexOf(stepName)+1" :title="$t(stepName+'.title')"
                done-color="positive" active-color="primary" error-color="negative"
                :done="isCompleted(stepName)" :error="validationErrors(stepName)"
        >
          <component :is="stepName" :active="currentStep === stepName" :stepper="stepper" :width="maxWidth" style="min-height: 500px;" />
        </q-step>
        <template #navigation>
          <div class="row justify-end q-px-lg q-pb-lg">
            <q-btn v-if="steps.indexOf(currentStep) > 0" name="prev" outline color="primary" :label="$t('buttons.back')" class="q-mr-md" @click.stop="navigate('previous')" />
            <q-btn v-if="lastStep" color="primary" name="next" :label="$t('buttons.send')" @click.stop="trySubmit" />
            <q-btn v-else color="primary" name="next" :label="$t('buttons.continue')" @click.stop="navigate('next')" />
          </div>
        </template>
      </q-stepper>
    </q-form>
    <DialogPreview v-model="dlgPreview"
                   :job="jobTitle"
                   :org="orgName"
                   @send="dlgPreview = false, trySubmit()"
    />
    <q-overlay v-model="sending" no-scroll :z-index="5" background-color="rgba(0, 0, 0, 0.5)">
      <template #body>
        <div class="fullscreen column justify-center items-center">
          <q-spinner color="primary" size="3em" class="q-mb-lg" />
          <q-linear-progress :value="progress" size="32px" color="secondary" track-color="white" rounded instant-feedback style="max-width: 260px;">
            <div class="absolute-full flex flex-center">
              <q-badge color="white" text-color="secondary" :label="(progress * 100).toFixed(1) + ' %'" />
            </div>
          </q-linear-progress>
        </div>
      </template>
    </q-overlay>
  </q-page>
</template>

<script>
import StepOne from 'src/components/steps/StepOne';
import StepTwo from 'src/components/steps/StepTwo';
import StepThree from 'src/components/steps/StepThree';
import StepFour from 'src/components/steps/StepFour';
import StepFive from 'src/components/steps/StepFive';
import SwitchLanguage from 'src/components/SwitchLanguage';
import DialogPreview from 'src/components/dialogs/DialogPreview';
import { QOverlay } from '@quasar/quasar-ui-qoverlay/dist/index.esm.js';
import { GET_COVER_LETTER, GET_FILES, GET_PHOTO, GET_FORM, CLEAR_FORM, GET_STEP, SET_STEP } from '../store/names';
import { mapGetters, mapMutations } from 'vuex';

export default
{
  name: 'PageApply',
  components:
    {
      StepOne,
      StepTwo,
      StepThree,
      StepFour,
      StepFive,
      SwitchLanguage,
      DialogPreview,
      QOverlay,
    },
  props:
    {
      toolbar:
      {
        type: String,
        default: ''
      },
      jobTitle:
        {
          type: String,
          default: ''
        },
      orgName:
        {
          type: String,
          default: ''
        }
    },
  data()
  {
    return {
      lastStep: false,
      stepper: null, // used by StepOne.vue to navigate to step 2 on ENTER key in any input field
      maxWidth: 1024, // used to limit the width of QEditor on step 2, otherwise it grows too much when you type text
      dlgPreview: false,
      sending: false,
      progress: 0,
    };
  },
  computed:
    {
      ...mapGetters([GET_COVER_LETTER, GET_FORM, GET_STEP, GET_FILES, GET_PHOTO]),
      currentStep:
        {
          get()
          {
            return this[GET_STEP];
          },
          set(value)
          {
            this[SET_STEP](value);
          }
        },
      steps()
      {
        return ['stepOne', 'stepTwo', 'stepThree', 'stepFour', 'stepFive'];
      },
      jobID()
      {
        return this.$route.query.job;
      },
      jsonData()
      {
        const form = this[GET_FORM];
        return {
          job: this.jobID,
          org: process.env.YAWIK_ORGANIZATION,
          firstname: form.firstName,
          lastname: form.lastName,
          street: form.street,
          housenumber: form.houseNumber,
          postalcode: form.postalCode,
          city: form.city,
          country: form.country,
          phone: form.phone,
          email: form.email,
          gender: form.salutation === 1 ? 'male' : form.salutation === 2 ? 'female' : '',
          summary: form.coverLetter,
          extras:
            {
              startDate: form.startDate,
              immediate: form.immediate,
              salary:
                {
                  amount: form.salaryAmount,
                  currency: form.currency,
                  period: form.salaryPeriod,
                },
              carbonCopy: form.carbonCopy,
              acceptTerms: form.acceptTerms,
            }
        };
      },
    },
  watch:
    {
      currentStep()
      {
        this.$nextTick(() =>
        {
          // Quasar is too fast - as soon as it detects MouseDown event on the CONTINUE button, it goes to the next step
          // And on the last step the button becomes a SUBMIT type too fast, even before MouseUp - which then leads to speculative form submit
          this.lastStep = this.currentStep === this.steps[this.steps.length - 1];
        });
      }
    },
  mounted()
  {
    this.stepper = this.$refs.stepper; // used by StepOne.vue to navigate to step 2 by ENTER key inside any input field
    this.onResize();
  },
  created()
  {
    // we have to update maxWidth on window resize
    window.addEventListener('resize', this.onResize, false);
  },
  beforeUnmount()
  {
    window.removeEventListener('resize', this.onResize, false);
  },
  methods:
    {
      ...mapMutations([CLEAR_FORM, SET_STEP]),
      onResize()
      {
        // limit the width of QEditor on StepTwo - otherwise it grows too much on typing
        this.maxWidth = this.$refs.frm.$el.clientWidth;
      },
      navigate(direction)
      {
        this.$nextTick(() =>
        {
          this.$refs.stepper[direction]();
        });
      },
      trySubmit()
      {
        this.$refs.frm.submit();
      },
      hasErrors(ref)
      {
        // ensure the first invalid field is focused when it is on a different panel/q-step
        let node = ref;
        do
        {
          node = node.$parent;
          if (node.$options.name === 'QStep')
          {
            if (node.name !== node.$parent.value)
            {
              const newName = node.name;
              do
              {
                node = node.$parent;
                if (node.$options.name === 'QStepper')
                {
                  node.$emit('update:modelValue', newName);
                  break;
                }
              } while (node !== this.$root);
              this.$nextTick(() =>
              {
                ref.focus();
              });
            }
            break;
          }
        } while (node !== this.$root);
      },
      findStep(component)
      {
        let node = component;
        do
        {
          node = node.$parent;
          if (node.$options.name === 'QStep') return node.name;
        } while (node !== this.$root);
      },
      validationErrors(step)
      {
        if (!this.$refs.frm) return false;
        // get all components for the given step and check if they have a validation error
        return false;
        //const components = this.$refs.frm.getValidationComponents().filter(ref => this.findStep(ref) === step);
        //return step !== this.currentStep ? components.some(item => !item.validate()) : components.some(item => item.hasError);
      },
      isCompleted(step)
      {
        if (this.steps.indexOf(this.currentStep) <= this.steps.indexOf(step)) return false;
        if (step === 'stepTwo' && !this[GET_COVER_LETTER]) return false;
        if (step === 'stepFour' && this[GET_FILES].length === 0 && !this[GET_PHOTO]) return false;
        return true;
      },
      submitForm()
      {
        const data = new FormData();
        data.append('data', JSON.stringify(this.jsonData));
        const photo = this[GET_PHOTO];
        if (photo) data.append('photo', photo);
        if (this[GET_FILES].length)
        {
          this[GET_FILES].forEach(file =>
          {
            data.append('attached[]', file);
          });
        }
        this.progress = 0;
        this.sending = true;
        this.$axios.post(process.env.YAWIK_APPLICATION_FORM_ACTION, data, {
          onUploadProgress: (event) =>
          {
            this.progress = event.loaded / event.total;
          },
          headers: {
            accept: 'application/json',
            'Content-Type': 'multipart/form-data'
          },
        }).then(response =>
        {
          if (!response.data.success)
          {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              icon: 'mdi-alert',
              message: response.data.message || this.$t('submitFailed'),
            });
          }
          else
          {
            this[CLEAR_FORM]();
            this.$router.push({ name: 'submitSuccessful' }).catch(() => true);
          }
        }).catch(err =>
        {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            icon: 'mdi-alert',
            message: err.message || err,
          });
        }).finally(() =>
        {
          this.sending = false;
        });
      },
      abortForm()
      {
        this[CLEAR_FORM]();
      }
    }
};
</script>

<style src="@quasar/quasar-ui-qoverlay/dist/index.css"></style>
