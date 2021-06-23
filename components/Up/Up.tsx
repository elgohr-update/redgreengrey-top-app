import styles from "./Up.module.css";
import { useScrollY } from "../../hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {
    const control = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        control.start({ opacity: (y / document.body.scrollHeight) * 2 });
    }, [y, control]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.div animate={control} initial={{ opacity: 0 }} className={styles.up}>
            <ButtonIcon onClick={scrollToTop} appearence="primary" icon="arrow" />
        </motion.div>
    );
};
