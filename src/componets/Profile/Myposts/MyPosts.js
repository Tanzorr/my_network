import React, {Component} from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";

class MyPosts extends Component {
    render() {
        return (
            <div>
                My posts
                <div >
                    New Posts
                </div>
                <div className={s.posts}>
                    <Post message ='Hi, how are you ?'/>
                    <Post message ='My first post'/>

                </div>
            </div>
        );
    }
}

export default MyPosts;