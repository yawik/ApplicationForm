<template>
  <div class="yawik-stepper-width">
    <q-item v-ripple tag="label">
      <q-item-section avatar top>
        <q-checkbox v-model="carbonCopy" name="copy" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ $t('stepFive.ccTitle') }}</q-item-label>
        <q-item-label caption>
          {{ $t('stepFive.carbonCopy') }}
        </q-item-label>
      </q-item-section>
    </q-item>
    <!-- Todo: create component start -->
    <q-field :model-value="acceptTerms" class="field" lazy-rules :rules="[ruleRequired]" borderless dense>
      <template #control>
        <q-item v-ripple tag="label">
          <q-item-section avatar top>
            <q-checkbox v-model="acceptTerms" name="terms" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('Privacy') }}</q-item-label>
            <q-item-label caption>
              <!-- eslint-disable vue/no-v-html -->
              <div class="terms" v-html="$t('stepFive.privacyPolicy', [urlPrivacy])" />
              <!-- eslint-enable vue/no-v-html -->
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-field>
    <!-- Todo: create component end -->
  </div>
</template>

<script>
import validations from 'src/lib/validations';
import { GET_COPY, GET_TERMS, SET_COPY, SET_TERMS } from '../../store/names';
import { mapGetters, mapMutations } from 'vuex';

export default
{
  name: 'StepFive',
  mixins: [validations],
  props:
    {
      stepper:
        {
          type: Object,
          default: null
        },
    },
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
      urlPrivacy()
      {
        return process.env.YAWIK_URL_PRIVACY;
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
