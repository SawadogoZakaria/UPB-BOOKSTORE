import React from 'react';

import { Container } from 'react-bootstrap';

class Welcome extends React.Component{
    render(){
        return(
            <Container className='text-primary-bg-dark'>
                <h1>
                    Bienvenue à la bibliothèque numerique de l'UPB
                </h1>
                <blockquote className='blockquote mb-0'>
                        <p>
                            Meilleurs amis, meilleurs livres, conscience tranquille: c'est l'ideal de la vie.
                        </p>
                        <footer className='blockquote-footer'>
                            Zakaria S
                        </footer>    
                </blockquote>

            </Container>
        )
    }
}
export default Welcome;