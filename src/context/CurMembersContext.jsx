import { createContext, useState } from "react";

export const CurMembersContext = createContext(null);

function CurMembersContextProvider({children}) {
  const [curMembers, setCurMembers] = useState("YUJIN");

  return (
    <CurMembersContext.Provider value={{curMembers, setCurMembers}}>
      {children}
    </CurMembersContext.Provider>
  );
}

export default CurMembersContextProvider;