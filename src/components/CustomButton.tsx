
'use client';

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

const CustomButton = ({title, containerStyles, btnType, rightIcon}: CustomButtonProps) => {
  return (
    <button
       disabled={false} 
       type={btnType || "button"}
       className={`custom-btn ${containerStyles} transition-all duration-200 hover:scale-105`}>
        <span className="flex-1 font-semibold">
         {title}
        </span>
        {rightIcon && (
          <div className="relative w-4 h-4 sm:w-6 sm:h-6 ml-2">
            <Image
              src={rightIcon}
              alt="arrow_left"
              fill
              className="object-contain"
            />
          </div>
        )}
    </button>
  )
}

export default CustomButton