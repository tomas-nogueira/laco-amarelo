import React, { useState } from 'react'
import one from '../photos/carrousel-photos/one.jpg'
import two from '../photos/carrousel-photos/two.jpg'
import three from '../photos/carrousel-photos/three.jpg'
import four from '../photos/carrousel-photos/four.jpg'
import five from '../photos/carrousel-photos/five.jpg'
import six from '../photos/carrousel-photos/six.jpg'
import Style from '../styles/gallery.module.css'

const Galeria = () => {
  let data = [
    {
      id: 1,
      imgSrc: one,
    },
    {
      id: 2,
      imgSrc: two,
    },
    {
      id: 3,
      imgSrc: three,
    },
    {
      id: 4,
      imgSrc: four,
    },
    {
      id: 5,
      imgSrc: five,
    },
    {
      id: 6,
      imgSrc: six,
    },

  ]
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('')

  const getImg= (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
    console.log("Model is now open")
  }

  return(
     <>
      <h2 className={Style.h2}>GALERIA</h2>
      <div className={model? "model open" : "model"}>
        <img src={tempimgSrc} className={Style.img2}/>
      </div>
      <div className={Style.gallery}>
          {data.map((item, index)=>{
            return(
              <div className={Style.pics} key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} alt="Foto 1" className={Style.img2}/>
              </div>
            )
          })}
        
      </div>
     </>

  )
}

export default Galeria