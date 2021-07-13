<template>
  <div>
    <a href="/">
      <img :src="logo"
           style="max-width: 160px; max-height: 80px;"
      >
    </a>
  </div>
</template>

<script>
export default
{
  name: 'Logo',
  props:
    {
      logo: Text
    },
};
</script>
