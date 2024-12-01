"use client"
import React, { useState } from "react";
import Link from "next/link"
import styles from "@/components/DropDownMenu.module.css"
import { Inter } from 'next/font/google'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const inter = Inter({
    weight: '400',
    subsets: ['latin'],
})

export default function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
        <p
        className={inter.className}
        style={{ marginLeft: 0, marginBottom: "0.2rem", cursor: "pointer" }}
        onClick={toggleDropdown}
      >
        <span
          style={{
            display: "inline-block", // Necessary for transform to work correctly
            transform: "translateY(-10px)",
            transition: "transform 0.3s ease",
          }}
        >
          Active Project
        </span>{" "}
        {/* <KeyboardArrowDownIcon
          fontSize="large"
          style={{
            transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        /> */}
      </p>
        <div className={`${styles.DropDownOptions} ${isOpen ? styles.show : ""}`}>
            <Link href={"Hoa%20Lu%20Ancient%20Capital"} style={{marginTop: "1rem", marginRight: "4.5rem"}} className={inter.className}>Hoa Lư</Link>
            <Link href={"Trang%20An%20Eco-tourism%20Area"} style={{marginTop: "1rem", marginRight: "4.5rem"}} className={inter.className}>Tràng An</Link>
            <Link href={"Xam%20Singing"} style={{marginTop: "1rem", marginRight: "4.5rem"}} className={inter.className}>Xẩm Singing</Link>
        </div>
    </div>
  )
}