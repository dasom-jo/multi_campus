import './App.css';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  // [과제1] : 음악 제목을 변경할 수 있도록 기능을 추가해보세요
  // [과제2] : like라는 값을 통해서, 좋아요가 증가되도록 기능을 추가해보세요
  // [과제3] : 음악 변경 기능을 음악 추가 기능으로 변경해보세요
  // [과제4] : 좋아요가 개별적으로 적용되도록 수정해보세요
  const [title, setTitle] = useState(["Love wins all"]);
  const [like, setLike] = useState(0);
  return (
    <div className="App">
      {/* <Login /> */}
      <div>
        <h1>플레이리스트</h1>
      </div>
      <div className='music-box'>
        <div>
          <label htmlFor="title_input"></label>
          <input id='title_input' type='text' placeholder='음악 제목을 입력하세요' />
          <button onClick={()=>{
            const newTitle = document.querySelector('#title_input').value;
            // const copy = [...title]
            // copy.push(newTitle);
            // setTitle(copy);

            // if (!newTitle) {
            //   return;
            // }
            // setTitle([...title, newTitle])

            newTitle && setTitle([...title, newTitle]);

            document.querySelector('#title_input').value = "";
          }}>추가</button>
        </div>
        {
          title.map((t, idx)=>{
            return (
              // Warning: Each child in a list should have a unique "key" prop.
              // key prop을 추가해야 한다.
              // key prop : React 내부에서 사용하는 값으로 각 요소를 식별하는 역할을 한다.
              // 보통 DB에서 사용하는 고유값을 사용
              // index를 사용하게 되면 성능 이슈가 있을 수 있다.
              <div key={idx}>
                <h2>{t}</h2>
                <span style={{ "cursor": "pointer" }} onClick={() => { setLike(like => like + 1) }}> 👍 </span><span> 좋아요 : {like}</span>
              </div> 
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
