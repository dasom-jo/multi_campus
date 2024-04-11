import My from "./My";

const Parents = (props) => {
    const style = {
        width: 400,
        height: 500,
        border: "1px solid black",
        backgroundColor: 'pink'
    }
    return ( 
        <div style={style}>
            <h1>부모입니다.</h1>
            <My data={props.data} />
        </div>
    );
}

export default Parents;