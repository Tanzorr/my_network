import React, {Component} from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return{
     posts: state.profilePage.posts,
    }
};

let mapDispatchToProps = (dispatch)=>{
    return{
        addPost: (newPostBody)=>{
            let action = addPostActionCreator(newPostBody);
            dispatch(action);
        }
    }
};

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostContainer;