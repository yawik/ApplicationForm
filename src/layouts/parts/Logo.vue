<template>
  <div>
    <a href="/">
      <img :alt="orgName" :src="logoUrl"
           style="max-width: 160px; max-height: 80px;"
      >
      <q-tooltip :delay="500" :offset="[0, 10]">{{ orgName }}</q-tooltip>
    </a>
  </div>
</template>

<script>
export default
{
  name: 'Logo',
  // eslint-disable-next-line vue/require-prop-types
  props: ['logoUrl', 'orgName']
};
</script>
