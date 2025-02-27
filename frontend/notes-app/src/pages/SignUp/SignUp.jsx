import React, { useState } from 'react';
import NavBar from "../../components/NavBar/NavBar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from 'react-router-dom';

import { validateEmail, validatePassword } from '../../utils/helper';

const SignUp = () => {
  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSignUp = async (e) => {
    e.preventDefault();
      if(!name){
          setError("Please enter your name");
          return;
      }
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
    
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">SignUp</h2>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button 
              type="submit" 
              className="btn-primary"
              >
              Create Account
            </button>

            <p className="text-center text-gray-600 mt-4">
              Existing user? {" "}
              <Link to="/login" className="text-blue-600 hover:underline ml-1">
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
