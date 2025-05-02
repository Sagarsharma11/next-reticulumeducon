import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Section1 from './sections/Section1/Section1';
import FlagSection from '../../components/FlagSection/FlagSection';
import Section3 from './sections/Section3/Section3';
import Service from '../(home)/Service/Service';
import LatestNews from '../(home)/LatestNews/LatestNews';

const page = () => {
  return (
    <>
        <BreadCrumb nav="/about" title="About" />
        <Section1 />
        <FlagSection />
        <Section3 />
        <LatestNews />
        <Service />
    </>
  )
}

export default page