import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';

import './App.css';
import bg from './img/bg.png';

function App() {
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
        <Col sm>
          <img src = "https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col sm>
          <img src = "https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col sm>
          <img src = "https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
