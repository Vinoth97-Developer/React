import React from "react";
import { Link, Outlet } from 'react-router-dom';



const EventHome = ({ data }) => {
    return (
        <div>
            <nav className="sub-nav">
                <ul>
                    <li><Link to="/events/click">onClick</Link></li>
                    <li><Link to="/events/change">onChnage</Link></li>
                    <li><Link to="/events/submit">onSubmit</Link></li>
                    <li><Link to="/events/mouse">MouseHover</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div >
    );
};

export default EventHome;