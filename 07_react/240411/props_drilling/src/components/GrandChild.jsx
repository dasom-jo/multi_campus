const GrandChild = (props) => {
    const style = {
        width: 100,
        height: 200,
        border: "1px solid black",
        backgroundColor: 'white'
    }
    return ( 
        <div style={style}>
            <h4>손주입니다. { props.data }</h4>
        </div>
    );
}

export default GrandChild;