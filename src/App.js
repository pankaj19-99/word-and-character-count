import React from 'react';
import './App.css';
import Header from  './components/Header/Header';
import Footer from './components/Footer/Footer';
import TextCounter from './components/TextCounter/TextCounter';

function App() {
  return (
    <div className="App">
      <Header />
      <TextCounter />
      <Footer />
    </div>
  );
}

export default App;
