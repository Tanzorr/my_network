import React, {Component} from 'react';
import s from './Myposts.module.css'
import ProfileInfo from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCriator, required} from "../../../utils/validators";
import {Textarea} from "../../comon/FormsControl/FormsControls";

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

const maxLength10 = maxLengthCriator(10);

const AddPostForm  = (props)=>{

    return <div>
                <form onSubmit={props.handleSubmit}>
                    <div>

                     <Field component= {Textarea} name="newPostBody" placeholder="Enter your post" validate={[required, maxLength10]}/>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </form>

          </div>
};

const AddPostReduxForm = reduxForm({form: 'AddPostForm'})(AddPostForm);

export default MyPosts;