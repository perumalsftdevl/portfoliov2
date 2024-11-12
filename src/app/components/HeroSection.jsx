"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-9 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Perumal",
                1000,
                "Full Stack Developer",
                1000,
                "Backend Developer",
                1000,
                "UI/UX Developer",
                1000,
              ]}
              wrapper="span"
              speed={0}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg col-span-4 lg:text-xl w-4/5">
            Leveraging 2+ years of experience, I have successfully delivered 10+
            high-impact projects, consistently demonstrating a strong commitment
            to excellence and measurable results.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <div
              onClick={() =>
                window.open(
                  "https://firebasestorage.googleapis.com/v0/b/portfolio-c84b8.appspot.com/o/PerumalPResume-FullStack.pdf?alt=media&token=f4f58e30-b4c0-4131-8d60-dda691d1a49b"
                )
              }
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-3 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full hidden bg-[#181818] w-[250px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="https://i.pinimg.com/736x/e5/4d/a0/e54da0f2d4fd2eef7e269d3c14e2cbbf.jpg"
              alt="hero image"
              className=" transform static rounded  -scale-x-100 hidden"
              width={300}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
