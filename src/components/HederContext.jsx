// ThemeContext.js
import React, { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [navBorderBottom, setNavBorderBottom] = useState({
    homeBorderBottom: true,
    destinationBorderBottom: false,
    crewBorderBottom: false,
    technologyBorderBottom: false
});

    const changeNavBorderBottom = (newNavBorderBottom) => {
      setNavBorderBottom(newNavBorderBottom);
  };

  return (
    <HeaderContext.Provider
      value={{ navBorderBottom, changeNavBorderBottom}}
>      {children}
    </HeaderContext.Provider>
  );
};

export const useNavBorderBottom = () => {
  return useContext(HeaderContext);
};
  
