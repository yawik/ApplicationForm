import {
  GET_FORM,
  GET_SALUTATION,
  GET_FIRST_NAME,
  GET_LAST_NAME,
  GET_STREET,
  GET_HOUSE,
  GET_ZIP,
  GET_CITY,
  GET_COUNTRY,
  GET_PHONE,
  GET_EMAIL,
  GET_COVER_LETTER,
  GET_START_DATE,
  GET_START_NOW,
  GET_SALARY_AMOUNT,
  GET_CURRENCY,
  GET_SALARY_PERIOD,
  GET_PHOTO,
  GET_COPY,
  GET_TERMS,
  GET_FILES,
  GET_STEP,
  CLEAR_FORM,
  SET_SALUTATION,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_STREET,
  SET_HOUSE,
  SET_ZIP,
  SET_CITY,
  SET_COUNTRY,
  SET_PHONE,
  SET_EMAIL,
  SET_COVER_LETTER,
  SET_START_DATE,
  SET_START_NOW,
  SET_SALARY_AMOUNT,
  SET_CURRENCY,
  SET_SALARY_PERIOD,
  SET_PHOTO,
  SET_COPY,
  SET_TERMS,
  SET_FILES,
  SET_STEP
} from '../names';

const emptyForm = {
  step: 'stepOne',
  salutation: null,
  firstName: '',
  lastName: '',
  street: '',
  houseNumber: '',
  postalCode: '',
  city: '',
  country: '',
  phone: '',
  email: '',
  coverLetter: '',
  startDate: '',
  immediate: false,
  salaryAmount: 0,
  currency: 'EUR',
  salaryPeriod: null,
  carbonCopy: false,
  acceptTerms: false,
};

export default
{
  state()
  {
    return {
      attachments: [],
      photo: null,
      form:
        {
          step: 'stepOne',
          salutation: null,
          firstName: '',
          lastName: '',
          street: '',
          houseNumber: '',
          postalCode: '',
          city: '',
          country: '',
          phone: '',
          email: '',
          coverLetter: '',
          startDate: '',
          immediate: false,
          salaryAmount: 0,
          currency: 'EUR',
          salaryPeriod: null,
          carbonCopy: false,
          acceptTerms: false,
        },
    };
  },
  getters:
    {
      [GET_FORM](state)
      {
        return state.form;
      },
      [GET_SALUTATION](state)
      {
        return state.form.salutation;
      },
      [GET_FIRST_NAME](state)
      {
        return state.form.firstName;
      },
      [GET_LAST_NAME](state)
      {
        return state.form.lastName;
      },
      [GET_STREET](state)
      {
        return state.form.street;
      },
      [GET_HOUSE](state)
      {
        return state.form.houseNumber;
      },
      [GET_ZIP](state)
      {
        return state.form.postalCode;
      },
      [GET_CITY](state)
      {
        return state.form.city;
      },
      [GET_COUNTRY](state)
      {
        return state.form.country;
      },
      [GET_PHONE](state)
      {
        return state.form.phone;
      },
      [GET_EMAIL](state)
      {
        return state.form.email;
      },
      [GET_COVER_LETTER](state)
      {
        return state.form.coverLetter;
      },
      [GET_START_DATE](state)
      {
        return state.form.startDate;
      },
      [GET_START_NOW](state)
      {
        return state.form.immediate;
      },
      [GET_SALARY_AMOUNT](state)
      {
        return state.form.salaryAmount;
      },
      [GET_CURRENCY](state)
      {
        return state.form.currency;
      },
      [GET_SALARY_PERIOD](state)
      {
        return state.form.salaryPeriod;
      },
      [GET_PHOTO](state)
      {
        return state.photo;
      },
      [GET_COPY](state)
      {
        return state.form.carbonCopy;
      },
      [GET_TERMS](state)
      {
        return state.form.acceptTerms;
      },
      [GET_FILES](state)
      {
        return state.attachments;
      },
      [GET_STEP](state)
      {
        return state.form.step;
      },
    },
  mutations:
    {
      [CLEAR_FORM](state)
      {
        state.photo = null;
        state.attachments = [];
        for (const key in emptyForm) state.form[key] = emptyForm[key];
      },
      [SET_SALUTATION](state, value)
      {
        state.form.salutation = value;
      },
      [SET_FIRST_NAME](state, value)
      {
        state.form.firstName = value;
      },
      [SET_LAST_NAME](state, value)
      {
        state.form.lastName = value;
      },
      [SET_STREET](state, value)
      {
        state.form.street = value;
      },
      [SET_HOUSE](state, value)
      {
        state.form.houseNumber = value;
      },
      [SET_ZIP](state, value)
      {
        state.form.postalCode = value;
      },
      [SET_CITY](state, value)
      {
        state.form.city = value;
      },
      [SET_COUNTRY](state, value)
      {
        state.form.country = value;
      },
      [SET_PHONE](state, value)
      {
        state.form.phone = value;
      },
      [SET_EMAIL](state, value)
      {
        state.form.email = value;
      },
      [SET_COVER_LETTER](state, value)
      {
        state.form.coverLetter = value;
      },
      [SET_START_DATE](state, value)
      {
        state.form.startDate = value;
      },
      [SET_START_NOW](state, value)
      {
        state.form.immediate = value;
      },
      [SET_SALARY_AMOUNT](state, value)
      {
        state.form.salaryAmount = value;
      },
      [SET_CURRENCY](state, value)
      {
        state.form.currency = value;
      },
      [SET_SALARY_PERIOD](state, value)
      {
        state.form.salaryPeriod = value;
      },
      [SET_PHOTO](state, value)
      {
        state.photo = value;
      },
      [SET_COPY](state, value)
      {
        state.form.carbonCopy = value;
      },
      [SET_TERMS](state, value)
      {
        state.form.acceptTerms = value;
      },
      [SET_FILES](state, value)
      {
        state.attachments = value;
      },
      [SET_STEP](state, value)
      {
        state.form.step = value;
      }
    }
};
