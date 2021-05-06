export default
{
  methods:
    {
      ruleRequired(value)
      {
        return typeof value === 'number' ? true : !!value || this.$t('rules.required');
      },
      validDMY(value)
      {
        return value ? !isNaN((new Date(value.split('-').reverse().join('-') + 'T00:00:00Z')).getTime()) || this.$t('rules.invalidDate') : true;
      }
    }
};
