import React from 'react'
import Image from 'next/image'

export default function ImageComponentity({ src, alt = 'image', classes = 'h-52 w-full' }) {
  return (
    <div className={`relative hover:filter-none transition duration-300 ease-in-out ${classes}`}>
      <Image layout='fill' objectFit='cover' priority='true' src={src} alt={alt} />
    </div>
  )
}
