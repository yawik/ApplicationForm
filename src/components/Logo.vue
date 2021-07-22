<template>
  <div>
    <a href="/">
      <img :alt="orgName" :src="logoUrl" style="max-width: 160px; max-height: 80px; vertical-align: middle;">
      <q-tooltip :delay="500" :offset="[0, 10]">{{ orgName ? orgName : $t('yourLogo') }}</q-tooltip>
    </a>
  </div>
</template>

<script>
export default
{
  name: 'Logo',
  props:
    {
      logoUrl:
        {
          type: String,
          required: true
        },
      orgName:
        {
          type: String,
          default: ''
        }
    },
};
</script>
