import React, {Component} from 'react';
import styles from './users.module.css';
import * as axios from  'axios'
import userPhoto from '../../assets/images/download.png'

class Users extends Component {
        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response=>{
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }

    onpageChanged =(pageNumber)=>{
            this.props.setCurrentPage(pageNumber);
             axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response=>{
                this.props.setUsers(response.data.items);
            });
    }

    render() {
           let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

           let pages = [];
            for(let i=1; i<=pageCount; i++){
                pages.push(i);
            }


            return (
            <div>
                    <div>
                        {
                            pages.map(p=>{
                                return  <span key={p} className={this.props.currentPage === p && styles.selectedPage}
                                onClick={(e)=>{this.onpageChanged(p)}}>{p}</span>
                            })
                        }
                    </div>
                {
                this.props.users.map(u=><div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small:userPhoto} className={styles.usersPhoto} alt=""/>
                            </div>
                            <div>
                                { u.followed ? <button onClick={()=>{this.props.unfollow(u.id)}}>Follow</button> : <button  onClick={()=>{this.props.follow(u.id)}}>UnFollow</button>}

                            </div>
                        </span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>{"u.lokation.country"}</div>
                            <div>{"u.lokation.city"}</div>
                        </span>
                    </div> )
                } 
            </div>
        );
    }
}

export default Users;