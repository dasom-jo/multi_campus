import React, { useState } from 'react';

const EventPractice2 = () => {
    const [form, setForm] = useState({
        username: "",
        userpw : ""
    });
    const { username, userpw } = form;

    const handleChange = (e) => {
        // state가 참조 타입(배열, 객체, 함수)인 경우, 
        // 객체 사본을 만들고, 그 사본에 값을 업데이트한  후에, 그 사본으로 setState를 한다.
        
        // [알아두기]
        // React에서 객체나 배열 타입의 상태를 다룰 때는 불변성을 지키자
        // 불변성이라는 것은 원본을 직접 수정하지 않는 것!
        // form["username"] === form.username
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleBtnClick = () => {
        if (!username || !userpw) {
            alert('입력 좀 해주세요');
            return
        }
        console.log(username, userpw);
        setForm({
            username: "",
            userpw: ""
        })
    }

    const handleFocus = (e) => {
        if (e.key === "Enter") {
            e.target.nextSibling.nextSibling.focus();
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleBtnClick()
        }
    }
    return (
        <div>
            <h1>이벤트 연습2</h1>
            <input
                name="username"
                type="text"
                value={username}
                onChange={handleChange}
                onKeyDown={handleFocus}
            />
            <br />
            <input
                name="userpw"
                type="password"
                value={userpw}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleBtnClick}>확인</button>
        </div>
    );
}

export default EventPractice2;