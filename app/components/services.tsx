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
          Desde soluciones a medida hasta optimización de sistemas existentes, en Sotai ofrezco desarrollo full-stack enfocado en resultados
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
    description: "Diseño y construyo aplicaciones web modernas, priorizando rendimiento, seguridad y escalabilidad.",
    link: "1",
  },
  {
    title: "Desarrollo de Software",
    icon: <FaLaptopCode />,
    description: "Creo sistemas personalizados para empresas que buscan optimizar procesos, automatizar tareas o mejorar su infraestructura digital.",
    link: "2",
  },
  {
    title: "Arquitectura y Escalabilidad",
    icon: <FaProjectDiagram />,
    description: "Diseño arquitecturas eficientes para garantizar el crecimiento sostenible de las aplicaciones, incluyendo microservicios y optimización de bases de datos.",
    link: "3",
  },
  {
    title: "Integraciones y API",
    icon: <FaPlug />,
    description: "Facilito la conectividad entre sistemas con APIs seguras y eficientes, integrando servicios de terceros, autenticación OAuth, pagos en línea y más.",
    link: "4",
  },
  {
    title: "Seguridad y DevOps",
    icon: <FaShieldAlt />,
    description: "Implemento CI/CD, infraestructura en la nube y automatización para garantizar aplicaciones ágiles, seguras y confiables.",
    link: "5",
  },
  {
    title: "Consultoría y Optimización",
    icon: <FaChartLine />,
    description: "Asesoro en optimización de rendimiento, migraciones a la nube y adopción de nuevas tecnologías para potenciar cualquier plataforma.", 
    link: "6",
  },
];
