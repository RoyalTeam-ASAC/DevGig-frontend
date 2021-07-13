import { Button } from 'bootstrap';
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'

export class FeedBackButton extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false,
            
        }
        }
    
    
        showModal = () =>{
              this.setState({
                  show:!this.state.show
              });
          };
        
         
        


    render() {
        return (
            <div>

    <Modal show={this.state.show} onHide={this.showModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Provide us feedback
</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <Card.Text>
    Your Feedback
    <Form>
    <br></br>
    <input type="Text">Summary</input>
    </Form>
    
    </Card.Text>
    <br></br>
    <Card.Text>
    Further Details
    <Form>
    <br></br>
    <input type="Text">Optionally add more detials here </input>
    </Form>
  
    </Card.Text>
  </Card.Body>
</Card> 

 </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={this.props.hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.hideModal}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>


 
            </div>
        )
    }
}

export default FeedBackButton