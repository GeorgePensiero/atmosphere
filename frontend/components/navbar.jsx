import React from 'react';

export default ({openModal, currentUser, logout, closeModal}) => {
    const loggedOut = () => {
        return (
        <header className='navbar-logged-out'>
            <section className="left-nav">
                <h1 id="atmosphere-logo">Atmosphere</h1>
            </section>
            <section className="right-nav">
                <button id="signin-btn" onClick={() => openModal('login')}>Sign in</button>
                <button id="signup-btn" onClick={() => openModal('signup')}>Get started</button>
            </section>
            <section className="bottom-nav">
                <label>Topic</label>
                <label>Topic</label>
                <label>Topic</label>
                <label>Topic</label>
                <label>Topic</label>
                <label>Topic</label>
            </section>
        </header>
        )
    }

    const loggedIn = () => {
        return (
        <header className="navbar-logged-in">
            <section className="left-nav">
                <h1 id="atmosphere-logo">Atmosphere</h1>
            </section>
            <section className="right-nav">
                <button id="logout-btn" onClick={() => logout()}>Logout</button>
            </section>
            <section className="bottom-nav">
                <label>Topic</label>
                <label>Topic</label>
                <label>Topic</label>
                <label>Topic</label>
                <label>Topic</label>
                <label>Topic</label>
            </section>
        </header>
        )
    }
    return  currentUser ? loggedIn() : loggedOut();
}

