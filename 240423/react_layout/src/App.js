import {Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import { LoginContext } from './contexts/LoginContext';
import { useProvideAuth } from './hooks/useProvideAuth';

function App() {
  const auth = useProvideAuth();
  return (
    <LoginContext.Provider value={auth}>
    <Layout>
      <Routes>
          <Route path="/" element={<h1><Home/></h1>}/>
          <Route path="/post" element={<h1>타임라인</h1>}/>
          <Route path="/search" element={<h1>검색</h1>}/>
          <Route path="/profile" element={<h1>사용자프로필</h1>}/>
          <Route path='/signup' element={<h1>회원가입</h1>} />
          <Route path="/error" element={<h1>error</h1>}/>
          <Route path="*" element={<h1>NotFound</h1>}/>
        </Routes>
    </Layout>
    </LoginContext.Provider>

  );
}

export default App;
