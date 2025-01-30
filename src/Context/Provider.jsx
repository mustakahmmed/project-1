
import PropTypes from 'prop-types';
import authContext from "./authContext";
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Provider = ({children}) => {
    const handaleRegistrationWithEmail = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)

    }

    const signinUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const authInfo = {
        handaleRegistrationWithEmail,
        signinUser
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
        
    );
};
Provider.propTypes ={
children:PropTypes.node
}
export default Provider;
