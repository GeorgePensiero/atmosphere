# Atmosphere
<https://atmosphere-aa.herokuapp.com/>



Atmosphere is a single page clone of the popular website Medium, a blogsite where User's can post and read stories of all kinds. This project showcases understanding and implementation of the CRUD principles and user friendly interfaces. 

# Technologies

* React
* Redux
* JavaScript
* jQuery
* Ruby on Rails
* HTML
* postgreSQL
* CSS3


# Features

* User Authentification(sign in / sign up)
* Story creation, viewing
* User profile
* User Following
* Comments on stories
* Like functionality for stories and comments

# Sample Code 

I created a like subcomponent which had two different use cases, for stories and responses, so I created a like function which conditionaly checked whether a user was liking a story or response. This ensures that when a like button is hit, the correct information is supplied to the backend and stored in the correct table.
```like(){
        if(this.props.component.current_user_likes < 50 && this.props.type === "story-like" && this.props.author.id !== this.props.currentUser.id){
            this.props.likeStory(this.props.component.id);
        } else if (this.props.component.current_user_likes < 50 && this.props.type === "response-like" && this.props.author.id !== this.props.currentUser.id){
            this.props.likeResponse(this.props.component.storyId, this.props.component.id);
        } 
    }```
    
    
    

