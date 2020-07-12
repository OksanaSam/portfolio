import React, { Component, Fragment, useRef } from 'react';
import '../App.scss';
import Video from '../Pexels Videos 2019781.mp4';
import Swal from 'sweetalert2';
import axios from 'axios';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapContainer from './GoogleApiWrapper';

class Contact extends Component {
    constructor() {
      super();
      this.state = {
        values: {
            name: '',
            email: '',
            message: ''
        }
      };
    }


    handleInputChange = e => {
        this.setState({
            values: { ...this.state.values, [e.target.name]: e.target.value }
        });
      };


    // formSubmit = e => {
    //     e.preventDefault();
    // };
 

    render() {
        return (
            <Fragment>
            <div className='ParallaxVideo'>
                <video controls autostart='true' autoPlay src={Video} title='Toronto landscape' type='video/mp4' />
                <div className='wrapper'>
                    <h2>say hello</h2>
                </div>
            </div>
            <div className='ParallaxContent'>
                <div className='formSection'>
                    <div className='contact'>
                        <div className='card'>
                            <p>If you are interested in working together or just having a chat over coffee you can fill out the form or just email me at</p>
                            <p>sayhi@oksanadev.com</p>
                        </div>
                    </div>
                    <form action='https://getform.io/f/27e13fbd-6704-422a-a101-c0e11e96aab1' method='POST' >
                        <label htmlFor='name'>name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.values.name}
                            onChange={this.handleInputChange}
                            required
                        />
                        <label htmlFor='email'>email *</label>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            value={this.state.values.email}
                            onChange={this.handleInputChange}
                            required
                        />
                        <textarea
                            name='message'
                            id='message'
                            cols='30'
                            rows='10'
                            placeholder='message'
                            required
                        ></textarea>
                        <input type='submit' id='submit' name='submit'/>
                    </form>
                </div>
            </div>
            <div className='map' id='map'>
            <MapContainer/>
            {/* <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
                /> */}
                {/* <iframe className='map' src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d66326.79716325912!2d-79.41731561540693!3d43.65870053482269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1593827173432!5m2!1sen!2sca' width='600' height='450' frameBorder='0' style={{border: 0}} allowFullScreen='' aria-hidden='false' tabIndex='0' title='Toronto map'></iframe> */}
            </div>
        </Fragment>
        )
    }
}


export default Contact;