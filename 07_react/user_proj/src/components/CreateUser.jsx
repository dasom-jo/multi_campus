import React from 'react';

const CreateUser = ({ username, email, onChange, onInsert }) => {
    console.log('create user');
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