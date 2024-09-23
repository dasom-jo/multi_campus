import { Routes, Route } from 'react-router-dom';
import Layout from "./components/layouts/Layout";
import Home from './pages/Home';
import { LoginContext } from './contexts/LoginContext';
import { useProvideAuth } from './hooks/useProvideAuth';
import SignUp from './pages/SignUp';
import MyProfile from './pages/MyProfile'
import Profile from './pages/Profile';
import TimeLine from './pages/TimeLine';
import Search from './pages/Search';
import IdSearch from './pages/IdSearch';
import SubProfile from './pages/SubProfile';

function App() {
  const auth = useProvideAuth();
  return (
    <LoginContext.Provider value={auth}>
      <Layout>
        <Routes>
          <Route path='/' element={auth.loginUser?.id ? <MyProfile /> : <Home />} />
          <Route path='/post' element={<TimeLine />} />
          <Route path='/search' element={<Search />} />
          <Route path='/profile' element={<MyProfile />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/subprofile/:id' element={<SubProfile />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/error' element={<h1>에러</h1>} />
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path='/idsearch' element={<h1><IdSearch/></h1>} />
        </Routes>
      </Layout>
    </LoginContext.Provider>
  );
}

export default App;
