import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown(e){
        this.setState(prevState => ({visible: !prevState.visible}));
    }

   componentDidUpdate(prev){
        if(prev.currentUser !== this.props.currentUser){
            this.setState({visible: false});
        };
   }



    render(){
        const { currentUser, openModal, logout } = this.props;
        const visible =  this.state.visible ? (
            
            <div className="dropdown">
                <Link to="/story/new">New Story</Link>
                <button>Stories</button>
                <button>Profile</button>
                <button onClick={logout}>Logout</button>
            </div>
        )
            :(
                null
            );
        if(currentUser){
            return (
                <div className="navbar">
                    <section className="top-navbar">
                        <section className="left-nav">
                            <h1 id="atmosphere-logo">Atmosphere</h1>
                        </section>
                        <section className="right-nav">
                            <button id="dropdown-btn" onClick={this.toggleDropdown}>Menu</button>
                            {visible}
                        </section>
                    </section>
                    <section className="bottom-nav">
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                    </section>
                </div>
            )
        } else {
            return (
                <div className="navbar">
                    <section className='top-navbar'>
                        <section className="left-nav">
                            <h1 id="atmosphere-logo">Atmosphere</h1>
                        </section>
                        <section className="right-nav">
                            <button id="signin-btn" onClick={() => openModal('login')}>Sign in</button>
                            <button id="signup-btn" onClick={() => openModal('signup')}>Get started</button>
                        </section>
                    </section>
                    <section className="bottom-nav">
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                    </section>
                    </div>
            )
        }
    }
}

export default Navbar;
  

