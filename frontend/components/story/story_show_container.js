import { connect } from 'react-redux';
import { fetchStory } from '../../actions/story_actions';
import Story from './story_show';

const msp = (state, ownProps) => {
    const story = state.entities.stories[ownProps.match.params.storyId];
    let author = {}
    if(story){
        author = state.entities.users[story.author_id];
    }
    return {
        story, 
        author,
    }
}

const mdp = dispatch => {
    return {
        fetchStory: id => dispatch(fetchStory(id)),
    }
}

export default connect(msp, mdp)(Story);