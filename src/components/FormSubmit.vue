<template>
  <q-dialog :value="value" :persistent="saving" @input="close">
    <q-card>
      <q-card-section class="text-h6 bg-primary text-white">{{ $t('submitting') }}</q-card-section>
      <q-card-section>
        <q-uploader ref="uploader" class="uploader shadow-1" multiple batch :url="uploadURL"
                    :headers="[{name: 'X-Requested-With', value: 'XmlHttpRequest'}]" :max-total-size="10*1024*1024"
                    field-name="upload[]" :form-fields="formFields" hide-upload-btn style="min-height: 320px;"
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
                  <q-btn color="negative" flat dense round icon="mdi-close-circle" :disabled="saving" @click="scope.removeFile(file)" />
                </q-item-section>
              </q-item>
            </q-list>
          </template>
        </q-uploader>
      </q-card-section>
      <q-card-actions align="center" class="q-py-md">
        <q-btn class="q-mr-md" color="primary" :loading="saving" @click="startUpload">{{ $t('buttons.send') }}</q-btn>
        <q-btn class="q-ml-md" color="primary" outline @click="stopUpload">{{ $t('buttons.cancel') }}</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default
{
  name: 'FormSubmit',
  props:
    {
      value:
        {
          type: Boolean,
          default: false
        },
      info:
        {
          type: Object,
          required: true
        },
      files:
        {
          type: Array,
          default: () => []
        },
    },
  data()
  {
    return {
      saving: false,
    };
  },
  computed:
    {
      formFields()
      {
        return [
          {
            name: 'application',
            value: JSON.stringify(this.info),
          }
        ];
      },
      uploadURL()
      {
        return process.env.YAWIK_APPLICATION_FORM_ACTION;
      }
    },
  watch:
  {
    value(newVal)
    {
      if (newVal)
      {
        this.$nextTick(() =>
        {
          this.$refs.uploader.reset();
          this.$refs.uploader.addFiles(this.files);
          this.$refs.uploader.addFiles([this.photo]);
        });
      }
    }
  },
  methods:
    {
      close()
      {
        this.$emit('input', false);
      },
      startUpload()
      {
        this.saving = true;
        this.$refs.uploader.upload();
      },
      stopUpload()
      {
        this.$refs.uploader.abort();
        this.saving = false;
        this.close();
      },
      success(info)
      {
        this.saving = false;
        this.$router.push({ name: 'submitSuccessful' });
      },
      failure(info)
      {
        console.log(info.xhr);
        this.saving = false;
        this.$q.notify({
          color: 'negative',
          position: 'top',
          icon: 'mdi-alert',
          message: info.xhr.message || this.$t('submitFailed'),
        });
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
