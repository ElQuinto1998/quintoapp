import React from "react";
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import {Facebook, Instagram, Twitter} from '@material-ui/icons'
import {useStylesFooter} from './FooterStyles'

export const Footer = () => {
    const styles = useStylesFooter();
    return (
        <BottomNavigation width={'auto'} style={{background: '#222'}}>
            <BottomNavigationAction className={styles.root} style={{padding: '0'}} icon={<Facebook/>}/>
            <BottomNavigationAction className={styles.root} style={{padding: '0'}} icon={<Instagram/>}/>
            <BottomNavigationAction className={styles.root} style={{padding: '0'}} icon={<Twitter/>}/>
        </BottomNavigation>
    )
};
