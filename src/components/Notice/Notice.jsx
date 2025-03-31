import React from 'react';
import styles from "./style.module.css"

const Notice = () => {
    return (
        <div className={styles["marquee-container"]}>
            <div className={styles["marquee"]}>
                🚧⚙️ Feature Notice ⚙️🚧
                🔧 Some features on our website may not work as expected due to ongoing maintenance. 🛠️ We’re working hard to resolve this 🔄 and appreciate your patience. 🙏 Thank you for your support! 💙🚀

                📩 For more info, contact:
                📧 Email: sagarsharmatech00@gmail.com
                🌐 Website: sagarsharma.vercel.app
            </div>
        </div>
    )
}

export default Notice