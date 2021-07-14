<template>
  <q-layout view="lHh Lpr lFf" class="yawik">
    <q-header v-if="showToolbar" reveal class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title>
          <logo v-if="showToolbar" :logo-url="orgLogo" />
        </q-toolbar-title>
        <SwitchLanguage class="q-mx-auto" />
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
        <span v-if="jobTitle" class="text-center text-h6 q-mt-md">
          <a :href="jobLink">{{ jobTitle }}</a>
        </span>
        <span v-if="orgName" class="text-center text-h6 q-mt-md"> - {{ orgName }}</span>
      </div>
      <router-view v-slot="{ Component }" :job-name="jobTitle" :org-name="orgName">
        <transition name="fade" appear mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
    <PageFooter v-if="showFooter" />
  </q-layout>
</template>

<script>

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
      title: this.jobTitle,
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
    console.log('data');
    return {
      jobLink: '',
      jobTitle: this.jobTitle ? 'Bewerbung auf: ' + this.jobTitle : 'Initiativbewerbung',
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
      },
    },
  created()
  {
    console.log('created');
    console.log('orgLogo: ' + this.orgLogo);
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
  mounted()
  {
    console.log('mounted');
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
            console.log('git details: ' + this.orgLogo);
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
