// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const { signInUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = () => {
        const value = captchaRef.current.value;
        console.log(value);
        if (validateCaptcha(value) === true) {
            alert('Captcha Matched')
            setDisable(false);
        }
        else {
            alert('Captcha does not matched')
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">

                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            {/* captcha started after password field */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef} placeholder="type the text above" name='captcha' className="input input-bordered" required />
                                <button onBlur={handleValidateCaptcha} className='btn mt-2 btn-outlinr btn-xs'>Validate</button>
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disable} type="submit" className='btn btn-primary' />
                                <p className='mx-auto'><small>New here? <Link className='text-blue-500' to="/signup"> Create an Account</Link></small></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;