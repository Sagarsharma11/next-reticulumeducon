import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Service from '../(home)/Service/Service';
import LatestNews from '../(home)/LatestNews/LatestNews';
import styles from "./style.module.css"

const page = () => {
    return (
        <>
            <BreadCrumb nav="/service" title="Service" />
            <div className={styles.middleSection}>
                <LatestNews />
                <Service />
            </div>
        </>
    )
}

export default page