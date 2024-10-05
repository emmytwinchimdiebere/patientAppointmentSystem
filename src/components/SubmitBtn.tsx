import React from 'react'
import { Button } from "@/components/ui/button"
import { boolean } from 'zod'
import Image from 'next/image'
import spinner from  "../../public/assets/icons/loader.svg"


interface ButtonProps{
    isloading:boolean,
    className?:string,
    children?:React.ReactNode,
    
}

const SubmitBtn = ({isloading,  children,  className}: ButtonProps) => {
  return (
    <Button disabled={isloading} type='submit'   className={className ?? "flex text-dark-200 w-full rounded-md justify-center gap-2 relative bg-green-400 lg:w-[90%] active:scale-105 transition disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-dark-700 "}>

        {isloading && (

                <span className='flex gap-2 text-[0.8rem]'>

            <Image className='transition W-[20px] h-[20px] lg:w-[24px] lg:h-[24px]' src={spinner} quality={100} width={24} height={24} alt='spinner'/>

               <span className=' mt-3'>...waiting</span>
                </span>

        )}
      

        {children}
      
    </Button>
  )
}

export default SubmitBtn