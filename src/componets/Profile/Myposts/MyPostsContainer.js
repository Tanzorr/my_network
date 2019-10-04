import React, {Component} from 'react';

import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

class MyPostsContainer extends Component {
    render(props) {
        let state = this.props.store.getState();

        let addPost =()=>{
            let action =addPostActionCreator();
            this.props.store.dispatch(action);
        }

        let onPostChange = (text)=>{
            let action = updateNewPostActionCreator(text);
            this.props.store.dispatch(action);
        }

        return (
            <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts = {state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
        );
    }
}

export default MyPostsContainer;