import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import JobModal from './JobModal'
import Header from './componants/Header'
import axios from 'axios';
import Newfooter from './componants/Newfooter';

import Profilecard from './componants/Profilecard';
import Updateform from './componants/Updateform';
import { withAuth0 } from '@auth0/auth0-react';
import UpdateFormModal from './UpdateFormModal';
import './FindTalent.css'
class FindTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      jobData: [],
      //fromProfile
      dataformBack: [],
      // email: "munther.abdlrahman@gmail.com",
      name: '',
      skills: '',
      bio: '',
      phone: '',
      websiteUrl: '',
      freelanceData: []
    }
    console.log('this.state.data', this.state.data);
  }
  dataSubmitHandler = async () => {
    const axiosResponse = await axios.get(`http://devgig-backend.herokuapp.com/findJobs`)
    console.log(axiosResponse)
    this.setState({
      jobData: axiosResponse.data,
    })
  }
  dataSubmitfreelance = async () => {
    const axiosResponse = await axios.get(`https://devgig-backend.herokuapp.com/Notifies`)
    console.log(axiosResponse)
    this.setState({
      freelanceData: axiosResponse.data,
    })
  }
  showModal = () => {
    this.dataSubmitHandler();
    this.setState({
      show: true
    });
  };
  hideModal = () => {
    this.dataSubmitfreelance()
    this.setState({
      show: false
    });
  };
  render() {
    return (
      <div>
        <Header />
        <JobModal show={this.state.show} hide={this.hideModal} showData={this.state.jobData} />
        <img src='/freelance1.png' alt='freelancemain' className='freelancemain'/>
          <h1 className='talenth1'>Find A Talent And Hire A Pro</h1>
          <h3 className='talenth3'>Search for job offers and get your chance with us </h3>
        <Button className='findjob' variant="outline-secondary" size="lg" onClick={this.showModal} > Find a Job</Button>{' '}
        <div className='linefree'></div>
        <h1 className='freelance1'>Our Freelancers</h1>
        <div className='freelancecard'>
        {
          this.state.freelanceData.map((element, index) => {
            return <>
              <Profilecard name={element.name} bio={element.bio} skills={element.skills} phone={element.phone} websiteUrl={element.websiteUrl} />
              {/* <UpdateFormModal nameOnChange={this.nameOnChange} jobTitleChange={this.jobTitleChange} descriptionChange={this.descriptionChange} jobTitle={this.state.newJobTitle} description={this.state.newDescription} UpdateJob={this.UpdateJob} /> */}
            </>
          })
        }
        <Updateform/>
        </div>
        <Newfooter/>
      </div>
    )
  }
}
export default withAuth0(FindTalent);