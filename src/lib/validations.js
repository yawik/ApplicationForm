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
        if (!value) return true;
        const time = (new Date(value.split(/[.-]/).reverse().join('-') + 'T00:00:00Z')).getTime();
        return (!isNaN(time) && time < 4102444800000) || this.$t('rules.invalidDate');
      },
      validEmail(value)
      {
        //return value ? /^([a-zA-Z0-9]+\.|[a-zA-Z0-9]+[_-]+[a-zA-Z0-9]+\.)*([a-zA-Z0-9]+|[a-zA-Z0-9]+[_-]+[a-zA-Z0-9]+)@(([a-zA-Z0-9]+|[a-zA-Z0-9]+[-]+[a-zA-Z0-9]+)\.)+[a-zA-Z]{2,5}$/.test(value) || this.$t('rules.invalidEmail') : true;
        return value ? /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value) || this.$t('rules.invalidEmail') : true;
      }
    }
};
