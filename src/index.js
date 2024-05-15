import React from 'react';
import ReactDOM from 'react-dom/client';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { ImageSearch } from 'components/ImageSearch/ImageSearch';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhoneBook />
    <ImageSearch />
  </React.StrictMode>
);
