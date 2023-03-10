import React from "react";
import css from "./Footer.module.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className={css.footer}>
        <div className={css.share}>
          <AiFillFacebook className={css.icon}/>
          <AiFillTwitterSquare  className={css.icon}/>
          <AiFillInstagram  className={css.icon}/>
          <AiFillLinkedin  className={css.icon}/>
          <FaPinterestSquare  className={css.icon}/>
        </div>

        <div className={css.links}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contacts</a>
          <a href="#blog">blog</a>
        </div>

        <div className={css.credit}>
            created by <span>Gulu's website</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
