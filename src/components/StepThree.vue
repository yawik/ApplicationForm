<template>
  <div>
    <div class="q-pb-xs">{{ $t('stepThree.startDate') }}</div>
    <DateInput ref="start" v-model.trim="form.startDate" placeholder="DD-MM-YYYY" lazy-rules :rules="[ruleRequired]" style="max-width: 180px;" />
  </div>
</template>

<script>
import DateInput from 'src/components/DateInput';
import validations from 'src/lib/validations';

export default
{
  name: 'StepThree',
  components:
    {
      DateInput,
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
