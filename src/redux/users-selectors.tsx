import {createSelector} from "reselect";
import {AppSateType} from "./redux-store";

export const getUserssSelector = (state:AppSateType)=>{
    return state.usersPage.users;
};


export const getUserss = createSelector(getUserssSelector, (users)=>{
    return users.filter(u=> true);
});

export const getPageSize = (state:AppSateType)=>{
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state:AppSateType)=>{
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state:AppSateType)=>{
    return state.usersPage.currentPage;
};

export const getIsFetching = (state:AppSateType)=>{
    return state.usersPage.isFetching;
};

export const getFollovingInProgress = (state:AppSateType)=>{
    return state.usersPage.followingInProgress;
};