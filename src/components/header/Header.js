import React from "react";
import {Typography, Avatar, Grid, Box} from '@material-ui/core'
import avatar from '../../images/foto.jpg'
import Typed from 'react-typed'
import { useStylesHeader } from './HeaderStyles'


export const Header = () => {

    const styles = useStylesHeader();

    return (
        <Box className={styles.typed}>
           <Grid container justify={'center'}>
               <Avatar src={avatar} alt={'avatar'} className={styles.avatar}/>
           </Grid>
            <Typography variant={'h4'} className={styles.title}>
                <Typed
                    strings={["Andres Quinto"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography variant={'h5'} className={styles.subtitle}>
                <Typed
                    strings={["Be happy", "Be patient", "Be yourself"]}
                    typeSpeed={40}
                    backSpeed={60} loop/>
            </Typography>
        </Box>
    )
};
