import React from "react";

export default function Header(){
  return(<>
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-start-1 col-span-3 md:text-lg4 text-md3 font-Krona-One flex items-center'>
        Org, Inc.
      </div>
      <div className='col-start-4 col-span-6 flex items-center justify-self-center text-center text-page-title'>
        Thursday, September 19, 2023
      </div>
    </div>
  </>)
}