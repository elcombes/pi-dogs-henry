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
                    pageNumbers.map(number => (
                        <a onClick={() => pagination(number)}>
                            <li className={styles.paginationlist} key={number}>
                             {number}
                        </li> </a>
                    ))}
            </ul>
        </nav>
    )
};