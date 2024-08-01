import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {

    const user = null;


    if (!user) redirect("/profile") 

  return (
    <div>
      this is your account page
    </div>
  )
}

export default page
