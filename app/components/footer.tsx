/* eslint-disable @next/next/no-img-element */
import { FaEnvelope } from "react-icons/fa"
import MagicButton from "./ui/magic-button"
import { socialMedia } from "../data"

const Footer = () => {
  return (
    <section id="contact">
      <footer className="w-full pt-40 pb-10" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            ¿Necesitas ayuda con tu proyecto?
          </h1>
          <p className="text-white md:mt-10 my-5 text-center">
            Si buscas un desarrollo a medida o asesoramiento para optimizar tu software, estaré encantado de ayudarte. 
          </p>
          <p className="text-white mb-4 text-center">
            Envíame un mensaje y conversemos sobre lo que necesitas.
          </p>
          <a href="mailto:franciscomuniozs@gmail.com">
            <MagicButton
              title="Contacto"
              icon={<FaEnvelope />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2025 Sotai
          </p>
          <div className="flex items-center my-4 md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-white"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer