<template>
  <q-dialog v-model="showDialog">
    <q-form @submit="submitForm">
      <q-card class="relative-position">
        <q-card-section class="bg-primary text-white q-py-sm">
          <div class="text-h6">{{ $t('login') }}</div>
        </q-card-section>

        <q-card-section>
          <q-input ref="username" v-model="username" name="username" :label="$t('label.username')" outlined dense :rules="[ruleRequired]" lazy-rules autocomplete="username">
            <template #append>
              <q-icon name="mdi-blank" />
            </template>
          </q-input>
          <q-input v-model="password" :label="$t('label.password')" :type="showPassword ? 'text' : 'password'" outlined dense :rules="[ruleRequired]" lazy-rules autocomplete="current-password">
            <template #append>
              <q-icon
                :name="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" outline class="q-mr-sm" @click="showDialog = false">
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
import validations from 'src/lib/validations';
import errorAlert from 'src/lib/errorAlert';
import eventBus from 'src/lib/eventBus';
import { SET_TOKEN } from '../store/names';
import { mapMutations } from 'vuex';

export default
{
  name: 'DialogLogin',
  mixins: [validations, errorAlert],
  data()
  {
    return {
      showDialog: false,
      username: '',
      password: '',
      showPassword: false,
      sending: false,
    };
  },
  created()
  {
    eventBus.on('SHOW_LOGIN', this.showLogin);
  },
  beforeUnmount()
  {
    eventBus.off('SHOW_LOGIN', this.showLogin);
  },
  methods:
    {
      ...mapMutations([SET_TOKEN]),
      showLogin()
      {
        this.username = '';
        this.password = '';
        this.showPassword = false;
        this.showDialog = true;
        setTimeout(() =>
        {
          this.$refs.username.focus();
        }, 120);
      },
      submitForm()
      {
        const data = new FormData();
        data.append('appKey', process.env.YAWIK_APP_KEY);
        data.append('user', this.username);
        data.append('pass', this.password);
        this.sending = true;
        this.$axios.post(process.env.YAWIK_LOGIN_URL, data).then(response =>
        {
          if (response.data.status === 'success')
          {
            this[SET_TOKEN](response.data.token);
            this.showDialog = false;
          }
          else
          {
            this.axiosFailed(response);
          }
        }).catch(err =>
        {
          this.axiosFailed(err);
        }).finally(() =>
        {
          this.sending = false;
        });
      }
    }
};
</script>
