
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const AuthForm = () => {
  return (
    <section>
      <div className='w-[192.25px] h-[192.25px] mt-5 block ml-auto mr-auto'>
        <img src="/logo.jpg" alt="logo" />
      </div>

      <div>
        <h4 className="text-3xl text-center pt-4 font-semibold  ">Welcome to Mhat Su</h4>
        <p className='text-[13.5px] font-semibold pt-2'>
          Linking your accounts allows you to safely save your daily records!
        </p>
      </div>

      <div className='pt-5 space-y-2'>
        <div className="flex items-center justify-center">
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-9 py-2 rounded-xl ">
          <Icon icon="fa6-brands:facebook"  style={{color: 'white'}} />
            <span>Continue with Facebook</span>
          </button>
        </div>

        <p className="text-center ">-OR-</p>

        <div className="flex items-center justify-center">
          <button className="flex items-center space-x-2 bg-gray-200 text-black px-11 py-2 rounded-xl">
          <Icon icon="devicon:google" />
            <span>Continue with Google</span>
          </button>
        </div>

        <p className="pt-6 pb-5 pl-5 text-[13.5px] ">
          By continuing with Google or Facebook, you agree to MhatSu&apos;s{" "}
          <Link to="" className="text-blue-600 ">
            Terms and Service
          </Link>{" "}
          and{" "}
          <Link to="" className="text-blue-600">
            Privacy Policy.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AuthForm;
