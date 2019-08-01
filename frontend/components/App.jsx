import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import { Route } from 'react-router-dom';
import SplashContainer  from './splash/splash_container';

export default () => (
    <div>
        <Modal />
        <NavbarContainer/>
        <SplashContainer />
    </div>
);

