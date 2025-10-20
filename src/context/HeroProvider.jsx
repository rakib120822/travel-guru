import React, { createContext, useContext, useState } from "react";

const HeroContext = createContext();

export function HeroProvider({ children }) {
  const [heroData, setHeroData] = useState({});
  return (
    <div>
      <HeroContext value={{ heroData, setHeroData }}>
        {children}
      </HeroContext>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useHero=()=>{
  return useContext(HeroContext);
}


