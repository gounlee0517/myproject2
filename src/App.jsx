import { useSelector } from "react-redux";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";

function App() {
  const users = useSelector((state) => {
    return state.users;
  });

  console.log(users);

  return (
    <div>
      <Router />
      <GlobalStyle />
    </div>
  );
}

export default App;
