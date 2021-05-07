<template>
  <div>
    <div class="q-pb-sm">{{ $t('stepThree.import') }}</div>
    <div class="row q-gutter-md">
      <q-btn-dropdown v-for="social in listSocial" :key="social.title" color="primary" :icon="social.icon" :label="social.title" glossy push>
        <q-list>
          <q-item v-close-popup clickable @click="importProfile(social.network)">
            <q-item-section>
              <q-item-label>{{ $t('stepThree.attach') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable :disable="!form[social.title.toLowerCase()]">
            <q-item-section>
              <q-item-label>{{ $t('stepThree.detach') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable :disable="!form[social.title.toLowerCase()]">
            <q-item-section>
              <q-item-label>{{ $t('stepThree.view') }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<script>
import hello from 'hellojs';

export default
{
  name: 'StepThree',
  props:
    {
      value:
        {
          type: Object,
          required: true
        }
    },
  data()
  {
    return {
      form:
        {
          facebook: null,
          xing: null,
          linkedin: null,
          google: null,
        }
    };
  },
  computed:
    {
      listSocial()
      {
        return [
          {
            icon: 'mdi-facebook',
            title: 'Facebook',
            network: 'facebook',
          },
          {
            icon: 'mdi-xing',
            title: 'Xing',
          },
          {
            icon: 'mdi-linkedin',
            title: 'LinkedIn',
            network: 'linkedin'
          },
          {
            icon: 'mdi-google',
            title: 'Google',
            network: 'google'
          },
        ];
      },
    },
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
  created()
  {
    // XING - https://stackoverflow.com/a/27372946/5962802
    // https://dev.xing.com/plugins/login_with/docs
    // https://github.com/MrSwitch/hello.js/blob/master/modules.md
    hello.init({
      facebook: process.env.APP_ID_FACEBOOK,
      google: process.env.APP_ID_GOOGLE,
      linkedin: process.env.APP_ID_LINKEDIN,
      github: process.env.APP_ID_GITHUB,
      dropbox: process.env.APP_ID_DROPBOX
    }, {
      display: 'popup',
    });
  },
  mounted()
  {
    hello.on('auth.login', this.onLogin);
  },
  beforeDestroy()
  {
    hello.off('auth.login', this.onLogin);
  },
  methods:
    {
      importProfile(network)
      {
        if (network) hello(network).login();
      },
      onLogin(auth)
      {
        // Call user information, for the given network
        hello(auth.network).api('me').then(profile =>
        {
          console.log(profile);
        });
      }
    }
};
</script>
