import './App.css';
import React, { useState, useRef, useMemo, useCallback, useReducer } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import { reducer, initialState  } from './reducer/UserReducer';
import { createContext } from 'react';

export const UserContext = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputs = state.inputs;
  const { username, email } = inputs;
  const users = state.users;

  const countActiveUsers = users => {
    console.log('활성 사용자 수를 세는 중....');
    return users.filter(user=> user.active).length;
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserContext.Provider value={ dispatch }>
      <div className="App">
        <CreateUser username={username} email={email} />
        <UserList users={users} />
        <div>활성 사용자 수 : {count}</div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
