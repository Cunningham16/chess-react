import React from 'react';
import '../styles/sidebar.css';
import { Link } from 'react-router-dom';


function SideBar(props) {
    return ( 
        <div className='sidebar'>
            <div className="sidebar__top-side">
                <Link to='/'>
                    <h1>Chess React</h1>
                </Link>
                <Link to='/playfriend'>
                <button className='sidebar__button'>
                    <img src="./img/strategy.png" alt="play" />
                    <p>Play with friend</p>
                </button>
                </Link>
                <button className='sidebar__button'>
                    <img src="./img/desktop.png" alt="computer" />
                    <p>Play with AI</p>
                </button>
            </div>

            <button className='sidebar__button'>
                <img src="./img/settings.png" alt="settings" />
                <p>Settings</p>
            </button>
        </div>
    );
}

export default SideBar;