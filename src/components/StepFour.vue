<template>
  <div>
    <div class="q-pb-sm">{{ $t('stepFour.help') }}</div>
    <q-uploader ref="uploader" class="q-mr-lg uploader shadow-1" multiple batch :url="uploadURL"
                :headers="[{name: 'X-Requested-With', value: 'XmlHttpRequest'}]" :max-total-size="2*1024*1024"
                field-name="upload[]" :factory="updateConfig" hide-upload-btn style="min-height: 500px;"
                @uploaded="success" @failed="failure"
    >
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
  inheritAttrs: false,
  props:
    {
      value:
        {
          // the whole application form
          type: Object,
          required: true
        },
    },
  /*
  data()
  {
    return {
      form:
        {
          attachments: [],
        }
    };
  },
  */
  computed:
    {
      uploadURL()
      {
        return '/upload';
      },
    },
  /*
  watch:
    {
      value:
        {
          immediate: true,
          handler(newVal)
          {
            this.form = newVal;
          }
        },
      form:
        {
          deep: true,
          handler(newVal)
          {
            this.$emit('input', newVal);
          }
        }
    },
    */
  methods:
    {
      updateConfig(files)
      {
        return {
          formFields: Object.assign({}, this.value.stepOne, this.value.stepTwo, this.value.stepThree, this.value.stepFive),
        };
      },
      success(info)
      {
        this.$emit('success', info.xhr);
      },
      failure(info)
      {
        this.$emit('fail', info.xhr);
      }
    }
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
