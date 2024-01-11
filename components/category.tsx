import React from "react";
import { capitalizeFirstWord } from "@/app/utilize/sentence";

interface CategoryProps {
  title: string,
  description: string,
  mark: string,
}

export default function Category(props:CategoryProps){
  return(<>
    <div className=" p-3">
      <div className='text-sm3 pb-vh-5 h-fit'>
        {(props.title).toUpperCase()}
      </div>
      <div className='mobile:text-md5  tablet:text-md2 laptop:text-md5 xl:text-md2 py-vh-1 font-light'>
        {capitalizeFirstWord(props.description)}
      </div>
      <div>
        <div className='flex'>
          <div className='w-4 m-1'>
            <img
              className=''
              src='/images/Vector.svg'
            />
          </div>
          <div className='text-sm3 text-light w-11/12'>
            {capitalizeFirstWord(props.mark)}
          </div>
        </div>
      </div>
    </div>
  </>)
}