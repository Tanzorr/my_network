import React, {Component} from 'react';

import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";





let mapStateToProps = (state)=>{
    return{
     posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        newPostText: (text)=>{
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        },

        addPost: ()=>{
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostContainer;