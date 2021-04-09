import React from 'react';
import {useState} from 'react';

const Battery = () => {

const [token, setToken] = useState("")

        //  fetch('https://vrmapi.victronenergy.com/v2/auth/login',{
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/jason'
        //         },

        //         body:{
        //            username: 'msabbir.edu@gmail.com',
        //            password: 'S92702689r'
        //         }.then(response => response.jason())
        //         .then(jason=>console.log(jason))
        //         .catch(error=>console.log(error))
                           
        //     });



    return (
        <div>
            <h1>hello from battery</h1>
        </div>
    );
};

export default Battery;