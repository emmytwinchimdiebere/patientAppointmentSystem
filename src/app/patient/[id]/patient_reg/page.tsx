import AppointmentPage from '@/components/AppointMentPage'
import React from 'react'
import { users } from '../../../../../appwrite.config'
import { parseUserData } from '@/lib/utils'

export type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
const Page = async ({params:{id}}:Props) => {
    const user = await users.get(id).then((res) => parseUserData(res))
  console.log(user)
  
    return <AppointmentPage user= {user} />
}

export default Page