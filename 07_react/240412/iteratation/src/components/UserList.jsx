const User = ({user}) => {
    return (
        <div>
            {user.username} / {user.email}
        </div>
    );
}

const UserList = () => {
    const users = [
        { id: 1, username: "최민식", email: "choi@gmail.com"},
        { id: 2, username: "유해진", email: "yoo@gmail.com"},
        { id: 3, username: "김고은", email: "kim@gmail.com"},
        { id: 4, username: "이도현", email: "lee@gmail.com"}
    ]
    return (
        <div>
            <h1>사용자 리스트</h1>

            {/* 
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
            <User user={users[3]} />
            */}

            {/* 자바스크립트 배열 map 함수를 이용 (key props 필요) */}
            {/*
            {
                users.map((user, idx) => (
                    <User user={user} key={idx} />
                ))
            }
            */}

            {
                users.map((user) => (
                <User user={user} key={user.id} />
                ))
            }
        </div>
    );
}
export default UserList;