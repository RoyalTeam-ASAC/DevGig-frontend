import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


class JobModal extends Component {

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.hide} animation={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: 'center' }}>Apply to Jobs From Around The World</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            {this.props.showData.map(item => {

              return <CardDeck style={{width:'550px'}}>
                <Card style={{backgroundColor:'whitesmoke',border:'2px solid black' ,marginBottom:'30px'}}>
                  <Card.Img variant="top" src="/freelance2.png" style={{width:'300px'}}/>
                  <Card.Body>
                    <Card.Title style={{position:'absolute',top:'50px',left:'250px'}}>{item.title}</Card.Title>
                    <Card.Text style={{position:'absolute',top:'120px',left:'250px' ,fontSize:'20px'}}>
                      Company Name: {item.company_name} <br></br>
                      Job Type: {item.job_type}<br></br>
                      <Button href={item.url} variant="secondary" style={{position:'absolute',top:'120px',width:'200px'}}>Apply</Button>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Published: {item.publication_date}</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            })
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default JobModal
