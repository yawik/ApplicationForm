<template>
  <q-layout view="lHh Lpr lFf" class="yawik">
    <q-header v-if="showToolbar" reveal class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title>
          <LogoPanel v-if="showToolbar" :logo-url="orgLogo" :org-name="orgName" />
        </q-toolbar-title>
        <q-separator spaced vertical />
        <SwitchLanguage class="q-mx-auto" />

        <q-separator spaced vertical />

        <q-btn flat @click="showLogin">
          {{ $t(GET_TOKEN ? 'logout' : 'login') }}
        </q-btn>

        <q-separator spaced vertical />

        <q-btn dense flat round
               :icon="right ? 'mdi-menu' : 'mdi-menu-open'"
               @click="right = !right"
        />
      </q-toolbar>
      <SidebarDrawer v-model="right" />
    </q-header>
    <q-page-container style="overflow-x: hidden;">
      <div class="text-center text-h6 q-mt-md">
        <logo-panel
          v-if="showLogo && !showToolbar"
          :logo-url="orgLogo"
          :org-name="orgName"
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
    <DialogLogin />
  </q-layout>
</template>

<script>
import PageFooter from '../components/PageFooter';
import SwitchLanguage from '../components/SwitchLanguage';
import SidebarDrawer from '../components/Drawer.vue';
import LogoPanel from '../components/Logo';
import DialogLogin from '../components/dialogs/DialogLogin';
import eventBus from 'src/lib/eventBus';
import { GET_TOKEN, SET_TOKEN } from '../store/names';
import { mapGetters, mapMutations } from 'vuex';

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
    SidebarDrawer,
    LogoPanel,
    SwitchLanguage,
    DialogLogin,
  },
  data()
  {
    return {
      jobLink: '',
      jobTitle: this.jobTitle ? this.jobTitle : '',
      orgName: this.orgName ? this.orgName : '',
      orgLogo: this.orgLogo ? this.orgLogo : 'yawik-logo.png',
      right: false,
    };
  },
  computed:
    {
      ...mapGetters([GET_TOKEN]),
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
      ...mapMutations([SET_TOKEN]),
      getJobDetails()
      {
        this.$q.loading.show({ delay: 100 });
        this.$axios.get(process.env.YAWIK_API_URL + '/api/jobs/' + this.jobID).then(response =>
        {
          this.$q.loading.hide();
          if (response.data && response.data.success)
          {
            this.jobLink = process.env.YAWIK_JOB_DETAIL_URL + '/jobs/' + response.data.success.job.id + '-titel/true';
            this.jobTitle = response.data.success.job.jobTitle;
            this.orgName = response.data.success.job.organization;
            this.orgLogo = response.data.success.job.logo ? process.env.YAWIK_API_URL + response.data.success.job.logo.url : '';
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
      showLogin()
      {
        if (this[GET_TOKEN])
        {
          this[SET_TOKEN](null);
        }
        else
        {
          eventBus.emit('SHOW_LOGIN');
        }
      },
    },
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
