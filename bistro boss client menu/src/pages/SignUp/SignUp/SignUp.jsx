import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">

                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        {/* captcha started after password field */}


                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className='btn btn-primary' />
                            <p className='mx-auto'><small>Already Have An Account? <Link className='text-blue-500' to="/login"> Login!</Link></small></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;