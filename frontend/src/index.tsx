import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import {Helmet} from 'react-helmet';
import Overlay from 'components/ui/overlay/overlay';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Головна сторінка</title>
      </Helmet>
      <Header />
      
      <main>
        <App />
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);