"use server"
import z from "zod";
import { PatientFormSchema } from "../validations";

import {

  databases,
  storage,

  
} from "../../../appwrite.config";
import { AppwriteException, ID, Models } from "node-appwrite";
import { parseDocumentData } from "@/lib/utils";
import { RegisterParams } from "../Constants";


const RegisterUserRecords = async ({identificationDocument, ...patientData}:RegisterParams) => {


 
        const  endpoint  =  process.env.NEXT_PUBLIC_ENDPOINT
        const  bucketId =  process.env.NEXT_PUBLIC_BUCKETID
        const  projectId =  process.env.NEXT_PUBLIC_PROJECTID
        const  databaseId  =  process.env.NEXT_PUBLIC_DATABASEID
         const patientCollection_Id = process.env.NEXT_PUBLIC_PATIENT_COLLECTIONID
  
  
    
        try {
    
    
          let file;
    

    // Check if identificationDocument exists and process it
   
    if(identificationDocument){
      const  inputFile  =  identificationDocument?.get("blobfile") as File

      if(inputFile){
        console.log(inputFile)

        if(!bucketId){
          throw  new AppwriteException("BucketId does not Exist", 201, "error")
        }

        file  =  await storage?.createFile(bucketId,  ID.unique(), inputFile)
          if(file) console.log(file)
      }
    }
   
  

   
  
    const  url = `${endpoint}/storage/buckets/${bucketId}/files/${file?.$id}/view?projectId=${projectId}`;
    console.log(patientData)
    const patient = await databases?.createDocument(
      databaseId!,
      patientCollection_Id!,
      ID.unique(),
      {
      
        identificationDocumentId: file?.$id,
        identificationDocumentUrl:url,
        ...patientData
      },
    
    );

    // Parse and return patient data
    if (patient) return parseDocumentData(patient);
    console.log(patient)
  } catch (error) {
    console.log("Error registering user records:", error);
  }
};

export default RegisterUserRecords;
