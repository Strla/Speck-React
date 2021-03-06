import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';

//pages
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from "./pages/Event/Event";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/event" component={Event} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
