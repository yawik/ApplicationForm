<template>
  <q-drawer :value="isDrawerOpen" side="right" overlay bordered @input="switchDrawerState">
    <div class="text-secondary q-pb-md">
      <q-btn
        flat
        color="primary"
        class="full-width"
        :label="$t('login')"
        align="right"
        icon-right="mdi-login"
        to="/"
        @click="switchDrawerState(false)"
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

<script lang="javascript">

export default {
  name: 'Drawer',
  props:
    {
      value:
        {
          type: Object,
          default: () => ({})
        },
    },
  emits: ['input'],
  data()
  {
    return {
      isDrawerOpen: this.value
    };
  },
  watch: {
    value(value)
    {
      this.switchDrawerState(value);
    }
  },
  methods: {
    switchDrawerState($event)
    {
      console.debug('SWITCH DRAWER STATE', $event);
      this.isDrawerOpen = $event;
      this.$emit('input', $event);
    }
  }
};
</script>
