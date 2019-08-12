import React from 'react';

class ProfileResponses extends React.Component {


    componentDidMount(){
        this.props.fetchUserResponses(this.props.match.params.userId)
    }

    render(){
        const {user, responses} = this.props;
        if(!responses){

            return null
        }
        const responsesList = responses.map((response, idx) => {
            return (
                <li className="user-response-item" key={response.body + idx}>
                    <div className="author-name">{user.username}</div>
                    {response.body}
                </li>
            )
        });
        return (
            <div className="user-response-index">
                <h4>Responses</h4>
                <ul className="user-response-list">
                    {responsesList}
                </ul>
            </div>
        )
    }
}

export default ProfileResponses;