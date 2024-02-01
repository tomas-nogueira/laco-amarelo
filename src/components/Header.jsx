import React from "react";
import Style from "../styles/header.module.css";

export default function Header() {
    return (
        <header>
            <div className={Style.logo}>
                <img
                    src="https://cdn-sites-images.46graus.com/files/photos/bc1139b2/2c0773e3-96a2-4afc-ad65-bfe4cfaa55bc/logo_oficial_2-354x96.jpg"
                    alt="Logo Laço Amarelo"
                />
            </div>

            <div className={Style.linksContainer}>
                <ul className={Style.links}>
                    <li>GALERIA</li>
                    <li>PRODUTOS</li>
                    <li>SOBRE MIM</li>
                    <li>CONTATO</li>
                </ul>
            </div>
        </header>
    );
}
