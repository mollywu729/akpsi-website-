import { NavLink } from 'react-router-dom';

//creates the nav bar for the website
export function NavBarLight() {
    return (
        <nav className="member-nav">
            <div className="container-fluid">
                <div className="navbar-header">
                <NavLink to="/">AKΨ Rho</NavLink>
                </div>
                <div className="navbar-menu-member">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/members">Members</NavLink></li>
                        <li><NavLink to="/events">Events</NavLink></li>
                        <li><NavLink to="/join">Join Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>  
    );
}
