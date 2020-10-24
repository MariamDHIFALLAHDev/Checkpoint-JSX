import React from 'react';
import './style.css'
import './App.css';
import imageInSrc from './iminsrc.jpg'
function App() {
  return (
    <div className="App">
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        <h1 className="title red"> Mariam DHIFALLAH </h1>
        <h2 className="title red"> Learn JSX </h2>
        <br />
        <img src={imageInSrc} alt="iminsrc" /> <br />
        <img src="/images/iminpub.jpg" alt="iminpub"/>

      </div>
      <video width={320} height={240} controls>
        <source src="/video/What is JSX.mp4" type="video/mp4" />
      </video>

    </div>
  );
}

export default App;

