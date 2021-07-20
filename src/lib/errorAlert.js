export default
{
  methods:
    {
      axiosFailed(axiosError)
      {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          icon: 'mdi-alert',
          message: (axiosError.response?.data?.messages || [])[0] || axiosError.response?.data?.message || axiosError.message || axiosError,
        });
      }
    }
};
