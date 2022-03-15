import React from 'react';
import { NavLink } from 'react-router-dom';

//returns the header of the homepage 
export function HomeHeader() {
    return (
        <header className= "home-page-header">
            <div className= "tagline">
                <h1>ALPHA KAPPA PSI</h1>
                <hr size="5" width="90%" color="white"/> 
                <p className= "motto">Shaping People, Shaping Business</p>
            </div>
        </header>  
    );   
}

//returns content for the WhoWe section
export function WhoWe() {   
    return (
        <section className= "who-section">
            <div className= "who-container">
                <div className ="containter-right-block1">
                    <p>Alpha Kappa Psi is a unique, prestigious association of students, professors, graduates and professionals with common interests and goals.</p>
                    <p>They join Alpha Kappa Psi to take advantage of valuable educational, friendship and networking opportunities. You gain access to a wide professional network, support from other members, and mentorship from alumni.</p>
                </div>
                <div className ="containter-left-block1">
                    <h2 className ="right"><strong>WHO WE ARE</strong></h2>
                </div>
            </div>
        </section>
    )
}

//returns content for Join Us seciton 
export function JoinUs() {
    return (
        <section className= "join-section">
            <div className= "join-container">
                <div className ="containter-left-block">
                    <h2 className ="left-dark"><strong>JOIN US</strong></h2>
                    <NavLink to="/join"><button className= "btn btn-light">Recruitment</button></NavLink>
                </div>
                <div className= "containter-right-block">
                    <p>Whether you’re across the world or just steps away from campus, one of the most important things in college is finding your community. Here at Alpha Kappa Psi, we’ll travel great lengths for each other no matter the distance. This pandemic has made us more divided than ever before, but AKPsi strives to recreate and establish community.</p>
                    <p>Whoever you are and wherever you are, know that you're right where you should be with AKPsi.</p>
                </div>
            </div>           
        </section>
    );
}

//returns content for ourValues section
export function OurValues() {
    return (
        <section className= "values-section">
            <div className= "values-container">
                <div className ="containter-right-block1">
                    <p>Alpha Kappa Psi is driven by 5 core values: Brotherhood, Unity, Service, Integrity, Knowledge.</p>
                    <p>These 5 values drive our actions and events as a chapter. Each of the committees that members join on a quarterly basis works to further these values in a professional manner.</p>
                </div>
                <div className ="containter-left-block1">
                    <h2 className ="right"><strong>OUR VALUES</strong></h2>
                    <NavLink to="/members"><button className= "btn btn-dark">Our Members</button></NavLink>
                </div>
            </div>
        </section>
        );    
}

//returns content for the entire homepage
export function HomePage() {
    return (
        <div>
            <HomeHeader />
            <WhoWe />
            <JoinUs />
            <OurValues />
        </div>
    );
}