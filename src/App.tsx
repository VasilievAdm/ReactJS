import React, { FC, useState } from 'react';
import { ThemeContext, defaultContext } from './utils/ThemeContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.scss';
import { AppRouter } from './components/AppRouter';
import { persistor, store } from './store';

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="container">
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
      </ThemeContext.Provider>
    </div>
  );
};
