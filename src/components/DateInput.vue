<template>
  <q-input ref="date" :model-value="modelValue" :mask="$root.$i18n.locale === 'de' ? '##.##.####' : '##-##-####'" :rules="(rules || []).concat([validDMY])" outlined dense v-bind="$attrs" @update:modelValue="updateValue">
    <template #append>
      <q-icon name="mdi-calendar-month" class="cursor-pointer">
        <q-popup-proxy ref="qStartDate" transition-show="scale" transition-hide="scale">
          <q-date :model-value="modelValue" first-day-of-week="1" mask="DD-MM-YYYY" minimal @update:modelValue="hideCalendar" />
        </q-popup-proxy>
      </q-icon>
    </template>
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
      modelValue:
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
  emits: ['update:modelValue'],
  methods:
    {
      updateValue(value)
      {
        this.$emit('update:modelValue', value);
      },
      hideCalendar(value)
      {
        this.$emit('update:modelValue', value);
        this.$refs.qStartDate.hide();
      },
      focus()
      {
        this.$refs.date && this.$refs.date.focus();
      }
    }
};
</script>
