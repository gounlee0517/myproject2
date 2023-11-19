import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Home/Header";
import Router from "./shared/Router";

function App() {

  return (
    <>
      <Header />
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
