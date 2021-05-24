<template>
  <q-layout view="lHh Lpr lFf" class="yawik">
    <q-page-container style="overflow-x: hidden;">
      <img class="block q-mx-auto q-mt-sm" :src="logo || 'yawik-logo.png'" style="max-width: 800px; max-height: 160px;">
      <div v-if="jobName || orgName" class="text-center text-h6 q-mt-md">
        <a :href="jobLink">{{ orgName }} &nbsp;&mdash;&nbsp; {{ jobName }}</a>
      </div>
      <transition name="fade" appear mode="out-in">
        <router-view :job-name="jobName" :org-name="orgName" />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default
{
  name: 'MainLayout',
  data()
  {
    return {
      jobLink: '',
      jobName: '',
      orgName: '',
      logo: '',
    };
  },
  computed:
    {
      jobID()
      {
        return this.$route.query.job;
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
            this.jobName = response.data.payload.title;
            this.orgName = response.data.payload.organization.name;
            this.logo = response.data.payload.organization.logo;
          }
        }).catch(err =>
        {
          this.$q.loading.hide();
          this.$q.notify({
            color: 'negative',
            position: 'top',
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
