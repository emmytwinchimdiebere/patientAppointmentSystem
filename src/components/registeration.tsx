"use client"
import React, { useState } from 'react'
import registerPng from  "../../public/assets/images/register-img.png"
import logo from  "../../public/assets/icons/logo-full.svg"
import Image from 'next/image'
import CustomFields from './forms/customFields'
import { fieldTypes } from './forms/authform'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchema, PatientFormSchema } from './validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormItem } from './ui/form'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { defaultPatientValues, GenderOptions } from './Constants'
import { Label } from './ui/label'
import { Select, SelectItem } from './ui/select'
import { doctors } from './Constants/doctors'
import FileUploader from './fileUploader'
import { IdentityType } from './Constants/identityTypes'
import SubmitBtn from './SubmitBtn'
import RegisterUserRecords from './actions/registerUserRecords'
import { useRouter } from 'next/navigation'
import { ID, Models } from "node-appwrite";
import {


  storage,

  
} from "../../appwrite.config";


const Registeration =  ({userId}:any) => {
    const  {name,  email,  phone} = userId
  const  form  = useForm<z.infer<typeof PatientFormSchema>>({
    resolver:zodResolver(PatientFormSchema),
    defaultValues:{
     ...defaultPatientValues,
     name:name,
     email:email,
     phone:phone
    }
  })
  const  [loading, setIsloading ] =  useState(false)
  const router =  useRouter();

  const  onSubmit = async (values:z.infer<typeof  PatientFormSchema>)=>{

    setIsloading(true)
    
    let  formData;

    if(values?.identificationDocument && values?.identificationDocument.length > 0 ){
      const  BlobFile  =  new  Blob([values?.identificationDocument[0]],{type:values?.identificationDocument[0].type})


      formData  =  new  FormData()
      formData.append("blobfile", BlobFile,  values.identificationDocument[0].name)
      

   }


    try{
     
      const  patientData = {
        ...values,
        user_id:userId?.$id,
        birthDate: new Date(values.birthDate),
        identificationDocument:formData
      
      }
          //@ts-ignore 
        const registerUser = await RegisterUserRecords(patientData)

        if(registerUser) router?.push(`/patient/${userId?.$id}/patient_reg?new_appointment=${registerUser?.$id}`)
   
   
      }catch(error){
      console.log(error)
    }

   
  }

  return (
    <div className='relative   bg-dark-500 w-full lg:w-[80%] h-auto flex flex-row flex-nowrap m-auto pb-9 rounded-tr-lg rounded-br-lg'>
            <div  className='flex flex-col  w-full lg:w-[80%] px-5 lg:pl-10 text-white '>

            <span className='mt-5 flex flex-col'>
                <Image src={logo} alt="logo" className='w-[20%] lg:w-[10%]' />
                <span className='text-2xl  font-bold capitalize  mt-5 pt-5'>
                Welcome 👋
                </span> 
                <p className=' text-dark-700 font-light text-[0.8rem]'>lets know more  about you.</p>
            </span>
              
              <div className='flex w-full flex-col relative mt-8'>

                    <div className='flex w-[100%] flex-col relative'>
                        <h3 className='font-bold  text-2xl'>Personal Information:</h3>
                       <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5 w-full">
                      
                       <div className='w-full relative lg:w-[100%]'>
                       <CustomFields name='name' placeholder='Fullname' value={userId?.name} fieldType={fieldTypes?.INPUT} control={form.control} label={"Fullname"} disabled={true} className=' shad-input'/>

                       </div>
                        <div className='flex flex-col lg:flex-row gap-2 w-full  relative'>
                        <div className='lg:w-[50%] flex flex-col flex-nowrap  space-y-5 lg:space-y-8'>
                        <CustomFields name='email' placeholder='email' value={userId?.email} fieldType={fieldTypes?.INPUT} control={form.control} label={"Email"} disabled={true} className=' shad-input'/>
                        <CustomFields name='birthDate' placeholder={"23-09-2024"} fieldType={fieldTypes?.DATEPICKER} control={form.control} label={"Date of Birth"} className='shad-input'/>
                        <CustomFields name='address' placeholder="No 12 blackrace lane USA" fieldType={fieldTypes?.INPUT} control={form.control} label={"Address"} className='shad-input'/>
                        <CustomFields name='emergencyContactPerson' placeholder="Mr Roc Richard" fieldType={fieldTypes?.INPUT} control={form.control} label={"Emergency Contact Person"} className='shad-input'/>
                        </div>
                        <div className='lg:w-[50%] flex flex-col space-y-5 lg:space-y-8'>
                        <CustomFields name='phone' placeholder="phone" value={userId?.phone} fieldType={fieldTypes?.PHONEINPUT} control={form.control} label={"Phone"} disabled={true} className='disabled:bg-dark-700 shad-input'/>
                        <CustomFields name='gender' fieldType={fieldTypes?.SKELETON} control={form.control} label={"Gender"} renderSkeleton={(field)=>(
                          <FormControl>
                              <RadioGroup onValueChange={field.onchange} defaultValue={field?.value} className="flex h-11 lg:w-[90%] rounded-md gap-6 xl:justify-between">
                                  {GenderOptions && GenderOptions?.map((option)=>(
                                    <div key={option} className='radio-group'>
                                        <RadioGroupItem id={option} value={option} />
                                        <Label htmlFor={option}>{option}</Label>
                                    </div>
                                  ))}
                              </RadioGroup>
                          </FormControl>
                        )} className='radio-group shad-input' />
                        <CustomFields name='occupation' placeholder="Software Engineer" fieldType={fieldTypes?.INPUT} control={form.control} label={"Occupation"} className='shad-input'/>
                        <CustomFields name='emergencyContactPhone' placeholder="phone"  fieldType={fieldTypes?.PHONEINPUT} control={form.control} label={"Emergency Contact Phone"} className='disabled:bg-dark-700 shad-input'/>
                        </div>

                        
                        
                        </div>

                        <h2 className =  "flex flex-row  font-bold  space-y-5 mb-3 relative">Medical Recoreds</h2>

                        <div className='lg:w-[95%] flex flex-col flex-nowrap  space-y-5 lg:space-y-8'>
                         <div  className='lg:w-[95%] w-full'>
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

                            <div className='flex flex-col lg:flex-row gap-5 relative lg:w-[95%]'>
                            
                            <div className="flex flex-col lg-w-[50%] w-full lg:flex-col relative space-y-8">
                          <CustomFields name='insuranceProvider' placeholder="Blue Coast Society" fieldType={fieldTypes?.INPUT} control={form.control} label={"Insurance Provider"} className='shad-input'/>
                          <CustomFields name='allergies' placeholder="Allergies,  Pollen, Crab  " fieldType={fieldTypes?.TEXTAREA} control={form.control} label={"Allergies"} className='shad-input'/>
                          <CustomFields name='familyMedicalHistory' placeholder="Mother  had a cancer" fieldType={fieldTypes?.TEXTAREA} control={form.control} label={"Family  mediacal  History (if Relevant)"} className='shad-input'/>
                         
                          </div>

                          <div className="flex flex-col lg-w-[50%] w-full lg:flex-col flex-nowrap space-y-8 relative">
                          <CustomFields name='insurancePolicyNumber' placeholder="Ab234660495" fieldType={fieldTypes?.INPUT} control={form.control} label={"Insurance Policy Number"} className='shad-input'/>
                          <CustomFields name='currentMedication' placeholder="Paracetamol,  ibuprofen" fieldType={fieldTypes?.TEXTAREA} control={form.control} label={"Current Medication"} className='shad-input'/>
                          <CustomFields name='pastMedicalHistory' placeholder="Past  Medical  issues" fieldType={fieldTypes?.TEXTAREA} control={form.control} label={"Past medical  History"} className='shad-input'/>
                          </div>
                              </div>


                              <h2 className =  "flex flex-row  font-bold  space-y-5 mb-3 relative">Identification Recoreds</h2>
                        
                        <div className = "flex  flex-col w-[95%] relative gap-8  flex-nowrap">
                        
                        <CustomFields  name='documentType' placeholder="Birth Certificate" fieldType={fieldTypes?.SELECT} control={form.control} label={"Identification Types"} className='shad-input'>
                           
                       
                          
                           {IdentityType && IdentityType?.map((types)=>(
                              <SelectItem key = {types} value={types} >
                                <span className = "font-light  text-white text-[1rem] ">{types}</span>
                              </SelectItem>
                             ))}
                          
                            
                          </CustomFields> 

                          
                         
                        </div>
                        <div className = "lg:w-[100%]">
                        <CustomFields name='documentIdentificationNumber' placeholder="Ab234660495" fieldType={fieldTypes?.INPUT} control={form.control} label={"Identification  Number"} className='shad-input'/>
                        </div>
                              
                        <CustomFields name='identificationDocument' fieldType={fieldTypes?.SKELETON} control={form.control} label={"Scanned Copy of Identifcation Document"} renderSkeleton={(field)=>(
                            <FileUploader files={field.value} onChange={field.onChange} />
                        )} className='shad-input' /> 
                        </div>
                        <section className= "space-y-8  relative  mb-9  ">
                          <h1 className="font-bold  text-white "> Consent and  Privacy</h1>
                        </section>
                        <CustomFields name='treatmentConsent'  fieldType={fieldTypes?.CHECKBOX} control={form.control} label={"I consent to  treatment"} className='shad-input'/>
                        <CustomFields name='disclosureConsent'  fieldType={fieldTypes?.CHECKBOX} control={form.control} label={" I consent  to  disclose and  use  of  medical  records  for  treatment purposes"} className='shad-input'/>
                        <CustomFields name='agreementConsent'  fieldType={fieldTypes?.CHECKBOX} control={form.control} label={" i have acknowledge  that  i have  agree  to  Privacy  Policy"} className='shad-input'/>
                        
                        
                        <div className="space-y-8  mt-8 mb-9 ">
                       <SubmitBtn isloading= {loading}>{!loading &&  "Submit"}</SubmitBtn>
                       </div>
                        </form>

            
                       </Form>
                    </div>
                             
              </div>
            </div>

            <section className='hidden h-screen lg:flex flex-1 fixed right-[10%] w-[15%] overflow-hidden'>
                <Image src={registerPng} alt="register" quality={100} priority className=" hidden lg:flex  h-screen rounded-none"/>
            </section>
    </div>
  )
}

export default Registeration