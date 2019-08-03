import React from 'react';
import Featured from './featured_container';
import NavbarContainer from '../navbar/navbar_container';

class Splash extends React.Component {

    render(){
        return (
            <div className="splash">
                <NavbarContainer/>
                <Featured />
            </div>
        )
    }
}

export default Splash;