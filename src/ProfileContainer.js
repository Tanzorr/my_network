import React, {Component} from 'react';
import Profile from "./componets/Profile/Profile";

import {connect} from "react-redux";
import { setUserProfile, getUser } from "./redux/profile-reducer";
import { withRouter } from "react-router";
import {withAuthRedirect} from "./hoc/withAuthRedirect";



class ProfileContainer extends Component {
    componentDidMount() {
         let userId = this.props.match.params.userId;
         if (!userId){
             userId =2;
         }
        this.props.getUser(userId);
    }

    render(props) {


        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        );
    }
}

let AuthRedirectComponent =  withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,

});


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent );
export default connect(mapStateToProps,{setUserProfile,getUser})(WithUrlDataContainerComponent);


