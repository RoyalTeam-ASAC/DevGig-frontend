import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import './Modelform.css'
export class Modelformforupdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataformBack: [],
            showModal: false

        }
    }


    showModal = () => {
        this.setState({
            showModal: true
        })

    };
    handleclose = () => {
        this.setState(
            { showModal: false }
        )
    };







    render() {
        return (
            <div>
                <Button variant="secondary" onClick={this.showModal} className='updateForm'>Update</Button>
                {this.state.showModal && (
                    <div className='modal'>
                        <Modal show={this.state.showModal} onHide={this.handleclose} className='formModal'>
                            <Modal.Header closeButton>Update for:- {this.props.newName}</Modal.Header>
                            <Modal.Body className='modalBody'>
                                <form className='modalform' onSubmit={this.props.updateFreelance}>
                                    <h3>Apply For Promotion</h3>
                                    <label for="fname">Name</label><br />
                                    <input type="text" id="fname" name="firstname" value={this.props.newName} placeholder={this.props.newName} onChange={this.props.nameONchange} />
                                    <br />
                                    <label for="skill">Skills</label><br />
                                    <input type="text" id="fname" value={this.props.newSkills} placeholder={this.props.newSkills} onChange={this.props.SkillsONchange} />
                                    <br />
                                    <label for="bio">Bio</label><br />
                                    <input type="text" id="fname" value={this.props.newBio} placeholder={this.props.newBio} onChange={this.props.BioONchange} />
                                    <h3>Contact Info</h3><br />
                                    <br />
                                    <label for="fname">Phone</label><br />
                                    <input type="text" id="fname" name="firstname" value={this.props.newPhone} placeholder={this.props.newPhone} onChange={this.props.phoneONchange} />
                                    <br />
                                    <label for="fname">Website Url</label><br />
                                    <input required aria-required="true" type="text" id="fname" name="firstname" value={this.props.newWeb} placeholder={this.props.newWeb} onChange={this.props.websiteONchange} />
                                    <br />
                                    <br />
                                    <Button type='submit' variant="secondary" className='updatebutton'>Update</Button>

                                </form>
                                <Button variant="secondary" onClick={this.handleclose} className='updatebutton'>
                                    close
                                </Button>
                            </Modal.Body>
                        </Modal>
                    </div>
                )
                }





            </div>
        )
    }
}

export default Modelformforupdate
