import { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Reusable NavLink component for consistency
  const NavLink = ({ href, children }) => (
    <a href={href} className="text-gray-300 hover:text-white">
      {children}
    </a>
  );

  return (
    <>
      <nav className="bg-[#231F20] p-9 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-[2rem] font-bold">
            <span className="font-lg">Emma</span>nuel
          </div>

          <div className="hidden md:flex gap-12">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="https://chatgpt.com/c/67e99e38-4eb4-8002-9974-7fedb4fe5b11">
              Work
            </NavLink>
          </div>

          <a
            href="http://localhost:5173/"
            className="hidden md:block text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700"
          >
            <FaGithub className="text-5xl" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
            aria-expanded={isOpen ? "true" : "false"}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-gray-700 text-white py-4 space-y-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>

            <a className="p-2 hover:bg-gray-600 rounded-full">
              <FaGithub className="text-2xl" />
            </a>
          </div>
        )}
      </nav>

      <div className="w-full h-screen bg-[#231F20] flex flex-col lg:flex-row items-center justify-between px-5 lg:p-9">
        <div className="w-full lg:w-[700px] h-[300px] lg:h-[550px] flex flex-col justify-center text-left px-4">
          <p className="text-white text-[1.5rem]">Hello, I'm Emmanuel,</p>
          <h1 className="text-[#86a6d9] text-[3rem] lg:text-[7rem] font-bold">
            Full Stack
          </h1>
          <h1 className="text-[#86a6d9] text-[3rem] font-bold lg:text-[7rem]">
            Developer
          </h1>
          <NavLink
            href="/services"
            className="hover:text-gray-300 underline decoration-[#86a6d9] text-white"
          >
            Contact Me
          </NavLink>
        </div>

        <div className="w-full lg:w-[500px] h-[450px] lg:h-[600px] mt-4 lg:mt-0">
          <img
            src="/pro.png"
            alt="Emmanuel's Profile Picture"
            className="w-full h-full rounded-lg shadow-md object-cover aspect-[16/9] object-top rounded-full"
          />
        </div>
      </div>

    
      <section className="w-full h-[50vh] lg:h-[25vh] bg-[#231F20] flex flex-col lg:justify-normal px-5 lg:p-9 pt-6 lg:pt-0">
     
        <div className="flex items-center">
          <h1 className="text-[#86a6d9] text-4xl lg:text-5xl font-bold mr-6">
            About
          </h1>
          <div className="flex-1 h-[3px] bg-[#86a6d9]"></div>
        </div>

    
        <div className="mt-8 text-gray-300 lg:text-1xl">
          <p>
            I am a passionate Full Stack Developer with experience in building
            modern, responsive web applications. My expertise includes both
            front-end and back-end development, and I enjoy turning complex
            problems into simple, beautiful, and intuitive designs. When I'm not
            coding, you can find me exploring new technologies or spending time
            outdoors. I believe in continuous learning and am always looking for
            new challenges that push my limits.
          </p>
        </div>
      </section>

      <div className="w-full h-[30vh] lg:h-[20vh] flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-center bg-[#231F20]">
        <div>
          <h1>
            <span className="text-4xl text-white font-bold">Front-End</span>
            <br />
            <NavLink
              href="/services"
              className="hover:text-gray-300 underline decoration-[#86a6d9] text-white"
            >
              5+ Month Experience
            </NavLink>
          </h1>
        </div>
        <div>
          <h1>
            <span className="text-4xl text-white font-bold">Python</span>
            <br />
            <NavLink
              href="/services"
              className="hover:text-gray-300 underline decoration-[#86a6d9] text-white"
            >
              1+ hour Experience
            </NavLink>
          </h1>
        </div>
        <div>
          <h1>
            <span className="text-4xl text-white font-bold">JavaScript</span>
            <br />
            <NavLink
              href="/services"
              className="hover:text-gray-300 underline decoration-[#86a6d9] text-white"
            >
              2+ Month Experience
            </NavLink>
          </h1>
        </div>
      </div>
      <section className="w-full h-[50vh] lg:h-[25vh] bg-[#231F20] flex flex-col lg:justify-normal px-5 lg:p-9 pt-6 lg:pt-0">
      
        <div className="flex items-center">
          <h1 className="text-[#86a6d9] text-4xl lg:text-5xl font-bold mr-6">
            Work
          </h1>
          <div className="flex-1 h-[3px] bg-[#86a6d9]"></div>
        </div>

      
        <div className="mt-8 text-gray-300 lg:text-1xl">
          <p>
            As a 13-year-old passionate and fast-growing coder, I am always
            excited to work on new projects and improve my skills. Despite my
            age, I have built a solid foundation in Full Stack Development and
            am continually exploring new technologies to create dynamic,
            interactive web applications. I am eager to take on new challenges
            and expand my portfolio as I grow as a developer.
          </p>
        </div>
      </section>
      <div className="w-[100%] h-[150vh] lg:h-[90vh] bg-red-300">

      </div>
    </>
  );
}
