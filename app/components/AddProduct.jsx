"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const iconCloseAdd = "icons/add.svg"
const photo = "images/photos/img10.jpeg"
const iconTiggle = "icons/toggle.svg"




function AddProduct() {

   return (
      <>
         <div className="backgrou-blur"></div>

         <div className="container-page">

            <div className="container-add-product">
               <header className="header-add-product">
                  <h6>Adicionar produto</h6>
                  <button className="btn-close">
                     <img src={iconCloseAdd} alt="" />
                  </button>
               </header>

               <div className="group-cover-inputs-imgs-send">
                  <div className="group-cover-inputs">
                     <div className="group-cover">
                        <div className="group-capa-default">
                           <img src={iconCloseAdd} alt="" />

                           <span>Carregar imagem</span>
                        </div>

                        <div className="container-img-cover">
                           <img src={photo} className="photo" alt="" />
                        </div>
                     </div>

                     <div className="group-inputs">
                        <div className="input-name input">
                           <span className="label">Titulo do produto</span>

                           <input type="text" value={""} placeholder="Ex: kit 10 bolas de 23cm" />
                        </div>

                        <div className="group-inputs-princes">
                           <div className="input-price input">
                              <span className="label">unidade</span>

                              <input type="text" value={""} placeholder="R$ 199" />
                           </div>

                           <div className="input-promotion input">
                              <span className="label">Valor de promoção</span>

                              <input type="text" value={""} placeholder="R$ 199" />
                           </div>

                        </div>

                        <div className="group-toggle-label">
                           <span>Adicionar em na seção “Destaques”</span>

                           <div className="group-toggle">
                              <img src={iconTiggle} alt="" />
                           </div>
                        </div>
                     </div>


                  </div>

                  <div className="group-imgs-send">
                     <div className="group-imgs">
                        <div className="img">
                           <img src={iconCloseAdd} className="img-default" alt="" />

                           <div className="container-photo">
                              <img src={photo} className="photo" alt="" />
                           </div>
                        </div>

                        <div className="img">
                           <img src={iconCloseAdd} className="img-default" alt="" />

                           <div className="container-photo">
                              <img src={photo} className="photo" alt="" />
                           </div>
                        </div>

                        <div className="img">
                           <img src={iconCloseAdd} className="img-default" alt="" />

                           <div className="container-photo">
                              <img src={photo} className="photo" alt="" />
                           </div>
                        </div>

                        <div className="img">
                           <img src={iconCloseAdd} className="img-default" alt="" />

                           <div className="container-photo">
                              <img src={photo} className="photo" alt="" />
                           </div>
                        </div>

                        <div className="img">
                           <img src={iconCloseAdd} className="img-default" alt="" />

                           <div className="container-photo">
                              <img src={photo} className="photo" alt="" />
                           </div>
                        </div>

                        <div className="img">
                           <img src={iconCloseAdd} className="img-default" alt="" />

                           <div className="container-photo">
                              <img src={photo} className="photo" alt="" />
                           </div>
                        </div>


                     </div>

                     <button className="send">Adicionar pedido</button>
                  </div>
               </div>


            </div>
         </div>



      </>
   );
}

export default AddProduct;
