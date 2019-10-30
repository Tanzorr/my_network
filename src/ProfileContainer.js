import React, {Component} from 'react';
import Profile from "./componets/Profile/Profile";

import {connect} from "react-redux";
import {setUserProfile, getUser, getStatus, updateStatus} from "./redux/profile-reducer";
import { withRouter } from "react-router";
import {withAuthRedirect} from "./hoc/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends Component {
    componentDidMount() {
         let userId = this.props.match.params.userId;
         if (!userId){
             userId =2;
         }
        this.props.getUser(userId);
         this.props.getStatus(userId);


    }

    render(props) {


        return (
            <Profile {...this.props} profile = {this.props.profile} status={this.props.status} updateSatatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps,{setUserProfile,getUser, getStatus, updateStatus }),
    withRouter,

)(ProfileContainer);




