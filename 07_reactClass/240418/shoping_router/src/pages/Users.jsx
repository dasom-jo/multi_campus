import { useCallback, useEffect, useState } from "react";
import UserList from "../components/users/UserList";
import axios from 'axios';
const Users = () => {

    const [userList, setUserList] = useState();

    const getUserList = useCallback(() => {
        const url = process.env.REACT_APP_SERVER_ADDR + 'users'
        axios.get(url)
        .then(res => res.data)
        .then(data => setUserList(data))
        .catch(err => console.error(err));
    });

    useEffect(() => {
        getUserList();
    }, [])

    const onDeleteUser = (id) => { //id받아옴
        //axios를 사용하여 서버로 DELETE 요청을 보냅니다. 해당 URL은 서버에서 삭제할 사용자의 엔드포인트를 가리킵니다
        const url = `${process.env.REACT_APP_SERVER_ADDR}users/${id}&_sort=-id`;
        axios.delete(url)
        .then(res => {
            if (res.status === 200) {
                //현재사용자 목록에서 삭제된 사용자를 제외하고 업뎃 요청
                setUserList(userList.filter(user => user.id !== res.data.id));
            }
        })
        .catch(err => console.error(err));
    }

    const onUpdateUser = async (form) => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}users/${form.id}`;
        try {
            const res = await axios.get(url)
            const password = res.data.password;
            if(password === form.password){
                const res = await axios.patch(url, {
                    email: form.email,
                    nickname: form.nickname
                })
                if (res.status === 200) {
                    setUserList(userList.map(user => {
                        if(user.id === res.data.id) {
                            return {
                                ...user,
                                email: res.data.email,
                                nickname: res.data.nickname
                            }
                        } else {
                            return user;
                        }
                    }))
                }
            } else {
                alert('비밀번호가 일치하지않습니다');
                return
            }
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <>
            <h1>사용자</h1>
            <UserList userList={userList} onDeleteUser={onDeleteUser} onUpdateUser ={onUpdateUser} />
        </>
    );
}

export default Users;

