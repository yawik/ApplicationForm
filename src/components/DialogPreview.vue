<template>
  <q-dialog :value="value" maximized @input="close">
    <q-card flat class="yawik">
      <q-card-actions class="bg-primary text-white q-py-sm" align="center">
        <q-btn color="secondary" @click="close">{{ $t('buttons.close') }}</q-btn>
      </q-card-actions>
      <q-card-section class="row">
        <div class="bg-white q-mx-auto q-card--bordered rounded-borders q-px-lg q-pb-lg" style="min-width: 50%; max-width: 1024px; border-style: double; border-width: 3px;">
          <h4 align="center" class="q-my-sm">{{ $t('preview.title') }}</h4>
          <h6 v-if="job || org" align="center" class="q-my-sm">{{ org }} &nbsp;&mdash;&nbsp; {{ job }}</h6>
          <!-- Personal details -->
          <div class="row">
            <div class="col-6 row justify-center items-center q-pa-md">
              <img v-if="GET_PHOTO" :src="photoURL" class="user_photo rounded-borders">
              <img v-else src="~src/images/Person.svg" width="200" height="200">
            </div>
            <div class="col-6 q-pa-md">
              <h5 class="q-my-md">{{ `${salutationsMap[GET_FORM.salutation] || ''} ${GET_FORM.firstName || 'John'} ${GET_FORM.lastName || 'Doe'}` }}</h5>
              <div class="q-mt-md">
                <strong>{{ $t('preview.address') }}:</strong> &nbsp;
                <br>
                {{ `${GET_FORM.street || $t('stepOne.street')} ${GET_FORM.houseNumber}` }}
                <br>
                {{ `${GET_FORM.postalCode || '12345'} ${GET_FORM.city || $t('stepOne.city')}` }}
                <br>
                {{ `${GET_FORM.country || $t('stepOne.country')}` }}
              </div>
              <q-separator />
              <div>
                <strong>{{ $t('preview.email') }}:</strong> &nbsp; {{ GET_FORM.email || 'n/a' }}
              </div>
              <div>
                <strong>{{ $t('preview.phone') }}:</strong> &nbsp; {{ GET_FORM.phone || 'n/a' }}
              </div>
            </div>
          </div>
          <q-separator />
          <div class="q-pt-md">
            <div>
              <strong>{{ $t('preview.canStart') }}:</strong> &nbsp;
              <span v-if="GET_FORM.immediate">
                {{ $t('stepThree.immediately') }}
              </span>
              <span v-else>
                {{ GET_FORM.startDate ? dateLocale(GET_FORM.startDate) : 'n/a' }}
              </span>
            </div>
            <div v-if="GET_FORM.salaryAmount">
              <strong>{{ $t('preview.expectedSalary') }}:</strong> &nbsp; {{ `${thousand(GET_FORM.salaryAmount,' ',GET_FORM.salaryPeriod === 3 ? 2 : 0)} ${GET_FORM.currency}/${salaryPeriodMap[GET_FORM.salaryPeriod]}` }}
            </div>
          </div>
          <!-- Cover letter -->
          <div class="q-pt-md">
            <div class="text-bold q-pb-xs">{{ $t('stepTwo.title') }}</div>
            <!-- eslint-disable vue/no-v-html -->
            <div class="q-pa-sm bg-grey-1 rounded-borders" v-html="GET_FORM.coverLetter || 'n/a'" />
            <!-- eslint-enable vue/no-v-html -->
          </div>
          <!-- Attachments -->
          <div v-if="GET_FILES.length > 0" class="q-pt-lg row">
            <div v-for="(file,idx) in GET_FILES" :key="idx" class="q-mb-md q-pr-lg row items-center">
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
            <q-field :value="acceptTerms" class="field" lazy-rules :rules="[ruleRequired]" borderless dense>
              <template #control>
                <q-item v-ripple tag="label">
                  <q-item-section avatar top>
                    <q-checkbox v-model="acceptTerms" name="terms" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ $t('Privacy') }}</q-item-label>
                    <q-item-label caption>
                      <!-- eslint-disable vue/no-v-html -->
                      <div class="terms" v-html="$t('stepFive.privacyPolicy', [urlPrivacy])" />
                      <!-- eslint-enable vue/no-v-html -->
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-field>
            <!-- eslint-enable vue/no-mutating-props -->
          </div>
          <!-- Signature -->
          <div class="q-pr-md row">
            <div class="col-grow row">
              <q-btn color="positive" class="q-mx-auto" @click="$emit('send')">{{ $t('buttons.send') }}</q-btn>
            </div>
            <div class="user_signature">{{ `${GET_FORM.firstName || 'John'} ${GET_FORM.lastName || 'Doe'}` }}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import validations from 'src/lib/validations';
import { mapGetters, mapMutations } from 'vuex';
import { GET_FORM, GET_PHOTO, GET_FILES, GET_TERMS, SET_TERMS } from '../store/names';

export default
{
  name: 'DialogPreview',
  mixins: [validations],
  props:
    {
      value:
        {
          type: Boolean,
          default: false
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
      photoURL: '',
    };
  },
  computed:
    {
      ...mapGetters([GET_FORM, GET_PHOTO, GET_FILES, GET_TERMS]),
      salutationsMap()
      {
        const result = {};
        this.$t('stepOne.salutationTypes').forEach(salutation =>
        {
          result[salutation.value] = salutation.label;
        });
        return result;
      },
      salaryPeriodMap()
      {
        return this.$root.$i18n.messages[this.$root.$i18n.locale].salary.period;
      },
      acceptTerms:
      {
        get()
        {
          return this[GET_TERMS];
        },
        set(value)
        {
          this[SET_TERMS](value);
        }
      },
      urlPrivacy()
      {
        return process.env.YAWIK_URL_PRIVACY;
      },
    },
  watch:
    {
      [GET_FILES](newVal)
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
      },
      [GET_PHOTO](newVal)
      {
        if (newVal)
        {
          const reader = new FileReader();
          reader.onload = (e) =>
          {
            this.photoURL = e.target.result;
          };
          reader.readAsDataURL(newVal);
        }
        else this.photoURL = '';
      }
    },
  methods:
    {
      ...mapMutations([SET_TERMS]),
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
          const tmp = value.split(/[.-]/);
          d = new Date(tmp[2], tmp[1] - 1, tmp[0], 0, 0, 0, 0);
        }
        else d = value;
        return d.toLocaleDateString(this.$root.$i18n.locale === 'en' ? 'en-GB' : this.$root.$i18n.locale, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      },
      thousand(value, separator = ',', decimal = 0, point = '.')
      {
        return Number(value).toFixed(decimal).replace(/([^-])(?=(\d{3})+(\.\d+)?$)/g, '$1' + separator).replace('.', point);
      }
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
