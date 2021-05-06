<template>
  <div>
    <div class="q-pb-xs">{{ $t('stepFive.startDate') }}</div>
    <DateInput v-model.trim="form.startDate" placeholder="DD-MM-YYYY" lazy-rules :rules="[ruleRequired]" style="max-width: 180px;" />

    <div>
      <q-checkbox v-model="form.carbonCopy" :label="$t('stepFive.carbonCopy')" />
    </div>

    <div>
      <q-checkbox v-model="form.acceptTerms" lazy-rules :rules="[ruleRequired]">
        <!-- eslint-disable vue/no-v-html -->
        <div class="terms" v-html="$t('stepFive.privacyPolicy')" />
        <!-- eslint-enable vue/no-v-html -->
      </q-checkbox>
    </div>
  </div>
</template>

<script>
import DateInput from 'src/components/DateInput';
import validations from 'src/lib/validations';

export default
{
  name: 'StepFive',
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
        }
    },
  data()
  {
    return {
      form:
        {
          startDate: '',
          carbonCopy: false,
          acceptTerms: false,
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
        }
    },
};
</script>

<style lang="scss">
  .terms a
  {
    color: $primary;
  }
</style>
