<template>
  <div>
    <div>
      <q-checkbox v-model="carbonCopy" name="copy" :label="$t('stepFive.carbonCopy')" />
    </div>

    <div class="row">
      <q-field :value="acceptTerms" class="field" lazy-rules :rules="[ruleRequired]" borderless dense>
        <template #control>
          <q-checkbox v-model="acceptTerms" name="terms">
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
import { GET_COPY, GET_TERMS, SET_COPY, SET_TERMS } from '../store/names';
import { mapGetters, mapMutations } from 'vuex';

export default
{
  name: 'StepFive',
  mixins: [validations],
  computed:
    {
      ...mapGetters([GET_TERMS, GET_COPY]),
      carbonCopy:
        {
          get()
          {
            return this[GET_COPY];
          },
          set(value)
          {
            this[SET_COPY](value);
          }
        },
      acceptTerms:
        {
          get()
          {
            return this[GET_TERMS];
          },
          set(value)
          {
            this[SET_TERMS](value);
          }
        },
    },
  methods:
    {
      ...mapMutations([SET_TERMS, SET_COPY]),
    }
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
