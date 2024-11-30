import Image from 'next/image';
import styles from '@/app/page.module.css';
import { Spirax } from 'next/font/google';
import { Inter } from 'next/font/google';
import ImageGrid from '@/components/ImageGrid';

const spirax = Spirax({
  weight: '400',
  subsets: ['latin'],
})  
const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.description}>
          <p className={`${styles.title} ${spirax.className}`}>TradiVesta</p>
          <p className={`${styles.subtitle} ${inter.className}`}>
            The most secure marketplace for buying and selling traditional pieces of art
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/ImageHolder.jpg"
            alt="Traditional art"
            width={1080}
            height={960}
            layout="intrinsic"
          />
        </div>
      </div>
      <ImageGrid/>

    </main>
  );
}
