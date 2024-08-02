import React, { useEffect, createContext, useState } from 'react';
import { localStorageKey, makeRequest } from 'src/utils/constants';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [authenticating, setAuthenticating] = useState(false)
  const [user, setUser] = useState(null);

  const getMe = async () => {
    setAuthenticating(true)
    try {
      // Add your authentication logic here
      const res = await makeRequest('/users/me', 'GET');

      console.log('res', res)
      setUser(res.data.user);
    } catch (error) {
      console.error(error)
    } finally {
      setAuthenticating(false)
    }
  }

  const loginUser = (us,tk) => {
    setUser(us);
    localStorage.setItem(localStorageKey, tk);
  }

  useEffect(() => {
    getMe()
  }, [])
  // Add your authentication logic here


  const logout = () => {
    setUser(null);
    localStorage.removeItem(localStorageKey);
  }

  return (
    <AuthContext.Provider value={{ user, authenticating,loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);