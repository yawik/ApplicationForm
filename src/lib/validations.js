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
      },
      validEmail(value)
      {
        return value ? /^([a-zA-Z0-9]+\.|[a-zA-Z0-9]+[_-]+[a-zA-Z0-9]+\.)*([a-zA-Z0-9]+|[a-zA-Z0-9]+[_-]+[a-zA-Z0-9]+)@(([a-zA-Z0-9]+|[a-zA-Z0-9]+[-]+[a-zA-Z0-9]+)\.)+[a-zA-Z]{2,5}$/.test(value) || this.$t('rules.invalidEmail') : true;
      }
    }
};
