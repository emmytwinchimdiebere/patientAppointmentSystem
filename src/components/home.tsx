import React from 'react'
import { Button } from './ui/button'
import logo from  "../../public/assets/icons/logo-full.svg"
import Image from 'next/image'
import doctors from  "../../public/assets/images/onboarding-img.png"
import AuthForm from './forms/authform'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'

const Home = () => {
  return (
        <div className='bg-dark-500 lg:w-[70%] w-full h-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 m-auto relative z-10 gap-5 lg:mt-20 mt-[10%] text-white'>
                <section className='flex flex-col relative px-10 pt-10'>
                        <div  className=''>
                            <Image alt="logo" src={logo} priority  quality={100} className='w-[120px] hover:scale-105 transition '/>


                        </div>

                        <span className=" font-semibold text-2xl mt-8 ">
                          Hi  There, .... 
                        </span>

                         <span className='font-light text-[0.8rem] text-dark-600 capitalize'>
                          Get started with  appointments.
                          </span> 

                          <AuthForm />

                          <div className='flex justify-between  flex-row relative w-full lg:w-[90%] lg:mt-5 mt-4'>
                            <span className=' text-dark-700  text-[0.9rem] font-extralight hover:text-dark-600'>
                              &copy;carePlus2024
                            </span>

                            <Link className=' text-green-500 hover:text-green-700 text-[0.9rem] font-light' href={"/?admin=true"}>admin</Link>
                          </div>

                </section>

               
               
                <div  className='w-full relative h-full'>
                    <Image  alt='onboarding' src={doctors} priority quality={100} className=' h-full hidden lg:flex rounded-md ' />
                </div>

                <ToastContainer />
        </div>
  )
}

export default Home