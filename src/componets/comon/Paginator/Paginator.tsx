import React, {useState} from 'react'
//mport styles from "./Paginator.module.css";
import cn from "classnames";

type PropsType ={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onpageChanged:(p:number)=>void
    portionSize?:number
}


let Paginator: React.FC<PropsType> = ({currentPage,totalUsersCount,pageSize,onpageChanged,portionSize=10}) => {

    let pageCount = Math.ceil(totalUsersCount/ pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div >
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>
        }
        <div>
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                    return <span
                                 key={p}
                                 onClick={(e) => {
                                     onpageChanged(p)
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>
            }
        </div>


    </div>
};


export default Paginator;