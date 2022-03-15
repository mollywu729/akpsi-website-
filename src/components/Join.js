import React, { useState } from 'react';
import { NavBarLight } from './NavBarLight.js';

//returns the join header for the join page 
export function JoinHeader(){
    return (
        <header>
            <div className="join-us">
                <h1 className="join-us-title">Join Us Today</h1>
                <p className="recruitment">FALL RECRUITMENT 2021</p>
            </div>
        </header>
    )
}

//returns the join info for the join page
export function JoinInfo() {
    return (
        <div>
            <section className="recruitment-banner">
                <div className="container-banner-image">
                    <img src="img/fall_recruitment.jpg" alt="fall recruitment dates" width="1650" height="350" />
                </div>
            </section>
            <section className="message">
                <div className="container-message">
                    <p>Whether you’re across the world or just steps away from campus, one of the most important things in college is finding your community. Here at Alpha Kappa Psi, we’ll travel great lengths for each other no matter the distance.</p>
                    <p>Alpha Kappa Psi is a co-ed professional business-interested fraternity open to all majors. As a community, we help our members develop themselves professionally and create friendships that will last a lifetime. All together, we embrace our unique backgrounds and diverse passions to support the endeavors of one another. We are so excited to meet you and learn about what makes you, you! So whoever you are and wherever you are, know that you’re right where you should be with AKPsi.</p>
                    <p>The opportunity is yours.</p>
                </div>
            </section>
        </div>
    )
}

//returns the interest form 
export default function InterestForm() {
    //keep track of the state of the form inputs
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // when the form is submitted, log the values to the console and alert the user
    const handleSubmit = (event) => {
        console.log(`
          Name: ${fullName}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `);
        event.preventDefault();
        alert('A form was submitted for: ' + event.target.name.value);
    }

    return (
        <section className="interest-form">
            <div className="container-top-bottom">
                <div className="form-response justify-content-left">
                    <div className="interest-form-title">
                        <h2 className='form-title'><strong>INTEREST FORM</strong></h2>
                    </div>
                </div>
                <form action="/signup" method="GET" onSubmit={handleSubmit}>
                    <div className="form-response justify-content-right">
                        <div className="form-response">
                            <div className="form-group">
                                <label className="label" htmlFor="name">Full Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Name" value={fullName}
                                onChange={e => setFullName(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label className="label" htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" name="email" placeholder="Email" value={email}
                                onChange={e => setEmail(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label className="label" htmlFor="subject">Subject</label>
                                <input type="text" className="form-control" name="subject" placeholder="Subject" value={subject}
                                onChange={e => setSubject(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label className="label" htmlFor="#">Message</label>
                                <textarea name="message" className="form-control" placeholder="Message"value={message}
                                onChange={e => setMessage(e.target.value)} required></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="SUBMIT" className="btn btn-dark" />
                                <div className="submitting"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

//display the recuitment video
export function RecruitmentVideo() {
    return (
        <div className="video">
            <iframe title="AKPsi 2021 Fall rush video"width="420" height="315" src="https://www.youtube.com/embed/1pbzHNDBLEk">           
            </iframe>
        </div>
    )
}

//returns the entire join page
export function JoinPage() {
    return (
        <div>
            <NavBarLight />
            <JoinHeader />
            <JoinInfo />
            <RecruitmentVideo />
            <InterestForm />
        </div>
    );
}