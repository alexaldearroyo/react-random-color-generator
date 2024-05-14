// import './App.css';
// import logo from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  color: black;
  font-size: 2rem;
  font-family: 'Arial', sans-serif;
`;

export default function App() {
  return (
    <div className="App">
      <Header>
        <p>React Random Color Generator</p>
      </Header>
    </div>
  );
}
