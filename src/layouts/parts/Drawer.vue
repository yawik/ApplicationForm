<template>
  <q-drawer :model-value="value" side="right" overlay bordered @update:modelValue="switchDrawerState">
    <div class="text-secondary q-pb-md">
      <q-btn
        flat
        color="primary"
        class="full-width"
        :label="$t(GET_TOKEN ? 'logout' : 'login')"
        align="right"
        :icon-right="GET_TOKEN ? 'mdi-logout' : 'mdi-login'"
        to="/"
        @click="showLogin"
      />
      <q-separator />
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
    </div>
  </q-drawer>
</template>

<script>
import { GET_TOKEN, SET_TOKEN } from 'src/store/names';
import { mapGetters, mapMutations } from 'vuex';
import eventBus from 'src/lib/eventBus';

export default
{
  name: 'Drawer',
  props:
    {
      value:
        {
          type: Boolean,
          default: false
        },
    },
  emits: ['input'],
  data()
  {
    return {
    };
  },
  computed:
    {
      ...mapGetters([GET_TOKEN]),
    },
  methods:
  {
    ...mapMutations([SET_TOKEN]),
    switchDrawerState(state)
    {
      this.$emit('input', state);
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
    }
  }
};
</script>
