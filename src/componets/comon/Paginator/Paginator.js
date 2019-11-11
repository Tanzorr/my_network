import React from 'react'
import styles from "./Paginator.modyle..css";



let Paginator = ({currentPage,totalUsersCount,pageSize,onpageChanged}) =>{

    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for(let i=1; i<=pageCount; i++){
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(p=>{
                    return  <span key={p} className={currentPage === p && styles.selectedPage}
                                  onClick={(e)=>{onpageChanged(p)}}>{p}</span>
                })
            }
        </div>

    </div>
}

export default Paginator;