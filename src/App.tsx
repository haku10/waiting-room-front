import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './styles.module.scss';
import Main from 'components/main';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
