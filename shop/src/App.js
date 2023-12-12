import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from "react";
import './App.css';
import bg from './img/bg.png';

import data from './data.js';


function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar style={{ borderBottom : "1px solid grey" }}>
        <Container>
          <Navbar.Brand href="#home">NeXT Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">MyPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>
      <Container>
      <Row>
        {
          shoes.map((a,i)=>{
            return(
              <Card shoes={shoes[i]} i = {i+1}/>
            )
          })
        }
      </Row>
    </Container>
    </div>
  );
}

function Card(props){

  return(
    <Col sm>
      <img src = {"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;
