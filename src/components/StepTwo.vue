<template>
  <div class="yawik-stepper-width">
    <div class="q-pb-xs">{{ $t('stepTwo.description') }}</div>
    <q-editor ref="editor" v-model="coverLetter" name="letter" min-height="435px" :content-style="{'max-width': width ? width - 50 + 'px' : 'none'}" />
  </div>
</template>

<script>
import { GET_COVER_LETTER, SET_COVER_LETTER, GET_STEP } from '../store/names';
import { mapGetters, mapMutations } from 'vuex';

export default
{
  name: 'StepTwo',
  props:
    {
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
  computed:
    {
      ...mapGetters([GET_COVER_LETTER, GET_STEP]),
      coverLetter:
      {
        get()
        {
          return this[GET_COVER_LETTER];
        },
        set(value)
        {
          this[SET_COVER_LETTER](value);
        }
      }
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
    if (this[GET_STEP] === 'stepTwo') this.setFocus();
  },
  methods:
    {
      ...mapMutations([SET_COVER_LETTER]),
      setFocus()
      {
        this.$refs.editor.focus();
      }
    }
};
</script>
