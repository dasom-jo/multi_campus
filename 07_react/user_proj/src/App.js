import './App.css';
import React, { useState, useRef, useMemo, useCallback, useReducer } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import { reducer, initialState  } from './reducer/UserReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputs = state.inputs;
  const { username, email } = inputs;
  const users = state.users;

  const nextId = useRef(5);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ 
      type:'CHANGE_INPUT',
      name,
      value
    })
  }, []);

  const onInsert = useCallback(() => {
    if (username === '' || email === '') {
      return;
    }
    dispatch({
      type: 'CREATE_USER',
      newUser: { id: nextId.current, username, email, active: false }
    });
    nextId.current++;
  }, [username, email]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id
    })
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, []);

  const countActiveUsers = users => {
    console.log('활성 사용자 수를 세는 중....');
    return users.filter(user=> user.active).length;
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

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
        onToggle={onToggle}
        onDelete={onDelete}
      />
      <div>활성 사용자 수 : {count}</div>
    </div>
  );
}

export default App;
