import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Service from '../(home)/Service/Service';
import LatestNews from '../(home)/LatestNews/LatestNews';
import FlagSection from '../../components/FlagSection/FlagSection';
import AdmissionProcedure from '../../components/AdmissionProcedure/AdmissionProcedure';
import WhyChoose from '../(home)/WhyChoose/WhyChoose';

const page = () => {
    return (
        <>
            <BreadCrumb nav="/service" title="Service" />
            <div className="flex flex-col w-full">
                <FlagSection />
                <AdmissionProcedure />
                <WhyChoose />
                <Service />
                <LatestNews />
            </div>
        </>
    )
}

export default page