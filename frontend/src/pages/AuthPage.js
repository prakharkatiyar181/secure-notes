import React, { useState } from 'react';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const AuthPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="screen-center">
      <div className="auth-card-wrapper card">
        <div className="card-body">
          <h1 className="title-center">Secure Notes</h1>
          
          <div className="tabs-container">
            <div className="tabs-flex">
              <button 
                className={`tab-btn ${tabIndex === 0 ? 'active' : ''}`} 
                onClick={() => setTabIndex(0)}
              >
                Login
              </button>
              <button 
                className={`tab-btn ${tabIndex === 1 ? 'active' : ''}`} 
                onClick={() => setTabIndex(1)}
              >
                Register
              </button>
            </div>
          </div>
          
          {tabIndex === 0 && <Login />}
          {tabIndex === 1 && <Register />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
