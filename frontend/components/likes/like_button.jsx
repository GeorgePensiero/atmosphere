import React from 'react';
import { likeStoryReq, likeResponseReq } from '../../actions/like_actions';
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
        likeResponse: (storyId, id) => dispatch(likeResponseReq(storyId, id))
    }
}

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.like = this.like.bind(this);
    }

    like(){
        if(this.props.component.current_user_likes < 50 && this.props.type === "story-like" && this.props.author.id !== this.props.currentUser.id){
            this.props.likeStory(this.props.component.id);
        } else if (this.props.component.current_user_likes < 50 && this.props.type === "response-like" && this.props.author.id !== this.props.currentUser.id){
            this.props.likeResponse(this.props.component.storyId, this.props.component.id);
        }
    }

    render(){
        return (
            <div className={this.props.type}>
                {/* <span className="user-like-bubble">+ {this.props.component.current_user_likes}</span> */}
                <button className="like-btn" onClick={this.like}><img className="clap-img" src={window.clapUrl} alt="clap.svg" /></button>
                <span>{this.props.component.like_count} smacks</span>
            </div>
        )
    }
}

export default connect(msp, mdp)(LikeButton);