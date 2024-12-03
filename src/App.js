import './App.css';
import ServiceDetails from './PageComp/ServiceDetails';
// import ServiceDetails from './PagesComponent/ServiceDetails';
// import Nav from './PagesComponent/Nav';
// import LoginForm from './PagesComponent/LoginForm';
// import SignUpForm from './PagesComponent/SignUpForm';
//  import CardsExample from './PagesComponent/CardsExample';
//  import FooterCard from './PagesComponent/FooterCard';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Testprops from './PagesComponent/Testprops';
//  import { Container,Row,Col } from 'react-bootstrap';
  // import image1 from '../src/Assets/Images/iphone15.jpg';
// import image2 from '';
import Services from './PageComp/Services';

function App() {
  return (
    <>
     <Services/>
     {/* <ServiceDetails/> */}
     {/* <Nav/> */}
      {/* <LoginForm/> */}
      {/* <SignUpForm/> */}
      {/* <CardsExample/>
      <FooterCard/> */}
      {/* <Container>
        <Row>
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <Col  xs={12} sm={12} md={6} lg={6}>
        
        <Services icon={PiNetwork} title="Nesciunt Mete" 
        text="Provident nihil minus qui consequatur non omnis maiores. 
        Eos accusantium minus dolores iure perferendis tempore et consequatur." button="Read More>"/>
      </Col>
      <Col  xs={12} sm={12} md={6}>
        <Services  title="Eosle Commodi" 
        text="Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. 
        Libero corrupti neque eum hic non ut nesciunt dolorem." button="Read More>"/>
      </Col></Row>
      <Row>
      <Col  xs={12} sm={12} md={6}>
        <Services  title="Ledo Markt" 
        text="Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. 
        Vel qui id voluptas adipisci eos earum corrupti." button="Read More>"/>
      </Col>
      <Col  xs={12} sm={12} md={6}>
        <Services  title="Asperiores Commodit" 
        text="Non et temporibus minus omnis sed dolor esse consequatur. 
        Cupiditate sed error ea fuga sit provident adipisci neque." button="Read More>"/>
      </Col>
      </Row>
      </Container> */}
      

    
  
 <BrowserRouter>
<Routes>
  <Route path="/ServiceDetails" element={<ServiceDetails/>}/>
 
</Routes>
</BrowserRouter> 

      </>
);
}
export default App
