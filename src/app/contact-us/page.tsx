import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Section1 from './sections/Section1/Section1'
import Section2 from './sections/Section2/Section2'


const page = () => {
  return (
    <>
      <BreadCrumb nav="/contact-us" title="Contact Us" />
      <Section1 />
      <Section2 />
    </>
  )
}

export default page