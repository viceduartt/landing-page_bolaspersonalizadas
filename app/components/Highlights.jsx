"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const logoBig = "images/logoBig.svg"
const photo = "images/photos/img8.png"
const photo2 = "images/photos/img8.png"
const photo3 = "images/photos/img9.jpeg"
const photo4 = "images/photos/img10.jpeg"


function Highlights() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('/api/getdb')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  function getProducts() {

    const changePage = (p, id) => {
      localStorage.setItem('product', JSON.stringify({
        name: p.name,
        id: p.id,
        cover: p.cover,
        price: p.price,
        promotion: p.promotion,
        main: p.main,
        imgs: p.imgs,
      }))
      localStorage.setItem('db', JSON.stringify({
        db: products
      }))
      console.log(p.id)



      const url = "http://localhost:3000"

      location.href = url + "/buy"

    }


    if (products !== null) {
      function getCard(p) {
        console.log(p)

        return p.map((c, i) => (
          <section className="card" onClick={() => { changePage(c, i) }} key={"card" + i}>
            <section className="photo-texts">
              <div className="container-photo">
                <img src={c.cover} className="photo" alt="" />
              </div>

              <section className="group-text">
                <h3 className="heading">{c.name}</h3>

                <div className="group-price-promotion">
                  {c.promotion == "" ? (
                    <span className="promotion">R$ {c.price}</span>

                  ) : (
                    <span className="promotion">R$ {c.promotion}</span>
                  )}


                  {c.promotion !== "" && (
                    <div className={"group-price"}>
                      <span className="price">R$ {c.price}</span>

                      <div className="line"></div>
                    </div>
                  )}
                </div>
              </section>
            </section>

            <button className="buy">Fazer pedido</button>
          </section>
        ))
      }

      return (
        <section className="list-products">
          {getCard(products[0])}
        </section>
      )
    }
  }




  return (
    <>
      <div className="highlights section-products" >
        <header className="header-products" id="highlights">
          <h2 className="geading">Modelos em destaque</h2>
        </header>

        <section className="group-list-products">
          {getProducts()}


        </section>
      </div>
    </>
  );
}

export default Highlights;
