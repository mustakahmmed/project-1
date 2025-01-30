
import PropTypes from 'prop-types';
import authContext from "./authContext";


const Provider = ({children}) => {
    
    const authInfo = {name:"mustak",age:233}
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
