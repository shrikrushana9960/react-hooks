import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const storeUserInformation = localStorage.getItem('IsLogIn');
useEffect(()=>{
if (storeUserInformation === "1") setIsLoggedIn(true);
else setIsLoggedIn(false);
},[storeUserInformation]);

    
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
   localStorage.setItem('IsLogIn','1');

    

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
     localStorage.setItem("IsLogIn", "0");

    
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
