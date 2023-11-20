import { createContext, useState } from "react";

export const ContentContext = createContext(null);

function ContentContextProvider({children}) {
  const [content, setContent] = useState("");

  return (
    <ContentContext.Provider value={{content, setContent}}>
      {children}
    </ContentContext.Provider>
  );
}

export default ContentContextProvider;