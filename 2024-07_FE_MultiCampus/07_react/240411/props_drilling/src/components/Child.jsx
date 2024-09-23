import GrandChild from "./GrandChild";

const Child = (props) => {
    const style = {
        width: 200,
        height: 300,
        border: "1px solid black",
        backgroundColor: 'mistyrose'
    }
    return ( 
        <div style={style}>
            <h3>자식입니다.</h3>
            <GrandChild data={props.data} />
        </div>
    );
}

export default Child;