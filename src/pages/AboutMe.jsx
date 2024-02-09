import React from "react";
import Style from "../styles/aboutme.module.css";
import TextContainer from "../components/TextContainer";
import IconsContainer from "../components/IconsContainer";
import BannerPhoto from "../assets/sobremimbanner.png";
import Navbar from "../components/Nav/Navbar";

function AboutMe() {
    return (
        <div>
            <Navbar />
            <div className={Style.container}>
                <div className={Style.title2}>
                    <h2>
                        Olá! Eu sou a <span>Carla</span>
                    </h2>
                </div>
                <div className={Style.imageContainer}>
                    <img src={BannerPhoto} alt="Imagem" />
                </div>
                <div className={Style.textMainContainer}>
                    <TextContainer />
                    <IconsContainer />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
