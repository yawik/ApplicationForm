<template>
  <q-dialog v-model="value">
    <q-form @submit="submitForm">
      <q-card class="relative-position">
        <q-card-section class="bg-primary text-white q-py-sm">
          <div class="text-h6">{{ $t('sidebar.changeLogo') }}</div>
        </q-card-section>
        <q-card-section>
          <div class="column">
            <DropZone @change="choosePhoto" />
            <UserPhoto :image="image" :width="160" :height="80" class="q-mx-auto q-mt-md" @remove="photo = null,image = ''" />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" outline class="q-mr-sm" @click="value = false">
            {{ $t('buttons.cancel') }}
          </q-btn>
          <q-btn color="primary" class="q-ml-sm" type="submit">
            {{ $t('buttons.send') }}
          </q-btn>
        </q-card-actions>
        <q-inner-loading :showing="sending">
          <q-spinner size="50px" color="primary" />
        </q-inner-loading>
      </q-card>
    </q-form>
  </q-dialog>
</template>

<script>
import DropZone from 'src/components/DropZone';
import UserPhoto from 'src/components/UserPhoto';
import errorAlert from 'src/lib/errorAlert';

export default
{
  name: 'DialogLogo',
  components:
    {
      DropZone,
      UserPhoto,
    },
  mixins: [errorAlert],
  props:
    {
      modelValue:
        {
          type: Boolean,
          default: false
        },
    },
  emits: ['update:modelValue'],
  data()
  {
    return {
      sending: false,
      photo: null,
      image: null,
    };
  },
  computed:
    {
      value:
        {
          get()
          {
            return this.modelValue;
          },
          set(val)
          {
            this.$emit('update:modelValue', val);
          }
        }
    },
  watch:
    {
      value(newVal)
      {
        if (newVal) this.fetchData();
      }
    },
  methods:
    {
      fetchData()
      {
        this.sending = true;
        this.$axios.get(process.env.YAWIK_API_URL + '/logo').then(response =>
        {
          this.image = response.data.logoUrl;
        }).catch(err =>
        {
          this.axiosFailed(err);
        }).finally(() =>
        {
          this.sending = false;
        });
      },
      submitForm()
      {
        this.sending = true;
        const data = new FormData();
        data.append('logo', this.photo || '');
        this.$axios.post(process.env.YAWIK_API_URL + '/logo', data).then(response =>
        {
          this.value = false;
        }).catch(err =>
        {
          this.axiosFailed(err);
        }).finally(() =>
        {
          this.sending = false;
        });
      },
      choosePhoto(list)
      {
        if (list[0].size)
        {
          if (list[0].size > 1e6)
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
      }
    }
};
</script>
