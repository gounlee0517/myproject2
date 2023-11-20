import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Home/Header";
import Router from "./shared/Router";
import { useEffect } from 'react';
import { Howl } from "howler";


function App() {
  useEffect(() => {
    const sound = new Howl({
      src: 'IVE-Baddie.mp3',
      volume: 0.1,
      autoplay: true,
      onloaderror: (error) => {
        console.error('Error loading sound:', error);
      },
    });
    return () => {
      sound.stop();
    };
  }, []); 

  return (
    <>
      <Header />
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
