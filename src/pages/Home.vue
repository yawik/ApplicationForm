<template>
  <div />
</template>

<script>
export default
{
  name: 'Home',
  created()
  {
    const lang = navigator.language.substr(0, 2);
    this.$router.replace(Object.keys(this.$root.$i18n.messages).includes(lang) ? `/${lang}` : '/en').catch(() => true);
  },
};
</script>
