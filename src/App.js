import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [bgColor, setBgColor] = useState(randomColor());

  const generateRandomColor = () => {
    const newColor = randomColor({ format: 'hex' });
    console.log('Generated Color:', newColor); // Verifica que el color generado es válido
    setBgColor(newColor);
  };

  return (
    <div
      className="App"
      style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
          color: 'black',
          fontSize: '1.5rem',
        }}
      >
        <p>React Random Color Generator</p>
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          margin: '0 2rem',
          borderRadius: '10px',
          backgroundColor: bgColor,
        }}
      >
        <div style={{ fontSize: '1.2rem', color: 'black' }}>
          Generated Color: {bgColor}
        </div>
        <button
          onClick={generateRandomColor}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '1rem',
            color: 'black',
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, box-shadow 0.3s',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
          }}
        >
          Generate
        </button>
      </div>
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
          color: 'black',
          fontSize: '1rem',
          position: 'fixed',
          width: '100%',
          bottom: 0,
        }}
      >
        <p>Alex Arroyo © 2023</p>
      </footer>
    </div>
  );
}
