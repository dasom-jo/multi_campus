import React from 'react';
import { UserContext } from '../App';
import { useContext } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';

const CreateUser = ({ username, email, onChange, reset }) => {
    const dispatch = useContext(UserContext);

    const nextId = useRef(5);

    const onInsert = useCallback(() => {
        if (username === '' || email === '') {
            return;
        }
        dispatch({
            type: 'CREATE_USER',
            newUser: { id: nextId.current, username, email, active: false }
        });
        reset();
        nextId.current++;
    }, [username, email]);

    return (
        <div>
            <div>
                <label>
                    이름
                    <input
                        name='username'
                        onChange={onChange}
                        value={username}
                    />
                </label>
            </div>
            <div>
                <label>
                    이메일
                    <input
                        name='email'
                        onChange={onChange}
                        value={email}
                    />
                </label>
            </div>
            <button onClick={onInsert}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);