"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "3D Portfolio Website",
    description:
      "This project involves building an interactive portfolio website using React and Three.js to create 3D visualizations and animations. The aim is to provide an engaging user experience that highlights personal projects, skills, and professional achievements in a unique, dynamic manner.",
    image: "/images/capture.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://perumalsftdevl.vercel.app/",
  },
  {
    id: 2,
    title: "AI-Saas",
    description:
      "AISaaS is a dynamic SaaS application utilizing Next.js, OpenAI, Replicate, Tailwind CSS, Prisma, Clerk, and Stripe to deliver AI-powered services. It empowers users by enabling seamless integration of AI into their projects and workflow.",
    image: "/images/capture1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/perumalsftdevl/AI-Saas",
    previewUrl: "https://ai-sass-git-dev-perumalsftdevls-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Real Estate App: Build a Modern Marketplace.",
    description:
      "Firebase, and Google OAuth for secure access.Implement advanced authentication with JWT, Enable real-world CRUD operations for property listings, including image uploads, using MongoDB. Enhance the platform with intuitive property management features and advanced search functionality for a seamless user experience",
    image: "/images/capture2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/perumalsftdevl/Real_Estate",
    previewUrl: "https://real-estate-iupy.vercel.app/",
  },
  {
    id: 4,
    title: "E-Commerce Responsive MERN Stack",
    description:
      "Build an e-commerce website with essential features like filtering, searching, adding to cart,purchasing, image zoom, and CRUD operations using Express.js and JWT authentication. Simplify development and enhance user experience with a modern, intuitive UI.",
    image: "/images/capture3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/perumalsftdevl/e-Commerce-front-end",
    previewUrl: "https://perumalsftdevls-e-commerce-front-end.vercel.app/",
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
