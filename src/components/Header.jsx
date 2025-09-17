import { useState } from 'react';
import {Link} from 'react-scroll'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import image from '../assets/photo.jpg'
import { CiLight } from "react-icons/ci";
// import { useSelector } from 'react-redux';
import { turnColor } from '../GlobalStore/ThemeSlicer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CiDark } from "react-icons/ci";



const menuArr = [
    {id:1, text : "Home"},
    {id:2, text : "About"},
    {id:3, text : "Services"},
    {id:4, text : "Projects"},
    {id:5, text : "Contact"}
]



function Header(){

    const [menu, setMenu] = useState(false);
    const dispatch = useDispatch();
    const color = useSelector((state) => state.theme.color);

    return (
        <>
        <nav className={`navbar ${color === "light" ? "whiteHeader" : "blackHeader"} `}>
            <div className='leftHeader'>
                <img className='headerProfile' src={image} alt="" />
                <div>
                    <div className="navTitle">Khushi</div>
                    <div className='navSubTitle'>Web Developer</div>
                </div>
            </div>
            <div className="navMenu">
                {
                    menuArr.map(({id, text}) => (
                        <Link key={id} className='navItem' to={text} smooth={true} duration={500} offset={-90} activeClass="activeLink" spy={true}>{text}</Link>
                    ))
                }
            </div>
            <button className='themeBtn' onClick={() => dispatch(turnColor())}>
                {
                    (color == "light")? <CiLight className='themeIcon' size={24} /> : <CiDark className='themeIcon' size={24} /> 
                }
            </button>
            <div className={`navbar2 ${color==='light' ? "whiteHeader2" : "blackHeader2"}`}>
            <div className="menuIcons" onClick={()=>setMenu(!menu)}>
                {(menu)? <IoCloseSharp/>:<AiOutlineMenu />}
            </div>
            <button className='themeBtn2' onClick={() => dispatch(turnColor())}>
                {
                    (color == "light")? <CiLight className='themeIcon' size={24} /> : <CiDark className='themeIcon' size={24} /> 
                }
            </button>
            </div>
            
        </nav>
            {/* <div className={`navbar2 ${color==='light' ? "lightHeader2" : "blackHeader2"}`}> */}
            <div className={`navMenu2  ${color==='light' ? "whitenavmenu2" : "blacknavmenu2"} ${menu ? "active" : ""}`}>
                {
                    menu && (
                    <>
                        {
                            menuArr.map(({id, text}) => (
                                <Link onClick={()=>setMenu(!menu)} key={id} className='navItem' to={text} smooth={true} duration={500} offset={-70} activeClass="activeLink" spy={true}>{text}</Link>
                            ))
                        }
                    </>
                )}
            </div>
            
            {/* </div> */}
        </>
    )
}

export default Header;