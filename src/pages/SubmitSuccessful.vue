<template>
  <q-page class="flex flex-center" padding>
    <q-card flat bordered style="min-width: 30px;">
      <q-card-section class="text-h6 bg-positive text-white q-py-sm">{{ $t('success') }}</q-card-section>
      <q-card-section class="form_submit_success">
        {{ $t('applicationWasSent') }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default
{
  name: 'SubmitSuccessful',
};
</script>
