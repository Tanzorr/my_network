import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    followSuccess,
    setCurrentPage,
    toggleIsFetching,
    unfollowSuccess,
    toggleFollowingProgress,
    getUsers
} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../comon/Prloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersAPIComponent extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onpageChanged =(pageNumber)=>{
        this.props.getUsers(pageNumber, this.props.pageSize);

    }

    render() {
        return (
            <div>
                <div>
                    {this.props.isFetching ? <Preloader/> :null}
                </div>
                <Users totalUsersCount = {this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage  = {this.props.currentPage}
                   onpageChanged ={this.onpageChanged}
                   users = {this.props.users}
                   follow = {this.props.followSuccess}
                   unfollow = {this.props.unfollowSuccess}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}

            />
            </div>
        );
    }
}


let mapStateToProps = (state)=>{

    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
};

export  default  compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsers,

    })
)(UsersAPIComponent);