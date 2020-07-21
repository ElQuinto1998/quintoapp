import React from "react";
import {Typography, Box} from "@material-ui/core";
import {Navbar} from "../../components/navbar/Navbar";
import {useStylesResume} from './ResumeStyles';
import { constantes } from "../../constants/constants";

export const Resume = () => {

    const styles = useStylesResume();

    return (
        <>
            <Navbar title={constantes.TITULO_RESUME}/>
            <Box component={'header'} className={styles.container}>
                <Typography variant={'h4'} align={'center'} className={styles.title}>
                    Experiencia laboral
                </Typography>
                <Box component={'div'} className={styles.timeLine}>
                    <Typography className={`${styles.timeLineYear} ${styles.timeLineItem}`}
                                variant={'h2'}>2018</Typography>
                    <Box className={styles.timeLineItem}>
                        <Typography variant={'h5'} className={styles.subtitle} align={'center'}>Desarrollador
                            web</Typography>
                        <Typography variant={'body1'} align={'center'} style={{color: 'tomato'}}>Gravital
                            Software</Typography>
                        <Typography variant={'subtitle'} align={'center'} style={{color: 'tan'}}>
                            Desarrollo de aplicaciones webs basadas en Python utilizando el
                            framework Django, testeo de aplicaciones webs y móviles con katalon Studio.
                        </Typography>
                    </Box>
                    <Typography className={`${styles.timeLineYear} ${styles.timeLineItem}`}
                                variant={'h2'}>2019-2020</Typography>
                    <Box className={styles.timeLineItem}>
                        <Typography variant={'h5'} className={styles.subtitle} align={'center'}>Desarrollador
                            web</Typography>
                        <Typography variant={'body1'} align={'center'} style={{color: 'tomato'}}>Sofka
                            Technologies</Typography>
                        <Typography variant={'subtitle'} align={'center'} style={{color: 'tan'}}>
                            Desarrollo y mantenimiento de aplicaciones webs utilizando los lenguajes Java y JavaScript.
                            Las tecnologias Sprint boot y Angular.
                            Uso de arquitectura limpia bajo el modelo DDD y programación reactiva, ademas, manejo de
                            MongoDb como base de datos no relacional
                            y uso de Uipath para el desarrollo de RPA.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
};
