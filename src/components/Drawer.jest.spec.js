import { beforeEach, describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Drawer from './Drawer';

/*
 * You can provide a config object as param like such:
 *
 * ```ts
 * installQuasarPlugin({ plugins: { Dialog } });
 * ```
 */
installQuasarPlugin();

describe('Drawer', () =>
{
  let getters,
    store,
    cmp;

  beforeEach(() =>
  {
    getters = {
      GET_TOKEN: () => '1234'
    };

    store = new Vuex.Store({
      getters
    });

    cmp = shallowMount(Drawer, {
      global: {
        mocks: {
          $store: store,
        }
      }
    });
  });

  it('mounts without errors', () =>
  {
    expect(cmp).toBeTruthy();
  });

  it('check enviroment properties', () =>
  {
  });
});
