"use client"

import { FaChartLine, FaCode, FaLaptopCode, FaPlug, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";
import { HoverEffect } from "./ui/card-hover-effect";

export function Services() {
  return (
    <section id="services">
      <div className="flex flex-col items-center mt-20">
        <h1 className="heading lg:max-w-[45vw]">
          Servicios
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Transformamos ideas en software funcional y escalable. Si buscas soluciones personalizadas para tu negocio, Sotai es tu mejor aliado en el desarrollo de software full-stack.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "Desarrollo Web",
    icon: <FaCode />,
    description:
      "Creamos experiencias digitales intuitivas y eficientes, utilizando tecnologías modernas para garantizar rendimiento, seguridad y escalabilidad. Desde aplicaciones web dinámicas hasta plataformas empresariales avanzadas, trabajamos con frameworks y herramientas de vanguardia.",
    link: "1",
  },
  {
    title: "Desarrollo de Software",
    icon: <FaLaptopCode />,
    description:
      "Diseñamos soluciones personalizadas para empresas que buscan optimizar procesos, automatizar tareas o mejorar su infraestructura digital. Nos aseguramos de que cada sistema sea modular, mantenible y perfectamente integrado con su ecosistema tecnológico.",
    link: "2",
  },
  {
    title: "Arquitectura y Escalabilidad",
    icon: <FaProjectDiagram />,
    description:
      "Diseñamos arquitecturas eficientes para garantizar el crecimiento sostenible de las aplicaciones. Implementamos microservicios, optimización de bases de datos y balanceo de carga para asegurar alta disponibilidad y rendimiento.",
    link: "3",
  },
  {
    title: "Integraciones y API",
    icon: <FaPlug />,
    description:
      "Facilitamos la conectividad entre sistemas mediante el desarrollo de APIs seguras y eficientes. Integramos servicios de terceros, autenticación OAuth, pagos en línea y más.",
    link: "4",
  },
  {
    title: "Seguridad y DevOps",
    icon: <FaShieldAlt />,
    description:
      "Nos enfocamos en la seguridad de las aplicaciones mediante pruebas rigurosas, monitoreo continuo y mejores prácticas en DevOps. Implementamos CI/CD, infraestructura en la nube y automatización para una entrega ágil y confiable.",
    link: "5",
  },
  {
    title: "Consultoría y Optimización",
    icon: <FaChartLine />,
    description:
      "Asesoramos a empresas y startups en la optimización de sus aplicaciones, mejora de rendimiento, migraciones a la nube y adopción de nuevas tecnologías. Nuestro equipo está listo para analizar y potenciar cualquier plataforma tecnológica.",
    link: "6",
  },
];
