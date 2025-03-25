import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      **🚧 Maintenance Notice 🚧**

      Our website is currently undergoing maintenance and will be down until **Monday**. We are working hard to improve your experience and will be back soon.

      Thank you for your patience! 🙌
    </div>
  );
}
