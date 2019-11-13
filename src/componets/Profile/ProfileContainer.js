import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import { setUserProfile, updateStatus, getUser, getStatus,savePhoto} from "../../redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends Component {
    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId =this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("./login");
            }
        }
        let data =  this.props.getUser(userId);
        //this.props.setUserProfile(data);

        // this.props.getStatus(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //     .then(response=>{
        //         console.log('SetP',response.data);
        //         this.props.setUserProfile(response.data);
        //     });
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Pc',this.props.match.params.userId);
        if (this.props.match.params.userId !=prevProps.match.params.userId){
            this.refreshProfile();
        }

    }

    render(props) {
        console.log('container props',this.props);
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile = {this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto ={this.props.savePhoto}
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
export default connect(mapStateToProps,{setUserProfile,updateStatus,getUser, getStatus,savePhoto})(WithUrlDataContainerComponent);