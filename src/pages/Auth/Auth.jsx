

import React, { useState } from 'react'
import "./Auth.css"
import Logo from "../../img/logo.png"
import { useDispatch } from 'react-redux'
import {  useSelector } from 'react-redux'
import { login,signUp } from '../../Actions/AuthAction.jsx'


function Auth() {
    const [isSignUp, setIsSignUp] = useState(true)
    const dispatch=useDispatch()
    const loading=useSelector((state)=>state.authReducer.loading)
   
    const [data, setData] = useState({ firstname: "", lastname: "", password: "", confirmpass: "", username: "" })

    const [confirmPass, setConfirmPass] = useState(true)
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
 
        e.preventDefault();
        if (isSignUp) {
            data.password === data.confirmpass ? dispatch(signUp(data)): setConfirmPass(false);
            //  if (data.password == data.confirmpass) {
            //     dispatch(signUp(data))
            // }else{
            //      setConfirmPass(false)

            // }
        }
        else{
            dispatch(login(data))
        }
    }
    const resetform=()=>{
        setConfirmPass(true)
        setData({ firstname: "", lastname: "", password: "", confirmpass: "", username: ""})
    }
    return (

        <div className='Auth'>
            {/* Left side */}
            <div className='a-left'>
                <img src={Logo} />
                <div className='Webname'>
                    <h1>Let's Chat</h1>
                    <h5>Explore the ideas throughout the world</h5>
                </div>
            </div>

            {/* right side */}
            <div className='a-right'>
                <form className='infoForm authForm' onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "sign up" : "Login In"}</h3>

                    {isSignUp && <div>
                        <input 
                        type={"text"} 
                        value={data.firstname} 
                        placeholder="First Name" 
                        className='infoInput' 
                        name='firstname' 
                        onChange={handleChange} />
                        <input 
                        type={"text"} 
                        value={data.lastname} 
                        placeholder="Last Name" 
                        className='infoInput' 
                        name='lastname' 
                        onChange={handleChange} />
                    </div>
                    }
                    <div>
                        <input 
                        type="text"  
                        value={data.username} 
                        className='infoInput' 
                        name='username' 
                        placeholder='Usernames' 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <input 
                        type="password"  
                        value={data.password} 
                        className='infoInput' 
                        name='password' 
                        placeholder='Password' 
                        onChange={handleChange} />

                        {isSignUp &&
                            <input 
                            type="password"  
                            value={data.confirmpass} 
                            className='infoInput' 
                            name='confirmpass' 
                            placeholder='Conform Password' 
                            onChange={handleChange} />
                        }
                    </div>
                    <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "15px" }}>
                        *Conform Password is not same
                    </span>
                    <div>
                        <span style={{ fontSize: "14px", cursor: "pointer", color: "Blue" }} onClick={() => {setIsSignUp((prev)=>!prev); resetform()}}>
                            {isSignUp ?
                                "Already have an account. Login!" : "Dont't have an account? Sign Up"

                            }
                        </span>
                    </div>
                    <button 
                    type='submit' className='button infoButton' dispatch={loading}>
                        { loading? "Loading...": isSignUp ?
                            "Signup" : "Log In"
                        }

                    </button>
                </form>
            </div>
        </div>

    )
}

// function SiginUp() {
//     return (
//         <div className='a-right'>
//             <form className='infoForm authForm'>
//                 <h3>Sign Up</h3>
//                 <div>
//                     <input type={"text"} placeholder="First Name" className='infoInput' name='firstname' />
//                     <input type={"text"} placeholder="Last Name" className='infoInput' name='lasttname' />

//                 </div>
//                 <div>
//                     <input type="text" className='infoInput' name='username' placeholder='Usernames' />
//                 </div>
//                 <div>
//                     <input type="text" className='infoInput' name='password' placeholder='Password' />


//                     <input type="text" className='infoInput' name='confpass' placeholder='Conform Password' />
//                 </div>
//                 <div>
//                     <span style={{ fontSize: "14px" }}>Already have an account. Login!</span>
//                 </div>
//                 <button type='submit' className='button infoButton'>Signup</button>
//             </form>
//         </div>
//     )
// }

// function LogIn() {
//     return (
//         <div className='a-right'>
//             <form className='infoForm authForm'>
//                 <h3>Login In</h3>
//                 <div>
//                     <input type={"text"} placeholder="Username" className='infoInput' name='username' />
//                 </div>

//                 <div>
//                     <input type="text" className='infoInput' name='password' placeholder='Password' />
//                 </div>
//                 <div>
//                     <span style={{ fontSize: "14px" }}>Dont't have an account Sign up</span>
//                     <button type='submit' className='button infoButton'>Login</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

export default Auth