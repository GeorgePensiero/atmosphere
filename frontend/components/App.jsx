import React from 'react';
import NavbarContainer from './navbar_container';
import Modal from './modal';
import { Route } from 'react-router-dom';
import Splash  from './splash';

export default () => (
    <div>
        <Modal />
        <NavbarContainer/>
        <Splash />
    </div>
);

