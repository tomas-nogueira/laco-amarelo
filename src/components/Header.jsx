import React from "react";
import Style from "../styles/header.module.css";
import styled from "styled-components";

export default function Header() {
    return (
        <header>
            <div className={Style.logo}>
                <a href="/">
                    <img
                        src="https://cdn-sites-images.46graus.com/files/photos/bc1139b2/2c0773e3-96a2-4afc-ad65-bfe4cfaa55bc/logo_oficial_2-354x96.jpg"
                        alt="Logo Laço Amarelo"
                    />
                </a>
            </div>

            <div className={Style.linksContainer}>
                <ul className={Style.links}>
                    <li>
                        <a href="">GALERIA</a>
                    </li>
                    <li>
                        <a href="">PRODUTOS</a>
                    </li>
                    <li>
                        <a href="/sobremim">SOBRE MIM</a>
                    </li>
                    <li>
                        <a href="">CONTATO</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
