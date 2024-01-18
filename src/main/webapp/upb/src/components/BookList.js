import React from "react";
import { Table } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';


class BookList extends React.Component {
    
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
        <tr align ="center">
          <td colSpan={6}>Pas de livre disponible actuellement</td>
        </tr>
      </tbody>
    </Table>

          </Card.Body>
          
        </Card>

      );
    }
  }
  
  export default BookList ;