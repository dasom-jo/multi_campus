import './App.css';
import Layout from './components/Layout';

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <div>
          <h1>게시판 화면</h1>
          <p>
            여기에는 글들이 있겠죠?
          </p>
        </div>
      </Layout>
    </div>
  );
}

export default App;