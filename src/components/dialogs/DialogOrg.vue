<template>
  <q-dialog v-model="value">
    <q-form @submit="submitForm">
      <q-card class="relative-position">
        <q-card-section class="bg-primary text-white q-py-sm">
          <div class="text-h6">{{ $t('sidebar.changeOrg') }}</div>
        </q-card-section>
        <q-card-section>
          <q-input ref="company" v-model.trim="orgName" :label="$t('label.company')" outlined dense :rules="[ruleRequired]" lazy-rules />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" outline class="q-mr-sm" @click="value = false">
            {{ $t('buttons.cancel') }}
          </q-btn>
          <q-btn color="primary" class="q-ml-sm" type="submit">
            {{ $t('buttons.send') }}
          </q-btn>
        </q-card-actions>
        <q-inner-loading :showing="sending">
          <q-spinner size="50px" color="primary" />
        </q-inner-loading>
      </q-card>
    </q-form>
  </q-dialog>
</template>

<script>
import errorAlert from 'src/lib/errorAlert';
import validations from 'src/lib/validations';

export default
{
  name: 'DialogOrg',
  mixins: [errorAlert, validations],
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
      orgName: '',
      sending: false,
    };
  },
  computed:
    {
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
  watch:
    {
      value(newVal)
      {
        if (newVal)
        {
          this.fetchData();
          setTimeout(() =>
          {
            this.$refs.company.focus();
          }, 120);
        }
      }
    },
  methods:
    {
      fetchData()
      {
        this.sending = true;
        this.$axios.get(process.env.YAWIK_API_URL + '/organization').then(response =>
        {
          this.orgName = response.data.orgName;
        }).catch(err =>
        {
          this.axiosFailed(err);
        }).finally(() =>
        {
          this.sending = false;
        });
      },
      submitForm()
      {
        this.sending = true;
        const data = new FormData();
        data.append('organization', this.orgName);
        this.$axios.post(process.env.YAWIK_API_URL + '/organization', data).then(response =>
        {
          this.value = false;
        }).catch(err =>
        {
          this.axiosFailed(err);
        }).finally(() =>
        {
          this.sending = false;
        });
      },
    }
};
</script>
