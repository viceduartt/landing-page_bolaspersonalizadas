"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const logoBig = "/images/logoBig.svg"
const iconMore = "icons/menu.svg"
const iconClose = "icons/add.svg"

function Header() {
  const [moblie, setMoblie] = useState(false)
  useEffect(() => {
    if (window.innerWidth <= 890) {
      setMoblie(true)
    }
  },[])
  let key = true

  useGSAP(() => {
    const configMenu = () => {
      const btn = document.querySelector(".btn-menu")
      const btnClose = document.querySelector(".btn-close")

      btn.addEventListener("click", () => {
        const menu = document.querySelector(".menu")
        console.log("oii")

        console.log(menu.className)

        menu.className = "menu on"
        document.querySelector("body").className = "y"
      })


      btnClose.addEventListener("click", () => {
        const menu = document.querySelector(".menu")
        console.log("oii")

        console.log(menu.className)

        menu.className = "menu off"
        document.querySelector("body").className = ""
      })
    }

    const t = setTimeout(() => {
      if (moblie) {

        configMenu()
      }
    }, 200)
  }, [])


  if (moblie === true) {
    return (
      <>
        <header className="home-small">
          <a href="#home">

            <img src={logoBig} className="logo" alt="" />
          </a>

          <button className="btn-menu"><img src={iconMore} alt="" /></button>

          <nav className="menu off">
            <button className="btn-close"><img src={iconClose} alt="" /></button>


            <ul className="links">
              <li><a href="#highlights" className="link">Destaques</a></li>
              <li><a href="#allProdycts" className="link">Ver todos</a></li>
              <li><a href="#about" className="link">Como é feito</a></li>
              <li><a href="" className="link emphasis">Contato</a></li>
            </ul>
          </nav>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className="home">
          <a href="#home">

            <img src={logoBig} alt="" />
          </a>

          <nav className="menu">
            <ul className="links">
              <li><a href="#highlights" className="link">Destaques</a></li>
              <li><a href="#allProdycts" className="link">Ver todos</a></li>
              <li><a href="#about" className="link">Como é feito</a></li>
              <li><a href="" className="link emphasis">Contato</a></li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
