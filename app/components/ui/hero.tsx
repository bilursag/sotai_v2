import { TextGenerateEffect } from "./text-generated-effect"
import MagicButton from "./magic-button"
import { FaLocationArrow } from "react-icons/fa"
import { Spotlight } from "./spotlight"

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.12] bg-dot-black/[0.1] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>  
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="my-[200px]">
            <p className="uppercase tracking-widest text-xs text-center max-w-80">
              Desarrollo de Software a Medida
            </p>
            <TextGenerateEffect
              words="Sotai"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              総体
            </p>
            <MagicButton 
              title="Ver servicios"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </div>   
      </div>
    </div>
  )
}

export default Hero

