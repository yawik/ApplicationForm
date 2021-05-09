<template>
  <div class="row q-col-gutter-md">
    <!-- Attachments -->
    <div class="col-7 column" style="border-right: 1px solid #DDD;">
      <div class="q-pb-sm">{{ $t('stepFour.help') }}</div>
      <q-uploader ref="uploader" class="uploader col-grow shadow-1" style="max-height: none;" multiple hide-upload-btn accept=".pdf,.doc,.docx,.xls,.xlsx,image/*" :max-total-size="2.5e6">
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
    <!-- User photo -->
    <div class="col-5">
      <div class="column">
        <div class="q-pb-sm">{{ $t('stepFour.photo') }}</div>
        <DropZone @change="choosePhoto" />
        <UserPhoto :image="form.photo" :width="maxSize" :height="maxSize" class="q-mx-auto q-mt-md" @remove="form.photo = ''" />
      </div>
    </div>
  </div>
</template>

<script>
import DropZone from 'src/components/DropZone';
import UserPhoto from 'src/components/UserPhoto';

export default
{
  name: 'StepFour',
  components:
    {
      DropZone,
      UserPhoto,
    },
  props:
    {
      value:
        {
          type: Object,
          default: () => ({})
        }
    },
  data()
  {
    return {
      maxSize: 300, // max width/height in pixels for user's photo
      form:
        {
          photo: '',
        }
    };
  },
  watch:
    {
      value(newVal)
      {
        this.form = newVal;
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
  mounted()
  {
    this.$emit('uploader', this.$refs.uploader);
  },
  methods:
    {
      choosePhoto(list)
      {
        if (list.length && list[0].size)
        {
          const reader = new FileReader();
          const img = new Image();
          const canvas = document.createElement('canvas');
          reader.onload = (e) =>
          {
            img.src = e.target.result;
          };
          img.onload = () =>
          {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            // preserve aspect ratio
            if (canvas.width > this.maxSize)
            {
              canvas.width = this.maxSize;
              canvas.height = this.maxSize * img.naturalHeight / img.naturalWidth;
            }
            if (canvas.height > this.maxSize)
            {
              canvas.height = this.maxSize;
              canvas.width = this.maxSize * img.naturalWidth / img.naturalHeight;
            }
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height); // implicit width and height in order to stretch the image to canvas
            this.form.photo = canvas.toDataURL('image/jpeg', 0.85);
          };
          reader.readAsDataURL(list[0]);
        }
        else this.form.photo = '';
      },
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
