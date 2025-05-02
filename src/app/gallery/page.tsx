import React from 'react';
import styles from "./style.module.css";
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const page = () => {
  const data = [
    "assets/gallery/1.jpeg",
    "assets/gallery/2.jpeg",
    "assets/gallery/3.jpeg",
    "assets/gallery/99.jpeg",
    "assets/gallery/6.jpeg",
    "assets/gallery/7.jpeg",
    "assets/gallery/8.jpeg",
    "assets/gallery/9.jpeg",
    "assets/gallery/20.jpeg",
    "assets/gallery/21.jpeg",
    "assets/gallery/17.jpeg",
    "assets/gallery/13.jpeg",
    "assets/gallery/1.jpeg",
    "assets/gallery/2.jpeg",
    "assets/gallery/3.jpeg",
    "assets/gallery/99.jpeg",
    "assets/gallery/6.jpeg",
    "assets/gallery/7.jpeg",
    "assets/gallery/8.jpeg",
    "assets/gallery/9.jpeg",
    "assets/gallery/20.jpeg",
    "assets/gallery/21.jpeg",
    "assets/gallery/17.jpeg",
    "assets/gallery/13.jpeg"
  ];
  
  return (
    <>
      <BreadCrumb nav="/gallery" title="Gallery" />
      <div className={styles.mainContainer}>
        {
          data.map((ele, key)=>(
            <img src={ele} alt="gallery img" />
          ))
        }
      </div>
    </>
  )
}

export default page