'use client'
import { patchFetch } from 'next/dist/server/app-render/entry-base';
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {


  const router = useRouter();
  const pathName = usePathname();

  console.log(patchFetch)











  


  function handleClick() {
      router.back();
  }




  return (
    <div className='cursor-pointer w-full h-screen flex items-center justify-center' onClick={handleClick}>
      go back to home page
    </div>
  )
}

export default Page