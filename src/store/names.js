/*
We use constants in Vuex for several reasons:
1. Preventing duplicate names
2. Preventing usage/calling of getter/mutation/action with non-existent name
3. Getting advantage of IDE code-completion and usage of constants (i.e. to spot unused names)
*/

// getters
export const GET_FORM = 'GET_FORM';
export const GET_SALUTATION = 'GET_SALUTATION';
export const GET_FIRST_NAME = 'GET_FIRST_NAME';
export const GET_LAST_NAME = 'GET_LAST_NAME';
export const GET_STREET = 'GET_STREET';
export const GET_HOUSE = 'GET_HOUSE';
export const GET_ZIP = 'GET_ZIP';
export const GET_CITY = 'GET_CITY';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_PHONE = 'GET_PHONE';
export const GET_EMAIL = 'GET_EMAIL';
export const GET_COVER_LETTER = 'GET_COVER_LETTER';
export const GET_START_DATE = 'GET_START_DATE';
export const GET_START_NOW = 'GET_START_NOW';
export const GET_SALARY_AMOUNT = 'GET_SALARY_AMOUNT';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_SALARY_PERIOD = 'GET_SALARY_PERIOD';
export const GET_PHOTO = 'GET_PHOTO';
export const GET_COPY = 'GET_COPY';
export const GET_TERMS = 'GET_TERMS';
export const GET_FILES = 'GET_FILES';
export const GET_STEP = 'GET_STEP';

// mutations
export const CLEAR_FORM = 'CLEAR_FORM';
export const SET_SALUTATION = 'SET_SALUTATION';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_STREET = 'SET_STREET';
export const SET_HOUSE = 'SET_HOUSE';
export const SET_ZIP = 'SET_ZIP';
export const SET_CITY = 'SET_CITY';
export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_PHONE = 'SET_PHONE';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_COVER_LETTER = 'SET_COVER_LETTER';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_START_NOW = 'SET_START_NOW';
export const SET_SALARY_AMOUNT = 'SET_SALARY_AMOUNT';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_SALARY_PERIOD = 'SET_SALARY_PERIOD';
export const SET_PHOTO = 'SET_PHOTO';
export const SET_COPY = 'SET_COPY';
export const SET_TERMS = 'SET_TERMS';
export const SET_FILES = 'SET_FILES';
export const SET_STEP = 'SET_STEP';
