import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import SubProfile from "../pages/SubProfile";


function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
        setData(response.data.data);
        setTimeout(() => {
        setIsLoading(true);
        }, 2500);
    });
    }, []);

    return (
        <div>
        <ul className="Wrapper">
        <Skeleton />
        {!isLoading &&
            new Array(10).fill(1).map((_, i) => <Skeleton key={i} />)}
        {isLoading &&
            data.map((item) => <SubProfile key={item.id} item={item} />)}
        </ul>
    </div>
    );
}

export default App;