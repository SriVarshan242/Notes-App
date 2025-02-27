import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail, validatePassword } from '../../utils/helper';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(null);
  const handleLogin = async(e) =>{
    e.preventDefault();
    if(!validateEmail(email)){
      setError("Please enter valid email address");
      return;
    }
    if(!password){
      setError("Please enter the password");
      return;
    }
    if(!validatePassword(password)){
      setError("Enter Strong Password");
      return;
    }
    setError("");

  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="text" 
              placeholder="Email" 
              className="input-box"
              value={email}
              onChange={(e)=> setEmail(e.target.value)} 
            />
            <PasswordInput
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button 
              type="submit" 
              className="btn-primary"
              >
              Login
            </button>

            <p className="text-center text-gray-600 mt-4">
              New User? {" "}
              <Link to="/signup" className="text-blue-600 hover:underline ml-1">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
