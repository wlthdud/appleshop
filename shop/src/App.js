import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from "react";
import './App.css';
import bg from './img/bg.png';

import data from './data.js';

import { Routes, Route, Link } from 'react-router-dom';


function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar style={{ borderBottom : "1px solid grey" }}>
        <Container>
          <Navbar.Brand href="#home">NeXT Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{marginRight:"10px", textDecoration:"none", color:"grey"}}>홈</Link>
            <Link to="/detail" style={{marginRight:"10px", textDecoration:"none", color:"grey"}}>상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
        <>
          <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>
          <Container>
          <Row>
          {
            shoes.map((a,i)=>{
              return(
                <Card shoes={shoes[i]} i = {i+1}/>
              )
            })}
          </Row>
          </Container>
        </>
        }/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>

      
  </div>
  );
}

function Detail(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
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
