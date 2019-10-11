import React, {Component} from 'react';
import styles from './users.module.css';
import * as axios from  'axios'
import userPhoto from '../../assets/images/download.png'

class Users extends Component {

        render() {
            let getUsers = ()=>{if(this.props.users.length ===0) {
                axios.get("https://social-network.samuraijs.com/api/1.0/users")
                    .then(response=>{
                        this.props.setUsers(response.data.items);
                    });

            }
        };

        return (
            <div>
                <button onClick={getUsers}>Get User</button>
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