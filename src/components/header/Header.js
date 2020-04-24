import React from 'react';
import './Header.css'
import Container from "@material-ui/core/Container";

export const Header = () => {
    return(
            <header className={'headerImg'}>
               <Container maxWidth="sm">
                   <h1>Andres Quinto</h1>
               </Container>
            </header>
    )
};
