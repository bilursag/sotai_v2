"use client"

import React from "react"
import Image from "next/image"
import { WobbleCard } from "./ui/wobble-card"
import { TextGenerateEffect } from "./ui/text-generated-effect"
import { CodeBlock } from "./ui/code-block"

const Features = () => {
  const code = `const DummyComponent = () => {
    const [count, setCount] = React.useState(0);    
    const handleClick = () => {
      setCount(prev => prev + 1);
    };
      return (
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
          <p className="mb-2">Fight Club Fights Count: {count}</p>
          <button 
            onClick={handleClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment
          </button>
        </div>
      );
    };
  `;
  return (
    <section id="work">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-center justify-center">
          <TextGenerateEffect
            words="
              Cada proyecto en el que he trabajado ha sido una oportunidad para perfeccionar habilidades y aportar soluciones efectivas.
            "
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-variant min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Desarrollador Independiente (Hasta 2025)
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              He colaborado directamente con distintas empresas y marcas, 
              desarrollando software a medida en web y backend, 
              adaptándome a diferentes industrias y necesidades específicas.
            </p>
          </div>
          <div className="relative sm:absolute md:absolute lg:absolute -right-4 lg:-right-[10%] sm:top-[50%] xs:top-[50%] lg:top-[15%] -bottom-20 object-contain rounded-2xl w-[500px] h-[500px]">
            <CodeBlock
              language="jsx"
              filename="DummyComponent.jsx"
              highlightLines={[9, 13, 14, 18]}
              code={code}
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-variant min-h-[300px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Desarrollador Ruby on Rails en TuneCore (Hasta 2023)
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Trabajé en la implementación y mejora de funcionalidades clave, contribuyendo a la estabilidad y crecimiento de la plataforma.
            </p>
          </div>
          <Image
            src="/tunecore.svg"
            width={400}
            height={400}
            alt="tunecore logo"
            className="sm:absolute md:absolute lg:absolute -right-10 md:bottom-[30%] md:left-[50%] lg:top-[30%] lg:left-[50%] lg:right-[5%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-variant min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gobierno Regional de Los Ríos (Hasta 2021)
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Desarrollé y mantuve aplicaciones internas para optimizar procesos administrativos y mejorar la eficiencia operativa.
          </p>
        </WobbleCard>
      </div>
    </section>
  )
}

export default Features