import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { ProfileInfo } from "../components/Profile";

const MyProfile = () => {
    const [userProfile, setUserProfile] = useState();
    const { loginUser }= useAuth();
    useEffect(()=>{
        getInfo();
    }, []);

    const getInfo = async () => {
        try {
            const userId = loginUser.id;
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`)
            setUserProfile(res.data.payload);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
        <h1>내꺼다</h1>
            {userProfile &&
                <ProfileInfo user={userProfile} />
            }
        </>
    );
}

export default MyProfile;