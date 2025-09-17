import {FaLaptopCode, FaServer} from "react-icons/fa"
import { useSelector } from "react-redux";

function ServicesPage(){
  const color = useSelector((state) => state.theme.color)

    return(
        <div className={`servicePage ${color==="light" ? "whiteService" : "blackService"}`} name="Services">
            <h2 className="servicesHeading mainHeading">Services</h2>
            <div className="serviceSection">
                {/* <h2 className="offerHeading subHeading">What I Offer</h2> */}
                <div className="allCards">
                <div className="service-card animatedCard">
        <FaLaptopCode size={50} color="#27AE60" />
        <h3 className="dev">Frontend Development</h3>
        <p className="servicePara">
          I create responsive, user-friendly, and visually appealing interfaces
          using modern technologies like <b>React, Tailwind CSS, and JavaScript</b>.
          My focus is on delivering seamless user experiences with clean design
          and performance in mind.
        </p>
      </div>

      {/* Backend */}
      <div className="service-card animatedCard">
        <FaServer size={50} color="#27AE60" />
        <h3 className="dev">Backend Development</h3>
        <p className="servicePara">
          I build robust, secure, and scalable backend systems using
          <b> Node.js, Express, and databases like MongoDB & MySQL</b>. From APIs
          to authentication, I ensure the architecture is efficient and reliable
          to support real-world applications.
        </p>
      </div>
      </div>
            </div>
            <hr className="horizrule"/>
        </div>
    )
}
export default ServicesPage;