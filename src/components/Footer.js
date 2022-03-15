import React, { Component } from 'react';

//returns the footer of the website
export class HomeFooter extends Component {
    render() {
        return (
            <footer className= "home-footer">
                <p>Created by Molly Wu, Cindy Chung, Yaying Wang</p>
                <p>Member Data is from <a href="https://www.akpsiuw.org">www.akpsiuw.org</a></p>
                    <address>
                        Contact me at <a href="mailto:cchung8@uw.edu">akpsirho.com</a>.
                    </address>
                <p>&copy; 2021 by Alpha Kappa Psi Rho Chapter</p>
            </footer>
        );
    }
}