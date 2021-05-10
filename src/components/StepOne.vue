<template>
  <div>
    <div class="q-pb-xs">{{ $t('stepOne.salutation') }}</div>
    <q-option-group v-model="form.salutation" :options="salutationTypes" color="primary" inline />

    <div class="q-col-gutter-sm row">
      <div class="col-6 column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.firstName') }}</div>
        <q-input ref="fname" v-model.trim="form.firstName" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext" />
      </div>
      <div class="col-6 column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.lastName') }}</div>
        <q-input v-model.trim="form.lastName" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext" />
      </div>
    </div>

    <div class="q-col-gutter-sm row">
      <div class="col-grow column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.street') }}</div>
        <q-input v-model.trim="form.street" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext" />
      </div>
      <div class="column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.houseNumber') }}</div>
        <q-input v-model.trim="form.houseNumber" outlined dense lazy-rules :rules="[ruleRequired]" style="min-width: 120px;" @keypress.enter="gotoNext" />
      </div>
    </div>

    <div class="q-col-gutter-sm row">
      <div class="column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.zipCode') }}</div>
        <q-input v-model.trim="form.zipCode" outlined dense lazy-rules :rules="[ruleRequired]" style="min-width: 160px;" @keypress.enter="gotoNext" />
      </div>
      <div class="col-grow column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.city') }}</div>
        <q-input v-model.trim="form.city" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext" />
      </div>
    </div>

    <div class="q-pt-md q-pb-xs">{{ $t('stepOne.country') }}</div>
    <q-input v-model.trim="form.country" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext" />

    <div class="q-pt-md q-pb-xs">{{ $t('stepOne.phone') }}</div>
    <q-input v-model.trim="form.phone" outlined dense lazy-rules :rules="[ruleContact]" @keypress.enter="gotoNext" />

    <div class="q-pt-md q-pb-xs">{{ $t('stepOne.email') }}</div>
    <q-input v-model.trim="form.email" outlined dense lazy-rules :rules="[ruleContact,validEmail]" @keypress.enter="gotoNext" />
  </div>
</template>

<script>
import validations from 'src/lib/validations';

export default
{
  name: 'StepOne',
  mixins: [validations],
  props:
    {
      value:
        {
          type: Object,
          required: true
        },
      stepper:
        {
          type: Object,
          default: null
        }
    },
  data()
  {
    return {
      form:
        {
          salutation: '',
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
        }
    };
  },
  computed:
    {
      salutationTypes()
      {
        return this.$t('stepOne.salutationTypes').map(salutation => ({
          value: salutation,
          label: salutation,
        }));
      }
    },
  watch:
    {
      value:
        {
          immediate: true,
          handler(newVal)
          {
            this.form = newVal;
          }
        },
      form:
        {
          deep: true,
          handler(newVal)
          {
            this.$emit('input', newVal);
          }
        }
    },
  mounted()
  {
    this.$refs.fname.focus();
  },
  methods:
    {
      ruleContact()
      {
        return !!this.form.phone || !!this.form.email ? true : this.$t('rules.phoneOrEmail');
      },
      gotoNext()
      {
        this.stepper && this.stepper.next();
      }
    }
};
</script>
