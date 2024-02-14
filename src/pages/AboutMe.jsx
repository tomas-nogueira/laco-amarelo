import React from "react";
import Style from "../styles/aboutme.module.css";
import TextContainer from "../components/TextContainer";
import IconsContainer from "../components/IconsContainer";
import BannerPhoto from "../assets/sobremimbanner.png";
import Navbar from "../components/Nav/Navbar";
import { motion, useAnimation } from "framer-motion";


const Aboutme = () => {
    const controls = useAnimation();

    // Função para iniciar a animação
    const startAnimation = async () => {
        await controls.start({ opacity: 1, y: 0 });
    };

    // Chame startAnimation após o componente ser montado
    React.useEffect(() => {
        startAnimation();
    }, []);

    return (
        <div>
            <Navbar/>
            <motion.div class={Style.container}  initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}>
                <div className={Style.container}>
                    <div className={Style.title2}>
                        <h2>
                            Olá! Eu sou a <span>Carla</span>
                        </h2>
                    </div>
                    <div className={Style.imageContainer}>
                        <img src={BannerPhoto} alt="Imagem" />
                    </div>
                    <div className={Style.textMainContainer}>
                        <TextContainer />
                        <IconsContainer />
                    </div>
                </div>
            </motion.div>
        </div>
        
    );
};

export default Aboutme;
