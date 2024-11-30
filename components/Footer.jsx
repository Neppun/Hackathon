import styles from "@/components/Footer.module.css"
import {Yarndings_12} from 'next/font/google'
import { Inter } from 'next/font/google'

const yarndings_12 = Yarndings_12({
    weight: '400',
    subsets: ['latin'],
})  
const inter = Inter({
    weight: '400',
    subsets: ['latin'],
})
export default function Footer() {
  return (
    <div className={styles.Footer}>
            <p className={`${styles.LeftSide} ${yarndings_12.className}`}>Tradivesta</p>
            <p className={`${styles.RightSide} ${inter.className}`}>Như búp sen nở, như mặt trời mới lên</p>
        </div>
  )
}
