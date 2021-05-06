<template>
  <div>
    <div class="q-pb-xs">{{ $t('stepTwo.title') }}</div>
    <q-editor v-model="form.coverLetter" min-height="500px" :placeholder="$t('stepTwo.placeholder')" />
  </div>
</template>

<script>
export default
{
  name: 'StepTwo',
  inheritAttrs: false,
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
          coverLetter: '',
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
