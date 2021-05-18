<template>
  <div>
    <div class="q-pb-xs">{{ $t('stepThree.startDate') }}</div>
    <div class="row items-start">
      <DateInput ref="start" v-model.trim="form.startDate" placeholder="DD-MM-YYYY" lazy-rules :rules="[ruleRequired]" :disable="form.immediate" style="max-width: 180px;" />
      <q-checkbox v-model="form.immediate" :label="$t('stepThree.immediately')" class="q-ml-md" />
    </div>

    <div class="q-pt-md q-pb-xs">{{ $t('stepThree.expectedSalary') }}</div>
    <SalaryInput v-model="form.salary" />
  </div>
</template>

<script>
import DateInput from 'src/components/DateInput';
import SalaryInput from 'src/components/SalaryInput';
import validations from 'src/lib/validations';

export default
{
  name: 'StepThree',
  components:
    {
      DateInput,
      SalaryInput,
    },
  mixins: [validations],
  props:
    {
      value:
        {
          type: Object,
          required: true
        },
      active:
        {
          type: Boolean,
          default: false
        }
    },
  data()
  {
    return {
      form:
        {
          startDate: '',
          immediate: false,
          salary:
            {
              value: 0,
              currency: 'EUR',
              period: null,
            }
        }
    };
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
        },
      active(newVal)
      {
        if (newVal)
        {
          this.$refs.start.focus();
        }
      }
    },
};
</script>
