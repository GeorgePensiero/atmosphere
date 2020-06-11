import React from 'react';
import FeaturedContainer from './featured_container';
import NavbarContainer from '../navbar/navbar_container';
import SplashLeftContainer from './splash_left_container';
import PopularSplashContainer from './popular_splash_container';

class Splash extends React.Component {

    componentDidMount(){
        this.props.fetchAllStories();
    }

    render(){
        return (
            <div className="splash">
                <FeaturedContainer />
                <div className="splash-bottom-content">
                    <SplashLeftContainer />
                    <PopularSplashContainer />
                </div>
            </div>
        )
    }
}

export default Splash;