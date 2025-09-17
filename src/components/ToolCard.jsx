import { SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiRedis, SiPostman, SiMysql, SiGit, SiGithub } from "react-icons/si";

function ToolCard ({tool}){
    // console.log("HII")
    return(
        <div className="toolCard">
            {/* <img src={tool.image} alt= {tool.name} /> */}
            <span>{tool.image}</span>
            <span className="toolName">{tool.name}</span>
        </div>
    )
}
export default ToolCard;