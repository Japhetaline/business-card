import React from 'react';
import Image from './image/image.png';
import './App.css';

function MainComponent() {
    return (
        <div className='container'>

            <img src={Image} alt="" className='image' />
            <div className="content">
                <div className="name">
                    <h1>Laura Smith</h1>
                </div>
                <div className="title">
                    <p>FrontEnd Developer</p>
                </div>
                <div className='website'>
                    <p>Laura.website</p>
                </div>
                <div className="social">
                    <div className="email">
                        <i className="fas fa-envelope"></i>
                        <p>Email</p>
                    </div>
                    <div className="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                        <p>LinkedIn</p>
                    </div>
                </div>
                <div className="about">
                    <h1>About</h1>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                        I try to keep up with security and best practices,
                        and am always looking for new things to learn.</p>
                </div>
                <div className="interest">
                    <h1>Interest</h1>
                    <p>Food expert. Music scholar. Reader.
                        Internet fanatic. Bacon buff. Entrepreneur.
                        Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
                <div className="footer">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-github"></i>
                </div>
            </div>
        </div>
    )
}

export default MainComponent