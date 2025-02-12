"use client"

import { projects } from "../data"
import { HoverEffect } from "./ui/card-hover-effect"


const Grid = () => {
  return (
    <section id="about">
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  )
}

export default Grid