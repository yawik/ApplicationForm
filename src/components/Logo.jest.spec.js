import { beforeEach, describe, expect, it } from '@jest/globals';
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

describe('Logo', () =>
{
  let cmp;

  beforeEach(() =>
  {
    cmp = mount(Logo, {
      props: {
        logoUrl: 'logo.png',
        orgName: 'CROSS'
      }
    });
  });

  it('mounts without errors', () =>
  {
    expect(cmp).toBeTruthy();
  });

  it('check property', () =>
  {
    expect(cmp.vm.logoUrl).toBe('logo.png');
    expect(cmp.vm.orgName).toBe('CROSS');
  });
});
