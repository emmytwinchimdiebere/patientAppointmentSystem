import * as  sdk  from  "node-appwrite"

export const  {NEXT_PUBLIC_PROJECTID,APIKEY,NEXT_PUBLIC_ENDPOINT,DATABASEID,NEXT_PUBLIC_PATIENT_COLLECTIONID:COLLECTIONID,NEXT_PUBLIC_DOCTOR_COLLECTIOND,NEXT_PUBLIC_APPOINTMENT_COLLLECTIONID} =  process.env;

const  client = new  sdk.Client();
client.setEndpoint(NEXT_PUBLIC_ENDPOINT!)
client.setKey(APIKEY!)
client.setProject(NEXT_PUBLIC_PROJECTID!)



export const  users =  new  sdk.Users(client);
export const storage =  new  sdk.Storage(client);
export const databases  =  new sdk.Databases(client);
export const  messaging  =  new  sdk.Messaging(client);
export const  functions  =  new  sdk.Functions(client);

