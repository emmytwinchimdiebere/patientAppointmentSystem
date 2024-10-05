"use server"
import { formSchema } from '@/components/validations'
import { users } from '../../../appwrite.config'
import { parseUserData } from '@/lib/utils'
import { ID, Query } from 'node-appwrite'
import React from 'react'
import z from "zod"

const createUser = async(user:z.infer<typeof formSchema>) => {
        try{
                const  auth =  await users?.create(ID.unique(),user?.email,user?.phone,undefined,user?.name  )

                if(auth) return  parseUserData(auth);

        }catch(error:any){
                const  existingUser =  await  users?.list([Query.equal("email", user?.email)])
                if(existingUser){
                        return  error?.code
                }
        }
}

export default createUser