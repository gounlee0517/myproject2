import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import LetterContextProvider from './context/LetterContext';
import NameContextProvider from './context/NameContext';
import ContentContextProvider from './context/ContentContext';
import CurMembersContextProvider from './context/CurMembersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LetterContextProvider>
    <NameContextProvider>
      <ContentContextProvider>
        <CurMembersContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CurMembersContextProvider>
      </ContentContextProvider>
    </NameContextProvider>
  </LetterContextProvider>
);

reportWebVitals();
