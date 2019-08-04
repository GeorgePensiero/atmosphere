import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllStories, createStory, fetchStory, editStory, removeStory, fetchUserStories } from './actions/story_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    
    if (window.currentUser){
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id}
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById("root");
    window.fetchAllStories = fetchAllStories;
    window.createStory = createStory;
    window.fetchStory = fetchStory;
    window.editStory = editStory;
    window.deleteStory = removeStory;
    window.fetchUserStories = fetchUserStories;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store}/>, root);
})