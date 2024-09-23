// 240418할것
//     -> yarn add styled-components polished react-icons
//     1. Routing [경로에 맞춰서 페이지가 이동하는 "것처럼"]
//     -> yarn add react-router-dom
//     2. axios [비동기통신 CRUD]
//     -> yarn add axios
//     3. 쇼핑몰 (dummy-JSON)
//     4. user 관리자 페이지 [json-server]

import './App.css';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import { LoginContext } from './contexts/LoginContext';
import useProvideAuth from './hooks/useProvideAuth';

//주소에다라 다른 화면 보여주는것 ->라우팅
//react에는 라우팅 기능이 공식적으로 없다
//가장많이 사용되는 라이브러리 react-router-dom사용
//yarn add react-router-dom

//BrowserRouter로 감싼다(index.js)
//Routes 안에 Route로 경로 와 컴포넌트 요소를 일러준다

//a 태그를통해 페이지를 이동하면 페이지를 아예 새롭게 불러온다 (상태가 초기화됨)
//Link 컴포넌트를 이용해 브라우저의 주소를 바꿔주어야한다

//react-router-dom 주요 컴포넌트.기능
//1.BrowserRouter: 라우팅을 적용할 컴포넌트 지정
//2.Routes: 여러 Route를 감싸는 컴포넌트
//3.Route : 경로와  컴포넌트를 연결해주는 컴포넌트
//4.Link : 페이지 이동을 도와주는 컴포넌트
// 5.useNavigate : 페리지 이동을 위한 Hook
function App() {
  // const userId = localStorage.
  // const [isLogin, setIsLogin] = useState({ isLogin : userId !== null });
  // const value = {isLogin, setIsLogin}
  const auth = useProvideAuth(); //전역으로
  return (
    <LoginContext.Provider value={auth}>
    <div>
      <Header />
      <Main />
    </div>
    </LoginContext.Provider>
  );
}

export default App;
