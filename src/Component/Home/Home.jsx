import {  useContext } from "react";
import authContext from "../../Context/authContext";


const Home = () => {
    const {name} = useContext(authContext)
    return (
        <div>
            {name}
        </div>
    );
};

export default Home;