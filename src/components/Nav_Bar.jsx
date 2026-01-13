import { useState, useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
import style from "../styles/navBar.module.css";
import { Menu, Mail, PhoneCall, Facebook, Instagram, Linkedin } from "lucide-react";

const Nav_Bar = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuhandler = () => setMenu(prev => !prev);
  
  // const [active, setActive]= useState("green");
  
  
  return (
    <header>
      {/* Top Bar */}
      <div className={`${style.topBar} ${scroll ? style.top_hidden : ""}`}>
        <div className={style.topContent}>
          <div className={style.phone_mail_wrapper}>
          <div className={style.phoneContainer}>
            <PhoneCall color="white" size={20} />
            <p>+977 9852020058</p>
          </div>
          <div className={style.emailContainer}>
            <Mail color="white" size={20} />
            <p>booking@sudarshanagroresort.com.np</p>
          </div>
          </div>
          <div className={style.socialmediaIcon}>
            <Facebook color="white" size={20} cursor="pointer" />
            <Instagram color="white" size={20} cursor="pointer" />
            <Linkedin color="white" size={20} cursor="pointer" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`${style.navContainer} ${scroll ? style.navScroll : ""}`}>
        <div className={style.navLogo}>
          <img src="/favicon/logo.webp" alt="logo" />
        </div>
        
       
        <div className={style.container_wrapper_bookingimg}>
        <ul className={style.navMenu}>
          <li><NavLink to="/" className={({isActive}) => isActive ? style.active : style.li}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? style.active : style.li} >About</NavLink></li>
          <li><NavLink to="/rooms" className={({isActive}) => isActive ? style.active : style.li}>Rooms</NavLink></li>
          <li><NavLink to="/services" className={({isActive}) => isActive ? style.active : style.li}>Services</NavLink></li>
          <li><NavLink to="/gallery" className={({isActive}) => isActive ? style.active : style.li}>Gallery</NavLink></li>
          {/* added location */}
           {/* <li><Link to="/location" className={style.li}>location</Link></li> */}
          <li><NavLink to="/contact" className={({isActive}) => isActive ? style.active : style.li}>Contact</NavLink></li>
        </ul>
        <Link to="https://d.sriyog.com/sudarshanresort" target="_blank" className={style.linkBook} >
              <img src="/icons/booking.svg" alt="booking-svg" />
            </Link>

            </div>
        <Menu className={style.menu} onClick={menuhandler} size={35} color="white" />

       {/* Mobile Menu */}
      <div   className={`${style.mobileMenu} ${menu ? style.active : ""} $ ${scroll ? style.mobileScroll : ""} `}>
        
        <ul className={style.navMobile}>
          <li><NavLink to="/" className={({isActive}) => isActive ? style.active : ""} onClick={() => setMenu(false)} >Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? style.active : ""} onClick={() => setMenu(false)}>About</NavLink></li>
          <li><NavLink to="/rooms" className={({isActive}) => isActive ? style.active : ""} onClick={() => setMenu(false)}>Rooms</NavLink></li>
          <li><NavLink to="/services" className={({isActive}) => isActive ? style.active : ""} onClick={() => setMenu(false)}>Services</NavLink></li>
          <li><NavLink to="/gallery" className={({isActive}) => isActive ? style.active : ""} onClick={() => setMenu(false)}>Gallery</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? style.active : ""} onClick={() => setMenu(false)}>Contact</NavLink></li>
        </ul>
      </div>
      </nav>

     
    </header>
  );
};

export default Nav_Bar;
