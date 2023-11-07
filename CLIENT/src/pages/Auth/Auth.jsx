import React, {useState} from "react";
import './Auth.css'
import Logo from '../../img/logo.png'
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthActiom";
const Auth = () => {
    const initialState = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: ""
    };
    const loading = useSelector((state) => state.authREducer.loading);
    const dispatch = useDispatch();
    const [isSignUp, setIsSignUp] = useState(true);
    const [data, setData] = useState(initialState);
    const [confirmPass, setConfirmPass] = useState(true);
console.log(loading);
    // handle Change in input
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
       
    };
      // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
        data.password === data.confirmpass
          ? dispatch(signUp(data))
          : setConfirmPass(false);
      } else {
        dispatch(logIn(data));
      }
}
 // Reset Form
 const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };
    return (
        <div className="Auth">
            {/**Left side */}
            <div className="a-left">
                <img src={Logo} alt=''/>
                <div className="Webname">
                    <h1>ARIKIL</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>

            </div>
            {/**Right side */}
            <div className="a-right">
                <form className='infoForm authForm'  onSubmit={handleSubmit}>
                    <h3>{
                            isSignUp
                                ? "Register"
                                : "Log In"
                        }</h3>
                    {
                        isSignUp && (
                            <div>
                                <input
                                    required="required"
                                    type="text"
                                    placeholder="First Name"
                                    className="infoInput"
                                    name="firstname"
                                    value={data.firstname}
                                    onChange={handleChange}/>
                                <input
                                    required="required"
                                    type="text"
                                    placeholder="Last Name"
                                    className="infoInput"
                                    name="lastname"
                                    value={data.lastname}
                                    onChange={handleChange}/>
                            </div>
                        )
                    }
                    <div>
                        <input
                            type='text'
                            placeholder='User name'
                            className='infoInput'
                            name='username'
                            value={data.username}
                            onChange={handleChange}/>

                    </div>
                    <div>
                        <input
                            type='password'
                            placeholder='Password'
                            className='infoInput'
                            name='password'
                            value={data.password}
                            onChange={handleChange}/> {
                            isSignUp && (
                                <input
                                    required="required"
                                    type="password"
                                    className="infoInput"
                                    name="confirmpass"
                                    placeholder="Confirm Password"
                                    value={data.confirmpass}
                                    onChange={handleChange}/>
                            )
                        }

                    </div>
                    <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
           * Password does not match !! 
          </span>
                    <div>
                        <span
                            style={{
                                fontSize: "12px",
                                color: "blue",
                                cursor: "pointer",
                                textDecoration: "underline"
                            }}
                            onMouseOver={(e) => e.target.style.color = "red"}
                            onMouseOut={(e) => e.target.style.color = "blue"}
                            onClick={() => {
                                resetForm();
                                setIsSignUp((prev) => !prev);
                              }}>
                            {
                                isSignUp
                                    ? "Already have an account Login"
                                    : "Don't have an account Sign up"
                            }</span>
                    </div>
                    <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
            </button>
                </form>
            </div>
        </div>
    )
}

export default Auth
