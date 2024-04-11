import Child from "./Child";

const My = (props) => {
    const style = {
        width: 300,
        height: 400,
        border: "1px solid black",
        backgroundColor: 'lightpink'
    }
    return ( 
        <div style={style}>
            <h2>그게 바로 나에요~</h2>
            <Child data={props.data} />
        </div>
    );
}

export default My;