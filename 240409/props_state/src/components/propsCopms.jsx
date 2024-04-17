import propTypes from 'prop-types';


export const PropsComp = (props) => {
// export const PropsComp = ({name, age, gender}) => {
    console.log(props);
    return (
        <>
            <h1>hello</h1>
            <p>내 이름은 {props.name}입니다</p>
            <p>내 나이는 {props.age}살 이며,</p>
            <p>{props.gender}입니다</p>
            {/*<p>{gender}입니다</p>*/}
        </>
    );
}
PropsComp. propTypes ={
    name: propTypes.string, //글자만
    age: propTypes.number,
    //gender: propTypes.string.isRequired 필수값됨 없으면ㅁ안됨
}

PropsComp.defaultProps = {
    name: '미등록자',
    age: 100,
    gender:'비밀'
}

export const Button = (props) => {
    const buttonSize = {
        small:{w:'50px',h:'25px',fontSize:'0.5em'},
        medium:{w:'75px',h:'38px',fontSize:'1em'},
        big:{w:'100px',h:'50px',fontSize:'1.5em'}
    }
    const buttonStyle ={
        width:buttonSize[props.size].w,
        height:buttonSize[props.size].h,
        backgroundColor: props.color,
        color: "hotpink",
        fontSize: buttonSize[props.size].font,
        fontWeight: "bold",
        borderRadius: "10px",
        border: "none",
        outline: "none",
        cursor: "pointer",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)"

        }
        return (
            <button style={buttonStyle} onClick={props.event}>클릭</button>
    );
}

// export default PropsComp;
Button.defaultProps = {
    size: "medium",
    color: "black"
}