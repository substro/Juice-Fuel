import React from "react";
import { Socials } from "./Data/socials.js";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="socials">
          <h2>Socials</h2>
          <ul>
            <li>
              <a href={Socials.whatsapp}>WhatsApp</a>
            </li>
            <li>
              <a href={Socials.facebook}>Facebook</a>
            </li>
            <li>
              <a href={Socials.instagram}>Instagram</a>
            </li>
            <li>
              <a href={Socials.tiktok}>TikTok</a>
            </li>
            <li>
              <a href={Socials.location}>Location</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <h2>Content</h2>
          <ul>
            <li>
              <a href="">Drinks</a>
            </li>
            <li>
              <a href="">Ice-Cream</a>
            </li>
            <li>
              <a href="">Crepes & Waffles</a>
            </li>
            <li>
              <a href="">Saj</a>
            </li>
          </ul>
        </div>
        <h2>
          Designed and developed by{" "}
          <a href="https://github.com/substro" className="git-link">
            Ali Amin
          </a>
        </h2>
      </footer>
    </>
  );
};
