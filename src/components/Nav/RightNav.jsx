import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 30px 18px;
    font-size: 1.1em
  }

  .ul{
    align-itens:center;
    display:flex;
    justify-content: center;
  }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(255, 239, 175);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} className='ul'>
      <li>GALERIA</li>
      <li>PRODUTOS</li>
      <li>SOBRE MIM</li>
      <li>CONTATO</li>
    </Ul>
  )
}

export default RightNav