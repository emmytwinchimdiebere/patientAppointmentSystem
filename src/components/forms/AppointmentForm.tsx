"use client"
import React, { useState } from 'react'
import registerPng from  "../../public/assets/images/register-img.png"
import logo from  "../../public/assets/icons/logo-full.svg"
import Image from 'next/image'
import CustomFields from './customFields'
import { fieldTypes } from '../forms/authform'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchema, PatientFormSchema } from '../validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormItem } from '../ui/form'

import { Label } from '../ui/label'
import { Select, SelectItem } from '../ui/select'
import { doctors } from '../Constants/doctors'



import { useRouter } from 'next/navigation'
import { ID, Models } from "node-appwrite";



const AppointmentForm =  ({user}:any) => {
    const  {name,  email,  phone} = user
  const  form  = useForm<z.infer<typeof PatientFormSchema>>({
    resolver:zodResolver(PatientFormSchema),
    defaultValues:{
  
    }
  })
  const  [loading, setIsloading ] =  useState(false)
  const router =  useRouter();

  const  onSubmit = async (values:z.infer<typeof  PatientFormSchema>)=>{

    setIsloading(true)
    
   

  


    try{
   
   
      }catch(error){
      console.log(error)
    }

   
  }

  return (
    <div className='relative   bg-dark-500 w-full lg:w-[100%] h-auto flex flex-nowrap pb-9'>
       
            <div className='flex w-[100%] flex-col relative'>
                       
                       <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5 w-full">
                      
                        <div  className='lg:w-[90%] w-full'>
                         <CustomFields name='primaryDoctor' placeholder="Primary Physician" fieldType={fieldTypes?.SELECT} control={form.control} label={"Primary Care Physcian"} className='shad-input'>
                           {doctors && doctors?.map((doctor)=>(
                              <SelectItem key = {doctor?.name} value={doctor?.name} >
                               <div className="flex  gap-4 items-center cursor-pointer hover:bg-white rounded-full p-2 w-full transition-all">
                                <Image src={doctor?.image} alt={doctor?.name} width={24} height={24} quality={100} className=" rounded-full object-center" />

                                <p className='hover:text-black  font-light text-white text-[1rem]'>{doctor?.name}</p>
                               
                               </div>
                              </SelectItem>
                             ))}
                          
                            
                          </CustomFields>

                         </div>

                        <div  className =  "lg:w-[100%] w-full">
                        <CustomFields name='birthDate' placeholder={"23-09-2024"} fieldType={fieldTypes?.DATEPICKER} control={form.control} label={"Date of Birth"} className='shad-input'/>
                        </div>
                     
                      </form>
                       
                         

            
                       </Form>
                    </div>
                             
           
         

    </div>
  )
}

export default AppointmentForm