import React, {Component} from 'react';
import s from './Myposts.module.css'
import ProfileInfo from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

class MyPosts extends Component {
    render(props) {
        console.log('props posts',this.props.dispatch);
        let postElements= this.props.posts.map(p => <ProfileInfo message={p.message} likesCount={p.likesCount}/>);

        let newPostElement = React.createRef();

        let addPost =()=>{
            let action = addPostActionCreator();
            this.props.dispatch(action);
        }

        let onPostChange = ()=>{
            let  text= newPostElement.current.value;
            let action = updateNewPostActionCreator(text);
            this.props.dispatch(action);
        }

        return (
            <div className={s.postBlock}>
               <h3>My posts</h3>
                <div >
                    <div>
                        <textarea name="" id="" cols="30" rows="10" onChange={onPostChange} ref={newPostElement} value={this.props.currentval}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>

                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        );
    }
}

export default MyPosts;