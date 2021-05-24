<template>
  <div class="yawik-stepper-width">
    <SocialData v-if="socialAllowed" />

    <div class="q-pt-lg q-pb-xs">{{ $t('preview.address') }}</div>
    <q-option-group
      v-model="salutation"
      :label="$t('stepOne.stepOne.salutation')"
      :options="$t('stepOne.salutationTypes')" color="primary" inline name="salutation"
    />

    <div class="q-col-gutter-sm row">
      <div class="col-6 column">
        <q-input
          ref="fname"
          v-model.trim="firstName"
          :label="$t('stepOne.firstName')"
          name="fname" outlined dense lazy-rules
          :rules="[ruleRequired]"
          @keypress.enter="gotoNext"
        />
      </div>
      <div class="col-6 column">
        <q-input
          v-model.trim="lastName"
          :label="$t('stepOne.lastName')"
          name="lname" outlined dense lazy-rules
          :rules="[ruleRequired]" @keypress.enter="gotoNext"
        />
      </div>
    </div>

    <div class="q-col-gutter-sm row">
      <div class="col-xs-8">
        <q-input
          v-model.trim="street"
          :label="$t('stepOne.street')"
          name="street" outlined dense lazy-rules :rules="[ruleRequired]" @keypress.enter="gotoNext"
        />
      </div>
      <div class="column col-xs-4">
        <q-input
          v-model.trim="houseNumber"
          :label="$t('stepOne.houseNumber')"
          name="house" outlined dense lazy-rules :rules="[ruleRequired]" style="min-width: 70px;"
          @keypress.enter="gotoNext"
        />
      </div>
    </div>

    <div class="q-col-gutter-sm row">
      <div class="col-xs-3">
        <q-input
          v-model.trim="postalCode"
          :label="$t('stepOne.zipCode')"
          name="zip" outlined dense lazy-rules :rules="[ruleRequired]" style="min-width: 70px;"
          @keypress.enter="gotoNext"
        />
      </div>
      <div class="column col-xs-5">
        <q-input
          v-model.trim="city"
          :label="$t('stepOne.city')"
          name="city" outlined dense lazy-rules
          :rules="[ruleRequired]"
          @keypress.enter="gotoNext"
        />
      </div>
      <div class="col-xs-4">
        <q-input
          v-model.trim="country"
          :label="$t('stepOne.country')"
          name="country" outlined dense lazy-rules :rules="[ruleRequired]"
          @keypress.enter="gotoNext"
        />
      </div>
    </div>

    <hr>
    <div class="q-pt-lg q-pb-xs">{{ $t('preview.contact') }}</div>
    <div class="q-col-gutter-sm row">
      <div class="column col-xs-12 col-md-6">
        <q-input
          v-model.trim="phone"
          :label="$t('stepOne.phone')"
          name="phone" outlined dense lazy-rules :rules="[ruleContact]"
          @keypress.enter="gotoNext"
        />
      </div>
      <div class="column col-xs-12 col-md-6">
        <q-input
          v-model.trim="email"
          :label="$t('stepOne.email')"
          name="email" outlined dense lazy-rules :rules="[ruleContact,validEmail]"
          @keypress.enter="gotoNext"
        />
      </div>
    </div>
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
