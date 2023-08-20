import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";

import imgLogo from '../../public/bg-fundo.png';
import imgLogoSquare from '../../public/logo.png';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col  w-full">
      <div className="flex flex-col w-[100%] h-[90vh]">
        <div className="w-[100%] h-[90vh] bg-black opacity-70">
          <Image src={imgLogo} className="object-cover w-full h-full" alt="Logo Empresa"  quality={100} placeholder="blur" />
        </div>
        <div className="absolute flex flex-col  h-[96vh] top-28  left-24 ">
          <Image src={imgLogoSquare} className="w-72" alt="Logo Pizzaria" quality={100} placeholder="empty" />

          <span className=" font-medium text-xl w-[400px] left-5">Pizzas exageradamente recheadas e saborosas, massas frescas, de fabricação própria, produzidas com ingredientes da melhor qualidade. .</span>

          <button className=" w-56 h-14 mt-10 px-4 rounded-lg bg-red-600 font-semibold hover:opacity-90 ">PEÇA AGORA</button>
        </div>
      </div>

      <div className="flex flex-col w-full h-[43rem] bg-slate-100 text-black items-center p-6">
        <div className="text-3xl p-3 font-black text-red-800">Peça a sua pizza online agora!</div>
        <div></div>
        <p className="text-slate-500 text-xl w-[60rem] ">
          Aproveite a nossa promoção! Comprando a nossa recomendação de pizza do <br/>
          dia você acumula pontos para a próxima compra. Quantos mais pontos você <br/>
          acumular, maior será o desconto na próxima compra.
        </p>

        <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full max-w-4xl items-center mt-8 p-4">
          <ProductCard title="Nome Pizza" description="Descricao de pizza"/>
          <ProductCard title="Nome Pizza" description="Descricao de pizza"/>
          <ProductCard title="Nome Pizza" description="Descricao de pizza"/>
          <ProductCard title="Nome Pizza" description="Descricao de pizza"/>
        </div>
      </div>
    </main>
  )
}
