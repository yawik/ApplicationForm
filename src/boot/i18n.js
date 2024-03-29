// https://stackoverflow.com/questions/66140411/you-are-running-the-esm-bundler-build-of-vue-i18n-it-is-recommended-to-configur
import { createI18n } from 'vue-i18n/index';

import { messages, numberFormats } from 'src/i18n';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  silentTranslationWarn: true,
  warnHtmlInMessage: 'off',
  messages,
  numberFormats
});

export default ({ app }) =>
{
  // Set i18n instance on app
  app.use(i18n);
};

// if you need to import it from
// other files, then:
export { i18n };
