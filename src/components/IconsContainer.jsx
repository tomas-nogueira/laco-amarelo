import React from "react";
import Style from "../styles/aboutme.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function IconsContainer() {
    return (
        <div className={Style.iconContainer}>
            <a target="_blank" href="https://www.instagram.com/laco.amarelo">
                <FaInstagram className={Style.icon} color="white" />
            </a>
            <a
                target="_blank"
                href="https://www.facebook.com/lacoamarelofotografia"
            >
                <FaFacebookF className={(Style.icon, Style.facebook)} />
            </a>
            <a target="_blank" href="https://vimeo.com/lacoamarelofotografia">
                <FaVimeoV className={Style.icon} />
            </a>
            <a
                target="_blank"
                href="https://web.whatsapp.com/send?phone=5514988059383"
            >
                <FaWhatsapp className={Style.icon} />
            </a>
        </div>
    );
}

export default IconsContainer;
