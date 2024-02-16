import { Icon } from "@iconify/react";

const AuthForm = () => {
  return (
    <section>
      <div className=' className=" w-[192.25px] h-[192.25px] mt-5 block ml-auto mr-auto'>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="white"
                d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
              />
              <path
                fill="#0941ec"
                d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
              />
            </svg>
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
          <a href="" className="text-blue-600 ">
            Terms and Service
          </a>{" "}
          and{" "}
          <a href="" className="text-blue-600">
            Privacy Policy.
          </a>
        </p>
      </div>
    </section>
  );
};

export default AuthForm;
