import React from 'react';
import { Button, Col, Form, } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faSave} from '@fortawesome/free-solid-svg-icons';


class Book extends React.Component {

  constructor(props){
    super(props);
    this.state = {title:'',author:'' ,coverPhotoURL:'' ,isbnNumber:'',price:'' ,language:''}
    this.bookChange = this.bookChange.bind(this);
    this.submitBook = this.submitBook.bind(this);
  }

  submitBook(event){
    alert('Titre: '+this.state.title+',Auteur:'+this.state.author+', Numero ISBN :'+this.state.isbnNumber+', Prix:' +this.state.price+', Photo de couverture:' +this.state.coverPhotoURL+', Langue:' +this.state.language); 
    event.preveventDefault();
  };
  bookChange(event){

    this.setState({[event.target.name]:event.target.value});
  }


  render() {
    return (
      <Card className={"border border-dark "}>
          <Card.Header> <FontAwesomeIcon icon={faPlusSquare} /> Ajouter des livres</Card.Header>
            <Form onSubmit={this.submitBook} id='bookFormId'>
            <Card.Body>
              
              <Form.Group as={Col} controlId='formGridTitle'>
                <Form.Label>Titre</Form.Label>
                <Form.Control required type="text" name='title' value={this.state.title} onChange={this.bookChange} className='{"bg-dark text white"}' placeholder='Entrer le titre du livre'/>
              </Form.Group><br/>
              <Form.Group as={Col} controlId='formGridAuthor'>
                <Form.Label>L'auteur</Form.Label>
                <Form.Control required type="text" name='author' value={this.state.author} onChange={this.bookChange} className='{"bg-dark text white"}' placeholder="Entrer l'auteur du livre "/>
              </Form.Group><br/>
              <Form.Group as={Col} controlId='formGridIsbnNumber'>
                <Form.Label>Numero ISBN</Form.Label>
                <Form.Control required type="text" name='isbnNumber' value={this.state.isbnNumber} onChange={this.bookChange} className='{"bg-dark text white"}' placeholder='Entrer le numero ISBN'/>
              </Form.Group><br/>
              <Form.Group as={Col} controlId='formGridPrice'>
                <Form.Label>Prix</Form.Label>
                <Form.Control required type="text" name='price' value={this.state.price} onChange={this.bookChange} className='{"bg-dark text white"}' placeholder="Entrer le prix du livre "/>
              </Form.Group><br/>
              <Form.Group as={Col} controlId='formGridCoverPhoto'>
                <Form.Label>Photo de couverture</Form.Label>
                <Form.Control required type="text" name='coverPhotoURL' value={this.state.coverPhotoUrl} onChange={this.bookChange} className='{"bg-dark text white"}' placeholder=' Indiquer photo de couverture'/>
              </Form.Group><br/>
              <Form.Group as={Col} controlId='formGridLanguage'>
                <Form.Label>Langue</Form.Label>
                <Form.Control required type="text" name='language' value={this.state.language} onChange={this.bookChange} className='{"bg-dark text white"}' placeholder="Indiquer la langue "/>
              </Form.Group><br/>
              <Button size=''variant='success' type='submit'><FontAwesomeIcon icon={faSave} /> Soumettre</Button>
          </Card.Body>
          <Card.Footer style={{"textAlign":"right"}}>
          {/*<Button size=''variant='success' type='submit'><FontAwesomeIcon icon={faSave} /> Soumettre</Button>*/}
         </Card.Footer>
            </Form> 
       </Card>     
          
    );
  }
}

export default Book ; 