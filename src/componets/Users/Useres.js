import React, {Component} from 'react';
import styles from './users.module.css';

class Users extends Component {

    render() {
        if(this.props.users.length ===0) {
            this.props.setUsers([
                {
                    id: 1,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDez20A1BbPOlzQtk07gkO1Nh0ikJ24QhaQxAIlnYExQUukpPD',
                    followed: false,
                    fullName: 'Alexx',
                    status: 'admin',
                    lokation: {city: 'Kyev', country: 'Ukrain'}
                },
                {
                    id: 2,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDez20A1BbPOlzQtk07gkO1Nh0ikJ24QhaQxAIlnYExQUukpPD',
                    followed: true,
                    fullName: 'Viktor',
                    status: 'admin',
                    lokation: {city: 'Kyev', country: 'Ukrain'}
                },
                {
                    id: 3,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDez20A1BbPOlzQtk07gkO1Nh0ikJ24QhaQxAIlnYExQUukpPD',
                    followed: false,
                    fullName: 'Uriy',
                    status: 'admin',
                    lokation: {city: 'Kyev', country: 'Ukrain'}
                },

            ]);
        }
        return (
            <div>
                {
                    this.props.users.map(u=><div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoURL} className={styles.usersPhoto} alt=""/>
                            </div>
                            <div>
                                { u.followed ? <button onClick={()=>{this.props.unfollow(u.id)}}>Follow</button> : <button  onClick={()=>{this.props.follow(u.id)}}>UnFollow</button>}

                            </div>
                        </span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                            <div>{u.lokation.country}</div>
                            <div>{u.lokation.city}</div>
                        </span>
                    </div> )
                } 
            </div>
        );
    }
}

export default Users;