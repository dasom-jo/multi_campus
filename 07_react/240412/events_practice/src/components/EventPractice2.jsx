import React, { useState } from 'react';

const EventPractice2 = () => {
    const [form, setForm] = useState({
        username: "",
        userpw: ""
    });
    const { username, userpw } = form;

    const handleChange = (e) => {
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