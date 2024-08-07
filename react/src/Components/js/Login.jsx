import '../css/registration.css'
import login from '../Images/login.jpg'

const Login = () => {
    return (
        <div className="main">
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={login} alt="sign in" /></figure>
                            <a href="/register" className="signup-image-link">Create an account</a>
                        </div>
                        <div className="signin-form">
                            <h2 className="form-title">Welcome Back</h2>
                            <p className="form-title">Please enter your email and password to continue</p>
                            <form method="POST" className="register-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="your_email">
                                        <i className="fa-solid fa-user"></i>
                                    </label>
                                    <input type="text" name="your_email" id="your_email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass">
                                        <i className="fa-solid fa-lock"></i>
                                    </label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                                </div>
                            </form>
                            {/* <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
