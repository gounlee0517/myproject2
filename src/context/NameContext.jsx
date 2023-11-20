import { createContext, useState } from "react";

export const NameContext = createContext(null);

function NameContextProvider({children}) {
  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={{name, setName}}>
      {children}
    </NameContext.Provider>
  );
}

export default NameContextProvider;