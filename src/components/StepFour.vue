<template>
  <div class="row q-col-gutter-md yawik-stepper-width">
    <!-- Attachments -->
    <div class="col-6 column" style="border-right: 16px solid transparent;">
      <div class="q-pb-sm">{{ $t('stepFour.help') }}</div>
      <q-uploader ref="uploader" class="uploader col-grow shadow-1" style="width: 100%; max-height: none;" multiple hide-upload-btn
                  accept=".pdf,.doc,.docx,.xls,.xlsx,image/*" :max-total-size="maxFileSize" @rejected="rejectedFiles" @added="filesAdded" @removed="filesRemoved"
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
    <!-- User photo -->
    <div class="col-6" style="border-left: 1px solid #DDD;">
      <div class="column">
        <div class="q-pb-sm">{{ $t('stepFour.photo') }}</div>
        <DropZone @change="choosePhoto" />
        <UserPhoto :image="image" :width="maxImageSize" :height="maxImageSize" class="q-mx-auto q-mt-md" @remove="photo = null,image = ''" />
      </div>
    </div>
  </div>
</template>

<script>
import DropZone from 'src/components/DropZone';
import UserPhoto from 'src/components/UserPhoto';
import { GET_PHOTO, SET_PHOTO, GET_FILES } from '../store/names';
import { mapGetters, mapMutations } from 'vuex';

export default
{
  name: 'StepFour',
  components:
    {
      DropZone,
      UserPhoto,
    },
  data()
  {
    return {
      maxFileSize: 2e7, // in bytes
      maxImageSize: 300, // max width/height in pixels for user's photo
      image: '',
    };
  },
  computed:
    {
      ...mapGetters([GET_FILES, GET_PHOTO]),
      photo:
        {
          get()
          {
            return this[GET_PHOTO];
          },
          set(value)
          {
            this[SET_PHOTO](value);
          }
        }
    },
  methods:
    {
      ...mapMutations([SET_PHOTO]),
      choosePhoto(list)
      {
        if (list[0].size)
        {
          if (list[0].size > this.maxFileSize)
          {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              icon: 'mdi-alert',
              message: this.$t('files.photoRejected'),
            });
            return;
          }
          const reader = new FileReader();
          reader.onload = (e) =>
          {
            this.image = e.target.result;
          };
          reader.readAsDataURL(list[0]);
          this.photo = list[0];
        }
      },
      rejectedFiles(files)
      {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          icon: 'mdi-alert',
          message: this.$t('files.attachmentsRejected', { count: files.length }),
        });
      },
      filesAdded(files)
      {
        const attached = this[GET_FILES];
        files.forEach(file =>
        {
          attached.push(file);
        });
      },
      filesRemoved(files)
      {
        const attached = this[GET_FILES];
        files.forEach(file =>
        {
          const idx = attached.indexOf(file);
          if (idx !== -1) attached.splice(idx, 1);
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
