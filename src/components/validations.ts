import z, { boolean } from  "zod"
export const formSchema = z.object({
    name: z.string().min(6, {
      message: "Name must be at least 6 characters.",
    }),
    email: z.string().email({
      message:"Please enter a valid email"
    }),

    phone:z.string().refine((phone:string) => /^\+\d{1,3}\s?(\d{3})\s?(\d{3})\s?(\d{4})$/.test(phone),{message:"Enter a valid phone number"} ),
  })
  

  export const  PatientFormSchema =  z.object({

      birthDate:z.coerce.date(),
      gender: z.enum(["male", "female","other"],{message:"please select a  gender type"}),
      documentType :z.string().min(5,{message:"cannot  be  less  than  5 characters"}).optional(),
      treatmentConsent:z.boolean().default(false).refine((value:boolean)=>value === true,{message:"You must consent to treatment  to Proceced"}),
      name:z.string().min(3,  {message:"Name  is  required &  cannot be  less  than  3 characters"}),
      email: z.string().email({message:"email  field  is  required or  invalid  email"}),
      phone:z.string().refine((phone:string) => /^\+\d{1,3}\s?(\d{3})\s?(\d{3})\s?(\d{4})$/.test(phone),{message:"Enter a valid phone number"} ),
      address:z.string().max(200, {message:"Cannot more  than  200 characters"}).min(6, {message:"address  cannot be  less  than  6 characters"}),
      occupation: z.string().min(2,{message:"occupation is  required & cannot be  less than  3  characters"}),
      primaryDoctor: z.string().min(5, {message:"Please select a  primary  physician"}),
      insuranceProvider:z.string().max(100,  {message:"Cannot  be more than  100 characters"}).optional(),
      allergies:z.string().max(50, {message:"cannot be more  than 50 characters"}).optional(),
      familyMedicalHistory:z.string().max(50, {message:"cannot be more  than 50 characters"}).optional(),
      insurancePolicyNumber:z.string().optional(),
      currentMedication:z.string().optional(),
      PastmedicalHistory:z.string().min(2,{message:"cannot  be  less  than  2  characters"}).max(100,  {message:"Cannot  be more than  100 characters"}).optional(),
      documentIdentificationNumber:z.string().optional(),
      identificationDocument:z.custom<File[] | undefined>().optional(),
      disclosureConsent:z.boolean().default(false).refine((value:boolean)=> value === true ,  {message:"disclosure consent  is required to  proceed"}),
      agreementConsent:z.boolean().default(false).refine((value:boolean)=> value === true ,  {message:"agreement consent  is required to  proceed"}),
      emergencyContactPerson:z.string().min(3,{message:"cannot  be  less  than 3 characters"}).optional(),
      emergencyContactPhone:z.string().refine((phone:string) => /^\+\d{1,3}\s?(\d{3})\s?(\d{3})\s?(\d{4})$/.test(phone),{message:"Enter a valid phone number"} ),
      





      













  })