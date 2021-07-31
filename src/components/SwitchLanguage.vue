<template>
  <q-btn-dropdown color="primary">
    <template #label>
      <img :src="'flags/'+$root.$i18n.locale+'.svg'" width="28" :alt="$root.$i18n.locale.substr(0, 2).toUpperCase()" class="q-mr-md">
      {{ $q.platform.is.mobile ? '' : $t('localeName') }}
    </template>
    <q-list>
      <q-item v-for="(msg,lang) in $root.$i18n.messages" :key="lang" v-close-popup clickable class="items-center" @click="setLocale(lang)">
        <q-item-section side>
          <q-icon :color="lang === $root.$i18n.locale ? null : 'transparent'" name="mdi-check" />
        </q-item-section>
        <q-item-label>{{ $root.$i18n.messages[lang].localeName }}</q-item-label>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default
{
  name: 'SwitchLanguage',
  methods:
    {
      setLocale(lang)
      {
        // TODO - if we store the data in Vuex, we can redirect to the relevant route;
        // at the moment we can't because form data will be lost after the redirect
        this.$root.$i18n.locale = lang;
        import(
          /* webpackInclude: /(de|en-GB)\.js$/ */
          'quasar/lang/' + (lang === 'en' ? 'en-GB' : lang)
        ).then(lang =>
        {
          this.$q.lang.set(lang.default);
        });
      }
    }
};
</script>
