import React from 'react'
import logo from '../assets/logo.png'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

const Login = () => {


  const handleClick = async () => {
    const redirectTo = encodeURIComponent("http://localhost:5173/"); 
    const googleLoginUrl = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${redirectTo}`;

    window.location.href = googleLoginUrl;
  };
  const urlparam=window.URLSearchParams();
  const token= urlparam.get('token')
  if(token){
    localStorage.setItem(token);
    //now u can make calls
    
  }

  return (
    <div className='min-h-[759px] w-[1440px] bg-black flex-row'>
        {/* header  */}
        <div className='w-full h-[64px] flex items-center justify-center border-b-[1px] border-white '>
            <div><img  className='w-[156.77px] h-[24px] mx-auto my-auto ' src= {logo} alt="" /></div>
        </div>

        {/* main  */}
        <div className='w-full h-[663px] flex items-center justify-center'>
            {/* full area  */}
             <div className='w-[460px] min-h-[312px] bg-custom-gradient rounded-[17px] flex-row  px-[40px] pt-[24px] pb-[40px]'>
                {/* first group  */}
                <div className='w-full max-w-[380px] min-h-[103px]  gap-12 flex-row '>
                    {/* text  */}
                    <div className='text-white leading-[31px] text-[20px] font-sans font-semibold text-center '>
                        Create a new account
                    </div>
                    {/* sign up google button  */}
                    <button className='w-full max-w-[380px] min-h-[48px] gap-4 text-gray-400 flex justify-center border-[1px] border-[#707172]  rounded-[4px] mt-[14px]'  onClick={()=>{handleClick()}}>
                        <div className='h-[32px]  mt-3'><FcGoogle/></div>
                        <div className='h-[32px] leading-[26.1px] font-sans tracking-[-0.3px] my-auto '>Sign Up with Google</div>
                    </button>
                </div>
                {/* second group  */}
                <div className='mt-10 w-full max-w-[380px] min-h-[103px] gap-12 flex-row '>
                    <div className='flex align-middle justify-center'>
                        <button className='w-[195px] h-[48px] bg-button-gradient text-white font-semibold'>
                        Create an Account</button>
                    </div>
                    <div className='mt-[24px] w-full max-w-[380px] min-h-[25px] text-[#909296] text-center'> Already have an account? <span className='text-[#C1C2C5]'>Sign In</span ></div>
                </div>
             </div>
        </div>

        {/* footer  */}
        <div className='w-full h-[32px] flex items-center justify-center border-t-[1px] border-white'>
            <div className='text-gray-500 font-sans font-normal text-[12px] leading-[18.6px]'>
            © 2023 Reachinbox. All rights reserved.
            </div>
        </div>
    </div>
)
}

export default Login