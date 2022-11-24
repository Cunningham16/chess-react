import React from 'react';
import '../../styles/mainPage.css';
import { Link } from 'react-router-dom';

function MainPage() {
    return ( 
        <section className='main-page'>
            <div className="main-page__first-screen">
                <Link to = '/playfriend'>
                    <img src="./img/Main-page-img.png" alt="MainImg" className='first-screen__img'/>
                </Link>
                <div className="first-screen__content">
                    <h1>Play chess <br/> which made in <br/><span>React</span></h1>
                    <Link to = '/playfriend'>
                        <button className="first-screen__button first-screen__button_primary">
                            <img src="./img/strategy.png" alt="chess" />
                            <div>
                                <h4>Play with friend</h4>
                                <p>Prove to your friends that you are the best at chess</p>
                            </div>
                        </button>
                    </Link>
                    <Link to = '/playai'>
                        <button className="first-screen__button first-screen__button_secondary">
                            <img src="./img/desktop.png" alt="chess" />
                            <div>
                                <h4>Play with AI</h4>
                                <p>Prove to AI that you are the best at chess</p>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default MainPage;