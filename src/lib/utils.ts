import { type ClassValue, clsx } from "clsx"
import { Models } from "node-appwrite"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const  parseUserData =  (value:Models.User<Models.Preferences> | undefined)=>JSON.parse(JSON.stringify(value))
export const  parseDocumentData =  (value:Models.Document | undefined)=>JSON.parse(JSON.stringify(value))
export const  convertFileToUrl = (file:any)=>URL.createObjectURL(file)
