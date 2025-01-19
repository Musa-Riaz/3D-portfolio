import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    py,
    dep,
    bdai,
    nust,
    proj1,
    proj2,
    proj3,
    proj4,
    proj5,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name:"Python",
      icon: py
    }
  ];
  
  const experiences = [
    {
      title: "Research Intern",
      company_name: "National Univeristy of Sciences and Technology (NUST)",
      icon: nust,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "Developed reports and presentations on the impacts of Artificial Intelligence on elections worldwide.",
        "Used Label Img to prepare and annotate various datasets.",
        "Used Google Collab to train YOLOv8 machine learning models with an accuracy of 91.3%.",
      ],
    },
    {
      title: "Full Stack Intern",
      company_name: "Digital Empowerment Pakistan (DEP)",
      icon: dep,
      iconBg: "#fff",
      date: "July 2024 - August 2024",
      points: [
       "Developed different projects for clients using React JS to create an immersive UI for the users, Node JS and express for the backend and MongoDB for database queries.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company_name: "Bluediamond.AI",
      icon: bdai,
      iconBg: "#E6DEDD",
      date: "August 2024 - September 2024",
      points: [
        "Used Figma to develop various Wireframes and mockups for the Pak-Austria Talent-bridge’s website..",
        "Developed various components and pages using React JS and Tailwind CSS.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Musa proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Musa does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Musa optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Delusion",
      description:
        "The Delusion Search Engine is a lightweight and efficient application designed for fast and user-friendly search experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: proj1,
      source_code_link: "https://github.com/Musa-Riaz/Delusion",
    },
    {
      name: "EduFlow",
      description:
        "EduFlow is a classroom management system which aims to provide instructors with accessibility to an independent platform to easily manage their classes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "shadcn",
          color: "purple-text-gradient",
        }
      ],
      image: proj2,
      source_code_link: "https://github.com/Darker98/EduFlow",
    },
    {
      name: "MernMart",
      description:
        "MernMart is a dynamic e-commerce platform built using the MERN stack that allows users to browse and purchase a wide range of products, offering a seamless shopping experience with features like user authentication, real-time cart updates, and secure payment processing. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: proj3,
      source_code_link: "https://github.com/Musa-Riaz/MernMart",
    },
    {
      name: "UrbanNest",
      description:
        "UrbanNest is a real estate marketing web application that connects property buyers and sellers. Built with the MERN stack, the platform features property listings with advanced filtering options, helping users find the perfect home or investment property.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: proj4,
      source_code_link: "https://github.com/Musa-Riaz/UrbanNest",
    },
    {
      name: "GoldsGym",
      description:
        "Golds Gym is a feature-rich fitness web application built with React, designed to help users discover and perform over 1000 exercises.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "materialui",
          color: "pink-text-gradient",
        },
      ],
      image: proj5,
      source_code_link: "https://github.com/Musa-Riaz/Golds_gym",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };