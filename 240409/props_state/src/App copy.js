import './App.css';

import React, {Component} from 'react'

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <div>
          <h1>게시판화면</h1>
          <p>
            여기에는 글들이있겠지?
          </p>
        </div>
      </Layout>
    </div>
  );
}

export default App;

// const Layout = (props) => {
//   return (
//     <>
//       <header className='App-header'>
//         메인로고, 메인네비게이션바, 다른 추가 버튼들...
//       </header>
//       <main>
//         {props.children}
//       </main>
//       <footer>
//         연락처, 저작권 정보
//       </footer>
//     </>
//   );
// }