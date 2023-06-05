import React from "react";
import { Socials } from "../Data/Socials";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 300;
    setShowButton(scrollY > showThreshold);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="socials-container">
          <h2>Socials</h2>
          <ul className="socials">
            <li>
              <a
                href={Socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={Socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={Socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={Socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href={Socials.location}
                target="_blank"
                rel="noopener noreferrer"
              >
                Location
              </a>
            </li>
          </ul>
        </div>
        <div className="content-container">
          <h2>Content</h2>
          <ul className="content">
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Drinks
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Ice-Cream
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Crepes & Waffles
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Saj
              </a>
            </li>
          </ul>
        </div>
        <h2 className="credit">
          Designed and developed by
          <a
            href="https://github.com/substro"
            target="_blank"
            rel="noopener noreferrer"
            className="git-link"
          >
            Ali Amin
          </a>
        </h2>
        
      </footer>
    </>
  );
};
