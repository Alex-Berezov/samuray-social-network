import React, {useState} from "react";
import classes from "./Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanges, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={classes.paginationBlock}>

        {portionSize > 1 &&
        <i className="fas fa-arrow-left" onClick={() => { setPortionNumber(portionNumber - 1) }}></i>
        }

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p, index) => {
                return <div key={index} className={currentPage === p
                ? `${classes.selectedPage} ${classes.paginationBlockItem}`
                : classes.paginationBlockItem}
                onClick={(e) => {
                onPageChanges(p);
            }}
                >
                {p}
                </div>
            })
        }

        { portionCount > portionNumber &&
        <i className="fas fa-arrow-right" onClick={() => { setPortionNumber(portionNumber + 1) }}></i>
        }
    </div>
}

export default Paginator;