import { SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiRedis, SiPostman, SiMysql, SiGit, SiGithub } from "react-icons/si";
import ToolCard from "./ToolCard";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";
import { useSelector } from "react-redux";




const tools = [
  {
    index: 1,
    name: "C++",
    image: <SiCplusplus color="#00599C" size={40} /> // Blue
  },
  {
    index: 2,
    name: "HTML",
    image: <SiHtml5 color="#E34F26" size={40} /> // Orange
  },
  {
    index: 3,
    name: "CSS",
    image: <SiCss3 color="#1572B6" size={40} /> // Blue
  },
  {
    index: 4,
    name: "JavaScript",
    image: <SiJavascript color="#F7DF1E" size={40} /> // Yellow
  },
  {
    index: 5,
    name: "TypeScript",
    image: <SiTypescript color="#3178C6" size={40} /> // Blue
  },
  {
    index: 6,
    name: "React",
    image: <SiReact color="#61DAFB" size={40} /> // Cyan
  },
  {
    index: 7,
    name: "Tailwind",
    image: <SiTailwindcss color="#38BDF8" size={40} /> // Light Blue
  },
  {
    index: 8,
    name: "NodeJS",
    image: <SiNodedotjs color="#339933" size={40} /> // Green
  },
  {
    index: 9,
    name: "Express",
    image: <SiExpress color="#000000" size={40} /> // Black
  },
  {
    index: 10,
    name: "MongoDB",
    image: <SiMongodb color="#47A248" size={40} /> // Green
  },
  {
    index: 11,
    name: "Redis",
    image: <SiRedis color="#DC382D" size={40} /> // Red
  },
  {
    index: 12,
    name: "Postman",
    image: <SiPostman color="#FF6C37" size={40} /> // Orange
  },
  {
    index: 13,
    name: "MySQL",
    image: <SiMysql color="#4479A1" size={40} /> // Blue
  },
  {
    index: 14,
    name: "Git",
    image: <SiGit color="#F05032" size={40} /> // Orange
  },
  {
    index: 15,
    name: "GitHub",
    image: <SiGithub color="#181717" size={40} /> // Black
  }
];

function Aboutpage(){
  const color = useSelector((state) => state.theme.color)

// export default tools;


    return (
        <div className={`aboutPage ${color === "light" ? "whiteAbout" : "blackAbout"}`} name="About">
            <h2 className="aboutHeading mainHeading">About Me</h2>
            <div className="aboutSection">

                <div className="profileSection twoSections animatedCard">
                    <h2 className="headings">Profile</h2>
                    <p className="profilepara">I am a passionate and dedicated Full-Stack Developer with a strong foundation in <span className="blueColor"> Web Development </span> as well as <span className="blueColor"> Data Structures and Algorithms (DSA) </span>. With hands-on experience in technologies such as C++, JavaScript, React, Node.js, Express.js and MongoDB, I enjoy transforming ideas into efficient, user-friendly solutions.
                        <br></br>
                        <br></br>
                    I am constantly exploring new tools and frameworks to enhance my skills and keep up with the evolving tech landscape.
                    <br></br>
                        <br></br>
                    Beyond coding, I value teamwork, communication, and continuous learning. My goal is to contribute meaningfully to impactful projects and grow as a professional in the tech industry.</p>
                </div>
                <div className="educationSection twoSections animatedCard">
                    <h2 className="headings">Education</h2>
                    <div className="educationItem">
        <div className="eduYear">2022 – 2026</div>
        <div className="eduDegree">B.Tech (Computer Science)</div>
        <div className="eduInstitute">JSS Academy of Technical Education, Noida</div>
      </div>

      <div className="educationItem">
        <div className="eduYear">2021 – 2022</div>
        <div className="eduDegree">Senior Secondary (Class XII, PCM)</div>
        <div className="eduInstitute">Silver Oak Public School, Gangoh</div>
      </div>

      <div className="educationItem">
        <div className="eduYear">2019 – 2019</div>
        <div className="eduDegree">Secondary (Class X)</div>
        <div className="eduInstitute">Silver Oak Public School, Gangoh</div>
      </div>
                </div>
            </div>
            <div className="skillSection">
                <h2 className="techHeading">Tech Stack</h2>
                <div className="toolSection">
                    {
                        tools.map((tool) => (
                            <ToolCard key={tool.index} tool={tool}></ToolCard>
                        ))
                    }
                </div>
            </div>
            <hr className="horizrule"/>
        </div>
    )
}

export default Aboutpage;