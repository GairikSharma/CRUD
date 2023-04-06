import React, { useState } from 'react'
import './form.css';
import axios from 'axios';
function SignUp() {
    const [val, setVal] = useState('')
    const handleInput = (e) => {
        setVal(e.target.value)
    }
    const [email , setEmail] = useState('')
    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }
    const [password , setPassword] = useState('')
    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }
    // const Button = () => {
    //     // console.log('Clicked');

    // }

    //post name function
    const postName = async(e) => {
        // e.preventDefault()
        try {
            await axios.post('http://localhost:4000/post_name', {
                name : val,
                email : email,
                password : password
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
                        <input type="text" name="name" placeholder='Enter your name..' onChange={handleInput}/>
                        <input type="email" name="email" placeholder='Enter your email..' onChange={handleInputEmail}/>
                        <input type="password" name="password" placeholder='Enter your password..' onChange={handleInputPassword}/><br />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default SignUp