import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
// import AAuth from '../components/AAuth';
import Gauth from '../components/Gauth';



const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [confirmPassword, setConfirmPassword] = useState(''); // For confirm password
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null); // State for feedback message
  const [isError, setIsError] = useState(false); // State to differentiate between error and success
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle confirm password visibility
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      setMessage("Passwords don't match. Please try again.");
      setIsError(true);
      return;
    }
    setIsLoading(true);
    setMessage(null); // Reset message before submitting
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to sign up. Please try again.');
      const data = await res.json();
      setMessage('Sign-up successful! Redirecting to login...');
      setIsError(false); // Set success

      // Redirect to login page after 2 seconds
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setMessage(error.message);
      setIsError(true); // Set error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div className="p-4 px-10 max-w-lg mx-auto">
        <h1 className="text-xl sm:text-3xl text-center font-semibold pt-7 mb-2 uppercase">
          Sign Up to <span className="text-blue-900">UniWork</span>.
        </h1>
        <p className="text-stone-400 text-center">
          We need some details to create your account
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
          <input
            type="text"
            placeholder="Enter Username.."
            className="border p-3 rounded-xl"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Enter your Email.."
            className="border p-3 rounded-xl"
            id="email"
            onChange={handleChange}
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Make Strong Password.."
              className="border p-3 rounded-xl w-full"
              id="password"
              onChange={handleChange}
            />
            {/* Eye Icon */}
            <span
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password.."
              className="border p-3 rounded-xl w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* Eye Icon */}
            <span
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button
            disabled={
              isLoading ||
              !formData.username ||
              !formData.email ||
              !formData.password ||
              !confirmPassword
            }
            className={`font-semibold p-3 ${
              isLoading ? 'bg-gray-500' : 'bg-stone-700'
            } text-white rounded-lg hover:opacity-90 disabled:opacity-80`}
          >
            {isLoading ? 'Signing Up...' : 'SIGN UP'}
          </button>
          {/* <AAuth /> */}
          <Gauth />
        </form>
        {/* Feedback Message */}
        {message && (
          <p
            className={`mt-4 text-center ${
              isError ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {message}
          </p>
        )}
        <div className="flex gap-2 mt-3">
          <p>Have an Account?</p>
          <Link to="/login">
            <span className="text-blue-900 font-semibold">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;