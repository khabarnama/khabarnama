import React from 'react'
import Image from 'next/image'

export default function ImageComponentity({ src, alt, classes = 'h-52 w-full' }) {
  return (
    <div className={`relative bg-gray-100 ${classes}`}>
      <Image
        layout='fill'
        objectFit='cover'
        priority='true'
        blurDataURL='LPH21ORk-pNH_Nr?kDkC%NRjxuR+'
        placeholder='blur'
        src={src}
        alt={alt}
      />
    </div>
  )
}
