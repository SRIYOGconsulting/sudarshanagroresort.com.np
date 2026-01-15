import { Link } from "react-router-dom";
import style from '../styles/footer.module.css';
import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={style.container_footer}>
      {/* Footer Hero Section */}
      <div className={style.footer_hero_container}>
        {/* About / Description */}
        <div className={style.footer_header}>
          <h1>Sudarshan Agro Resort</h1>
          <p>
            Enjoy your recreational time with Sudarshan Park and Resort in a Nepali Style.
            We offer you the best hospitality for your golden memories.
          </p>
          {/* Social Media Icons */}
          <div className={style.social_media_icon_container}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook color="white" size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram color="white" size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin color="white" size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={style.footer_nav}>
          <h2>Quick Links</h2>
          <ul className={style.dash_list}>
            <li><Link className={style.nav_btn} to="/gallery">Gallery</Link></li>
            <li><Link className={style.nav_btn} to="/contact">Contact</Link></li>
            <li><Link className={style.nav_btn} to="/services">Services</Link></li>
            <li><Link className={style.nav_btn} to="/rooms">Rooms</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={style.container_contact_info}>
          <h2>Get in Touch</h2>
          <div className={style.location_container}>
            <MapPin className={style.mappin} color="white" size={20} />
            <p>Lalbhitti, Belbari-2, Morang, Nepal</p>
          </div>

          <div className={style.phone_container}>
            <PhoneCall className={style.mappin} color="white" size={20} />
            <a className={style.phone_number} href="tel:+9779852020058">+977-9852020058</a>
          </div>

          <div className={style.mail_container}>
            <Mail className={style.mappin} color="white" size={20} />
            <a className={style.mail} href="mailto:booking@sudarshanagroresort.com.np">
              booking@sudarshanagroresort.com.np
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={style.container_bottom}>
        <p>Copyright © 2025 Sudarshan Agro Resort. All rights reserved.</p>
        <div className={style.technologyPartner}>
          <p>Technology Partner: </p>
          <a
            className={style.pracas}
            href="https://sriyog.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SRIYOG
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
