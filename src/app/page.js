'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  function handleClick(){ 
    router.push('products')
  }

  function accountHandler() {
    router.push("account")
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>welcome to next js course</h1>

      <Link href={"/products"}>navigate to the products page</Link>


      <h1 className="mt-5 text-5xl font-bold cursor-pointer" onClick={handleClick}>Alternative way to navigatings</h1>

      <h1 onClick={accountHandler} className="mt-5 text-5xl font-bold cursor-pointer">go to account</h1>


      
    </main>
  );
}
