import React from "react";
import styled from "styled-components";
import Style from "../../styles/rightnav.module.css";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 10;

    li {
        font-size: 1.1em;
        cursor: pointer;
    }

    .ul {
        align-itens: center;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 840px) {
        flex-flow: column nowrap;
        background-color: #ffd83d;
        position: fixed;
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
        }
        a {
            color: #fff;
            font-weight: 500;
        }
    }
    li:hover {
        background-color: rgb(255, 239, 175);
    }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open} className={Style.ul}>
            <li className={Style.li}>
                <a href="/galeria">GALERIA</a>
            </li>
            <li className={Style.li}>
                <a href="/produtos">PRODUTOS</a>
            </li>
            <li className={Style.li}>
                <a href="/sobremim">SOBRE MIM</a>
            </li>
            <li className={Style.li}>
                <a href="/contato">CONTATO</a>
            </li>
        </Ul>
    );
};

export default RightNav;
