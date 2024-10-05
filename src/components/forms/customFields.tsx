import React from 'react'

import { Input } from "../ui/input"
import {
  Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Control } from 'react-hook-form'
import { fieldTypes } from './authform'
import Image from 'next/image'
import PhoneInput from 'react-phone-number-input'
import calender from "../../../public/assets/icons/calendar.svg"
import 'react-phone-number-input/style.css'
import { E164Number } from 'libphonenumber-js'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { GenderOptions } from '../Constants'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { Switch } from '../ui/switch'


  interface  customFormProps{
    control:Control<any>,
    fieldType:fieldTypes,
    label?:string,
    placeholder?:string,
    name:string,
    iconSrc?:string,
    iconAlt?:string,
    className?:string,
    value?:any, 
    disabled?:boolean,
    renderSkeleton?:(field:any)=>React.ReactNode,
    children?:React.ReactNode,
    dateFormat?:string,
    showTimeselect?:boolean



  }

  const  Renderfields =  ({field,  props}: {field:any,  props:customFormProps})=>{
    const  {control,fieldType,label, name, iconSrc, iconAlt,  placeholder ,  className, value, disabled,showTimeselect, renderSkeleton, dateFormat, children} = props
        switch (fieldType) {
          case fieldTypes?.INPUT:

          return(
              <div className='flex bg-dark-400 border border-dark-500 rounded-md lg:w-[90%]'>
                  {iconSrc && (
                    <Image src={iconSrc } alt={iconAlt || "iconalt"} width={24} height={24} quality={100} className='pl-2'/>
                  )}

                 <FormControl>
                 <Input placeholder={placeholder} {...field} className={className ?? " shad-input w-full "} value={value}  disabled={disabled}/>
                 </FormControl>


              </div>
          )

          case fieldTypes?.PHONEINPUT:

          return(
            
                 
          <PhoneInput disabled={disabled} className='bg-dark-200 text-dark-500 input-phone lg:w-[90%]' defaultCountry='NG' withCountryCallingCode={true} placeholder={placeholder}  international value={value as E164Number || undefined } onChange={field.onChange}/>
                   
             
          )
          case fieldTypes?.DATEPICKER:

          return(
            <div className=" flex w-full lg:w-[90%] p-2 rounded-md gap-2 bg-dark-400 border border-dark-500">
              <Image quality={100} src={calender} alt='calender' height={24} width = {24} />

              <FormControl>
                  <DatePicker placeholderText={placeholder} timeInputLabel='Time:' showTimeSelect ={showTimeselect ?? false} wrapperClassName='' selected={field?.value} onChange={(date)=>field.onChange(date)}/>
              </FormControl>

            </div>
          )


          case fieldTypes?.SKELETON:
            
          return renderSkeleton && renderSkeleton(field);


          case fieldTypes?.SELECT:

            return(
              <FormControl>
                <Select onValueChange={field?.onChange} value={field?.value} >
                  <FormControl>
                  <SelectTrigger className='shad-select-trigger'>

                    <SelectValue placeholder={placeholder}></SelectValue>
                    </SelectTrigger>
                  </FormControl>

                    <SelectContent className='shad-select-content'>
                      {children}
                    </SelectContent>
                </Select>
              </FormControl>
            )

            case fieldTypes?.TEXTAREA :
              return(
              <FormControl>
                  <Textarea {...field } placeholder={placeholder} className='shad-textArea ' /> 
              </FormControl>
              )

              case  fieldTypes?.CHECKBOX:
                return(
                  <FormControl>
                    <div className=' flex  items-center flex-row  gap-5'>
                    <Switch className='checked:bg-green-500 bg-dark-300' name={name}  onCheckedChange={field.onChange} checked ={field.value} id={name}  /> 

                    <label className='text-white hover:text-gray-500 font-light' htmlFor={name}>
                      {label}
                    </label>
                    </div>
                  </FormControl>
                )
            
            break;
        
          default:
            break;
        }
  }
const CustomFields = (props:customFormProps) => {
  const  {control, name,  fieldType, label, value} =  props;
  return (
    <FormField
    control={control}
    name={name}
    defaultValue={value}
    render={({ field }) => (
      <FormItem>
      {fieldType  !== fieldTypes?.CHECKBOX && label && (
          <FormLabel>{label}</FormLabel>
      )}
        <Renderfields field={field} props =  {props}/>
        <FormMessage className='shad-error' />
      </FormItem>
    )}
  />
  )
}

export default CustomFields