import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    width : 100%;
    height : 100%;
    margin : 0;
    padding: 0;
    text-align: center;
    background: radial-gradient(#fd8acb, #d2d1d3) ;
    font-family: 'Arial Black';
    color: white;
  }

  h1 {
    font-size: 60px;
    color: #fc3e54;
    font-family: 'Arial Black';
    margin: 5vh;
  }

  h4 {
    color: #fd8acb;
  }

  span {
    font-size: 40px;
    color: #d2d1d3;
  }

  button {
    height: 30px;
    width: 110px;
    background-color: #fc3e54;
    color: white;
    border-style: none;
    column-gap: 2em;
    font-weight: bold;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55);
    cursor: pointer;
    transition: all 0.5s;
  }

  button:hover {
    background-color: white;
    color: #fc3e54;
  }

  input {
    width: 400px;
    text-align: center;
    color: white;
  }

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-right: 20px;
    margin-top: 15px;
  }
`;

export default GlobalStyle;
