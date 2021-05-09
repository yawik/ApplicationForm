<template>
  <q-dialog :value="value" maximized @input="close">
    <q-card flat>
      <q-card-actions class="bg-primary text-white q-py-sm" align="center">
        <q-btn color="secondary" @click="close">{{ $t('buttons.close') }}</q-btn>
      </q-card-actions>
      <q-card-section class="row">
        <div class="q-mx-auto q-card--bordered rounded-borders q-px-lg q-pb-lg" style="min-width: 40%; max-width: 1024px;">
          <h4 align="center" class="q-my-sm">{{ $t('preview.title') }}</h4>
          <!-- Personal details -->
          <div class="row">
            <div class="col-6 row justify-center items-center q-pa-md">
              <img v-if="form.stepFour.photo" :src="form.stepFour.photo" class="user_photo rounded-borders">
              <img v-else src="~src/images/avatar.svg" width="200" height="200">
            </div>
            <div class="col-6 q-pa-md">
              <h5 class="q-my-md">{{ `${form.stepOne.salutation || 'Mr.'} ${form.stepOne.firstName || 'John'} ${form.stepOne.lastName || 'Doe'}` }}</h5>
              <div>
                <strong>{{ $t('preview.email') }}:</strong> &nbsp; {{ form.stepOne.email || 'n/a' }}
              </div>
              <div>
                <strong>{{ $t('preview.phone') }}:</strong> &nbsp; {{ form.stepOne.phone || 'n/a' }}
              </div>
              <div>
                <strong>{{ $t('preview.canStart') }}:</strong> &nbsp; {{ form.stepFive.startDate ? dateLocale(form.stepFive.startDate) : 'n/a' }}
              </div>
              <div class="q-mt-md">
                <strong>{{ $t('preview.address') }}:</strong> &nbsp;
                {{ `${form.stepOne.country || $t('stepOne.country')}, ${form.stepOne.zipCode || '12345'} ${form.stepOne.city || $t('stepOne.city')}` }}
                <br>
                {{ `${form.stepOne.street || $t('stepOne.street')} ${form.stepOne.houseNumber}` }}
              </div>
            </div>
          </div>
          <!-- Cover letter -->
          <div class="q-pt-md">
            <div class="text-bold q-pb-xs">{{ $t('stepTwo.title') }}</div>
            <div class="q-pa-sm bg-grey-1 rounded-borders">{{ form.stepTwo.coverLetter || 'n/a' }}</div>
          </div>
          <!-- Attachments -->
          <div v-if="files.length > 0" class="q-pt-lg row">
            <div v-for="(file,idx) in files" :key="idx" class="q-mb-md q-pr-lg row items-center">
              <img v-if="/^image\//.test(file.type)" :src="imageList[idx]" class="img_attached q-mr-sm rounded-borders">
              <q-btn v-else color="grey-3" class="q-mr-sm q-card--bordered" padding="sm" unelevated>
                <img src="~src/images/attachment.svg" width="24" height="24">
              </q-btn>
              {{ file.name }}
            </div>
          </div>
          <div class="q-mt-lg q-pb-md row items-center">
            <q-icon name="mdi-checkbox-marked-outline" class="q-mr-sm" size="24px" color="grey-7" />
            {{ $t('preview.acceptTerms') }}
          </div>
          <!-- Signature -->
          <div class="q-pr-md row justify-end">
            <div class="user_signature">{{ `${form.stepOne.firstName || 'John'} ${form.stepOne.lastName || 'Doe'}` }}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default
{
  name: 'DialogPreview',
  props:
    {
      value:
        {
          type: Boolean,
          default: false
        },
      form:
        {
          type: Object,
          required: true
        },
      files:
        {
          type: Array,
          default: () => []
        }
    },
  data()
  {
    return {
      imageList: [],
    };
  },
  watch:
    {
      files(newVal)
      {
        this.imageList = new Array(newVal.length);
        newVal.forEach((file, index) =>
        {
          const reader = new FileReader();
          reader.onload = (e) =>
          {
            this.imageList[index] = e.target.result;
          };
          reader.readAsDataURL(file);
        });
      }
    },
  methods:
    {
      close()
      {
        this.$emit('input', false);
      },
      dateLocale(value)
      {
        if (!value) return '';
        let d;
        if (typeof value === 'string')
        {
          const tmp = value.split('-');
          d = new Date(tmp[0], tmp[1] - 1, tmp[2], 0, 0, 0, 0);
        }
        else d = value;
        return d.toLocaleDateString(this.$root.$i18n.locale === 'en' ? 'en-GB' : this.$root.$i18n.locale, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      },
    }
};
</script>

<style lang="scss">
  .user_photo
  {
    max-width: 300px;
    max-height: 300px;
    object-fit: contain;
  }

  .user_signature
  {
    border-bottom: 2px dashed #777;
    font-family: 'Yellowtail', cursive;
    font-size: 28px;
    letter-spacing: -0.8px;
    color: #555;
  }

  .img_attached
  {
    max-width: 64px;
    max-height: 64px;
  }
</style>
