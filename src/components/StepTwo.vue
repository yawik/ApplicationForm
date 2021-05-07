<template>
  <div>
    <div class="q-pb-xs">{{ $t('stepTwo.description') }}</div>
    <q-editor ref="editor" v-model="form.coverLetter" min-height="500px" :content-style="{'max-width': width ? width - 50 + 'px' : 'none'}" />
  </div>
</template>

<script>
export default
{
  name: 'StepTwo',
  props:
    {
      value:
        {
          type: Object,
          required: true
        },
      width:
        {
          type: Number,
          default: null
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
        },
      active(newVal)
      {
        if (newVal)
        {
          this.$refs.editor.focus();
        }
      }
    },
};
</script>
