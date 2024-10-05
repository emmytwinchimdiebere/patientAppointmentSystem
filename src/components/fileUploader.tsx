"use client"
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Image  from  "next/image"
import { convertFileToUrl } from '@/lib/utils'
import uploadIcon  from  "../../public/assets/icons/upload.svg"

interface fileType{

    files : File[],
    onChange: (file:File[])=>void
}
function FileUploader({files,  onChange} : fileType) {
  const onDrop = useCallback((acceptedFiles:File[] )=> {
    onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive, fileRejections} = useDropzone({onDrop,  accept:{
    "image/png":[],
    "image/jpg":[]
  }})

  const  fileRejectionError  =  fileRejections?.map(({file,  errors})=>{

    {errors?.map((error)=>{
      return(
        <div key = {error?.code}  className='relative  flex  justify-center'>
          <span className=' text-pretty font-light text-red-800'>{error?.message}</span>
        </div>
      )
    })}

  })

  return (
    <div {...getRootProps()} className="file-upload" >
      <input {...getInputProps()} />

      {files &&  files.length > 0 ? (
        <Image src = {convertFileToUrl(files[0])} alt= "file upload" width = {500} height= {500} className="relative  object-cover overflow-hidden" />
      ) : (
        <Image src={uploadIcon}  alt="upload Icon" width={48} height={48} /> 
      )}
      <p className=' text-green-700 font-light '>Click to  upload
        <span className="text-white"> or Drag & drop</span>
      </p>
      <p className='text-white'>Svg, Png, Jpg , Jpeg , Gif </p>
        {isDragActive ? (<></>) : (<></>)}
    </div>
  )
}

export default FileUploader