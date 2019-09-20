import React, {Component} from 'react';
import s from './ProfoleImfo.module.css'


class ProfileInfo extends Component {
    render(props) {

       //console.log("props",this.props.message);
        return (
            <div className={s.item} >
                <div>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
                </div>
                <div className={s.description}>
                    {this.props.message}
                </div>
            </div>
        );
    }
}

export default ProfileInfo;