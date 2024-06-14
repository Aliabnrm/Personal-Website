import { FaHtml5, FaReact, FaGitAlt } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";

import images from "../../constants/images";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="About us" className="aboutus">
        <div className="container">
          <div className="section-head">
            <h3 className="section-head__title">About Us</h3>
            <p className="section-head__caption">S U M M A R Y</p>
            <span className="section-head__line"></span>
          </div>
          <div className="about">
            <div className="about__cover">
              <img src={images.bg} alt="about us" className="about__img" />
            </div>
            <div className="about__content">
              <h4 className="about__title">Why Choose Me ?</h4>
              <p className="about__description">
                Hello, I am Ali , a programmer and web front-end developer. I am
                fluent in Persian and enjoy working with different clients and
                colleagues. I am constantly improving my skills and knowledge
                and currently work as a freelance web developer, optimizing
                website performance as well.{" "}
              </p>

              <h5 className="about__list-title">
                you can see my skills below{" "}
              </h5>
              <ul className="about-list">
                <li className="about-list__item">
                  <FaHtml5 className="about-icon" fill="#FF0000" />
                  Html
                </li>
                <li className="about-list__item">
                  <IoLogoCss3 className="about-icon" fill="#5AB2FF" />
                  Css
                </li>
                <li className="about-list__item">
                  <RiBootstrapLine className="about-icon" fill="#AF47D2" />{" "}
                  Bootstrap
                </li>
                <li className="about-list__item">
                  <RiTailwindCssFill className="about-icon" fill="#96EFFF" />{" "}
                  Tailwind
                </li>
                <li className="about-list__item">
                  <FaGitAlt className="about-icon" fill="#FC4100" /> Git &
                  Github
                </li>
                <li className="about-list__item">
                  <TbBrandJavascript className="about-icon" fill="#F8DE22" /> Js
                </li>
                <li className="about-list__item">
                  <FaReact className="about-icon" fill="#68D2E8" />
                  React
                </li>
              </ul>
              <div className="about__links-wrapper about__links">
                <a href="#" className="app-btn about__link">
                  Hire Me
                </a>
                <a href="#" className="app-btn app-btn--orange about__link">
                  Get Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
