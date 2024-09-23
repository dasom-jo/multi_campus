import React, { useState } from 'react';

const InfoState = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);

    console.log('렌더링~🎨');
    return (
        <div>
            <div>
                <label>
                    이름 : 
                    <input type='text' value={name} onChange={onChangeName} />
                </label>
                <label>
                    이메일 :
                    <input type='text' value={email} onChange={onChangeEmail} />
                </label>
            </div>
            <div>
                <p>{`이름 : ${name} / 이메일 : ${email}`}</p>
            </div>
        </div>
    );
}

export default InfoState;