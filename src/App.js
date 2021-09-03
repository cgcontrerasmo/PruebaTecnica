import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import MiNavbar from "./Componets/Moleculas/Navbar";
import Header from "./Componets/Moleculas/Header";
import Category from "./Componets/Moleculas/Category";
import Selling from "./Componets/Moleculas/Selling";
import EasyAndCool from "./Componets/Moleculas/EasyAndCool";
import Testimonials from "./Componets/Moleculas/Testimonials";
import Information from "./Componets/Moleculas/Information";
import Footer from "./Componets/Moleculas/Footer";

function App() {
  return (
    <Container className="allbody">
      <MiNavbar />
      <Container className="secondContainer">
        <Row>
          <Col xs="10" className="offset-1">
            <Header />
            <Category />
            <Selling />
            <EasyAndCool />
            <Testimonials />
            <Information />
            <Footer />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
