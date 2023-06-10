import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IdentityContext } from '../../../provider/IdentityProvider';
import { toast } from 'react-hot-toast';
import useAxiosProtect from '../../../hooks/useAxiosProtect';

const RegisterPage = () => {
  const { googleSignIn, emailPasswordRegistration, updateNameAndImage } = useContext(IdentityContext)
  const { instance } = useAxiosProtect()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const url = `/users/${email}`;

  const from = location.state?.from?.pathname || '/';

  const handleEmailPasswordRegister = async (registerInfo) => {
    const { email, password, confirmPassword, name, photoURL } = registerInfo;
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Check password complexity
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error('Password should be at least 6 characters long, contain a capital letter, and a special character');
      return;
    }
    try {
      await emailPasswordRegistration(email, password);
      toast.success('Registration successful');
      reset();
      navigate(from, { replace: true });

      try {
        const result = await updateNameAndImage(name, photoURL);
        toast.success('Name and image updated successfully');
        instance
          .put(url, { name, email })
          .then(() => {
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        toast.error('Failed to update name and image');
        console.log('Update error:', error);
      }
    } catch (error) {
      toast.error('Registration failed');
      console.log('Registration error:', error);
    }
  };

  const handleGoogleLogIn = async () => {
    try {
      const result = await googleSignIn();
      if (result.user) {
        toast.success("Login Successfully");
        const url = `/users/${result.user.email}`;
        instance
          .put(url, { name:result.user.displayName, email:result.user.email })
          .then(() => {
          })
          .catch((error) => {
            console.error(error);
          });
        reset()
        navigate(from, { replace: true })
      }
    } catch (error) {
      const errorCode = error.code;
      toast.error(errorCode.split("auth/"), { duration: 3000 })
    }
  }

  return (
    <div className="flex justify-between">
      <div className="my-32 ml-10 w-3/6">
        <form onSubmit={handleSubmit(handleEmailPasswordRegister)} className="w-2/3 mx-auto mt-10">
          <h2 className="text-4xl font-bold mb-10">Register</h2>
          <div className="mb-8">
            <input
              className="input-field"
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register('name', { required: true })}
            />
          </div>
          <div className="mb-8">
            <input
              className="input-field"
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email', { required: true })}
            />
          </div>
          <div className="mb-8">
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
                {showPassword ? (
                  <BsFillEyeFill size={20} />
                ) : (
                  <BsFillEyeSlashFill size={20} />
                )}
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="relative">
              <input
                className="input-field"
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                {...register('confirmPassword', { required: true })}
              />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <BsFillEyeFill size={20} />
                ) : (
                  <BsFillEyeSlashFill size={20} />
                )}
              </button>
            </div>
          </div>
          <div className="mb-8">

            <input
              className="input-field"
              id="photoURL"
              type="text"
              placeholder="Enter your photo URL"
              {...register('photoURL')}
            />
          </div>
          <div className="mt-4">
            Already have an account?{' '}
            <Link className="text-main hover:underline ml-2" to="/login">
              Login
            </Link>
          </div>
          <div className="flex mt-10 justify-between items-center">
            <button className="btn-primary bg-main py-2 px-16" type="submit">
              Register
            </button>
            <p className="text-neutral-500">OR</p>
            <button
              className="border border-neutral-300 hover:scale-95 duration-200 hover:bg-neutral-200 px-20 py-2 rounded"
              type="button" onClick={handleGoogleLogIn}
            >
              <img
                className="w-[1.5rem] mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
            </button>
          </div>

        </form>
      </div>
      <div className="w-2/6 border bg-no-repeat bg-cover bg-center bg-[url('https://burst.shopifycdn.com/photos/harp-instrument-close-up.jpg?width=373&format=pjpg&exif=1&iptc=1')] h-[800px]"></div>
    </div>
  );
};

export default RegisterPage;