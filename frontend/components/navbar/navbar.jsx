import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import StoriesIndexContainer from '../story/stories_index_container';
class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
        this.props.logout().then(() => this.props.history.push("/"));
    }

    toggleDropdown(e){
        this.setState(prevState => ({visible: !prevState.visible}));
    }

    componentDidMount(){
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e){
        if(this.node && this.node.contains(e.target)){
            return;
        } else if (!this.state.visible && !this.iconRef.contains(e.target)) {
            return
        }
        this.toggleDropdown();
    }

   componentDidUpdate(prev){
        if(prev.currentUser !== this.props.currentUser){
            this.setState({visible: false});
        };
   }



    render(){
        const { currentUser, openModal, logout } = this.props;
        const visible =  (this.state.visible && currentUser) ? (
            <div className="dropdown" ref={node => this.node = node}>
                <Link to="/story/new">New Story</Link>
                <Link to={`/users/${currentUser.id}/stories`}>Stories</Link>
                <button>Profile</button>
                <button onClick={this.handleClose}>Logout</button>
            </div>
        )
            :(
                null
            );
        if(currentUser){
            const initial = currentUser.username.slice(0,1).toUpperCase();
            return (
                <div className="navbar">
                    <section className="top-navbar">
                        <section className="left-nav">
                            <h1 id="atmosphere-logo">Atmosphere</h1>
                        </section>
                        <section className="right-nav">
                            <div ref={iconRef => this.iconRef = iconRef} className="user-initial">{initial}</div>
                            {visible}
                        </section>
                    </section>
                    <section className="bottom-nav">
                        {/* <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label> */}
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
                        {/* <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label>
                        <label>Topic</label> */}
                    </section>
                    </div>
            )
        }
    }
}

export default withRouter(Navbar);
  

