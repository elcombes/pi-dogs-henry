import React from "react";
import styles from '../css/Cards.module.css';

export default function Pagination({ dogsPerPage, estadoSoloDogs, pagination }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(estadoSoloDogs / dogsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers &&
                    pageNumbers.map((number, k) => (
                        <a key={k} onClick={() => pagination(number, k)}>
                            <li className={styles.paginationlist} >
                                {number}
                            </li> </a>
                    ))}
            </ul>
        </nav>
    )
};