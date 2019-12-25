import React, {Component} from 'react';
import s from './Post.modyle.css';


class Post extends Component {
    render(props) {
        return (
            <div className={s.item} >
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
                {this.props.post}
            </div>
        );
    }
}

export default Post;