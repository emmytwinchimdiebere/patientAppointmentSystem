import React from 'react'
import { Button } from './ui/button'
import logo from  "../../public/assets/icons/logo-full.svg"
import Image from 'next/image'
import doctors from  "../../public/assets/images/appointment-img.png"
import AuthForm from './forms/authform'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import AppointmentForm from './forms/AppointmentForm'

const AppointmentPage = ({user}:any) => {
  return (
        <div className='bg-dark-500 lg:w-[80%] flex flex-row  w-full h-screen m-auto  relative  lg:mt-20 mt-[10%] text-white'>
               
                <section className='flex flex-col relative px-10 pt-10 flex-1 w-'>
                        <div  className=''>
                            <Image alt="logo" src={logo} priority  quality={100} className='w-[120px] hover:scale-105 transition '/>


                        </div>

                        <span className=" font-light  text-[0.9rem] mt-8 ">
                          Please schedule an appointment with  your  doctor
                        </span>

                         <span className='font-light text-[0.8rem] text-dark-600 capitalize'>
                          Get started with  appointments...
                          </span> 

                         <AppointmentForm user={user} />

                          <div className='flex justify-between  flex-row relative w-full lg:w-[90%] lg:mt-5 mt-4'>
                            <span className=' text-dark-700  text-[0.9rem] font-extralight hover:text-dark-600'>
                              &copy;carePlus2024
                            </span>

                    
                          </div>

                </section>

               
               
                <div  className='w-[20%] relative h-screen'>
                    <Image  alt='appointments' src={doctors} priority quality={100} className=' h-full hidden lg:flex rounded-md ' />
                </div>

                <ToastContainer />
        </div>
  )
}

export default AppointmentPage