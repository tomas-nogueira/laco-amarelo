import React from "react";
import styled from "styled-components";
import Burger from "../Nav/Burguer";
import Logo from "../../photos/logo.jpg";
import Logo2 from "../../photos/logo2.jpg";

const Nav = styled.nav`
    width: 100%;
    height: 120px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-itens: center;

    .logo {
        padding: 15px 0;
    }

    .logoS {
        width: 350px;
    }

    .logoS2 {
        display: none;
    }

    @media (max-width: 840px) {
        .logoS {
            width: 300px;
            display: none;
        }

        .logoS2 {
            width: 100px;

            display: inline;
        }
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <a href="/">
                    <img className="logoS" src={Logo} alt="Logo Laço Amarelo" />
                </a>
                <a href="/">
                    <img
                        className="logoS2"
                        src={Logo2}
                        alt="Logo Laço Amarelo"
                    />
                </a>
            </div>
            <Burger />
        </Nav>
    );
};

export default Navbar;
