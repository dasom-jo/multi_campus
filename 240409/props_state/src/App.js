import './App.css';

import React, { Component } from 'react'
import {PropsComp, Button} from './components/propsCopms';
import Counter from './components/Counter'
// //클래스형 컴포넌트 (rcc 엔터) /
// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

//함수형 컴포넌트 sfc
// function APP() {
//   return (
//           <div>App</div>
//         )
// }

// export default APP;

//함수형 sfc엔터
const App = () => {

  return (
    <div className='App'>
      {/*props란 부모컴포넌트가 자식 컴포넌트에게 전달 */}
      <h1>props</h1>
      <PropsComp name= '조다솜' age='20' gender='여자' />
      <PropsComp name= '이대희' age='30' gender='남자' />
      <PropsComp gender='여자' />
      {/*크기를 다르게(small,medium,big)
      색상[skyblue, blue, 다른blue] 다르게,
      이벤트 다르게[다양하게]  */}
      <Button event={()=>{alert('클릭!')}}>클릭</Button>
      <Button size='big' color='pink' event={() => alert('안녕하세요!')}>인사</Button>

      <Counter />
    </div>
  );
}

export default App;