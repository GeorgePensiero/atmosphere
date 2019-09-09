import React from 'react';
import { likeStoryReq, likeResponseReq, unSmackStory, unSmackResponse } from '../../actions/like_actions';
import { connect } from 'react-redux';

const msp = ({entities, session}) => {
    const currentUser = entities.users[session.id];
    return {
        currentUser,
    }
}

const mdp = dispatch => {
    return {
        likeStory: id => dispatch(likeStoryReq(id)),
        likeResponse: (storyId, id) => dispatch(likeResponseReq(storyId, id)),
        unlikeStory: id => dispatch(unSmackStory(id)),
        unlikeResponse: (storyId, id) => dispatch(unSmackResponse(storyId, id)),
    }
}

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
    }


    like(){
        if(this.props.component.current_user_likes < 50 && this.props.type === "story-like" && this.props.author.id !== this.props.currentUser.id){
            this.props.likeStory(this.props.component.id);
        } else if (this.props.component.current_user_likes < 50 && this.props.type === "response-like" && this.props.author.id !== this.props.currentUser.id){
            this.props.likeResponse(this.props.component.storyId, this.props.component.id);
        } 
    }

    unlike(){
        if(this.props.type === "story-like" && this.props.author.id !== this.props.currentUser.id){
            this.props.unlikeStory(this.props.component.id);
        } else if (this.props.type === "response-like" && this.props.author.id !== this.props.currentUser.id){
            this.props.unlikeResponse(this.props.component.storyId, this.props.component.id);
        }
    }

    render(){
        let smacked;
        if(this.props.component.current_user_likes > 0 && this.props.author.id !== this.props.currentUser.id){
            smacked = <button className="unsmack" onClick={this.unlike}>Unsmack</button>
        }
        return (
            <div className={this.props.type}>
                <button className="like-btn" onClick={this.like}><img className="clap-img" src={window.clapUrl} alt="clap.svg" /></button>
                <span>{this.props.component.like_count} smacks</span>
                {smacked}
            </div>
        )
    }
}

export default connect(msp, mdp)(LikeButton);