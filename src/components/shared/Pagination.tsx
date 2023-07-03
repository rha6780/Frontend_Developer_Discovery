import React from "react";
import styles from '../../../styles/Pagination.module.css'

const Pagination = (props: any) => {

    const page = props.page;
    const showedLecture = new Array(props.numPages).fill(0);
    console.log(props.numPages);


    return (
        <div className={props.numPages > 1 ? styles.able : styles.disable}>
            <button onClick={() => props.next(page - 1)} disabled={props.page <= 1}>
                &lt;
            </button>

            {showedLecture.map((item, index) => (
                <button
                    key={index + 1}
                    onClick={() => props.next(index + 1)}
                    className={
                        (index + 1) === page ? styles.page_selected : styles.page_not_selected}>
                    {index + 1}
                </button>
            ))}

            <button onClick={() => props.next(page + 1)} disabled={props.page >= props.numPages}>
                &gt;
            </button>
        </div>
    )
}

export default Pagination;
