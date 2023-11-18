import { useSelector } from "react-redux";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";

function App() {

  return (
    <div>
      <Router />
      <GlobalStyle />
    </div>
  );
}

export default App;
