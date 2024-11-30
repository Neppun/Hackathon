import Image from 'next/image';
import styles from "@/components/ImageBackground.module.css"
export default function ImageBackground() {
  return (
    <div className={styles.background}>
      <Image
        src="/background.jpg"
        alt=''
        layout="fill"
        quality={100}
      />
    </div>
  )
}