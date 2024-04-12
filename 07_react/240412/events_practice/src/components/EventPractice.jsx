import React, { useState } from 'react';

const EventPractice = () => {
    const [message, setMessage] = useState("");
    return (
        <div>
            <h1>이벤트 연습1</h1>
            {/* input 요소를 이용해 onChange 이벤트 연습 */}
            <input
                type='text'
                name='message'
                placeholder='아무거나 입력해보세요'
                value={message} // value 값을 message값으로 설정
                onChange={e=>setMessage(e.target.value)} // onChange 이벤트가 발생할 때마다 message값을 업데이트
            />
            <button
                // onClick 이벤트가 발생하면,  message 값을 alert으로 출력
                onClick={()=> {
                    console.log(message);
                    setMessage("");
                }}
            >확인</button>
        </div>
    );
}
export default EventPractice;