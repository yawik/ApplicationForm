<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container style="overflow-x: hidden;">
      <img class="block q-mx-auto" src="yawik-logo.png">
      <transition name="fade" appear mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default
{
  name: 'MainLayout',
  created()
  {
    const lang = this.$route.params.lang;
    this.$root.$i18n.locale = lang;
    import(
      /* webpackInclude: /(de|en-gb)\.js$/ */
      'quasar/lang/' + (lang === 'en' ? 'en-gb' : lang)
    ).then(lang =>
    {
      this.$q.lang.set(lang.default);
    });
  }
};
</script>

<style>
  .fade-enter-active,
  .fade-leave-active
  {
    transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .fade-enter,
  .fade-leave-active
  {
    opacity: 0;
    transform: translate(2em, 0);
  }
</style>
