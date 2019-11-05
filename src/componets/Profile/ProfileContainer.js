import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId =2;
        }
        console.log('pc',this.props.match.params.userId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);