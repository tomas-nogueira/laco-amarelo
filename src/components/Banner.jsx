import React from "react";
import TextoHome from "../photos/TextoHome.png";
import Style from "../styles/banner.module.css";
import Carla from "../photos/carla.png";
import Arrow from "../photos/arrow.png";
import CarlaMobile from "../photos/carlamob2.png";
import { motion, useAnimation } from "framer-motion";

const Banner = () => {
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
            <div class={Style.Mcontainer}>
                <div class={Style.containerL}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={TextoHome}
                            alt="Texto Banner"
                            class={Style.TextoHome}
                        />
                    </motion.div>
                    <motion.div
                        class={Style.divTexto}
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span class={Style.textoP}>
                            Fotográfa especializada em ensaios familiares,
                            batizados e festas infantis.
                        </span>
                        <img
                            src={CarlaMobile}
                            alt="Imagem Carla para Mobile"
                            class={Style.CarlaMob}
                        />
                    </motion.div>
                    <div>
                        <span class={Style.text2mob}>
                            Fotográfa especializada em ensaios familiares,
                            batizados e festas infantis.
                        </span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <button class={Style.btn}>Contate-me!</button>
                    </motion.div>
                </div>
                <div class={Style.containerR}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <img
                            src={Carla}
                            alt="Imagem da Carla"
                            class={Style.carla}
                        />
                    </motion.div>
                </div>
            </div>
            <button class={Style.arrow}>
                <img src={Arrow} alt="" />
            </button>
        </div>
    );
};

export default Banner;
