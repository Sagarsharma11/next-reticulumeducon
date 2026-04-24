import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Service from '../(home)/Service/Service';
import LatestNews from '../(home)/LatestNews/LatestNews';

const page = () => {
    return (
        <>
            <BreadCrumb nav="/service" title="Service" />
            <div className="flex flex-col w-full">
                <LatestNews />
                <Service />
            </div>
        </>
    )
}

export default page