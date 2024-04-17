import MyComp from './components/MyComp';
import './App.css';
import * as comp from'./components/Comp';
// import { Header, Article,Navi } from'./components/Comp'

function App() {
  return (
    <div>
      <MyComp/>
      <comp.Header />
      <comp.Article />
      <comp.Navi />
    </div>
  );
}

export default App;
