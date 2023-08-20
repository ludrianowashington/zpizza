'use client'

import Image from "next/image"

import bgImageLogo from '../../public/logo-horizontal.png'

export function Header() {
  return (
    <header className="flex w-full h-[8vh] border-b-red-600 border-b-2 justify-center items-center" >
      <Image className="object-cover object-center" src={bgImageLogo} height={25} alt="Logo da Pizzaria" />
    </header>
  )
}