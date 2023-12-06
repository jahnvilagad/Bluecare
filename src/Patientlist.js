import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';



// axios.get('https://reqres.in/api/users?page=2')
// //   axios.get('http://192.168.0.115:8000/admin/api/user/profile/')
//     .then(result => {
//         // console.log(result);
//         // console.log(result.headers.expires);
//         result.data.map(user => {
//             if (user.uname === formData.uname) {
//                 if (user.password === formData.password) {
//                     navigate('/dashboard')
//                 } else {
//                     isvalid = false;
//                     validationError.password = "wrong Password";
//                 }
//             }
//         })

//         })

export default function Patientlist(props) {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(response => {
                console.log(response.data);
                setList(response.data)
            })
            .catch(error => { console.error(error) })
    }, []);
    return (
        <Box>
            {list.map((row) => (
                <Box>{row}</Box>
            ))
            }
        </Box>
    )
}