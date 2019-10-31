import React, {Component} from 'react';
import s from './Myposts.module.css'
import ProfileInfo from "./Post/Post";
import {Field, reduxForm} from "redux-form";

class MyPosts extends Component {
    render(props) {
        console.log('pposts',this.props.posts);
        let postElements= this.props.posts.map(p => <ProfileInfo key={p.id} post={p.post} likesCount={p.likesCount}/>);

        let addNewPost=(v)=>{
            this.props.addPost(v.newPostBody);
        }

        return (
            <div className={s.postBlock}>
               <h3>My posts</h3>
                <AddPostReduxForm onSubmit={addNewPost}/>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        )
    }
}


const AddPostForm  = (props)=>{
    return <div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                     <Field component="textarea" name="newPostBody" placeholder="Enter your post"/>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </form>

          </div>
};

const AddPostReduxForm = reduxForm({form: 'AddPostForm'})(AddPostForm);

export default MyPosts;