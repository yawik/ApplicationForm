import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import yawik from './yawik';

export default function(/* { ssrContext } */)
{
  const Store = createStore({
    modules: {
      yawik,
    },
    plugins:
      [
        createPersistedState({
          key: 'yavik',
          paths: ['yawik.form', 'yawik.token']
        })
      ],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  /*
    if we want some HMR magic for it, we handle
    the hot update like below. Notice we guard this
    code with "process.env.DEV" -- so this doesn't
    get into our production build (and it shouldn't).
  */

  if (process.env.DEV && module.hot)
  {
    module.hot.accept(['./yawik'], () =>
    {
      const newData = require('./yawik').default;
      Store.hotUpdate({ modules: { yawik: newData } });
    });
  }

  return Store;
}
