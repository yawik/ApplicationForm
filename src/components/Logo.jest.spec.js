import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { mount } from '@vue/test-utils';
import Logo from './Logo';

/*
 * You can provide a config object as param like such:
 *
 * ```ts
 * installQuasarPlugin({ plugins: { Dialog } });
 * ```
 */
installQuasarPlugin();

describe('Logo', () => {
  it('mounts without errors', () => {
    const wrapper = mount(Logo, {
      propsData: {
        logoUrl: 'value',
        orgName: 'CROSS Solution'
      }
    });

    expect(wrapper).toBeTruthy();
  });
});

