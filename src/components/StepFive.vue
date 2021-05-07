<template>
  <div>
    <div class="q-pb-xs">{{ $t('stepFive.startDate') }}</div>
    <DateInput ref="start" v-model.trim="form.startDate" placeholder="DD-MM-YYYY" lazy-rules :rules="[ruleRequired]" style="max-width: 180px;" />

    <div class="q-pt-sm">
      <q-checkbox v-model="form.carbonCopy" :label="$t('stepFive.carbonCopy')" />
    </div>

    <div class="row">
      <q-field :value="form.acceptTerms" lazy-rules :rules="[ruleRequired]" borderless dense>
        <template #control>
          <q-checkbox v-model="form.acceptTerms">
            <!-- eslint-disable vue/no-v-html -->
            <div class="terms" v-html="$t('stepFive.privacyPolicy')" />
            <!-- eslint-enable vue/no-v-html -->
          </q-checkbox>
        </template>
      </q-field>
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

<style lang="scss">
  .terms a
  {
    color: $primary;
  }

  #q-app .q-field--borderless .q-field__bottom
  {
    padding: 0 12px 8px;
  }
</style>
