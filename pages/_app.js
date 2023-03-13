/* eslint-disable react/prop-types */
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { createWrapper } from 'next-redux-wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';

import BurgerMenu from '../src/components/Menu/BurgerMenu';
import store from '../src/redux/store';
import theme from '../src/assets/theme';
import translationEn from '../src/assets/translations/en';
import translationFr from '../src/assets/translations/fr';
import RootModal from '../src/containers/RootModal';
import HeadContent from '../src/assets/HeadContent';

const translations = {
  fr: translationFr,
  en: translationEn
};

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window.navigator !== 'undefined' &&
      navigator.language &&
      navigator.language.split(/[-_]/)[0] !== 'fr'
    ) {
      setLanguage('en');
    }
  }, []);

  return (
    <Provider store={store}>
      <HeadContent />
      <IntlProvider locale={language} messages={translations[language]}>
        <ThemeProvider theme={theme}>
          <BurgerMenu pageWrapId="page-wrap" />
          <main id="page-wrap">
            <RootModal />
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
