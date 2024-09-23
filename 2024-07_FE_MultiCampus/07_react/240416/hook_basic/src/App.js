import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ReduceCounter from './components/ReduceCounter';
import ColorBox from './components/ColorBox';
import Color from './components/Color';
import { useState } from 'react';
import { MyColorContext } from './contexts/MyColorContext';
import GrandFather from './components/GrandFather';

function App() {
  // const [myColor, setMyColor] = useState('red');
  
  return (
    // <MyColorContext.Provider value={{ myColor, setMyColor }}>
      <div className="App">
        {/* <ReduceCounter /> */}
        {/* <Counter /> */}

        {/* <ColorBox /> */}
        {/* <Color /> */}

        <GrandFather />
      </div>
    // </MyColorContext.Provider>
  );
}

export default App;
