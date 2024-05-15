import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  color: black;
  font-size: 1.5rem;
  font-family: 'Arial', sans-serif;
  vertical-align: middle;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  color: black;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: 0 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: black;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    box-shadow 0.3s;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }
`;

const Text = styled.p`
  margin-top: -20px;
  font-size: 1.2rem;
  color: black;
`;

export default function App() {
  const [bgColor, setBgColor] = useState('#f0f0f0');
  const [generatedColor, setGeneratedColor] = useState('');

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
    setGeneratedColor(randomColor);
  };

  return (
    <div className="App">
      <Header>
        <p>React Random Color Generator</p>
      </Header>
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
        <Text>Generated Color: {generatedColor}</Text>
        <Button onClick={generateRandomColor}>Generate</Button>
      </div>
      <Footer>
        <p>Alex Arroyo © 2023</p>
      </Footer>
    </div>
  );
}
