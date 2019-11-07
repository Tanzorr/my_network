import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import { setUserProfile, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends Component {
    componentDidMount() {
        console.log('pp props',this.props.updateStatus);
        let userId = this.props.match.params.userId;
        if (!userId){
            userId =this.props.authorizedUserId;
        }



        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response=>{
                console.log('SetP',response.data);
                this.props.setUserProfile(response.data);
            });
    }

    render(props) {
        console.log('container props',this.props);
        return (
            <Profile {...this.props}
                     profile = {this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        );
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth: state.auth.isAuth

});


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps,{setUserProfile,updateStatus})(WithUrlDataContainerComponent);