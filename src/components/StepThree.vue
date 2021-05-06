<template>
  <div>
    <div class="q-pb-sm">{{ $t('stepThree.import') }}</div>
    <div class="row q-gutter-md">
      <q-btn-dropdown v-for="social in listSocial" :key="social.title" color="primary" :icon="social.icon" :label="social.title">
        <q-list>
          <q-item v-close-popup clickable>
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
export default
{
  name: 'StepThree',
  inheritAttrs: false,
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
          },
          {
            icon: 'mdi-xing',
            title: 'Xing',
          },
          {
            icon: 'mdi-linkedin',
            title: 'LinkedIn',
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
};
</script>
