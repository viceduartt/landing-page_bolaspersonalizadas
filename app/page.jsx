"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Header from "./components/Header";
import AllProducts from "./components/AllProducts";
import Highlights from "./components/Highlights";
import About from "./components/About";
import AddProduct from "./components/AddProduct";
import { useEffect, useState } from "react";

const vicedarttLogo = "images/logoBig.svg"


function Home() {
  const [moblie, setMoblie] = useState(false)
  useEffect(() => {
    if (window.innerWidth <= 890) {
      setMoblie(true)
    }
  }, [])

  useGSAP(() => {
    let show = 0

    const configHeader = () => {

      const animaHeaderDadeOot = (entries) => {
        console.log(entries)

        if (entries[0].isIntersecting == true) {
          gsap.to("header.home", {
            duration: 0.5,
            top: "-50%",
            opacity: 0
          })

        }
      }

      const animaHeaderFadein = (entries) => {
        console.log(entries)

        if (entries[0].isIntersecting == true) {
          gsap.to("header.home", {
            duration: 0.2,
            top: "0%",
            opacity: 1
          })

        }
      }

      const oberver = new IntersectionObserver(animaHeaderDadeOot, {
        threshold: 1
      })

      const oberverHero = new IntersectionObserver(animaHeaderFadein, {
        threshold: 1
      })


      oberver.observe(document.querySelector(".header-products"))
      oberverHero.observe(document.querySelector(".hero"))


    }

    const animaLoad = () => {
      gsap.to(".bg-blur", {
        duration: 5,
        opacity: 0
      })

      gsap.set(".group-heading-btn h1", {
        x: "-80%",
        opacity: 0
      })

      gsap.to(".group-heading-btn h1", {
        duration: 1,
        x: 0,
        opacity: 1,
        delay: 0.5
      })

      gsap.set(".group-heading-btn .btn-action", {
        x: "-80%",
        opacity: 0
      })

      gsap.to(".group-heading-btn .btn-action", {
        duration: 0.5,
        x: 0,
        opacity: 1,
        delay: 0.6
      })
    }

    const animaCards = () => {
      gsap.set(".list-products .card", {
        y: "20%",
        opacity: 0
      })

      gsap.set(".list-products", {
        y: "30%",
        opacity: 0
      })

      const animaCard = (entries) => {
        console.log(entries)
        const cards = entries[0].target.querySelectorAll(".card")

        if (entries[0].isIntersecting == true) {
          const timeline = gsap.timeline()
          console.log(cards)

          gsap.to(".list-products", {
            duration: 0.5,
            y: "0",
            opacity: 1
          })

          cards.forEach((e) => {

            timeline.to(e, {
              duration: 0.3,
              y: 0,
              delay: 0.1,
              opacity: 1,
            })

          })
        } else {
          const timeline = gsap.timeline()

          cards.forEach((e) => {
            timeline.to(e, {
              duration: 0,
              delay: 0,
              y: "20%",
              opacity: 0
            })

          })
        }
      }

      if (window.innerWidth <= 890) {
        show = 0.1
      } else {
        show = 0.5
      }

      console.log(show)

      const obseve = new IntersectionObserver(animaCard, {
        threshold: show,
      })

      document.querySelectorAll(".list-products").forEach((e) => {
        obseve.observe(e)
      })
    }

    const animaHeaderProduct = () => {
      gsap.set(".header-products", {
        opacity: 0,
        x: "-20%"
      })

      const animaHeader = (entries) => {
        if (entries[0].isIntersecting == true) {
          gsap.to(entries[0].target, {
            duration: 0.5,
            opacity: 1,
            x: 0
          })
        } else {
          gsap.to(entries[0].target, {
            duration: 0.5,
            opacity: 0,
            x: "-20%"
          })
        }
      }

      const obseve = new IntersectionObserver(animaHeader, {
        threshold: 0
      })

      document.querySelectorAll(".header-products").forEach((e) => {
        obseve.observe(e)
      })
    }

    const auth = async () => {
      let auth = localStorage.getItem('n')

      let res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          auth: auth,
        }),
      })


      if (res.message === "true") {
        gsap.to("header.home", {
          duration: 1,
          backgroundColor: "#00BC61",
          color: "#fff"
        })

        gsap.to("header.home .link", {
          duration: 1,
          backgroundColor: "#00BC61",
          color: "#fff"
        })

        document.querySelector("header.home .emphasis").innerHTML = "Sair"

        gsap.to("header.home .emphasis", {
          duration: 1,
          backgroundColor: "#FF362F"
        })
      }


    }

    const t = setTimeout(() => {
      clearTimeout(t)

      configHeader()
      animaLoad()
      animaCards()
      animaHeaderProduct()
      auth()
    }, 200)

  }, [])

  return (
    <>

      <div className="bg-blur"></div>

      <Header></Header>

      <main className="home" id="home">
        <div className="hero">
          <div className="banner-desktop"></div>

          <div className="group-heading-btn">

            <h1 className="heading">Bolas de vinil <span className="green">personalizadas para eventos e festas</span></h1>

            <a href="#highlights" className="btn-action">Destaques</a>

          </div>
        </div>

        <Highlights></Highlights>
        <AllProducts></AllProducts>
        <About></About>
      </main>
    </>
  );
}

export default Home;
