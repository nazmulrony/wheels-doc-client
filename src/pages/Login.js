import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../assets/images/login/login.svg'
import { AuthContext } from '../contexts/AuthProvider';
import { SetAuthToken } from '../JwtAuth/JwtAuth';

const Login = () => {
    const { loginUser, googleSignIn, githubSignIn, } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                setError('');
                SetAuthToken(user);
                navigate(from, { replace: true });

            })
            .catch(error => setError(error.message));

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                SetAuthToken(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            });
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                SetAuthToken(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            });
    }
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 bg-mid px-2 md:px-20 py-10'>
            <div className='grid place-items-center'>
                <img src={loginImg} className="w-1/2 mx-auto" alt="" />
            </div>
            <div className="text-light p-6 md:w-2/3  rounded-lg shadow-2xl bg-dark  ">
                <h2 className='text-center text-3xl mb-2 font-semibold'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email' className='p-2 text-dark rounded-md' required />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className='p-2 rounded-md text-dark' placeholder='Enter your password' required />
                    </div>
                    {
                        error && <p className='text-red-600'> {error}</p>
                    }
                    <button type="submit" className=' w-full bg-primary py-2 rounded-md mt-4 text-[20px] hover:bg-pine duration-100' >Login</button>
                    <p className='text-center my-2'><small>Already have an account? <Link to="/signup" className='btn-link text-red-600 '>Create New Account</Link></small></p>
                    <div className='line-break-container'>
                        <hr className='line-break' />
                        <p className='text-center'>or sign in with</p>
                        <hr className='line-break' />
                    </div>
                    <div>

                    </div>
                </form >
                <div className='flex justify-center gap-6'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-circle btn-primary   my-3"><FaGoogle className=' text-[20px]' /> </button>
                    <button onClick={handleGithubSignIn} className="btn btn-outline btn-circle btn-primary  my-3"><FaGithub className='text-[20px]' />  </button>
                </div>

            </div>

        </div>
    );
};

export default Login;