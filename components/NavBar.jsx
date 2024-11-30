import styles from '@/components/NavBar.module.css'
import {Yarndings_12} from 'next/font/google'
import { Inter } from 'next/font/google'
import DropDownMenu from '@/components/DropDownMenu';
import Link from 'next/link';
const yarndings_12 = Yarndings_12({
    weight: '400',
    subsets: ['latin'],
})  
const inter = Inter({
    weight: '400',
    subsets: ['latin'],
})
  

export default function NavBar(){
    return(
        <div className={styles.NavBar}>
            <Link href='/' style={{textDecoration: 'none'}}><p className={`${styles.LeftSide} ${yarndings_12.className}`}>Tradivesta</p></Link>
            <div className={`${styles.RightSide} ${inter.className}`}>
                <DropDownMenu/>
                <Link href='/about-us' style={{textDecoration: 'none'}}><p>About Us</p></Link>
            </div>
        </div>
    )
}