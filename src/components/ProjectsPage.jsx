import wanderlust from "../assets/wanderlust.jpg"
import coding from '../assets/Coding-background.jpg'
import { FiExternalLink } from "react-icons/fi";

export default function ProjectsPage(){
    return(
        <div className="projectsPage" name="Projects">
            <h2 className="projectHeading mainHeading"> Projects</h2>
            <div className="projSection">
                {/* <h3 className="subHeading">My Creations</h3> */}
                <div className="projCards">
                    <div className="pcard">
                        <img src={wanderlust} alt="" className="cardImage" />
                        <div className="hiddenCard">
                            <h3>Wanderlust</h3>
                            <p>Wanderlust is a full-stack web application inspired by Airbnb, designed to help users explore, list, and book rental properties. The platform focuses on providing an intuitive user experience for travelers and hosts.</p>
                            <a href="">
                                <FiExternalLink size={24} color="#4B776Aaa" className="openIcon" />
                            </a>
                            {/* <a target="_blank" href="https://cravecart-swiggy-clone.vercel.app/">
                                <FiExternalLink size={24} color="#4B776Aaa" className="openIcon" />
                            </a> */}
                        </div>
                    </div>
                    <div className="pcard">
                        <img src={coding} alt="" className="cardImage" />
                        <div className="hiddenCard">
                            <h3>PrepMate</h3>
                            <p>Developed a full-stack web application designed to help students and professionals prepare for job interviews effectively. The platform provides structured resources, practice questions, and AI-powered assistance for mastering technical and HR interview rounds.</p>
                            <a href="">
                                <FiExternalLink size={24} color="#4B776Aaa" className="openIcon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="horizrule"/>
        </div>
    )
}