
import Logo1 from "../assets/profile-removebg-preview.png"
// function About() {
//   return (
//     <div className="hero bg-base-200 min-h-screen bg-body h-screen" id="#about">
//   <div className="flex flex-col lg:flex-row ">
//     <img
//       src={Logo1}
//       className=" w- h-72 rounded-xl" />
//     <div className="w-4/5">
//       <h1 className="text-5xl font-bold text-gray-300">My Expertise</h1>
//       <p className="py-2 w-45 text-gray-300 ">
//       Web Development: I specialize in building clean, efficient, and responsive web pages using HTML, CSS, and JavaScript. 
//       I focus on writing code that is both maintainable and scalable.
//       </p>
//       <button className="btn btn-primary">Contact Me</button>
//     </div>
//   </div>
// </div>
//   )
// }

// export default About
import React from 'react';

const About = () => {
  return (
    <section className="about section pt-32 py-6" id="about">
      <div className="about__container container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 content-center">
        {/* About Data */}
        <div className="about__data mt-6">
          <h1 className="section__subtitle text-3xl font-semibold">
            My <span className="text-indigo-500">Intro</span>
          </h1>

          <h2 className="section__title text-4xl font-bold mt-4 mb-4">
            About Me
          </h2>

          <p className="about__description text-lg text-gray-600 mb-6">
            Frontend developer, I create web pages with HTML, CSS, JavaScript, and React. Clients are happy with the projects carried out.
          </p>

          <a
            href="#contact"
            className="button inline-block bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
          >
            Contact Me
          </a>
        </div>

        {/* About Image */}
        <div className="w-[500px]">
          <svg
            className="about__blob w-full h-auto"
            viewBox="0 0 550 592"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="maskBorder" mask-type="alpha">
              <path
                d="M263 48.1782C270.426 43.891 279.574 43.891 287 48.1782L501.157 
                  171.822C508.583 176.109 513.157 184.032 513.157 192.606V439.894C513.157 
                  448.468 508.583 456.391 501.157 460.678L287 584.322C279.574 588.609 
                  270.426 588.609 263 584.322L48.843 460.678C41.4174 456.391 36.843 448.468 36.843 
                  439.894V192.606C36.843 184.032 41.4174 176.109 48.843 171.822L263 48.1782Z"
                fill="black"
              />
            </mask>
            <g mask="url(#maskBorder)">
              <rect
                x="37"
                width="476"
                height="630"
                fill="url(#pattern2)"
              />
              <path
                d="M285 51.6423L499.157 175.286C505.345 178.859 509.157 185.461 509.157 
                  192.606V439.894C509.157 447.039 505.345 453.641 499.157 457.214L285 
                  580.858C278.812 584.43 271.188 584.43 265 580.858L50.843 457.214C44.655 453.641 
                  40.843 447.039 40.843 439.894V192.606C40.843 185.461 44.655 178.859 50.843 
                  175.286L265 51.6423C271.188 48.0697 278.812 48.0696 285 51.6423Z"
                stroke="black"
                strokeWidth="10"
              />
            </g>

            <rect
              x="37"
              width="476"
              height="300"
              fill="url(#pattern3)"
            />

            <defs>
              <pattern
                id="pattern2"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBorder"
                  transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                />
              </pattern>

              <pattern
                id="pattern3"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBorder"
                  transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
                />
              </pattern>

              {/* Profile Image */}
              <image
              
                id="imageBorder"
                width="640"
                height="940"
                href={Logo1}
              />
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
