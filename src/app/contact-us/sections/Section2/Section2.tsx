import React from 'react';
import styles from "./style.module.css"

const Section2 = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mapContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.8244452823602!2d85.21743877917665!3d25.694562907473244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5d66d5959793%3A0xf8208c995c7b4b9e!2sRETICULUM%20EDUCON%20LLP!5e0!3m2!1sen!2sin!4v1643443515439!5m2!1sen!2sin" allowFullScreen={false} loading="lazy"></iframe>

      </div>
      <div className={styles.formContainer}>
        <h2 className="text-center font-bold">Stay Connect With Us</h2>

        <div>
          <label className="label">Name</label>
          <input type="text" className="
          w-full
          input border-1 border-gray-300 rounded-md" placeholder="Enter name" />
        </div>
        <div>

          <label className="label">Email</label>
          <input type="text" className="input  w-full border-1 border-gray-300 rounded-md" placeholder="Enter email" />
        </div>
        <div>

          <label className="label">Phone</label>
          <input type="text" className="input   w-full border-1 border-gray-300 rounded-md" placeholder="Name" />
        </div>
        <div>
          <textarea className="textarea w-full border-1 border-gray-300 rounded-md" placeholder="Query"></textarea>

        </div>
        <div className='flex justify-end w-full'>
          <button className="bg-black px-6 py-1 text-white rounded-md w-[5rem] cursor-pointer hover:bg-gray-800 transition duration-300">
            Send
          </button>

        </div>
      </div>
    </div>
  )
}

export default Section2