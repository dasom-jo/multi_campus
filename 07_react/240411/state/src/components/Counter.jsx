const Counter = () => {
    // State : 
    let number = 1;
    return ( 
        <div>
            <h1>{number}</h1>
            <button onClick={()=>{number++}}>+</button>
        </div>
    );
}

export default Counter;