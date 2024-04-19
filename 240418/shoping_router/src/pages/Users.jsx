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

    const onDeleteUser = (id) => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}users/${id}`;
        axios.delete(url)
        .then(res => {
            if (res.status === 200) {
                setUserList(userList.filter(user => user.id !== res.data.id));
            }
        })
        .catch(err => console.error(err));
    }
    return (
        <>
            <h1>사용자</h1>
            <UserList userList={userList} onDeleteUser={onDeleteUser} />
        </>
    );
}

export default Users;

