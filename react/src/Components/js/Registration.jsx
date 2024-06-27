import '../css/registration.css'; 
import register from '../Images/register.jpg'

const Registration = () => {
    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="fa-solid fa-user"></i>
                                    </label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="fa-solid fa-envelope"></i>
                                    </label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass">
                                        <i className="fa-solid fa-lock"></i>
                                    </label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="designation">
                                        <i className="fa-solid fa-id-card"></i>
                                    </label>
                                    <input type="number" name="employeid" id="employeid" placeholder="Your Employee Id" />
                                </div>
                                
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={register} alt="sign up" /></figure>
                            <a href="/login" className="signup-image-link">I am already a member</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Registration;
