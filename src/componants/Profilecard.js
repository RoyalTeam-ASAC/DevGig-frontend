import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Profilecard.css'
export class Profilecard extends Component {
    render() {
        return (
            <div>
                    <Card style={{ width: '800px', display: 'inline-block', marginBottom: '200px',marginLeft:'250px',border:'solid 2px black' }}>
                        <Card.Img variant="top" src="/profile2.png" style={{ width: '500px', marginTop: '35px',border:'3px solide black' }} />
                        <Card.Body style={{ height: '250px' }}>
                            <Card.Title style={{ marginTop: '60px',fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold' }}>Name:{this.props.name} </Card.Title>
                            <Card.Title style={{position: "absolute", top: '500px', left: '300px',fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold' }}>Bio:{this.props.bio}</Card.Title>
                            <Card.Title style={{ position: "absolute", top: '580px', left: '20px',fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold' }}>Skills:{this.props.skills}</Card.Title>
                            <Card.Title style={{ position: "absolute", top: '580px', left: '300px',fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold', fontSize:'30px' }}className='cardinfo'>Contact Information</Card.Title>
                            <Card.Title style={{ position: "absolute", top: '650px', left: '200px',fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold' }}>Phone:{this.props.phone}</Card.Title>
                            <Card.Title style={{ position: "absolute", top: '650px', left: '500px',fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold' }}>WebsiteUrl:{this.props.websiteUrl}</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
            </div>
        )
    }
}
export default Profilecard;