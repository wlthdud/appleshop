import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from "react";
import './App.css';
import bg from './img/bg.png';

import data from './data.js';

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js';


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar style={{ borderBottom : "1px solid grey" }}>
        <Container>
          <Navbar.Brand href="#home">NeXT Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }} style={{marginRight:"10px", textDecoration:"none", color:"grey"}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }} style={{marginRight:"10px", textDecoration:"none", color:"grey"}}>상세페이지</Nav.Link>
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

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>}/>
          <Route path="location" element={<div>회사위치</div>}/>
        </Route>

        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}/>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}/>
        </Route>

        <Route path="*" element={<div>404 Not Found</div>}/>
      </Routes>

      
  </div>
  );
}

function EventPage(){
  return(
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  )
}

function About(){
  return(
    <>
      <div>회사정보</div>
      <Outlet></Outlet>
    </>
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
