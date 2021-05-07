<template>
  <div>
    <div class="q-pb-sm">{{ $t('stepFour.help') }}</div>
    <q-uploader ref="uploader" class="uploader shadow-1" multiple hide-upload-btn accept=".pdf,.doc,.docx,.xls,.xlsx,image/*" :max-total-size="2.5e6" style="min-height: 500px;">
      <template #list="scope">
        <q-list separator>
          <q-item v-for="file in scope.files" :key="file.name">
            <q-item-section>
              <q-item-label class="full-width ellipsis">
                {{ file.name }}
              </q-item-label>

              <q-item-label caption>
                {{ $t('stepFour.status',{status: file.__status}) }}
              </q-item-label>

              <q-item-label caption>
                {{ file.__sizeLabel }} / {{ file.__progressLabel }}
              </q-item-label>
            </q-item-section>

            <q-item-section v-if="file.__img" thumbnail>
              <img :src="file.__img.src">
            </q-item-section>

            <q-item-section side>
              <q-btn color="negative" flat dense round icon="mdi-close-circle" @click="scope.removeFile(file)" />
            </q-item-section>
          </q-item>
        </q-list>
      </template>
    </q-uploader>
  </div>
</template>

<script>
export default
{
  name: 'StepFour',
  mounted()
  {
    this.$emit('uploader', this.$refs.uploader);
  },
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
