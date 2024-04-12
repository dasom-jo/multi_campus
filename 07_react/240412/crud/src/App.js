import { useState } from 'react';
import './App.css';
import Article from './components/layouts/Article';
import Header from './components/layouts/Header';

function App() {
  const [mode, setMode] = useState("WELCOME");

  let content = null;

  if (mode === "WELCOME") {
    content = <Article>환영합니다.</Article>;
  }
  return (
    <div className="App">
      <Header></Header>
      {content}
    </div>
  );
}

export default App;
