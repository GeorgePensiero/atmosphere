import React from 'react';

class Popular extends React.Component{


    render(){
        const { users, stories } = this.props;
        const popular = stories.slice(0,4).map((story, idx) => {
            return (
                <li className="savory">
                    <div className="savory-num">0{idx + 1}</div>
                    <div className="savory-content">
                    <h2>{story.title}</h2>
                    <p>Written by: {users[story.author_id].username}</p>
                    </div>
                </li>
            );
        });
        

        return (
            <div className="savory-scoops">
                <div className="savory-header">
                    <h3>Savory on Scoop</h3>
                </div>
                <ol className="savory-list">
                    {popular}
                </ol>
            </div>
        )
    }
}

export default Popular;