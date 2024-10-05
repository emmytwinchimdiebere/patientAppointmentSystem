import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import { users } from '../../../../../appwrite.config'
import { parseUserData } from '@/lib/utils'
import Registeration from '@/components/registeration'
 
export type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
 const user = await users.get(id).then((res) => parseUserData(res))
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: user?.email,
    description:"",
    openGraph: {
       
      images: [{url:"", width:"",  height:"",  alt:""  }, ...previousImages],
      description:"",
      url:"",
      title:"",
      type:"profile",
      siteName:"",
      locale:"en_US"


    },
  }
}


interface props {
  params: { id: string }
}

const Page = async  ({params:{id}}:props) => {
  const user = await users.get(id).then((res) => parseUserData(res))
  return (
  <Registeration userId = {user}/>
  )
}

export default Page