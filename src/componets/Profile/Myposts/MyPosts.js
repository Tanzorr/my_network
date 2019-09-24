import React, {Component} from 'react';
import s from './Myposts.module.css'
import ProfileInfo from "./Post/Post";

class MyPosts extends Component {
    render(props) {
            console.log('props posts',this.props.posts);
        let postElements= this.props.posts.map(p => <ProfileInfo message={p.message} likesCount={p.likesCount}/>)

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
                    {postElements}
                </div>
            </div>
        );
    }
}

export default MyPosts;