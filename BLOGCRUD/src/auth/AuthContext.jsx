import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (token) => {
    const decodedToken = jwt_decode(token); // Decodifica el JWT para extraer información del usuario.
    setUser({
      username: decodedToken.username,
      role: decodedToken.role,
      token,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
