import React from 'react';

export default ({openModal}) => {
    return (
        <header className='navbar'>
            <section className="left-nav">
                <h1 id="atmosphere-logo">Atmosphere</h1>
            </section>
            <section className="right-nav">
                <button id="signin-btn" onClick={() => openModal('login')}>Sign in</button>
                <button id="signup-btn" onClick={() => openModal('signup')}>Get started</button>
            </section>
        </header>
    )
}

