"use client";
import { useRouter } from "next/navigation";
import React from 'react'

const useScrollNav = () => {
    const router=useRouter();

    const handleNavScroll=(id:string)=>{
      if(typeof window==="undefined") return;
      if(window.location.pathname!=='/'){
        router.push(`/#${id}`)
      }else{
        const el=document.getElementById(id)
        if(el){
            el.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        }
      }
    }
  return {handleNavScroll}
}

export default useScrollNav