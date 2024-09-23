
import './App.css';
import { component } from 'react';

/*react의 component 선언방식은 두가지로 나뉜다
1.클래스형 컴포넌트- 예전 방식, component 상속, render()사용
2.함수형 컴포넌트 - 요즘방식 ,훨씬간결 메모리도 덜 사용,배포시용량이적음*/

/*
컴포넌트: 리액트에서 컴포넌트는 UI를 구성하는 개별적은 블록이다
컴포넌트를 이용하면, 코드의 재사용성을 높이고 유지보수가 쉽다
데이터의 변화에 따라 UI를 만들어주고, 컴포넌트 라이플 사이클(생명주기)API 를 활용
해 컴포넌트를 나타나고,*/

//클래스형 컴포넌트
class App extends component {
  render() {
    const name = '리액트';
    return (
    <div className= 'App'>
      <h1>{naem}</h1>
    </div>
    )
  }
}

//함수형 컴포넌트
function App() {
  const name = '리액트';
  return (
    <div className= 'App'>
      <h1>{naem}</h1>
    </div>
  );
}

export default App;
