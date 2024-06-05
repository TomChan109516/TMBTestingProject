import './App.css'
import { useLocation } from 'react-router-dom';
import RoutesList from './routes/RoutesList';
import Loader from './common/components/Loader';
import Header from './header/Header';
import  NavbarMenu from './navigation/NavMenu';
import React from 'react';
function App() {

  const location = useLocation();
  return (
    <div className="App">
      <div>
        {location.pathname === '/' ? (
          ''
        ) : (
          <>
            <Header />
            <NavbarMenu />
          </>
        )}
        <RoutesList />
        <Loader />
      </div>
    </div>)
}

export default App
