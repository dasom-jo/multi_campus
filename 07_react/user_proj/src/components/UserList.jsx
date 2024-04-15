const UserList = ({ users }) => {
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <span>{user.username}</span>
                    <span>{user.email}</span>
                    <button>삭제</button>
                </div>
            ))}
        </div>
    );
}

export default UserList;