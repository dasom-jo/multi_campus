import './App.css';
import React, { useState, useRef } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([
    { id: 1, username: '휘인', email: 'whee@gmail.com', active: true },
    { id: 2, username: '화사', email: 'hwa@gmail.com', active: true },
    { id: 3, username: '문별', email: 'star@gmail.com', active: true },
    { id: 4, username: '솔라', email: 'sol@gmail.com', active: true }
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const nextId = useRef(5);
  const { username, email } = inputs;

  const onChange = (e) => {
    // setinputs({...inputs, [e.target.name]: e.target.value});
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onInsert = () => {
    const newUser = { id: nextId.current, username, email, active: false };
    setUsers(users => users.concat(newUser));
    setInputs({ username: '', email: '' });
    nextId.current++;
  }

  return (
    <div className="App">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onInsert={onInsert}
      />
      <UserList
        users={users}
      />
    </div>
  );
}

export default App;
