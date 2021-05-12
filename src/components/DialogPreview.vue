<template>
  <q-dialog :value="value" maximized @input="close">
    <q-card flat>
      <q-card-actions class="bg-primary text-white q-py-sm" align="center">
        <q-btn color="secondary" @click="close">{{ $t('buttons.close') }}</q-btn>
      </q-card-actions>
      <q-card-section class="row">
        <div class="q-mx-auto q-card--bordered rounded-borders q-px-lg q-pb-lg" style="min-width: 40%; max-width: 1024px; border-style: double; border-width: 3px;">
          <h4 align="center" class="q-my-sm">{{ $t('preview.title') }}</h4>
          <h6 v-if="job || org" align="center" class="q-my-sm">{{ org }} &nbsp;&mdash;&nbsp; {{ job }}</h6>
          <!-- Personal details -->
          <div class="row">
            <div class="col-6 row justify-center items-center q-pa-md">
              <img v-if="form.stepFour.photo" :src="form.stepFour.photo" class="user_photo rounded-borders">
              <img v-else src="~src/images/avatar.svg" width="200" height="200">
            </div>
            <div class="col-6 q-pa-md">
              <h5 class="q-my-md">{{ `${salutationsMap[form.stepOne.salutation] || ''} ${form.stepOne.firstName || 'John'} ${form.stepOne.lastName || 'Doe'}` }}</h5>
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
                {{ `${form.stepOne.country || $t('stepOne.country')}, ${form.stepOne.postalCode || '12345'} ${form.stepOne.city || $t('stepOne.city')}` }}
                <br>
                {{ `${form.stepOne.street || $t('stepOne.street')} ${form.stepOne.houseNumber}` }}
              </div>
            </div>
          </div>
          <!-- Cover letter -->
          <div class="q-pt-md">
            <div class="text-bold q-pb-xs">{{ $t('stepTwo.title') }}</div>
            <!-- eslint-disable vue/no-v-html -->
            <div class="q-pa-sm bg-grey-1 rounded-borders" v-html="form.stepTwo.coverLetter || 'n/a'" />
            <!-- eslint-enable vue/no-v-html -->
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
            <!--
            <q-icon name="mdi-checkbox-marked-outline" class="q-mr-sm" size="24px" color="grey-7" />
            {{ $t('preview.acceptTerms') }}
            -->
            <!-- eslint-disable vue/no-mutating-props -->
            <q-checkbox v-model="form.stepFive.acceptTerms">
              <!-- eslint-disable vue/no-v-html -->
              <div class="terms" v-html="$t('stepFive.privacyPolicy')" />
              <!-- eslint-enable vue/no-v-html -->
            </q-checkbox>
            <!-- eslint-enable vue/no-mutating-props -->
          </div>
          <!-- Signature -->
          <div class="q-pr-md row">
            <div class="col-grow row">
              <q-btn color="positive" class="q-mx-auto" @click="$emit('send')">{{ $t('buttons.send') }}</q-btn>
            </div>
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
        },
      job:
        {
          type: String,
          default: ''
        },
      org:
        {
          type: String,
          default: ''
        }
    },
  data()
  {
    return {
      imageList: [],
    };
  },
  computed:
    {
      salutationsMap()
      {
        const result = {};
        this.$t('stepOne.salutationTypes').forEach(salutation =>
        {
          result[salutation.value] = salutation.label;
        });
        return result;
      }
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

  .terms a
  {
    color: $primary;
  }

</style>
