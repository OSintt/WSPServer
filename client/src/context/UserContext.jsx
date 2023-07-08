import { createContext, useState } from "react";
const initialState = {
  key: null,
  time: { start: null, finish: null, interval: null },
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  const login = ({ key, time }) => {
    setUser({ key, time });
  };
  const logout = () => {
    setUser(initialState);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
