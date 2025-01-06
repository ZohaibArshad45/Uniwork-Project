import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

import { useDispatch, useSelector } from 'react-redux';
import {
  loginStart,
  loginSuccess,
  loginFailure
} from '../redux/user/userSlice';

export default function Login() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(loginFailure(data.message));

        return;
      }
      dispatch(loginSuccess(data));

      navigate('/');
    } catch (error) {
      dispatch(loginFailure(error.message));

    }
  };

  return (
    <div className='p-3 px-10 max-w-lg mx-auto'>
      <h1 className="text-xl sm:text-3xl text-center font-semibold pt-10 pb-7 mb-2 uppercase">
        Wellcome Back to <span className="text-blue-900">UniWork</span>.
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'} // Toggle password visibility
            placeholder='password'
            className='border p-3 rounded-lg w-full'
            id='password'
            onChange={handleChange}
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Show Eye icon based on state */}
          </span>
        </div>

        <button
          disabled={loading}
          className='bg-blue-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to={'/signup'}>
          <span className='text-blue-900 font-semibold'>SIGN UP</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
