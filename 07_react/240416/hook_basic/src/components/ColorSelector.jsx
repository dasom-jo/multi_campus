const ColorSelector = () => {
    const colors = [
        'red', 'orange', 'yellow', 'green',
        'blue', 'navy', 'purple'
    ];

    return ( 
        <div>
            <h1>색상을 선택하세요</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {colors.map(c => (
                    <div
                        key={c}
                        style={{
                            width: "36px",
                            height: "36px",
                            cursor: "pointer",
                            backgroundColor: c
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ColorSelector;