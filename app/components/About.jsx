"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const imgBall = "images/ball.svg"



function About() {

  return (
    <>
        <section className="about" id="about">
          <header className="header-products">
            <h2>Como é feito?</h2>
          </header>

          <div className="img-text">
            <img src={imgBall} alt="" />

            <p>As bolas são produzidas em vinil de alta resistência, moldado em formato esférico para garantir uniformidade, brilho e boa durabilidade. Após a moldagem, a superfície recebe acabamento liso para permitir uma personalização nítida e com cores vivas. A arte, logotipo ou texto é aplicada por processo profissional de impressão, garantindo boa fixação e qualidade visual. Por fim, cada bola passa por uma verificação antes do envio, assegurando um produto bem acabado e pronto para uso em ações promocionais, eventos ou divulgação de marca.</p>
          </div>
        </section>
    </>
  );
}

export default About;
