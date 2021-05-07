<template>
  <q-input ref="date" :value="value" mask="XX-XX-XXXX" :rules="(rules || []).concat([validDMY])" outlined dense v-bind="$attrs" @input="updateValue">
    <q-icon slot="append" name="mdi-calendar-month" class="cursor-pointer">
      <q-popup-proxy ref="qStartDate" transition-show="scale" transition-hide="scale">
        <q-date :value="value" first-day-of-week="1" mask="DD-MM-YYYY" minimal @input="hideCalendar" />
      </q-popup-proxy>
    </q-icon>
  </q-input>
</template>

<script>
import validations from 'src/lib/validations';

export default
{
  name: 'DateInput',
  mixins: [validations],
  inheritAttrs: false,
  props:
    {
      value:
        {
          type: String,
          default: ''
        },
      rules:
        {
          type: Array,
          default: () => []
        },
    },
  methods:
    {
      updateValue(value)
      {
        this.$emit('input', value);
      },
      hideCalendar(value)
      {
        this.$emit('input', value);
        this.$refs.qStartDate.hide();
      },
      focus()
      {
        this.$refs.date && this.$refs.date.focus();
      }
    }
};
</script>
