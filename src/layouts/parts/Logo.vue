<template>
  <div>
    <a href="/">
      <img :src="logoUrl"
           style="max-width: 160px; max-height: 80px;"
      >
    </a>
  </div>
</template>

<script>
export default
{
  name: 'Logo',
  // eslint-disable-next-line vue/require-prop-types
  props: ['logoUrl']
};
</script>
