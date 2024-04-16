import { useContext } from "react";
import { GrandFatherContext } from "../contexts/GrandFatherContext";

const Child = () => {
    const 유산 = useContext(GrandFatherContext);    
    return (
        <div>
            {유산}
        </div>
    );
}

export default Child;