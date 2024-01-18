import React from 'react';
import { Container,Col,Navbar } from 'react-bootstrap';

class Footer extends React.Component{
    render(){
        let date = new Date();
        let fullYear = date.getFullYear();
        return(
        <Navbar fixed='bottom' bg='primary' variant='dark'>
            <Container>
                <Col lg={12} className='text-center- text-muted'>
                    <div>{fullYear}-{fullYear +1},Tous droits réservé par Zack</div>
                </Col>
            </Container>
        </Navbar>
        )
    }
    
}
export default Footer;