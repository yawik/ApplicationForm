<template>
  <q-drawer v-model="value" side="right" overlay bordered no-swipe-open no-swipe-close no-swipe-backdrop>
    <div class="text-secondary q-pb-md">
      <q-btn
        flat
        color="primary"
        class="full-width"
        :label="$t(GET_TOKEN ? 'logout' : 'login')"
        align="right"
        :icon-right="GET_TOKEN ? 'mdi-logout' : 'mdi-login'"
        @click="value = false,showLogin()"
      />
      <template v-if="GET_TOKEN">
        <q-separator />
        <q-btn
          flat
          color="primary"
          class="full-width"
          :label="$t('sidebar.changeLogo')"
          align="right"
          icon-right="mdi-image-search"
          @click="value = false,dlgLogo = true"
        />
        <q-btn
          flat
          color="primary"
          class="full-width"
          :label="$t('sidebar.changeOrg')"
          align="right"
          icon-right="mdi-domain"
          @click="value = false,dlgCompany = true"
        />
        <!--
        <q-btn
          flat
          color="primary"
          class="full-width"
          :label="$t('Metrics')"
          disabled
          align="arround"
          icon="mdi-equalizer"
          to="/"
          @click="switchDrawerState(false)"
        />
        <q-separator />
        <q-btn
          flat
          color="primary"
          class="full-width"
          :label="$t('Search Jobs')"
          disabled
          align="arround"
          icon="mdi-magnify"
          to="/"
          @click="switchDrawerState(false)"
        />
        <q-separator />
        <q-btn
          flat
          disabled
          color="primary"
          class="full-width"
          :label="$t('Post a Job')"
          align="arround"
          icon="mdi-lead-pencil"
          to="/"
          @click="switchDrawerState(false)"
        />
        -->
      </template>
    </div>
    <DialogLogo v-model="dlgLogo" />
    <DialogCompany v-model="dlgCompany" />
  </q-drawer>
</template>

<script>
import { GET_TOKEN, SET_TOKEN } from 'src/store/names';
import { mapGetters, mapMutations } from 'vuex';
import eventBus from 'src/lib/eventBus';
import DialogLogo from 'src/components/dialogs/DialogLogo';
import DialogCompany from 'src/components/dialogs/DialogOrg';

export default
{
  name: 'Drawer',
  components:
    {
      DialogLogo,
      DialogCompany,
    },
  props:
    {
      modelValue:
        {
          type: Boolean,
          default: false
        },
    },
  emits: ['update:modelValue'],
  data()
  {
    return {
      dlgLogo: false,
      dlgCompany: false,
    };
  },
  computed:
    {
      ...mapGetters([GET_TOKEN]),
      value:
        {
          get()
          {
            return this.modelValue;
          },
          set(val)
          {
            this.$emit('update:modelValue', val);
          }
        }
    },
  methods:
  {
    ...mapMutations([SET_TOKEN]),
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
  }
};
</script>
