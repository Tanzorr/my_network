import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import App from "../App";
import ReactDOM from "react-dom";
import React from "react";

let state ={

    posts: [
        {id: 1, post: 'Dimych hi',likesCount:12},
        {id: 2, post: 'Alex first post',likesCount: 34}
    ]
};


it('new post should be incrimented', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutea.com");
    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutea.com");
    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect(newState.posts[2].post).toBe('it-kamasutea.com');
});

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);
    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
     expect(newState.posts.length).toBe(1);
});

it("after deleting length should't be decremnt if id is incorredt", () => {
    //1. test data
    let action = deletePost(1000);
    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
});




