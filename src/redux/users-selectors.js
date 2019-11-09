import {createSelector} from "reselect";

export const getUserssSelector = (state)=>{
    return state.usersPage.users;
};


export const getUserss = createSelector(getUserssSelector, (users)=>{
    return users.filter(u=> true);
});

export const getPageSize = (state)=>{
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state)=>{
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state)=>{
    return state.usersPage.currentPage;
};

export const getIsFetching = (state)=>{
    return state.usersPage.isFetching;
};

export const getFollovingInProgress = (state)=>{
    return state.usersPage.followingInProgress;
};