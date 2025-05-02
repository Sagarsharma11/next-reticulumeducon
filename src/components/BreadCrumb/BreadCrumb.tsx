import React from 'react';
import styles from "./breadCrumb.module.css"

const BreadCrumb = ({nav, title}) => {
  return (
    <div className={styles.mainContainer}>
        <a href="/">Home </a>
        <a href={nav}> / {title}</a>
    </div>
  )
}

export default BreadCrumb