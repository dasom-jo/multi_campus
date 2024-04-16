import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../App';

const User = ({ user }) => {
    const { onToggle, onDelete } = useContext(UserContext)
    const style = {
        cursor: 'pointer',
        fontWeight: 800,
        color : user.active ? 'black' : 'grey'
    }
    return (
        <div>
            <span style={style} onClick={() => onToggle(user.id)}>{user.username}</span>
            <span>({user.email})</span>
            <button onClick={()=>onDelete(user.id)}>삭제</button>
        </div>
    );
}

export default React.memo(User);