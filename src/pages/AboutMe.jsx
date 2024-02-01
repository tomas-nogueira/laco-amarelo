import React from "react";
import Header from "../components/Header";
import Style from "../styles/aboutme.module.css";
import BannerPhoto from "../assets/aboutmebanner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
    return (
        <div>
            <Header />
            <div className={Style.container}>
                <div className={Style.imageContainer}>
                    <img src={BannerPhoto} alt="Imagem" />
                </div>
                <div className={Style.textContainer}>
                    <div className={Style.title}>
                        <h2>
                            Olá! Eu sou a <span>Carla</span>
                        </h2>
                    </div>
                    <div className={Style.paragraph}>
                        <p>
                            Em constante busca por uma fotografia sem padrões,
                            poses ou regras. Um dia livre para amar, cuidar,
                            brincar e se encantar com os sentimentos mais
                            simples e mais importante da sua família.
                            <br />
                            <br />É perceber que o simples fato de estarem
                            juntos é o momento mais especial que existe e a
                            memória mais verdadeira que eu poderia entregar para
                            vocês. Permita-se amar e se reconectar
                            <br />
                            <br /> Nos vemos em breve! Com carinho e sempre,
                            Carla.
                        </p>
                    </div>
                    <div className={Style.iconContainer}>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        <FontAwesomeIcon icon="fa-brands fa-vimeo-v" />
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
