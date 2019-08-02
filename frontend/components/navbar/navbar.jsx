import React from 'react';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dropdown: false
        }
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick({dropdown}){
        debugger
        this.setState({dropdown: !dropdown})
        debugger
    }


    render(){
        const { currentUser, openModal, logout } = this.props;
        if(currentUser){
            return (
                <header className="navbar-logged-in">
                    <section className="left-nav">
                        <h1 id="atmosphere-logo">Atmosphere</h1>
                    </section>
                    <section className="right-nav">
                        <button id="logout-btn" onClick={this.handleClick}>Menu</button>
                        { this.state.dropdown ? (
                            <div className="dropdown">
                                <button>New story</button>
                                <button>Stories</button>
                                <button>Profile</button>
                                <button onClick={logout}>Logout</button>
                            </div>
                        )
                            :(
                                null
                            )

                        }
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
        } else {
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
    }
}

export default Navbar;
  

