import React from 'react';
import s from "./Paginator.module.css"

type PaginatorPropsType ={
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber:number) => void
}

const Paginator = (props:PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    pagesCount = pagesCount > 20 ? pagesCount = 20 : pagesCount
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p) => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })
            }
        </div>
    );
};

export default Paginator;