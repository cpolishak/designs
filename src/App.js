import React from 'react';
import logo from './media/logo.png';
import bicycleWhite from './media/bicycleW.png';
import zigzag from './media/zigzag.png';
import fc02 from './media/fc02w.png';
import sofc2011 from './media/2011crest.png';
import desdev from './media/DesDev.png';
import veins from './media/veins.png';
import beer from './media/3rdBeer.jpg';
import logos from './media/logos.jpg';
import './App.css';

function App() {
  return (
    <div className="App Background">
      <header className="">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <nav></nav>
      </header>

      <body className="Background">
        <div className="container-fluid text-center">
          
          <div className="py-5">
            <h1 className="cpfont1 text-light">Chris <img src={logo} className="logo" alt="bike"></img> Polishak</h1>
            <p className="cpfont2"><small>Click images to see in a new window</small></p>
          </div>

          <div className="row pb-5 px-2">
            <div className="col-6">
              <a href={bicycleWhite} target="_blank" rel="noopener noreferrer">
                <img src={bicycleWhite} className="pic pb-5" alt="bike"></img>
              </a>
            </div>
            <div className="col-6">
              <a href={zigzag} target="_blank" rel="noopener noreferrer">
                <img src={zigzag} className="pic pb-5" alt="bike"></img>
              </a>
            </div>
            <div className="col-6">
              <a href={fc02} target="_blank" rel="noopener noreferrer">
                <img src={fc02} className="pic pb-5" alt="bike"></img>
              </a>
            </div>
            <div className="col-6">
              <a href={sofc2011} target="_blank" rel="noopener noreferrer">
                <img src={sofc2011} className="pic pb-5" alt="bike"></img>
              </a>
            </div>
            <div className="col-6">
              <a href={desdev} target="_blank" rel="noopener noreferrer">
                <img src={desdev} className="pic pb-5" alt="bike"></img>
              </a>
            </div>
            <div className="col-6">
              <a href={veins} target="_blank" rel="noopener noreferrer">
                <img src={veins} className="pic pb-5" alt="bike"></img>
              </a>
            </div>
            <div className="col-6">
              <a href={beer} target="_blank" rel="noopener noreferrer">
                <img src={beer} className="pic pb-5" alt="bike"></img>
              </a>
            </div>
            <div className="col-6">
              <a href={logos} target="_blank" rel="noopener noreferrer">
                <img src={logos} className="pic pb-5" alt="bike"></img>
              </a>
            </div>
          </div>


        </div>
      </body>

    </div>
  );
}

export default App;
