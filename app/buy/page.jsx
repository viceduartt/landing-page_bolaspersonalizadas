"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";


const iconMore = "icons/more.svg"
const photoSelected = "images/photos/img3.svg"
const photo1 = "images/photos/img8.png"
const photo2 = "images/photos/img9.jpeg"
const photo3 = "images/photos/img10.jpeg"
const photo4 = "images/photos/img11.jpeg"
const photo5 = "images/photos/img12.jpeg"
const photo6 = "images/photos/img13.jpeg"
const photo7 = "images/photos/img14.jpeg"



function Buy() {
  const [product, setProduct] = useState("")
  let lockPre = false
  let lockNext = false

  useEffect(() => {
    if (localStorage.getItem('product') !== null) {
      const productdb = JSON.parse(localStorage.getItem('product'))
      setProduct(productdb)
      console.log(product)


    }

  }, [])

  const nextProduct = () => {
    if (lockNext == false) {
      const db = JSON.parse(localStorage.getItem('db'))
      let idP = product.id

      db.db.map((ps, i) => {
        ps.map((p, i) => {

          console.log(`p.id: ${p.id}`)
          console.log(`idP: ${idP}`)

          if (p.id == idP) {
            localStorage.setItem('product', JSON.stringify({
              name: "victor",
              id: p.id,
              cover: p.cover,
              price: p.price,
              promotion: p.promotion,
              main: p.main,
              imgs: p.imgs,
            }))
            setProduct(JSON.parse(localStorage.getItem('product')))
            console.log(product)
            console.log("fun")
          }


        })


      })



      console.log(product)
    }
  }

  const previousProduct = () => {
    if (lockPre == false) {

    }
  }

  const loadProduct = () => {
    if (product !== "") {
      console.log(product)


      return (
        <div className="container-buy-product">
          <section className="preview-photos">
            <div className="container-photo-selected">
              <img src={product.cover} className="photo" alt="" />
            </div>

            <section className="group-photos">
              <button className="preview btn">
                <img src={iconMore} alt="" />
              </button>

              <div className="list-photos">
                {product.imgs.map((img, i) => {
                  console.log(img)

                  return (

                    <div className="container-photo" key={"img" + i}>
                      <img src={img} className="photo" alt="" />
                    </div>
                  )
                })}


              </div>

              <button className="next btn">
                <img src={iconMore} alt="" />
              </button>
            </section>
          </section>

          <section className="group-info-inputs-btn">
            <div className="group-info-inputs">
              <div className="group-info">
                <h1 className="heading-product">{product.name}</h1>

                <div className="group-price-promotion">
                  <span className="promotion"> R$ {product.promotion == "" ? product.price : product.promotion}</span>

                  <div className="group-price">
                    <span className="price">{product.promotion == "" ? "" : "R$ " + product.price}</span>
                    <div className="line"></div>
                  </div>
                </div>
              </div>

              <div className="list-inputs">
                <div className="input-personalize input">
                  <span className="label">Informações de personalização</span>

                  <textarea placeholder="Descreva como você quer que seja a personalização, cor, estampa, tipo"></textarea>

                </div>

                <div className="input-amount input">
                  <span className="label">Quantidade</span>

                  <input type="number" placeholder="199" />
                </div>
              </div>
            </div>

            <a href="https://wa.me/5511997188329?text=Ol%C3%A1%20vim%20pelo%20site%20e%20tenho%20interesse" className="send">Fazer pedido</a>
          </section>
        </div>
      )
    }
  }

  const t = setTimeout(() => {
    loadProduct()
  }, 200)

  return (
    <>

      <header className="header-buy">
        <a href="/" className="back-page">
          <img src={iconMore} alt="" />
        </a>
      </header>

      <main className="buy">
        {loadProduct()}
      </main>
    </>
  );
}

export default Buy;
