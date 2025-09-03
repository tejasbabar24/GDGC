import React from 'react'
import left from "../assets/Left.png";
import right from "../assets/Right.png";
import cyber from "../assets/cyber.png";
import img from "../assets/web.png";

import ProjectCard from '../components/ProjectCard';


function Projects() {

    const sampleProject = {
  author: "Tejas Babar",
  authorImage: img, // replace with actual profile img
  image:cyber ,  // replace with actual project img
  name: "Academix",
  language: "MERN",
  tags: ["java", "css", "html"],
};

  return (
    <section className=' flex flex-col justify-center items-center'>
        <div className=' flex gap-4 justify-center items-center mt-10'>
            <img src={left} alt="" className=' h-24 ' />
            <h1 className=' text-4xl font-bold'> Our Projects </h1>
            <img src={right} alt="" className=' h-24 ' />
        </div>
        <div className='mt-10 '>
            <ProjectCard project={sampleProject} />
        </div>
    </section>
  )
}

export default Projects
