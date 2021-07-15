<template>
  <q-layout view="lHh Lpr lFf" class="yawik">
    <q-header v-if="showToolbar" reveal class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title>
          <logo v-if="showToolbar"
                :logo-url="orgLogo"
                :org-name="orgName"
          />
        </q-toolbar-title>
        <q-separator dark vertical />
        <SwitchLanguage class="q-mx-auto" />

        <q-separator spaced vertical />

        <q-btn
          flat
          @click="auth = true"
        >
          {{ $t('login') }}
        </q-btn>

        <q-separator spaced vertical />

        <q-btn dense flat round
               :icon="right ? 'mdi-menu' : 'mdi-menu-open'"
               @click="right = !right"
        />
      </q-toolbar>
      <drawer v-model="right" />
    </q-header>
    <q-page-container style="overflow-x: hidden;">
      <div class="text-center text-h6 q-mt-md">
        <logo v-if="showLogo && !showToolbar"
              :logo-url="orgLogo"
              class="text-center"
        />
        <span class="text-center text-h6 q-mt-md">
          <a v-if="jobLink" :href="jobLink">{{ jobTitle }}</a>
          <span v-else>
            {{ $t('speculativeApplication') }}
          </span>
        </span>
        <span v-if="orgName" class="text-center text-h6 q-mt-md"> - {{ orgName }}</span>
      </div>
      <router-view v-slot="{ Component }"
                   :job-title="jobTitle"
                   :org-name="orgName"
                   :toolbar="showToolbar"
      >
        <transition name="fade" appear mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
    <PageFooter v-if="showFooter" />
    <q-dialog v-model="auth">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ $t('login') }}</div>
        </q-card-section>

        <q-card-section>
          <div class="row">
            <q-input v-model="username"
                     outlined
                     type="text"
                     name="username"
                     :label="$t('label.username')"
                     lazy-rules
            >
              <template #append>
                <q-icon :name="mdi-blank" />
              </template>
            </q-input>
          </div>
          <div class="row">
            <q-input v-model="password"
                     :label="$t('label.password')"
                     outlined
                     :type="isPwd ? 'password' : 'text'"
            >
              <template #append>
                <q-icon
                  :name="isPwd ? 'mdi-eye-off' : 'mdi-eye'"
                  class="mdi-cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn>
            {{ $t('buttons.cancel') }}
          </q-btn>
          <q-btn>
            {{ $t('buttons.send') }}
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import PageFooter from '../components/PageFooter';
import SwitchLanguage from '../components/SwitchLanguage';
import Drawer from './parts/Drawer.vue';
import Logo from './parts/Logo';

export default
{
  name: 'MainLayout',
  meta()
  {
    return {
      title: this.jobTitle + 'abc',
      titleTemplate: title => `${title} ` + (this.orgName ? ' - ' + this.orgName : '')
    };
  },
  components:
  {
    PageFooter,
    Drawer,
    Logo,
    SwitchLanguage
  },
  data()
  {
    return {
      jobLink: '',
      jobTitle: this.jobTitle ? this.jobTitle : '',
      orgName: this.orgName ? this.orgName : '',
      orgLogo: this.orgLogo ? this.orgLogo : 'yawik-logo.png',
      right: false
    };
  },
  computed:
    {
      jobID()
      {
        console.log('compute jobs');
        return this.$route.query.job;
      },
      showLogo()
      {
        return !this.$route.query.hl;
      },
      showFooter()
      {
        return !this.$route.query.hf;
      },
      showToolbar()
      {
        return this.$route.query.tb;
      }
    },
  created()
  {
    const lang = this.$route.params.lang;
    this.$root.$i18n.locale = lang;
    import(
      /* webpackInclude: /(de|en-GB)\.js$/ */
      'quasar/lang/' + (lang === 'en' ? 'en-GB' : lang)
    ).then(lang =>
    {
      this.$q.lang.set(lang.default);
    });
    if (this.jobID) this.getJobDetails();
  },
  methods:
    {
      getJobDetails()
      {
        this.$q.loading.show({ delay: 100 });
        this.$axios.get(process.env.YAWIK_JOB_DETAIL_URL + '?job=' + this.jobID).then(response =>
        {
          this.$q.loading.hide();
          if (response.data && response.data.success)
          {
            this.jobLink = response.data.payload.uri;
            this.jobTitle = response.data.payload.title;
            this.orgName = response.data.payload.organization.name;
            this.orgLogo = response.data.payload.organization.logo;
          }
        }).catch(err =>
        {
          this.$q.loading.hide();
          this.$q.notify({
            color: 'negative',
            position: 'center',
            icon: 'mdi-alert',
            message: err.message || err,
          });
        });
      },
    },
  setup()
  {
    return {
      auth: ref(false),
      username: ref(''),
      password: ref(''),
      isPwd: ref(true)
    };
  }
};
</script>

<style>
  .fade-enter-active,
  .fade-leave-active
  {
    transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .fade-enter,
  .fade-leave-active
  {
    opacity: 0;
    transform: translate(2em, 0);
  }
</style>
