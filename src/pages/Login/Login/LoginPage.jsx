import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillEyeFill,BsFillEyeSlashFill } from 'react-icons/bs';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="border-b-2 border-b-gray-300 focus:outline-0 w-full py-2 px-3 focus:border-b-gray-600 border-white duration-200"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register('password', { required: true })}
              />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsFillEyeFill size={20}/> : <BsFillEyeSlashFill size={20}/>}
              </button>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <a className="text-blue-500 hover:underline" href="/register">
            Create an account
          </a>
        </div>
        <div className="flex items-center justify-center mt-6">
          <span className="mr-2">Or sign in with:</span>
          <a
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 p-2"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;