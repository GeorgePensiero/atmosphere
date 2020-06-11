import React from 'react';
import Modal from './modal/modal';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import { ProtectedRoute } from '../util/route_util';
import NewStoryContainer from './story/new_story_form_container';
import StoryIndexContainer from './story/stories_index_container';
import EditStoryContainer from './story/edit_story_form_container';
import StoryShowContainer from './story/story_show_container';
import ProfileContainer from './profiles/profile_container';
import ResponseIndexContainer from './responses/response_index_container';
import UserResponsesIndexContainer from './profiles/profile_responses_container';
import NavbarContainer from './navbar/navbar_container';

export default () => (

    
    <div>
        <Modal />
        <NavbarContainer />
        <Switch>
            <Route exact path="/story/new" component={NewStoryContainer} />
            <ProtectedRoute exact path="/users/:userId/stories" component={StoryIndexContainer} />
            <Route exact path="/users/:userId/responses" component={UserResponsesIndexContainer} />
            <Route exact path="/story/:storyId/edit" component={EditStoryContainer} />
            <Route exact path="/story/:storyId" component={StoryShowContainer} />
            <Route exact path="/users/:userId/profile" component={ProfileContainer} />
            <Route exact path="/story/:storyId/responses" component={ResponseIndexContainer} />
            <Route path="/" component={SplashContainer} />
        </Switch>
    </div>
);

