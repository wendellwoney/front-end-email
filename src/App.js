import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

import './assets/css/global.css';

function App() {
  return ( 
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
   );
}

export default App;