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
import {compose} from "redux";
import {
    getCurrentPage,
    getFollovingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUserss, getUserssSuper
} from "../../redux/users-selectors";

class UsersAPIComponent extends Component {
    componentDidMount() {
        let {currentPage,pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);}

        onpageChanged =(pageNumber)=>{
        let pageSize = this.props.pageSize;
        this.props.getUsers(pageNumber,pageSize);
    };

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
        users: getUserss(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollovingInProgress(state)
    }
};

export  default  compose(
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsers,

    })
)(UsersAPIComponent);