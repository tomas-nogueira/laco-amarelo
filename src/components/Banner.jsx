import React from 'react'
import TextoHome from "../photos/TextoHome.png"
import Style from "../styles/banner.module.css"
import Carla from "../photos/carla.png"
import Arrow from "../photos/arrow.png"

function Banner() {
  return (
    <div>
        <div class={Style.Mcontainer}>
            <div class={Style.containerL}>
                <div><img src={TextoHome} alt="Texto Banner" /></div>
                <div class={Style.divTexto}><span class={Style.textoP}>Fotográfa especializada em ensaios familiares, batizados e festas infantis.</span></div>
                <div><button class={Style.btn}>Contate-me!</button></div>
            </div>
            <div class={Style.containerR}>
                <div><img src={Carla} alt="Imagem da Carla" class={Style.carla}/></div>
            </div>
        </div>
        <button class={Style.arrow}><img src={Arrow} alt="" /></button>
    </div>    
  )
}

export default Banner
