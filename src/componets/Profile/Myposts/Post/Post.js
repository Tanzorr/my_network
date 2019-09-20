import React, {Component} from 'react';
import s from './Post.modyle.css';


class Post extends Component {
    render(props) {

       //console.log("props",this.props.message);
        return (
            <div className={s.item} >
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
                {this.props.message}
            </div>
        );
    }
}

export default Post;