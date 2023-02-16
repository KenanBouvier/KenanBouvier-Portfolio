import React from 'react'
import Project from '../Project/Project';
import projectData from './../../public/projectData';
import './style.css';

export default function ProjectList(){
  return (
    <div className='listProject'>
       {projectData.map((project,key)=>{
        return(
          <Project key={key} data={project}/>
        )
       })}
    </div>
  )
}
