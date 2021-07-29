import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { shallowMount } from '@vue/test-utils';
import PageFooter from './PageFooter';

/*
 * You can provide a config object as param like such:
 *
 * ```ts
 * installQuasarPlugin({ plugins: { Dialog } });
 * ```
 */
installQuasarPlugin();

describe('PageFooter', () =>
{
  let cmp;

  beforeEach(() =>
  {
    cmp = shallowMount(PageFooter);
  });

  it('mounts without errors', () =>
  {
    expect(cmp).toBeTruthy();
  });

  it('check enviroment properties', () =>
  {
    process.env.YAWIK_URL_OPERATOR = 'test';
    expect(cmp.vm.urlOperator).toBe('test');
    process.env.YAWIK_URL_PRIVACY = 'test';
    expect(cmp.vm.urlPrivacy).toBe('test');
    process.env.YAWIK_URL_IMPRINT = 'test';
    expect(cmp.vm.urlImprint).toBe('test');
  });
});
