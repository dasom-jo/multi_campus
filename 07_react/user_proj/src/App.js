import './App.css';
import React, { useState, useRef, useMemo, useCallback, useReducer } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER' :
      return {
        ...state,
        inputs: {
          username: '',
          email: ''
        },
        users: state.users.concat(action.newUser)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      return state;
  }
};
const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    { id: 1, username: '휘인', email: 'whee@gmail.com', active: true },
    { id: 2, username: '화사', email: 'hwa@gmail.com', active: true },
    { id: 3, username: '문별', email: 'star@gmail.com', active: true },
    { id: 4, username: '솔라', email: 'sol@gmail.com', active: true }
  ]
}

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
