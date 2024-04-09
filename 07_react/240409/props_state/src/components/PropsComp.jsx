export const PropsComp = (props) => {
    console.log(props);
    return ( 
        <>
            <h2>Hello!</h2>
            <p>내 친구 이름은요 {props.name}입니다.</p>
            <p>나이는 {props.age}이고,</p>
            <p>{props.gender}입니다.</p>
        </>
    );
}

PropsComp.defaultProps = {
    name: "미등록자",
    age: 100,
    gender: '비밀'
}

export const Button = (props) => {
    const buttonSize = {
        small: { w: "50px", h: "25px", font: "0.5em" },
        medium: { w: "75px", h: "38px", font: "1em" },
        big: { w: "100px", h: "50px", font: "1.5em" }
    }
    const buttonStyle ={
        width: buttonSize[props.size].w,
        height: buttonSize[props.size].h,
        backgroundColor: props.color,
        color: "white",
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

Button.defaultProps = {
    size: "medium",
    color: "black"
}