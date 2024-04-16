import Button from "./Button";

const Page = ({ isLogin }) => {
    const mainMsg = isLogin == true ? '또 오셨네요?' : '처음 뵙겠습니다.'
    return (
        <div>
            <h1>{mainMsg}</h1>
            <Button>로그인하기</Button>
            <Button>회원가입</Button>
        </div>
    );
}
export default Page;