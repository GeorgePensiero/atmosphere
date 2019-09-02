import React from 'react';

class FollowButton extends React.Component { 
    constructor(props){
        super(props);
        this.followAction = this.followAction.bind(this);
        this.following = this.following.bind(this);
    }


    followAction(e){
        // e.stopPropogation();
        debugger
        if(this.props.user.following){
            this.props.unFollow(this.props.user.id);
        } else {
            this.props.createFollow(this.props.user.id)
        }
    }

    following(){
        debugger
        if(this.props.user.following){
            return "Unfollow";
        } else {
            return "Follow";
        }
    }

    render(){
        return (
            <button onClick={this.followAction}>
                {this.following()}
            </button>
        )
    }
}

export default FollowButton;