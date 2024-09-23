import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import Music from './components/Music';

function App() {
  // [과제1] : 음악 제목을 변경할 수 있도록 기능을 추가해보세요
  // [과제2] : like라는 값을 통해서, 좋아요가 증가되도록 기능을 추가해보세요
  // [과제3] : 음악 변경 기능을 음악 추가 기능으로 변경해보세요
  // [과제4] : 좋아요가 개별적으로 적용되도록 수정해보세요
  // [과제5] : 반복되는 요소를 컴포넌트로 분리하세요
  // [과제6] : 수정, 삭제 기능을 추가해주세요
  const [musicList, setMusicList] = useState([
    {
      id: new Date().getTime(),
      title: "Love wins all",
      like: 0
    }
  ]);

  const addMusic = () => {
    const newTitle = document.querySelector('#title_input').value;
    newTitle && setMusicList(prevMusicList => {
      return (
        [
          ...prevMusicList,
          {
            id: new Date().getTime(),
            title: newTitle,
            like: 0
          }
        ]
      )
    })
    document.querySelector('#title_input').value = "";
  }

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
          <button onClick={addMusic}>추가</button>
        </div>
        {
          musicList.map((music, idx)=>{
            console.log(music);
            return (
              <Music key={music.id} idx={idx} music={music} musicList={musicList} setMusicList={setMusicList} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
