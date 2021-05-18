<template>
  <div>
    <div>
      <q-checkbox v-model="form.carbonCopy" :label="$t('stepFive.carbonCopy')" />
    </div>

    <div class="row">
      <q-field :value="form.acceptTerms" class="field" lazy-rules :rules="[ruleRequired]" borderless dense>
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
import validations from 'src/lib/validations';

export default
{
  name: 'StepFive',
  mixins: [validations],
  props:
    {
      value:
        {
          type: Object,
          required: true
        },
    },
  data()
  {
    return {
      form:
        {
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
    },
};
</script>

<style lang="scss">
  .terms a
  {
    color: $primary;
  }

  #q-app
  {
    .q-field--borderless .q-field__bottom
    {
      padding: 0 12px 8px;
    }

    .field .q-field__control .q-field__native
    {
      padding: 0;
    }
  }

</style>
