import React, {Component} from 'react';
import Profile from "./Profile";
import { Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { setUserProfile, getUser } from "../../redux/profile-reducer";
import { withRouter } from "react-router";


class ProfileContainer extends Component {
    componentDidMount() {
         let userId = this.props.match.params.userId;
         if (!userId){
             userId =2;
         }
        this.props.getUser(userId);
    }

    render(props) {
        console.log('container props',this.props);
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps,{setUserProfile,getUser})(WithUrlDataContainerComponent);


