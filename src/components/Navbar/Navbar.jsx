import React, {useState, useRef} from 'react'
import './Navbar.css'
import kaiLogo from '../../assets/kai-logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/burger-menu-open.svg'
import menu_close from '../../assets/exit-svgrepo-com.svg'

const Navbar = () => {
  const [menu, setMenu] =  useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    document.getElementById('menu_open').style.display = "none";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    document.getElementById('menu_open').style.display = "block";
  }

  return (
    <div className='navbar d-flex justify-content-between align-items-center p-3'>
        <img src={kaiLogo} alt="kaiLogo" width={50} height={50} />
        <img src={menu_open} alt="menu_open" id='menu_open' width={50} height={50} className='nav-mob-open' onClick={openMenu}/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="menu_close" width={50} height={50} className='nav-mob-close' />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<span><hr className="underline"/></span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<span><hr className="underline"/></span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<span><hr className="underline"/></span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<span><hr className="underline"/></span>:<></>}</li>
        </ul>
        <div className="nav-connect border-0 text-white"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar