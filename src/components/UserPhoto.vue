<template>
  <q-card flat>
    <img :src="image" :style="stylePhoto">
    <q-card-actions v-if="image" align="center">
      <q-btn color="negative" @click="$emit('remove')">{{ $t('buttons.remove') }}</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default
{
  name: 'UserPhoto',
  props:
    {
      image:
        {
          type: String,
          default: ''
        },
      width:
        {
          type: Number,
          default: 300
        },
      height:
        {
          type: Number,
          default: 300
        }
    },
  computed:
    {
      stylePhoto()
      {
        return {
          maxWidth: this.width + 'px',
          maxHeight: this.height + 'px',
          objectFit: 'contain',
        };
      }
    }
};
</script>
