<template>
  <q-page class="flex" padding>
    <q-form ref="frm" class="q-mx-auto q-gutter-md" @submit="submitForm">
      <q-stepper ref="stepper" v-model="currentStep" color="primary" animated header-nav>
        <q-step v-for="(stepData,stepName) in form" :key="stepName" :name="stepName" :prefix="steps.indexOf(stepName)+1" :title="$t(stepName+'.title')" :done="steps.indexOf(currentStep) > steps.indexOf(stepName)">
          <component :is="stepName" v-model="form[stepName]" />
        </q-step>
        <template #navigation>
          <q-stepper-navigation class="row justify-end">
            <q-btn v-if="steps.indexOf(currentStep) > 0" outline color="primary" :label="$t('buttons.back')" class="q-mr-md" @click="$refs.stepper.previous()" />
            <q-btn color="primary" :label="$t(currentStep === steps[steps.length-1] ? 'buttons.finish' : 'buttons.continue')" @click="$refs.stepper.next()" />
          </q-stepper-navigation>
        </template>
      </q-stepper>
      <div class="flex q-py-md justify-center">
        <q-btn color="primary" class="q-px-md" outlined>{{ $t('previewForm') }}</q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import StepOne from 'src/components/StepOne';
import StepTwo from 'src/components/StepTwo';
import StepThree from 'src/components/StepThree';
import StepFour from 'src/components/StepFour';
import StepFive from 'src/components/StepFive';

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
    },
  data()
  {
    return {
      currentStep: 'stepOne',
      form:
        {
          stepOne:
            {
              salutation: null,
              firstName: '',
              lastName: '',
              street: '',
              houseNumber: '',
              zipCode: '',
              city: '',
              country: '',
              phone: '',
              email: '',
              photo: null,
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
            },
          stepFour:
            {
              attachments: [],
            },
          stepFive:
            {
              startDate: '',
              carbonCopy: false,
              acceptTerms: false,
            },
        },
      //loading: false,
    };
  },
  computed:
    {
      steps()
      {
        return Object.keys(this.form);
      }
    },
  methods:
    {
      submitForm()
      {
        /*
        this.loading = true;
        this.$axios.post('https://old.cross-solution.de/contact/conduent.php', this.form).then(response =>
        {
          this.loading = false;
          if (!response.data.ok)
          {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              icon: 'mdi-alert',
              message: response.data.message || 'Submit failed',
            });
          }
          else this.$router.push('/success');
        }).catch(err =>
        {
          this.loading = false;
          this.$q.notify({
            color: 'negative',
            position: 'top',
            icon: 'mdi-alert',
            message: err.message || err,
          });
        });
        */
      }
    }
};
</script>
