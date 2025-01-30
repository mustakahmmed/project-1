
import { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../../Context/authContext";


const Registration = () => {
    const {handaleRegistrationWithEmail} = useContext(authContext);

    const handleRegistrationSubmit= (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        handaleRegistrationWithEmail(email,password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.error("Error",error.message);
            
        })
        e.target.reset()

        
    }
    return (
        <div>
            <form onSubmit={handleRegistrationSubmit} className="w-1/2 bg-gray-300 mx-auto text-center px-10 py-8 my-20 rounded-xl" action="">
            <h1 className="text-5xl font-bold my-5">Registration</h1>
                <input className=" w-full bg-white py-2 pl-2 rounded-xl my-5" type="email" name="email" id="" placeholder="Email" /><br></br>

                <input className=" w-full bg-white py-2 pl-2 rounded-xl mb-5" type="password" name="password" id="" placeholder="Password" /><br></br>

                <input className=" w-full py-2 bg-pink-400 text-2xl font-bold text-white rounded-2xl hover:bg-pink-500"  type="submit" value="Registration" />
                

                <div className=" flex justify-center mt-5">
                    <button className="px-4 py-2 bg-purple-400 text-2xl font-bold text-white mr-2 rounded-sm hover:bg-purple-500">Signup With google</button>

                    <button className="px-4 py-2 bg-purple-400 text-2xl font-bold text-white mr-2 rounded-sm hover:bg-purple-500">Signup Facebook</button>

                    <button className="px-4 py-2 bg-purple-400 text-2xl font-bold text-white mr-2 rounded-sm hover:bg-purple-500">Signup X</button>

                </div>
                <p className="mt-5">Alrady Have Acount? pleace <Link className="underlineder font-bold" to="/login">Login</Link></p>
                
            </form>
        </div>
    );
};

export default Registration;