import React from "react";
import Style from "../styles/aboutme.module.css";

function TextContainer() {
    return (
        <div className={Style.textContainer}>
            <div className={Style.title}>
                <h2>
                    Olá! Eu sou a <span>Carla</span>
                </h2>
            </div>
            <div className={Style.paragraph}>
                <p>
                    Em constante busca por uma fotografia sem padrões, poses ou
                    regras. Um dia livre para amar, cuidar, brincar e se
                    encantar com os sentimentos mais simples e mais importante
                    da sua família.
                    <br />
                    <br />É perceber que o simples fato de estarem juntos é o
                    momento mais especial que existe e a memória mais verdadeira
                    que eu poderia entregar para vocês. Permita-se amar e se
                    reconectar
                    <br />
                    <br /> Nos vemos em breve! Com carinho e sempre, Carla.
                </p>
            </div>
        </div>
    );
}

export default TextContainer;
