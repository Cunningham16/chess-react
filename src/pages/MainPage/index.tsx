import React from 'react';
import styles from './mainPage.module.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames'

function MainPage() {
    return ( 
        <section className={styles.mainPage}>
            <div className={styles.mainPage__firstScreen}>
                <Link to = '/playfriend'>
                    <img src="./img/Main-page-img.png" alt="MainImg" className={styles.firstScreen__img}/>
                </Link>
                <div className={styles.firstScreen__content}>
                    <h1>Play chess <br/> which made in <br/><span>React</span></h1>
                    <Link to = '/playfriend'>
                        <button className={cn(styles.firstScreen__button, styles.firstScreen__button_primary)}>
                            <img src="./img/strategy.png" alt="chess" />
                            <div>
                                <h4>Play with friend</h4>
                                <p>Prove to your friends that you are the best at chess</p>
                            </div>
                        </button>
                    </Link>
                    <Link to = '/playai'>
                        <button className={cn(styles.firstScreen__button, styles.firstScreen__button_secondary)}>
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