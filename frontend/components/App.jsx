import React from 'react';
import Modal from './modal/modal';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash/splash';
import { ProtectedRoute } from '../util/route_util';
import NewStoryContainer from './story/new_story_form_container';
import StoryIndexContainer from './story/stories_index_container';
import EditStoryContainer from './story/edit_story_form_container';

export default () => (
    <div>
        <Modal />
        <Switch>
            <ProtectedRoute exact path="/story/new" component={NewStoryContainer} />
            <ProtectedRoute exact path="/users/:userId/stories" component={StoryIndexContainer} />
            <ProtectedRoute exact path="/story/:storyId/edit" component={EditStoryContainer} />
            <Route component={Splash} />
        </Switch>
    </div>
);

