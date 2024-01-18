import './App.css';
import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom';


import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Book from './components/Book';
import BookList from './components/BookList';
import Footer from './components/Footer';


function App() {
  const marginTop = {
    marginTop:"20px"
  }
  return (
    <>
      <Router>
        <NavigationBar />
        <center>
          </center>
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Routes>
                <Route path="/" element = {<Welcome/>}/>
                <Route path="/add" element={<Book />} />
                <Route path="/list" element = {<BookList/>}/>
              </Routes>
              </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
