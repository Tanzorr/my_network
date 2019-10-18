import React, {Component, Fragment} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";


class ProfileContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response=>{
                console.log('SetP',response.data);
                 this.props.setUserProfile(response.data);
            });
    }

    render(props) {
        console.log('container props',this.props);
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile
});


export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);
//export default ProfileContainer;

