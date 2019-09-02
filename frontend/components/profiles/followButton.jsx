import React from 'react';

class FollowButton extends React.Component { 
    constructor(props){
        super(props);
        this.followAction = this.followAction.bind(this);
        this.following = this.following.bind(this);
    }


    followAction(e){
        // e.stopPropogation();
        if(this.props.user.following){
            this.props.unFollow(this.props.user.id);
        } else {
            this.props.createFollow(this.props.user.id)
        }
    }

    following(){
        if(this.props.user.following){
            return "Unfollow";
        } else {
            return "Follow";
        }
    }

    render(){
        if(this.props.user.id === this.props.currentUser.id){
            return (
                <div></div>
            )
        } else {
            return (
                <button onClick={this.followAction} className={this.following() + "-btn"}>
                    {this.following()}
                </button>
            )
        }
    }
}

export default FollowButton;