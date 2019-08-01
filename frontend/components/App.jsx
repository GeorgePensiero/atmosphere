import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import { Route } from 'react-router-dom';
import Splash  from './splash/splash';

export default () => (
    <div>
        <Modal />
        <NavbarContainer/>
        <Splash />
    </div>
);

