export const GenderOptions  =  ["Male",  "Female",  "Other"]

declare type Gender = "male" | "female" | "other"


export const  defaultPatientValues  = {

    name:"",
    birthDate: new Date(Date.now()),
    gender: "male" as  Gender,
    email:"",
    address:"",
    phone:"",
    occupation:"",
    primaryDoctor:"",
    insuranceProvider: " ",
    allergies:"",
    familyMedicalHistory:"",
    treatmentConsent:false,
    agreementConsent:false,
    insurancePolicyNumber:"",
    pastMedicalHistory:"",
    currentMedication:"",
    documentType:"Birth Certificate",
    identificationNumber:"",
    identificationDocument:[],
    disclosureConsent:false,
    emergencyContactNumber:"" ,
    emergencyContactPerson:"" 

}

export  interface  RegisterParams  {
    name:string,
    userId:string,
    birthDate: Date,
    gender: Gender,
    email:string,
    address:string,
    phone:string,
    occupation:string,
    primaryDoctor:string,
    insuranceProvider:string,
    allergies:string | undefined,
    familyMedicalHistory:string,
    treatmentConsent:boolean,
    agreementConsent:boolean,
    insurancePolicyNumber:string,
    pastMedicalHistory:string | undefined,
    currentMedication:string | undefined,
    documentType:string | undefined,
    indentificationNumber:string | undefined
    disclosureConsent:boolean,
    emergencyContactNumber:string,
    emergencyContactPerson: string | undefined,
    identificationDocument:FormData | undefined






}

