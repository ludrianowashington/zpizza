'use client'

import Image from "next/image"

import bgImageLogo from '../../public/logo-horizontal.png'

export function Header() {
  return (
    <header className="flex w-full h-[12vh] px-9 border-b-red-600 border-b-2 items-center " >
      <Image className="object-cover object-center" src={bgImageLogo} height={30} alt="Logo da Pizzaria" />
      <div>

      </div>
    </header>
  )
}