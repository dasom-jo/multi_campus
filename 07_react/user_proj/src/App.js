import './App.css';
import React, { useState, useRef, useMemo, useCallback, useReducer } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import { reducer, initialState  } from './reducer/UserReducer';
import { createContext } from 'react';
import useInputs from './hooks/useInputs';

export const UserContext = createContext(null);

function App() {
  const [inputs, onChange, reset] = useInputs({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const [state, dispatch] = useReducer(reducer, initialState);
  const users = state.users;

  const countActiveUsers = users => {
    console.log('활성 사용자 수를 세는 중....');
    return users.filter(user=> user.active).length;
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserContext.Provider value={ dispatch }>
      <div className="App">
        <CreateUser username={username} email={email} onChange={onChange} reset={reset} />
        <UserList users={users} />
        <div>활성 사용자 수 : {count}</div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
