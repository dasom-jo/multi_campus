import './App.css';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  // [과제] : 음악 제목을 변경할 수 있도록 기능을 추가해보세요
  const [title, setTitle] = useState("Love wins all");

  return (
    <div className="App">
      {/* <Login /> */}
      <div>
        <h1>플레이리스트</h1>
      </div>
      <div className='music-box'>
        <div>
          <label htmlFor=""></label>
          <input />
          <button>변경</button>
        </div>
        <div>
          <h2>{title}</h2>
          <span> 👍 </span><span> 좋아요 : 0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
