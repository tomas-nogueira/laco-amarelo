import React from "react";
import Header from "../components/Header";
import Style from "../styles/aboutme.module.css";
import TextContainer from "../components/TextContainer";
import IconsContainer from "../components/IconsContainer";
import BannerPhoto from "../assets/sobremimbanner.png";

function AboutMe() {
    return (
        <div>
            <Header />
            <div className={Style.container}>
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
