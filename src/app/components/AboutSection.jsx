"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Front End - (Angular,React - (Next js))</li>
        <li>Back End - ( Node.js,Express js,Spring Boot - (Hibernate))</li>
        <li>Database - (MongoDB,MySQL)</li>
        <li>Javascript,Typescript </li>
        <li>Bootstrap,Tailwind Css</li>
        <li>Css</li>
        <li>Html</li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          07-2022 - 11-2024
          <br />
          Developed and designed scalable web applications utilizing Angular,
          Spring Boot, MySQL, and REST APIs and Reduced bounce rate by 87% and
          improved load time by 87% through responsiveness optimization
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span
            onClick={() =>
              window.open(
                "https://lms.intellipaat.com/certificate-link/?Yz0yMzgxOTYmdT0xNTYxNDEmZXh0PTE=",
                "_blank"
              )
            }
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Full Stack Web Developer - Mean Stack
          </span>
        </li>
        <li>
          <span
            onClick={() =>
              window.open(
                "https://lms.intellipaat.com/certificate-link/?Yz0yNzM5MyZ1PTE1NjE0MSZleHQ9MQ==",
                "_blank"
              )
            }
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Angular Training
          </span>
        </li>

        <li>
          <span
            onClick={() =>
              window.open(
                "https://lms.intellipaat.com/certificate-link/?Yz0zMDkyMTQmdT0xNTYxNDEmZXh0PTE=",
                "_blank"
              )
            }
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            React JS Training
          </span>
        </li>

        <li>
          <span
            onClick={() =>
              window.open(
                "https://lms.intellipaat.com/certificate-link/?Yz0yMzg0MDYmdT0xNTYxNDEmZXh0PTE=",
                "_blank"
              )
            }
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Node Js Training Course
          </span>
        </li>

        <li>
          <span
            onClick={() =>
              window.open(
                "https://lms.intellipaat.com/certificate-link/?Yz0yOTM3JnU9MTU2MTQxJmV4dD0x",
                "_blank"
              )
            }
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            MongoDB Training
          </span>
        </li>

        <li>
          <span
            onClick={() =>
              window.open(
                "https://lms.intellipaat.com/certificate-link/?Yz0yODUzJnU9MTU2MTQxJmV4dD0x",
                "_blank"
              )
            }
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Microsoft SQL Certification Training
          </span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="" src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript,Angular, React, Node.js, Express, Mongodb,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
