import './App.css';

import React, { Component } from 'react'
import { PropsComp, Button } from './components/PropsComp';
// 클래스형 컴포넌트 (rcc)
// class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }
// export default App;

// 함수형 컴포넌트(ffc)
// function App() {
//   return ( 
//     <div>App</div>
//   );
// }
// export default App;

// 함수형 컴포넌트 (sfc)
const App = () => {
  return (
    <div className='App'>
      {/* props란? 부모컴포넌트가 자식컴포넌트에세 전달하는 값 */}
      <h1>props</h1>
      <PropsComp name='이은수' age='21' gender='여자' />
      <PropsComp gender='남자' />
      <PropsComp />
      {/* 크기를 다르게[small. medium, big],
      색상[skyblue, blue, 다른blue] 다르게,
      이벤트 다르게[다양하게] */}
      <Button event={() => alert('클릭!')} />
      <Button size='big' color='pink' event={() => alert('안녕하세요!')}>인사</Button>
    </div>
  );
}

export default App;
