import { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust the path based on where your UserContext is located.

function UserDetails() {
    const userData = useContext(UserContext);
    

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
    </div>
    );
    
}

export default UserDetails;
