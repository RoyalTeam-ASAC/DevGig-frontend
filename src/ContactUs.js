import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import CardGroup from 'react-bootstrap/CardGroup'
import Header from './componants/Header'
import './ContactUs.css';

// import FeedBackButton from './FeedBackButton'
class ContactUs extends Component {





  render() {
    return (
      <div>
        <Header />
        
        <div className="headershow">
          <img className="imgheader" src="/contact2.png"/>
          <h1 >  Contact Informations  </h1>
          <h2>Phone: 777-999-000</h2>
          <h2>
          
           Email: info@devgig.com
          </h2>

          <h2> Social Media Links <br></br>
            <a href="https://twitter.com/twitter?lang=ar"><img src="https://www.pngfind.com/pngs/m/418-4184531_twitter-icon-black-twitter-black-icon-png-transparent.png" /></a>
            <a href="https://ar-ar.facebook.com/"><img src="https://www.rutgerson.se/wp-content/uploads/2016/11/facebook-icon-png-black.png" /></a>
            <a href="https://www.instagram.com/"><img src="https://img1.arabpng.com/20180508/vqq/kisspng-computer-icons-symbol-clip-art-5af1cf3be02cb7.7501609515257966679182.jpg" /></a>
           

          </h2>
        </div>

        {/* <Jumbotron fluid> */}
          <Container>

           <div>
           <h2 className="textForm">Give Us FeedBack</h2>
              <Form className="formmain">
             
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Email</Form.Label>
                  <Form.Control className="inputform" type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>FeedBack</Form.Label>
                  <Form.Control className="inputform2" as="textarea" rows={3} />
                  <Button className="likebtn" variant="secondary">like</Button>
              <Button variant="primary">dislike</Button>
              <Button className="savebtn" variant="primary">Save</Button>
                </Form.Group>
                
              </Form>
              </div>

          </Container>
        {/* </Jumbotron> */}
        
        <h1 className="textteam" style={{ textAlign: 'center' } }>Our Team</h1>
        <div className="cardgroup">
        {/* <Row sm ={10}> */}
          <Col sm ={10}>
        <CardGroup >
          <Card  className="card1">
            <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" />
            <Card.Body>
              <Card.Title>Yazan Baker</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <a href="https://www.linkedin.com/in/erada-ali-54b8901b9"><img src="   https://www.pngjoy.com/pngm/381/7044985_linkedin-logo-png-linkedin-logo-png-black-transparent.png " alt="LinkedIn" /></a>
              <a href="https://github.com/eradaali"><img src=" https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" alt="GitHub" /></a>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="card1">
            <Card.Img className="eradaImg" variant="top" src="src/img/eradaPic.jpeg" />
            <Card.Body>
              <Card.Title>Erada  Ali</Card.Title>
              <Card.Text>
                Computer Science  at Balqa Applied University
              </Card.Text>
              <a href="https://www.linkedin.com/in/erada-ali-54b8901b9"><img src="   https://www.pngjoy.com/pngm/381/7044985_linkedin-logo-png-linkedin-logo-png-black-transparent.png " alt="LinkedIn" /></a>
              <a href="https://github.com/eradaali"><img src=" https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" alt="GitHub" /></a>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="card1">
            <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" />
            <Card.Body>
              <Card.Title>razan alamleh  </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
              <a href="https://www.linkedin.com/in/erada-ali-54b8901b9"><img src="   https://www.pngjoy.com/pngm/381/7044985_linkedin-logo-png-linkedin-logo-png-black-transparent.png " alt="LinkedIn" /></a>
              <a href="https://github.com/eradaali"><img src=" https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" alt="GitHub" /></a>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="card1">
            <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" />
            <Card.Body>
              <Card.Title>Munther AbdlRahman  </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
              <a href="https://www.linkedin.com/in/erada-ali-54b8901b9"><img src="   https://www.pngjoy.com/pngm/381/7044985_linkedin-logo-png-linkedin-logo-png-black-transparent.png " alt="LinkedIn" /></a>
              <a href="https://github.com/eradaali"><img src=" https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" alt="GitHub" /></a>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
{/* </Row> */}
</Col>
        </div>


      </div>
    )
  }
}

export default ContactUs
