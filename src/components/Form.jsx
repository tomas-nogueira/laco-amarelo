import React from 'react'
import Style from '../styles/form.module.css'
import logo2 from '../photos/logo2.jpg'
import { motion, useAnimation } from "framer-motion";


const Form = () => {
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
        <motion.div class={Style.container}  initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}>
        <div class={Style.contact}>
            <div class="left"><img src={logo2} alt="Foto da logo" class={Style.img}/></div>
            <div class={Style.right}>
                <h2>Contate-me!</h2>
                <input type="text" class={Style.field} placeholder="Nome"/>
                <input type="text" class={Style.field} placeholder="E-mail"/>
                <input type="text" class={Style.field} placeholder="Telefone"/>
                <textarea placeholder="Message" class={Style.field}></textarea>
                <button class={Style.btn}>Send</button>
            </div>
        </div>
    </motion.div>
    );
};

export default Form;
