import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IdentityContext } from '../../../provider/IdentityProvider';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const { googleSignIn,emailPasswordSignIn } = useContext(IdentityContext)
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit,reset } = useForm();

  const handleEmailPasswordLogin = (userInfo) => {
    const { email, password } = userInfo;
    emailPasswordSignIn(email, password).then(userData => {
      reset()
      toast.success("Login Successfully");
    }).catch(err => {
      console.log(err);
      toast.error(err.code.split("auth/"),{duration:3000});
    })
  };

  const handleGoogleLogIn = async () => {
    try {
      const result = await googleSignIn();
      const user = result.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }

  return (
    <div className="flex justify-between">
      <div className="my-32 ml-10 w-3/6">
        <form onSubmit={handleSubmit(handleEmailPasswordLogin)} className="w-2/3 mx-auto mt-10">
          <h2 className="text-4xl font-bold mb-10">Login</h2>
          <div className="mb-8 ">
            <input
              className="input-field"
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email', { required: true })}
            />
          </div>
          <div className="mb-8 ">
            <div className="relative">
              <input
                className="input-field"
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
                {showPassword ? <BsFillEyeFill size={20} /> : <BsFillEyeSlashFill size={20} />}
              </button>
            </div>
          </div>
          <div className="mt-4">
            Do not have any account
            <Link className="text-main hover:underline ml-2" to="/register">
              Register
            </Link>
          </div>
          <div className="flex mt-10 justify-between items-center">
            <button
              className="btn-primary bg-main py-2 px-16"
              type="submit"
            >
              login
            </button>
            <p className='text-neutral-500'>OR</p>
            <button type="button" onClick={handleGoogleLogIn}
              className="border border-neutral-300 hover:scale-95 duration-200 hover:bg-neutral-200 px-20 py-2 rounded"
            >
              <img className="w-[1.5rem] mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
            </button>
          </div>
        </form>
      </div>
      <div className="w-2/6 border bg-no-repeat bg-cover bg-center bg-[url('https://burst.shopifycdn.com/photos/harp-instrument-close-up.jpg?width=373&format=pjpg&exif=1&iptc=1')] h-[700px]">
      </div>
    </div>
  );
};

export default LoginPage;