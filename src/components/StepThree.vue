<template>
  <div class="yawik-stepper-three">
    <div class="q-pb-xs">{{ $t('stepThree.startDate') }}</div>
    <div class="row items-start">
      <DateInput
        ref="start"
        v-model.trim="startDate" name="begin" placeholder="DD-MM-YYYY" lazy-rules
        :disable="immediately"
        style="max-width: 180px;"
      />
      <q-checkbox v-model="immediately" :label="$t('stepThree.immediately')" class="q-ml-md" />
    </div>

    <div class="q-pt-md q-pb-xs">{{ $t('stepThree.expectedSalary') }}</div>
    <SalaryInput v-model="salary" name="salary" />
  </div>
</template>

<script>
import DateInput from 'src/components/DateInput';
import SalaryInput from 'src/components/SalaryInput';
import validations from 'src/lib/validations';
import {
  GET_START_DATE,
  GET_START_NOW,
  GET_SALARY_AMOUNT,
  GET_CURRENCY,
  GET_SALARY_PERIOD,
  SET_SALARY_PERIOD,
  SET_CURRENCY,
  SET_SALARY_AMOUNT,
  SET_START_DATE,
  SET_START_NOW,
  GET_STEP
} from '../store/names';
import { mapGetters, mapMutations } from 'vuex';

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
      active:
        {
          type: Boolean,
          default: false
        }
    },
  computed:
    {
      ...mapGetters([GET_SALARY_AMOUNT, GET_CURRENCY, GET_SALARY_PERIOD, GET_START_DATE, GET_START_NOW, GET_STEP]),
      startDate:
        {
          get()
          {
            return this[GET_START_DATE];
          },
          set(value)
          {
            this[SET_START_DATE](value);
          }
        },
      immediately:
        {
          get()
          {
            return this[GET_START_NOW];
          },
          set(value)
          {
            this[SET_START_NOW](value);
          }
        },
      salary:
        {
          get()
          {
            return {
              value: this[GET_SALARY_AMOUNT],
              currency: this[GET_CURRENCY],
              period: this[GET_SALARY_PERIOD],
            };
          },
          set(value)
          {
            if (value.value !== this[GET_SALARY_AMOUNT]) this[SET_SALARY_AMOUNT](value.value);
            if (value.currency !== this[GET_CURRENCY]) this[SET_CURRENCY](value.currency);
            if (value.period !== this[GET_SALARY_PERIOD]) this[SET_SALARY_PERIOD](value.period);
          }
        },
    },
  watch:
    {
      active(newVal)
      {
        if (newVal) this.setFocus();
      }
    },
  mounted()
  {
    if (this[GET_STEP] === 'stepThree') this.setFocus();
  },
  methods:
    {
      ...mapMutations([SET_SALARY_AMOUNT, SET_CURRENCY, SET_SALARY_PERIOD, SET_START_DATE, SET_START_NOW]),
      setFocus()
      {
        this.$refs.start.focus();
      }
    }
};
</script>
