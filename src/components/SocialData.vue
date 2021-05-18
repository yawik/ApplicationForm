<template>
  <div>
    <div class="q-pb-sm">{{ $t('stepOne.social.import') }}</div>
    <div class="row items-start q-gutter-md">
      <q-btn-dropdown v-for="social in listSocial" :key="social.title" color="primary" :icon="social.icon" :label="social.title" glossy push>
        <q-list>
          <q-item v-close-popup clickable @click="importProfile(social.network)">
            <q-item-section>
              <q-item-label>{{ $t('stepOne.social.attach') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable :disable="!form[social.title.toLowerCase()]">
            <q-item-section>
              <q-item-label>{{ $t('stepOne.social.detach') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable :disable="!form[social.title.toLowerCase()]">
            <q-item-section>
              <q-item-label>{{ $t('stepOne.social.view') }}</q-item-label>
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
  name: 'SocialData',
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
            configured: process.env.YAWIK_OAUTH_FACEBOOK,
          },
          {
            icon: 'mdi-xing',
            title: 'Xing',
          },
          {
            icon: 'mdi-linkedin',
            title: 'LinkedIn',
            network: 'linkedin',
            configured: process.env.YAWIK_OAUTH_LINKEDIN,
          },
          {
            icon: 'mdi-google',
            title: 'Google',
            network: 'google',
            configured: process.env.YAWIK_OAUTH_GOOGLE,
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
    const oauth = {};
    this.listSocial.forEach(social =>
    {
      if (social.configured)
      {
        if (social.network === 'linkedin')
        {
          oauth[social.network] = {
            id: social.configured,
            oauth: {
              version: 2,
              response_type: 'code',
              auth: 'https://www.linkedin.com/oauth/v2/authorization',
              grant: 'https://www.linkedin.com/oauth/v2/accessToken'
            },
            scope: {
              basic: 'r_liteprofile',
              email: 'r_emailaddress',
            },
            base: 'https://api.linkedin.com/v2/',

            get: {
              me: 'me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))',
              email: 'emailAddress?q=members&projection=(elements*(handle~))',
            },
          };
        }
        else oauth[social.network] = social.configured;
      }
    });
    hello.init(oauth, {
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
          if (auth.network === 'linkedin')
          {
            hello(auth.network).api('email').then(mail =>
            {
              profile.email = mail;
            });
          }
        });
      }
    }
};
</script>
