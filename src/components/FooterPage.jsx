import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";


export default function FooterPage(){
    const color = useSelector((state) => state.theme.color)

    return(
        <div className={`footerPage ${color==="light" ? "whiteFooter" : "blackFooter"}`}>
            <div className="footIcons">
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100077673866292" className="socialLink">
                    <FaFacebook size={24} className="socialIcon" color= "#1877F2" />
                </a>
                <a target="_blank" href="https://twitter.com/khushigarg01" className="socialLink">
                    <FaTwitter size={24} className="socialIcon" color= "#1da1f2" />
                </a>
                <a target="_blank" href="https://www.instagram.com/_khushiigarg_" className="socialLink">
                    <FaInstagram size={24} className="socialIcon" color= "#F56040" />
                </a>
                <a target="_blank" href="https://linkedin.com/in/khushigarg01" className="socialLink">
                    <FaLinkedin size={24} className="socialIcon" color= "#0077b5" />
                </a>
            </div>
            <div className="copyright">
                &copy; Khushi. All Rights Reserved.
            </div>
        </div>
    )
}