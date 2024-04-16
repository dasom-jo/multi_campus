import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ReduceCounter from './components/ReduceCounter';
import ColorBox from './components/ColorBox';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <ReduceCounter />
      {/* <Counter /> */}

      <ColorBox />
      <Color />
    </div>
  );
}

export default App;
