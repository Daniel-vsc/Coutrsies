import React from 'react'
import './Nav.css';
import {Link } from 'react-router-dom'; 



function Nav() {
    return (
       <nav>
            <h3>Rest Countries Wrapper </h3>
            <ul>
                <Link to="/home">
                    <li>Countries</li>
                </Link>
                <Link to="/search">
                    <li>Search</li>
                </Link>
            </ul> 

       </nav>
    )
}

export default Nav