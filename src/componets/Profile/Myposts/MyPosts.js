import React, {Component} from 'react';
import s from './Myposts.module.css'
import ProfileInfo from "./Post/Post";

class MyPosts extends Component {
    render(props) {
        console.log('props posts',this.props.posts);
        let postElements= this.props.posts.map(p => <ProfileInfo message={p.message} likesCount={p.likesCount}/>);

        let newPostElement = React.createRef();

        let addPost =()=>{
            this.props.addPost();
        }

        let onPostChange = ()=>{
            let  text= newPostElement.current.value;
            this.props.updateNextPostText(text);
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