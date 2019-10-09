import React, {Component} from 'react';
import s from './Myposts.module.css'
import ProfileInfo from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

class MyPosts extends Component {
    render(props) {

        let postElements= this.props.posts.map(p => <ProfileInfo key={p.id} message={p.message} likesCount={p.likesCount}/>);

        let newPostElement = React.createRef();

        let onAddPost =()=> {
            this.props.addPost()
        };


        let onPostChange = (e)=>{
            let text = e.target.value;
            this.props.newPostTextFunc(text);
        };
        console.log(this.props);
        return (
            <div className={s.postBlock}>
               <h3>My posts</h3>
                <div >
                    <div>
                        <textarea name="" id="" cols="30" rows="10" onChange={onPostChange} ref={newPostElement} value={this.props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>

                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        )
    }
}

export default MyPosts;