import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <span className="loginDesc">
                        Connect with friends and wold around you on Facebook
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="Password" type="Password" className="loginInput"/>
                        <Link to={`/`} style={{textDecoration:'none',height: '50px',
                                                                  borderRadius: '10px',
                                                                   border: 'none',
                                                                    backgroundColor:'blue',
                                                                   color: 'white',
                                                                    fontSize: '20px',
                                                                    fontWeight: '500',
                                                                  cursor: 'pointer',
                                                                  paddingLeft:'203px'}}>
                        <button className="loginButton">Log In</button>
                        </Link>
                        
                        <span className="loginForgot">Forgot Passord</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
