import React from 'react';
import Modal from './modal/modal';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash/splash';
import { ProtectedRoute } from '../util/route_util';
import StoryForm from './story/story_form_container';
import StoryIndexContainer from './story/stories_index_container';

export default () => (
    <div>
        <Modal />
        <Switch>
            <ProtectedRoute exact path="/story/new" component={StoryForm} />
            <ProtectedRoute exact path="/users/:userId/stories" component={StoryIndexContainer} />
            <Route component={Splash} />
        </Switch>
    </div>
);

