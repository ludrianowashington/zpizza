import Image from "next/image"

import img from '../../public/logo-bg-preto.jpg'

interface IProduct {
  title: string
  image?: string
  description?: string
}

export function ProductCard(data: IProduct){
  return(
    <div className="flex  rounded-lg w-full max-w-md p-3 hover:shadow-zinc-400 transition-shadow duration-300 shadow-md shadow-slate-300 border-[1px]">
      <div className="flex w-[11rem] h-[11rem] mr-1 ">
        <Image className="object-cover rounded-md" src={!data.image?img:data.image} alt="Logo Empresa" quality={100}  />
      </div>
      <div className="px-2 h-full w-60 border-[1px] rounded-lg pt-1 border-red-600">
        <span className="text-lg font-bold uppercase text-red-600">{data?.title}</span>
        <div></div>
        <div className="text-xs font-normal text-red-600 italic pt-2">*Recomendação do dia</div>
        <div className="flex flex-col py-2 ">
          <span className="font-semibold text-sm">Ingredientes:</span>
          <span className="font-normal text-sm ">{data?.description}</span>
        </div>
        <button className="w-full h-8 rounded-lg bg-green-600 text-white font-bold text-sm mb-2">PEÇA AGORA</button>
      </div>
    </div>
  )
}