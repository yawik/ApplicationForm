<template>
  <q-page class="flex" padding>
    <q-form ref="frm" class="q-mx-auto" @submit="submitForm" @validation-error="hasErrors">
      <div class="row q-pb-lg">
        <SwitchLanguage class="q-mx-auto" />
      </div>
      <!-- eslint-disable quasar/no-invalid-props -->
      <q-stepper ref="stepper" v-model="currentStep" animated header-nav all-panels>
        <!-- eslint-enable quasar/no-invalid-props -->
        <q-step v-for="(stepData,stepName) in form" :key="stepName" :name="stepName" :prefix="steps.indexOf(stepName)+1" :title="$t(stepName+'.title')"
                done-color="positive" active-color="primary" error-color="negative"
                :done="isCompleted(stepName)" :error="validationErrors(stepName)"
        >
          <component :is="stepName" v-model="form[stepName]" :active="currentStep === stepName" :stepper="stepper" :width="maxWidth" style="min-height: 500px;" @uploader="setUploader" />
        </q-step>
        <div slot="navigation" class="row justify-end q-px-lg q-pb-lg">
          <q-btn v-if="steps.indexOf(currentStep) > 0" outline color="primary" :label="$t('buttons.back')" class="q-mr-md" @click.stop="navigate('previous')" />
          <q-btn v-if="lastStep" color="primary" :label="$t('buttons.finish')" @click.stop="trySubmit" />
          <q-btn v-else color="primary" :label="$t('buttons.continue')" @click.stop="navigate('next')" />
        </div>
      </q-stepper>
      <div class="flex q-py-md justify-center">
        <q-btn color="primary" class="q-mr-md" outline @click="dlgPreview = true">{{ $t('previewForm') }}</q-btn>
        <q-btn color="negative" class="q-ml-md">{{ $t('abortForm') }}</q-btn>
      </div>
    </q-form>
    <FormSubmit v-model="dlgSubmit" :info="jsonData" :files="fileList" />
    <DialogPreview v-model="dlgPreview" :form="form" :job="jobName" :org="orgName" :files="uploader ? uploader.files : []" @send="dlgPreview = false, trySubmit()" />
  </q-page>
</template>

<script>
import StepOne from 'src/components/StepOne';
import StepTwo from 'src/components/StepTwo';
import StepThree from 'src/components/StepThree';
import StepFour from 'src/components/StepFour';
import StepFive from 'src/components/StepFive';
import FormSubmit from 'src/components/FormSubmit';
import SwitchLanguage from 'src/components/SwitchLanguage';
import DialogPreview from 'src/components/DialogPreview';

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
      FormSubmit,
      SwitchLanguage,
      DialogPreview,
    },
  props:
    {
      jobName:
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
      currentStep: 'stepOne',
      dlgSubmit: false,
      lastStep: false,
      uploader: null, // used by FormSubmit.vue
      stepper: null, // used by StepOne.vue to navigate to step 2 on ENTER key in any input field
      maxWidth: 1e4, // used to limit the width of QEditor on step 2, otherwise it grows too much when you type text
      dlgPreview: false,
      form:
        {
          stepOne:
            {
              salutation: null,
              firstName: '',
              lastName: '',
              street: '',
              houseNumber: '',
              postalCode: '',
              city: '',
              country: '',
              phone: '',
              email: '',
            },
          stepTwo:
            {
              coverLetter: '',
            },
          stepThree:
            {
              facebook: null,
              xing: null,
              linkedin: null,
              google: null,
            },
          stepFour:
            {
              photo: null,
            },
          stepFive:
            {
              startDate: '',
              carbonCopy: false,
              acceptTerms: false,
            },
        },
    };
  },
  computed:
    {
      steps()
      {
        return Object.keys(this.form);
      },
      jobID()
      {
        return this.$route.query.job;
      },
      jsonData()
      {
        return {
          job: this.jobID,
          org: process.env.YAWIK_ORGANIZATION,
          user:
            {
              ...this.form.stepOne,
              gender: this.form.stepOne.salutation === 1 ? 'male' : this.form.stepOne.salutation === 2 ? 'female' : '',
            },
          summary: this.form.stepTwo.coverLetter,
          extras:
            {
              exampleSocialProfiles: this.form.stepThree,
              ...this.form.stepFive,
            }
        };
      },
      fileList()
      {
        return [this.form.stepOne.photo].concat(this.uploader ? this.uploader.files : []);
      }
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
  beforeDestroy()
  {
    window.removeEventListener('resize', this.onResize, false);
  },
  methods:
    {
      onResize()
      {
        // limit the width of QEditor on StepTwo - otherwise it grows too much on typing
        this.maxWidth = this.$refs.frm.$el.clientWidth;
      },
      setUploader(component)
      {
        // since $refs are not reactive - we wait StepFour.vue to be mounted and to give us the instance of q-uploader
        // which is then provided to FormSubmit.vue to clone the list of attachments
        // The only purpose of FormSubmit's existence is to show the progress of uploading attachments - otherwise we could've used a simple spinner in the FINISH button
        this.uploader = component;
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
          if (node.$options._componentTag === 'q-step')
          {
            if (node.name !== node.$parent.value)
            {
              const newName = node.name;
              do
              {
                node = node.$parent;
                if (node.$options._componentTag === 'q-stepper')
                {
                  node.$emit('input', newName);
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
          if (node.$options._componentTag === 'q-step') return node.name;
        } while (node !== this.$root);
      },
      validationErrors(step)
      {
        if (!this.$refs.frm) return false;
        // get all components for the given step and check if they have a validation error
        const components = this.$refs.frm.getValidationComponents().filter(ref => this.findStep(ref) === step);
        return step !== this.currentStep ? components.some(item => !item.validate()) : components.some(item => !!item.innerError);
      },
      isCompleted(step)
      {
        if (this.steps.indexOf(this.currentStep) <= this.steps.indexOf(step)) return false;
        if (step === 'stepTwo' && !this.form.stepTwo.coverLetter) return false;
        if (step === 'stepFour' && this.uploader.files.length === 0 && !this.form.stepOne.photo) return false;
        return true;
      },
      submitForm()
      {
        if (this.uploader && this.uploader.files && this.uploader.files.length > 0) this.dlgSubmit = true;
        else
        {
          // without attachments there is no point in using FormSubmit.vue
          this.$q.loading.show({ delay: 100 });
          const data = new FormData();
          data.append('application', JSON.stringify(this.jsonData));
          this.$axios.post(process.env.YAWIK_APPLICATION_FORM_ACTION, data).then(response =>
          {
            this.$q.loading.hide();
            console.log(response.data);
            if (!response.data.ok)
            {
              this.$q.notify({
                color: 'negative',
                position: 'top',
                icon: 'mdi-alert',
                message: response.data.message || this.$t('submitFailed'),
              });
            }
            //else this.$router.push({ name: 'submitSuccessful' });
          }).catch(err =>
          {
            this.$q.loading.hide();
            this.$q.notify({
              color: 'negative',
              position: 'top',
              icon: 'mdi-alert',
              message: err.message || err,
            });
          });
        }
      }
    }
};
</script>
