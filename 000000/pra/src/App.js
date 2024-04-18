import { useState } from 'react';
import './App.css';
import Music from './components/Music';
import styled, { css } from 'styled-components';
import'./components/scss/App.scss'
import'./components/scss/Music.scss'
import { MdAddToPhotos } from "react-icons/md";


  function App() {

    const [musicList, setMusicList] = useState([
      {
        id: new Date().getTime(),
        title: "Love wins all",
        like:0
      }
    ]);

    const addMusic = () =>{
      const newTitle = document.querySelector('#title_input').value;
      newTitle && setMusicList (prevMusicList => {
        return (
          [
            ...prevMusicList,
            {
              id: new Date().getTime(),
              title: newTitle,
              like:0
            }
        ]
      );
    })
  document.querySelector('#title_input').value = '';
  };

  return (
    <div className="App">
      {/* <Login /> */}
      <div>
        <h1 id='header'>&lt; playlist /&gt;</h1>
      </div>
      <div className='music-box'>
        <div>
          <label htmlFor="title_input"></label>
          <input id='title_input' type='text' placeholder='음악 제목을 입력하세요' />
          <button size= 'large' className='btn' onClick={addMusic}>{<MdAddToPhotos />}</button>
        </div>
        {//배열의 각요소를 순회하면서 렌더링
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