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
    getTotalUsersCount, getUserss
} from "../../redux/users-selectors";
import {UserType} from "../types/types";
import {AppSateType} from "../../redux/redux-store";



type MapSatatePropsType={
    currentPage:number
    onpageChanged:(pageNumber:number)=>void
    pageSize:number
    isFetching:boolean
    totalUsersCount:number
    users:Array<UserType>

}
type MapDispatchPropsType={
    getUsers:(currentPage:number,pageSize:number)=>void

    followingProgress:Array<number>

    unfollow:(userId:number)=>void
    follow:(userId:number)=>void

}
type PropsType= MapDispatchPropsType & MapSatatePropsType

class UsersAPIComponent extends Component<PropsType> {

    componentDidMount() {
        let {currentPage,pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);}

        onpageChanged =(pageNumber:number)=>{
        let pageSize = this.props.pageSize;
        this.props.getUsers(pageNumber,pageSize);
    };

    render() {
        return (
            <div>
                <div>
                    {this.props.isFetching ? <Preloader/> :null}
                </div>
                <Users
                    totalUsersCount = {this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage  = {this.props.currentPage}
                   onpageChanged ={this.onpageChanged}
                   users = {this.props.users}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}
                   //toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingProgress}

            />
            </div>
        );
    }
}


let mapStateToProps = (state:AppSateType)=>{

    return{
        users: getUserss(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollovingInProgress(state),

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