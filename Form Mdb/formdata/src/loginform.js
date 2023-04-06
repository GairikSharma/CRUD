import React, { useState } from 'react'
import './form.css';
import axios from 'axios';
function Login() {
    const [name, setName] = useState('')
    const handleInputName = (e) => {
        setName(e.target.value)
    }
    const [password, setPassword] = useState('')
    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }
    // const Button = () => {
    //     // console.log('Clicked');

    // }

    //post name function
    const postName = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/login', {
                name: name,
                password: password
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (


        <>
            <div className="main-card">
                <div className="child-card">
                    <form onSubmit={postName}>
                        <input type="text" name="name" placeholder='Enter your name..' onChange={handleInputName} />
                        <input type="password" name="password" placeholder='Enter your password..' onChange={handleInputPassword} /><br />
                        <button type='submit'>Log in</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login