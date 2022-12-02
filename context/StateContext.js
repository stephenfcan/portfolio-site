import React, { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext();

export const StateContext = ({ children }) => {
  // Hamburger Menu
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Context.Provider
      value={{
        showMenu,
        setShowMenu,
      }}
    >
      { children }
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);