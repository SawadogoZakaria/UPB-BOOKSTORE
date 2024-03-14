import React from "react";
import { Table ,Image, ButtonGroup,Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList ,faTrash , faEdit} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


class BookList extends React.Component {


constructor(props){
  super(props);
  this.state = {
    books :[]
  };
}
componentDidMount(){
  this.findAllBooks();
  
}
findAllBooks(){
 axios.get("http://localhost:8080/api/v1/rest/books")
  .then(response =>response.data)
  .then((data) => {
    this.setState({books:data});
  });
};

deleteBook=(bookId)=>{
  axios.delete("http://localhost:8080/api/v1/rest/books/"+bookId)
      .then(response =>{
      if(response.data !=null){
        alert("suppression reussi");
        this.setState({
          books:this.state.books.filter(book=>book.id !== bookId )
        })
      }});
}
    
    render() {
      return (
        <Card className={"border border-dark "}>
          <Card.Header> <FontAwesomeIcon icon={faList} /> Liste des livres</Card.Header>
           <Card.Body>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Numero ISBN</th>
          <th>Prix</th>
          <th>Langue</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      { 
      this.state.books.length === 0?
        <tr align ="center">
          <td colSpan="6" > Livre(s) disponible actuellement</td>
      </tr> :
      this.state.books.map((book) =>(
        <tr key={book.id}>
          <td>
              <Image src={book.coverPhtotoURL} rounderCircle width= "40" headers="40"/>{book.title}
          </td>
          <td>{book.author}</td>
          <td>{book.isbnNumber}</td>
          <td>{book.price}</td>
          <td>{book.language}</td>
          <td>
            <ButtonGroup>
              <Button size = "lg" variant="outline-primary"><FontAwesomeIcon icon = {faEdit}/></Button>{''}
              <Button size = "ls" variant="outline-danger" onClick={this.deleteBook.bind(this,book.id)}><FontAwesomeIcon icon = {faTrash}/></Button>
            </ButtonGroup>
          </td>
        </tr>
    ))} 
      </tbody>
    </Table>

          </Card.Body>
          
        </Card>

      );
    }
  }
  
  export default BookList ;