"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { promise, z } from "zod"
import React, { useState } from  "react"
import { formSchema } from "../validations"

import userImageIcon  from  "../../../public/assets/icons/user.svg"
import userEmailIcon from  "../../../public/assets/icons/email.svg"
import {
  Form
  } from "@/components/ui/form"
import CustomFields from "./customFields"
import SubmitBtn from "../SubmitBtn"
import { createUntrackedSearchParams } from "next/dist/client/components/search-params"
import createUser from  "../actions/createUser"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
 
 

export const  enum  fieldTypes{
        INPUT="input",
        CHECKBOX = "checkbox",
        SELECT = "select",
        PHONEINPUT = "phoneInput",
        TEXTAREA = "textarea",
        DATEPICKER="Date_picker",
        SKELETON ="skeleton"

}

export const  AuthForm = ()=>{
    const  [loading,  setLoading] =  useState(false)
    const  router  =  useRouter();

    const  delay =  (ms:number, router:any)=> new Promise((router)=>setTimeout(router, ms))
   
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          phone:  ""
        },
      })


     async function onSubmit({email, phone,  name}: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

     

        setLoading(!loading)
        const  userData =  {email,  phone,  name};

        const  user = await createUser(userData);
        console.log(user)

        if(user === 409){
          toast("this  email  is already  taken ",  {position:"top-right", type:"error"});
          setLoading(loading)
        }
       
        if(user?.status  === true){
          toast("user  created successfully",  {position:"top-right",  type:"success"})
          setLoading(loading)

          toast("you will be directed  to  registeration  page  shortly",  {position:"top-right", type:"info"})

          delay(40000, router?.push(`patient/${user?.$id}/register`));

        
        }
      
      }

    return(
        <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-10">
            
            
       <CustomFields control={form.control} placeholder="enter fullname" label="Fullname" fieldType={fieldTypes?.INPUT} name="name" iconSrc={userImageIcon} iconAlt={"userImage"} />
       <CustomFields control={form.control} placeholder="rockycodess@gmail.com" label="Email" fieldType={fieldTypes?.INPUT} name="email" iconSrc={userEmailIcon } iconAlt={"userEmail"} /> 
       <CustomFields control={form.control} placeholder="+2349018304580" label="Phone" fieldType={fieldTypes?.PHONEINPUT} name="phone"  /> 
          
        <SubmitBtn isloading={loading} >{!loading && "Get Started"}</SubmitBtn>
        </form>
      </Form>
    )
}

export default AuthForm