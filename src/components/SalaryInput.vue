<template>
  <div class="row q-col-gutter-sm">
    <q-input
      v-model.number="salary.value"
      outlined
      dense
      :mask="salary.period === 3 ? '#.##' : '###,###'"
      fill-mask
      reverse-fill-mask
      unmasked-value
      :label="$t('salary.amount')"
      lazy-rules
      :rules="[ruleRequired]"
    />
    <q-select
      v-model="salary.currency"
      outlined
      dense
      style="min-width: 135px;"
      :options="currencyList"
      :label="$t('salary.currency')"
      :rules="[ruleRequired]"
    />
    <q-select
      v-model="salary.period"
      style="min-width: 140px;"
      outlined
      dense
      map-options
      emit-value
      :options="periodList"
      :label="$t('salary.periodTitle')"
      :rules="[ruleRequired]"
    />
  </div>
</template>

<script>
import validations from 'src/lib/validations';

export default
{
  name: 'SalaryInput',
  mixins: [validations],
  props:
    {
      value:
        {
          type: Object,
          default: () => ({})
        }
    },
  data()
  {
    return {
      salary:
        {
          value: null,
          currency: 'EUR',
          period: null
        }
    };
  },
  computed:
    {
      currencyList()
      {
        return ['EUR', 'USD', 'CHF'];
      },
      periodList()
      {
        return Object.entries(this.$root.$i18n.messages[this.$root.$i18n.locale].salary.period).map(([key, value]) => ({
          value: key,
          label: value,
        }));
      }
    },
  watch:
    {
      value(newVal, oldVal)
      {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal))
        {
          this.salary = {
            value: newVal.value,
            currency: newVal.currency || 'EUR',
            period: newVal.period || 2,
          };
        }
      },
      salary:
        {
          deep: true,
          handler(newVal)
          {
            this.$emit('input', newVal);
          }
        }
    }
};
</script>
