import React, {Component} from 'react';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";

class Profile extends Component {
    render() {
        return (
            <div>
                <div className={s.content}>
                    <div>
                        <img src=" https://www.imgacademy.com/sites/default/files/homepage-hero-2019-q1-edited-tennis-bg.jpg" alt=""/>
                    </div>
                    <div>
                        ava + descrition
                    </div>
                    <MyPosts/>
                </div>
            </div>
        );
    }
}

export default Profile;