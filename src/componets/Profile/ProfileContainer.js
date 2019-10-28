import React, {Component} from 'react';
import Profile from "./Profile";
import { Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { setUserProfile, getUser } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


class ProfileContainer extends Component {
    componentDidMount() {
         let userId = this.props.match.params.userId;
         if (!userId){
             userId =2;
         }
        this.props.getUser(userId);
    }

    render(props) {

        return <ProfileContainer {...props} />
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps,{setUserProfile,getUser})(WithUrlDataContainerComponent);


