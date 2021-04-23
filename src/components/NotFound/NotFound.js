import React from 'react';
import { useLocation } from 'react-router';



const NotFound = () => {
    let location = useLocation();
    return (
        <div>
            <h2>404 error no directory found</h2>
            <h3>No such directory : {location.pathname}</h3>
        </div>
    );
};

export default NotFound;