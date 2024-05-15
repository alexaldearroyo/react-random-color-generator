import randomColor from 'randomcolor';
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

export default function App() {
  const [bgColor, setBgColor] = useState(randomColor());

  const generateRandomColor = () => {
    const newColor = randomColor({ luminosity: 'random', format: 'hex' });
    setBgColor(newColor);
  };

  return (
    <div className="App">
      <Header>
        <p>React Random Color Generator</p>
      </Header>
      <Container bgColor={bgColor}>
        <div style={{ fontSize: '1.2rem', color: 'black' }}>
          Generated Color: {bgColor}
        </div>
        <Button onClick={generateRandomColor}>Generate</Button>
      </Container>
      <Footer>
        <p>Alex Arroyo © 2023</p>
      </Footer>
    </div>
  );
}
``;
