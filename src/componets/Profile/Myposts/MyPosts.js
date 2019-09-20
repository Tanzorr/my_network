import React, {Component} from 'react';
import s from './Myposts.module.css'
import ProfileInfo from "./Post/Post";

class MyPosts extends Component {
    render() {
        let postData =[
            {id: 1, message: 'Dimych hi',likesCount:12},
            {id: 2, message: 'Alex first post',likesCount: 34}
        ]

        return (
            <div className={s.postBlock}>
               <h3>My posts</h3>
                <div >
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>

                </div>
                <div className={s.posts}>
                    <ProfileInfo message ={postData[0].message} likesCount={postData[0].likesCount}/>
                    <ProfileInfo message ={postData[1].message} likesCount={postData[1].likesCount}/>


                </div>
            </div>
        );
    }
}

export default MyPosts;