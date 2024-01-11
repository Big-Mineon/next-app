import React from "react";
import { useState } from 'react'

export default function Navbar(){
  const [nav, setNav] = useState('summary')

  const handleNavClick = (nav: string) =>{
    setNav(prev=>nav)
  }

  return(<>
    <div className='flex gap-x-24px py-3 my-8 border-t border-b border-light'>
      <div 
        className={`${nav=='summary'?'text-active cursor-pointer':'cursor-pointer'}`}
        onClick={() => handleNavClick('summary')}
      >
        Summary
      </div>
      <div 
        className={`${nav=='finance'?'text-active cursor-pointer':'cursor-pointer'}`}
        onClick={() => handleNavClick('finance')}
      >
        Finance
      </div>
      <div className='ml-auto'></div>
    </div>
  </>)
}