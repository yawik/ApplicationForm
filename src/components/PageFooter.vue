<template>
  <q-footer bordered class="bg-white text-primary">
    <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey">
      <q-tab
        name="yawik"
      >
        <q-btn
          class="full-size"
          flat
          no-caps
          type="a"
          rel="noopener noreferrer"
          target="_blank"
          :href="urlOperator"
        >
          {{ $t('(c)') + ' ' + new Date().getFullYear() + ' ' + $t('yawik') }}
        </q-btn>
      </q-tab>
      <q-tab
        name="imprint"
      >
        <q-btn
          class="full-size"
          flat
          :ripple="false"
          no-caps
          type="a"
          rel="noopener noreferrer"
          target="_blank"
          :href="urlImprint"
          :label="$t('Imprint')"
        />
      </q-tab>
      <q-tab
        name="privacy"
      >
        <q-btn
          class="full-size"
          flat
          no-caps
          type="a"
          rel="noopener noreferrer"
          target="_blank"
          :href="urlPrivacy"
          :label="$t('Privacy')"
        />
      </q-tab>
    </q-tabs>
  </q-footer>
</template>

<script>
export default
{
  name: 'PageFooter',
  data()
  {
    return {};
  },
  computed:
    {
      urlOperator()
      {
        return process.env.YAWIK_URL_OPERATOR;
      },
      urlPrivacy()
      {
        return process.env.YAWIK_URL_PRIVACY;
      },
      urlImprint()
      {
        return process.env.YAWIK_URL_IMPRINT;
      }
    }
};
</script>

<style>
  .uploader .q-item__section--thumbnail img
  {
    object-fit: contain;
  }

  .uploader .q-uploader__list .q-item__label
  {
    line-height: 1.25em !important;
  }
</style>
