<template>
  <div>
    <SocialData v-if="socialAllowed" />

    <div class="q-pt-lg q-pb-xs">{{ $t('stepOne.salutation') }}</div>
    <q-option-group v-model="salutation" :options="$t('stepOne.salutationTypes')" color="primary" inline />

    <div class="q-col-gutter-sm row">
      <div class="col-6 column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.firstName') }}</div>
        <q-input ref="fname" v-model.trim="firstName" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext" />
      </div>
      <div class="col-6 column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.lastName') }}</div>
        <q-input v-model.trim="lastName" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext" />
      </div>
    </div>

    <div class="q-col-gutter-sm row">
      <div class="col-grow column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.street') }}</div>
        <q-input v-model.trim="street" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext" />
      </div>
      <div class="column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.houseNumber') }}</div>
        <q-input v-model.trim="houseNumber" outlined dense lazy-rules :rules="[ruleRequired]" style="min-width: 120px;" @keypress.enter="gotoNext" />
      </div>
    </div>

    <div class="q-col-gutter-sm row">
      <div class="column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.zipCode') }}</div>
        <q-input v-model.trim="postalCode" outlined dense lazy-rules :rules="[ruleRequired]" style="min-width: 160px;" @keypress.enter="gotoNext" />
      </div>
      <div class="col-grow column">
        <div class="q-pt-md q-pb-xs">{{ $t('stepOne.city') }}</div>
        <q-input v-model.trim="city" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext" />
      </div>
    </div>

    <div class="q-pt-md q-pb-xs">{{ $t('stepOne.country') }}</div>
    <q-input v-model.trim="country" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext" />

    <div class="q-pt-md q-pb-xs">{{ $t('stepOne.phone') }}</div>
    <q-input v-model.trim="phone" outlined dense lazy-rules :rules="[ruleContact]" @keypress.enter="gotoNext" />

    <div class="q-pt-md q-pb-xs">{{ $t('stepOne.email') }}</div>
    <q-input v-model.trim="email" outlined dense lazy-rules :rules="[ruleContact,validEmail]" @keypress.enter="gotoNext" />
  </div>
</template>

<script>
import validations from 'src/lib/validations';
import SocialData from 'src/components/SocialData';
import { mapGetters, mapMutations } from 'vuex';
import {
  GET_SALUTATION,
  GET_FIRST_NAME,
  GET_LAST_NAME,
  GET_STREET,
  GET_HOUSE,
  GET_ZIP,
  GET_CITY,
  GET_COUNTRY,
  GET_PHONE,
  GET_EMAIL,
  SET_SALUTATION,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_STREET,
  SET_HOUSE,
  SET_ZIP,
  SET_CITY,
  SET_COUNTRY,
  SET_PHONE,
  SET_EMAIL
} from 'src/store/names';

export default
{
  name: 'StepOne',
  components:
    {
      SocialData,
    },
  mixins: [validations],
  props:
    {
      stepper:
        {
          type: Object,
          default: null
        }
    },
  computed:
    {
      ...mapGetters([
        GET_SALUTATION,
        GET_FIRST_NAME,
        GET_LAST_NAME,
        GET_STREET,
        GET_HOUSE,
        GET_ZIP,
        GET_CITY,
        GET_COUNTRY,
        GET_PHONE,
        GET_EMAIL,
      ]),
      socialAllowed()
      {
        return !!process.env.YAWIK_OAUTH_FACEBOOK || !!process.env.YAWIK_OAUTH_GOOGLE || !!process.env.YAWIK_OAUTH_LINKEDIN || !!process.env.YAWIK_OAUTH_GITHUB || !!process.env.YAWIK_OAUTH_DROPBOX;
      },
      salutation:
        {
          get()
          {
            return this[GET_SALUTATION];
          },
          set(value)
          {
            this[SET_SALUTATION](value);
          }
        },
      firstName:
        {
          get()
          {
            return this[GET_FIRST_NAME];
          },
          set(value)
          {
            this[SET_FIRST_NAME](value);
          }
        },
      lastName:
        {
          get()
          {
            return this[GET_LAST_NAME];
          },
          set(value)
          {
            this[SET_LAST_NAME](value);
          }
        },
      street:
        {
          get()
          {
            return this[GET_STREET];
          },
          set(value)
          {
            this[SET_STREET](value);
          }
        },
      houseNumber:
        {
          get()
          {
            return this[GET_HOUSE];
          },
          set(value)
          {
            this[SET_HOUSE](value);
          }
        },
      postalCode:
        {
          get()
          {
            return this[GET_ZIP];
          },
          set(value)
          {
            this[SET_ZIP](value);
          }
        },
      city:
        {
          get()
          {
            return this[GET_CITY];
          },
          set(value)
          {
            this[SET_CITY](value);
          }
        },
      country:
        {
          get()
          {
            return this[GET_COUNTRY];
          },
          set(value)
          {
            this[SET_COUNTRY](value);
          }
        },
      phone:
        {
          get()
          {
            return this[GET_PHONE];
          },
          set(value)
          {
            this[SET_PHONE](value);
          }
        },
      email:
        {
          get()
          {
            return this[GET_EMAIL];
          },
          set(value)
          {
            this[SET_EMAIL](value);
          }
        },
    },
  mounted()
  {
    this.$refs.fname.focus();
  },
  methods:
    {
      ...mapMutations([
        SET_SALUTATION,
        SET_FIRST_NAME,
        SET_LAST_NAME,
        SET_STREET,
        SET_HOUSE,
        SET_ZIP,
        SET_CITY,
        SET_COUNTRY,
        SET_PHONE,
        SET_EMAIL,
      ]),
      ruleContact()
      {
        return !!this[GET_PHONE] || !!this[GET_EMAIL] ? true : this.$t('rules.phoneOrEmail');
      },
      gotoNext()
      {
        this.stepper && this.stepper.next();
      }
    }
};
</script>
