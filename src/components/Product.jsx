import React from "react";
import Style from "../styles/product.module.css";

function Product(props) {
    return (
        <div className={Style.product}>
            <div className={Style.topInfo}>
                <div className={Style.imageContainer}></div>
                <img src={props.img} alt="" />
                <p className={Style.title}>{props.text}</p>
                <p>{props.desc}</p>
            </div>
            <div className={Style.bottomInfo}>
                <button className={Style.detailBtn}>Detalhes</button>
                <div className={Style.priceContainer}>
                    <div className={Style.colorContainer}>
                        <span>Cor:</span>
                        <button style={{backgroundColor: props.color}}> </button>
                    </div>
                    <p>R$99,99</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
