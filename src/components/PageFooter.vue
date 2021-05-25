<template>
  <q-footer bordered class="bg-white text-primary">
    <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey">
      <q-tab
        name="yawik"
        type="a"
        href="https://yawik.org"
        :label="$t('(c)') + ' ' + new Date().getFullYear() + ' ' + $t('yawik')"
      />
      <q-tab
        name="imprint"
        type="a"
        href="https://cross-solution.de/imprint"
        :label="$t('Imprint')"
      />
      <q-tab
        name="privacy"
        type="a"
        href="https://cross-solution.de/privacy"
        :label="$t('Privacy')"
      />
    </q-tabs>
  </q-footer>
</template>
