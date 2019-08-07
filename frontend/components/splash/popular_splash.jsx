import React from 'react';
import { Link } from 'react-router-dom';

class Popular extends React.Component{


    render(){
        const { users, stories } = this.props;
        const popular = stories.slice(0,4).map((story, idx) => {
            return (
                <li className="savory">
                    <div className="savory-num">0{idx + 1}</div>
                    <div className="savory-content">
                        <Link to={`/story/${story.id}`} className="route-link"><h2>{story.title}</h2></Link>
                        <Link to={`/users/${users[story.author_id].id}/profile`} className="author-name"><p className="author-name">{users[story.author_id].username}</p></Link>
                    </div>
                </li>
            );
        });
        

        return (
            <div className="savory-scoops">
                <div className="scoops-section">
                    <div className="savory-header">
                        <h3>Awesome on Atmosphere</h3>
                    </div>
                    <ol className="savory-list">
                        {popular}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Popular;