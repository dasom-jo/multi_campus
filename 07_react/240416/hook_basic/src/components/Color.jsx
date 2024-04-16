import { useContext } from "react";
import { MyColorContext } from "../contexts/myColor";

const Color = () => {
    const { myColor } = useContext(MyColorContext);
    return (
        <div style={{
            width: "128px",
            height: "128px",
            backgroundColor: myColor,
            margin: '24px auto'
        }}></div>
    );
}
export default Color;