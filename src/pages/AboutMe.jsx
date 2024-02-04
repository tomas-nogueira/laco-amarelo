import React from "react";
import Header from "../components/Header";
import Style from "../styles/aboutme.module.css";
import BannerPhoto from "../assets/sobremimbanner.png";
import ReactDOM from "react-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";

function AboutMe() {
    return (
        <div>
            <Header />
            <div className={Style.container}>
                <div className={Style.imageContainer}>
                    <img
                        src= {BannerPhoto}
                        alt="Imagem"
                    />
                </div>
                <div className={Style.textMainContainer}>
                    <div className={Style.textContainer}>
                        <div className={Style.title}>
                            <h2>
                                Olá! Eu sou a <span>Carla</span>
                            </h2>
                        </div>
                        <div className={Style.paragraph}>
                            <p>
                                Em constante busca por uma fotografia sem
                                padrões, poses ou regras. Um dia livre para
                                amar, cuidar, brincar e se encantar com os
                                sentimentos mais simples e mais importante da
                                sua família.
                                <br />
                                <br />É perceber que o simples fato de estarem
                                juntos é o momento mais especial que existe e a
                                memória mais verdadeira que eu poderia entregar
                                para vocês. Permita-se amar e se reconectar
                                <br />
                                <br /> Nos vemos em breve! Com carinho e sempre,
                                Carla.
                            </p>
                        </div>
                    </div>
                    <div className={Style.iconContainer}>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/laco.amarelo"
                        >
                            <FaInstagram className={Style.icon} color="white" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/lacoamarelofotografia"
                        >
                            <FaFacebookF
                                className={(Style.icon, Style.facebook)}
                            />
                        </a>
                        <a
                            target="_blank"
                            href="https://vimeo.com/lacoamarelofotografia"
                        >
                            <FaVimeoV className={Style.icon} />
                        </a>
                        <a
                            target="_blank"
                            href="https://web.whatsapp.com/send?phone=5514988059383"
                        >
                            <FaWhatsapp className={Style.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
