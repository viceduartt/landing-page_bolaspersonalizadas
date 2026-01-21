"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

const logo = "images/logoSmall.svg"
const imgDecoration = "images/decoration.svg"

function Highlights() {
  useEffect(() => {
    localStorage.setItem('n', '3432432dfgfdgf234323213124treert')
  }, [])

  useGSAP(() => {
    const t = setTimeout(() => {
      clearTimeout(t)

      const url = "http://localhost:3000"

      gsap.to(".bg-blur", {
        duration: 1,
        opacity: 0
      })

      gsap.to(".bg-blur", {
        duration: 1,
        opacity: 1,
        delay: 2,
        onComplete: () => {
          location.href = url
        }
      })


    }, 300)

  }, [])


  return (
    <>
      <main className="msg">
        <div className="bg-blur"></div>
        <div className="group">

          <img src={logo} className="logo" alt="" />

          <h3>Você entrou no modo de adminitração!</h3>
        </div>

        <img src={imgDecoration} className="top decoration" alt="" />
        <img src={imgDecoration} className="bottom decoration" alt="" />
      </main>

    </>
  );
}

export default Highlights;
