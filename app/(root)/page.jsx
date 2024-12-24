"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
// import "../globals.css";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Button from "@/components/Button";

import Hr from "@/components/Hr";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import LongFormCarousel from "@/components/Long Form Video carousel";
import Testimonials from "@/components/Testimonials";


const MyPage = () => {
  const fullpageOptions = {
    anchors: ["home", "projects", "contact"],
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
    menu: "#sidebar",
    lockAnchors: false,
  };

  const VideoLink = [" https://www.youtube.com/embed/wmkoEzDVc18"];

  return (
    <div>
      <ReactFullpage
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            {/* Main Section */}
            <div className="section">
              <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
                <motion.div
                  className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                  }}
                >
                  <motion.h3
                    className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                  >
                    Asif Ali
                  </motion.h3>
                  <motion.h1
                    className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                    }}
                  >
                    Video Editor
                  </motion.h1>
                  <motion.p
                    className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.4,
                      type: "spring",
                    }}
                  >
                    I'm Asif Ali, a video editor with 5 years of experience
                    working with top creators. I’ve helped one creator grow from
                    5k to 90k followers in a year and generated over 50 million
                    views across my projects. Let’s work together to take your
                    content to the next level!
                  </motion.p>
                  <motion.div
                    className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                    }}
                  >
                    <Button variation="secondary">
                      <a href="#contact">Contact Me</a>
                    </Button>
                  </motion.div>
                </motion.div>
                {/* Main Page Photo */}
                <div>

                <iframe
                src={VideoLink}
                title={`Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  top: 0,
                  left: 0,
                  width: '120%',
                  height: '150%',
                }}
                ></iframe>
                </div>
              </div>
            </div>
            {/* Projects */}
            <div className="section ">
              <div className="relative bottom-[200px] mb-10 md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                <div className="z-10 w-full  absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                  <motion.h1
                    className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0  text-black text-5xl md:text-8xl font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                    }}
                  >
                    Clients Testimonials
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                  >
                    These are some of my Clients Testimonials{" "}
                  </motion.p>
            
                </div>
              </div>
                    <Testimonials/>
            </div>
            {/* Footer */}
            <div className="section">
              <div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
                  <motion.div
                    className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
                    initial={{
                      x: 300,
                      opacity: 0,
                      z: -100,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      z: 0,
                    }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    {/* Footer Image */}
                    {/* <Image
                      src={Setup}
                      layout="fill"
                      className="object-cover"
                      alt="Alvalens Setup"
                      placeholder="blur"
                    /> */}
                  </motion.div>
                </div>
                <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
                  <motion.h1
                    className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold mb-3"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                    }}
                  >
                    Get In Touch
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                  >
                    Feel free to contact me if you have any{" "}
                    <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                      questions or just want to say hi.
                    </span>
                  </motion.p>
                  <motion.p
                    className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                    }}
                  >
                    <a href="mailto:asif553381@gmail.com?subject=Hello&body=Hello Asif,">
                      asif553381@gmail.com
                    </a>
                  </motion.p>
                  {/* icons */}
                  <div className="flex justify-center items-center space-x-4">
                    <motion.a
                      href="mailto:asif553381@gmail.com?subject=Hello&body=Hello Asif Ali,"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        y: { delay: 0.1 },
                        opacity: { delay: 0.2 },
                      }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/asifalihunzae/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.3 },
                        opacity: { delay: 0.4 },
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-3xl"
                      />
                    </motion.a>
                    <motion.a
                      href="https://ytjobs.co/talent/profile/114286?r=742&utm_campaign=share-profile&utm_ref=talent&utm_source=copylink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.4 },
                        opacity: { delay: 0.5 },
                      }}
                    >
                      <FontAwesomeIcon icon={faYoutube} className="text-3xl" />
                    </motion.a>
                    <motion.a
                      href="https://discordapp.com/users/bloody#6118"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.5 },
                        opacity: { delay: 0.6 },
                      }}
                    >
                      <FontAwesomeIcon icon={faDiscord} className="text-3xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
        {...fullpageOptions}
      />
    </div>
  );
};

export default MyPage;
