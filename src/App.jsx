import React from 'react';
import coleLogo from '/src/assets/cole.png';
import tannerLogo from '/src/assets/tanner.png';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex justify-center gap-5">
          <img src={coleLogo} alt="cole logo" className="w-48 h-48 rounded-full transition-filter duration-300 hover:filter-drop-shadow-lg" />
          <img src={tannerLogo} alt="tanner logo" className="w-48 h-48 rounded-full transition-filter duration-300 hover:filter-drop-shadow-lg" />
        </div>
        <h1 className="text-9xl mt-8">
          Join The Cause!
        </h1>
        <p className="mt-4">
        </p>
      </div>
    </>
  );
}

export default App;