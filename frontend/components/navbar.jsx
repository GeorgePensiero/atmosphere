import React from 'react';

export default () => {
    return (
        <header className='navbar'>
            <section className="left-nav">
                <h1 id="atmosphere-logo">Atmosphere</h1>
            </section>
            <section className="right-nav">
                <button id="signin-btn">Sign in</button>
                <button id="signup-btn">Get started</button>
            </section>
        </header>
    )
}