import React, {useState} from 'react';
import s from "./Paginator.module.css"

type PaginatorPropsType ={
    currentPage: number
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber:number) => void
}

const Paginator = (props:PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1
    let rightPortionPageNumber = portionNumber*portionSize

    return (
        <div>
            {portionNumber>1 && <button onClick={()=> setPortionNumber(portionNumber-1)}>prev</button>}

            {pages
                .filter(p=> p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                return <div className={s.paginate}>
                    <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
                </div>
            })
            }
            {portionCount > portionNumber && <button onClick={()=> setPortionNumber(portionNumber+1)}>next</button>}
        </div>
    );
};

export default Paginator;