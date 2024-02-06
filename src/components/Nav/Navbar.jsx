import React from 'react';
import styled from 'styled-components';
import Burger from '../Nav/Burguer';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-itens: center;

  .logo {
    padding: 15px 0;
  }

  .logoS {
    width: 250px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <img className='logoS'
            src="https://cdn-sites-images.46graus.com/files/photos/bc1139b2/2c0773e3-96a2-4afc-ad65-bfe4cfaa55bc/logo_oficial_2-354x96.jpg"
            alt="Logo Laço Amarelo"
        />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar