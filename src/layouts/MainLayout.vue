<template>
  <q-layout view="lHh Lpr lFf" class="yawik">
    <q-header reveal class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title>
          <img v-if="showLogo" class="block" :src="logo || 'yawik-logo.png'" style="max-width: 160px; max-height: 80px;">
        </q-toolbar-title>
        <q-btn dense flat round
               :icon="right ? 'mdi-menu' : 'mdi-menu-open'"
               @click="right = !right"
        />
      </q-toolbar>
    </q-header>
    <drawer v-model="right" />
    <q-page-container style="overflow-x: hidden;">
      <div class="text-center text-h6 q-mt-md">
        <span if="jobTitle" class="text-center text-h6 q-mt-md">
          <a :href="jobLink">{{ jobTitle }}</a>
        </span>
        <span v-if="orgName" class="text-center text-h6 q-mt-md">
          - {{ orgName }}
        </span>
      </div>
      <transition name="fade" appear mode="out-in">
        <router-view :job-name="jobTitle" :org-name="orgName" />
      </transition>
    </q-page-container>
    <PageFooter v-if="showFooter" />
  </q-layout>
</template>

<script>

import PageFooter from '../components/PageFooter';
import Drawer from './parts/Drawer.vue';

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
  components: {
    PageFooter,
    Drawer
  },
  data()
  {
    return {
      jobLink: '',
      jobTitle: this.jobTitle ? 'Bewerbung auf: ' + this.jobTitle : 'Initiativbewerbung',
      orgName: '',
      logo: '',
      right: false
    };
  },
  computed:
    {
      jobID()
      {
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
    },
  created()
  {
    const lang = this.$route.params.lang;
    this.$root.$i18n.locale = lang;
    import(
      /* webpackInclude: /(de|en-gb)\.js$/ */
      'quasar/lang/' + (lang === 'en' ? 'en-gb' : lang)
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
            this.logo = response.data.payload.organization.logo;
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
