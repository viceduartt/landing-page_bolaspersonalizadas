"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const iconClose = "images/logoBig.svg"
const iconAdd = "images/logoBig.svg"



function PainelAddProduct() {
   return (
      <>
         <div className="form-add-product">
            <img src={iconClose} alt="" />

            <div className="group-form-btn">
               <div className="form">
                  <div className="group-capa-inputs">
                     <div className="bg-img-capa">
                        <img src={iconAdd} alt="" />
                     </div>

                     <div className="group-inputs-toggle">
                        <div className="group-inputs">

                           <div className="input-name-product">
                              <span className="label">Titulo do produto</span>

                              <input type="text" placeholder="Ex: kit 10 bolas de 23cm" />
                           </div>

                           <group className="inputs-price-promotion">
                              <div className="input-price">
                                 <span className="label">Preço da unidade</span>

                                 <input type="text" placeholder="R$ 100,00" />
                              </div>

                              <div className="input-promotion">
                                 <span className="label">Valor de promoção</span>

                                 <input type="text" placeholder="R$ 200,50" />
                              </div>
                           </group>
                        </div>

                        <div className="group-toggle">
                           <span className="label">Adicionar em na seção “Destaques”</span>

                           <div className="toggle">
                              <div className="circ"></div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="list-add-img">
                     <div className="bg-img">
                        <img src={iconAdd} alt="" />
                     </div>

                     <div className="bg-img">
                        <img src={iconAdd} alt="" />
                     </div>

                     <div className="bg-img">
                        <img src={iconAdd} alt="" />
                     </div>

                     <div className="bg-img">
                        <img src={iconAdd} alt="" />
                     </div>

                     <div className="bg-img">
                        <img src={iconAdd} alt="" />
                     </div>

                     <div className="bg-img">
                        <img src={iconAdd} alt="" />
                     </div>
                  </div>
               </div>

               <button className="send">Fazer pedido</button>
            </div>
         </div>
      </>
   );
}

export default PainelAddProduct;
