import React from "react"
import menuData from "./menu.json"
import { useState, useEffect } from "react"
import { Nav } from "./Nav"
import { FaBars } from "react-icons/fa"

export const Header = () => {
  return (
    <header className="header">
      <a href="./index.html">
        <img src="./src/assets/images/logo.png" alt="logo" className="logo" />
      </a>
      <Nav />
      
    </header>
  )
}
