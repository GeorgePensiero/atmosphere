import React from 'react';
import NavbarContainer from './navbar_container';
import Modal from './modal';
import { Route } from 'react-router-dom';

export default () => (
    <div>
        <Modal />
        <NavbarContainer/>
    </div>
);

