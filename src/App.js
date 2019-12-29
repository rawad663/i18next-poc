import React from 'react';
import './App.css';
import i18next from 'i18next';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import TextBlock from './components/text_block';

function App() {
  const { t } = useTranslation();

  // Toggle between arabic and english
  const switchLanguage = (language) => {
    if (language && i18next.language && !i18next.language.includes(language)) {
        i18next.changeLanguage(language);
        moment.locale(language);
    }
  }

  return (
    <div className="App">
      <button onClick={() => switchLanguage(i18next.language.includes('en') ? 'ar' : 'en')}>
        Switch to {t('nouns.switch_language')}
      </button>

      <TextBlock />
    </div>
  );
}

export default App;
