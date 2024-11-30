"use client"

import React, { useState } from 'react';
import styles from "@/app/[project]/page.module.css"
import { Spirax } from 'next/font/google';
import { Inter } from 'next/font/google';

const spirax = Spirax({
  weight: '400',
  subsets: ['latin'],
})  

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export default function page({params}) {
  const [projectData, setProjectData] = useState(null);
  const loadProjectData = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      const matchedProject = data.find((item) => item.Name === projectName);
      setProjectData(matchedProject || {});
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  };

  // Immediately invoke the async function when projectData is null
  if (!projectData) {
    loadProjectData();
  }
  const projectName = decodeURIComponent(params.project);
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <p className={`${spirax.className} `}>{projectName}</p>
      </div>

      <div className={styles.container}>
        <div className={styles.currentProject}>
        {projectData ? (
            <img
              src={projectData.Image || "/placeholder.jpg"}
              alt={projectName}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div style={{display:"flex", justifyContent: "space-between", flexDirection:"column"}}>
          <div className={styles.info}>
            <p className={inter.className}>Area</p>
            <p className={inter.className}>Address</p>
            <p className={inter.className}>Status</p>
            <p className={inter.className} style={{marginRight:0}}>Culture Value</p>
          </div>

          <div style={{display:"flex", justifyContent: "space-between"}}>
            <div className={styles.nextProject}>
            {projectData ? (
            <img
              src={projectData.Image || "/placeholder.jpg"}
              alt={projectName}
            />
          ) : (
            <p>Loading...</p>
          )}

            </div>
            <div className={styles.choice}>
              <p className={inter.className}>Options</p>
              <ul className={styles.bottomLeft}>
                <li className={inter.className}>Donate</li>
                <li className={inter.className}>Invest</li>
                <li className={inter.className}>Rent</li>
              </ul>
            </div>
          </div>

        </div>


      </div>

      <div style={{ position: "relative", display: "inline-block" }}>
        <div className={styles.description}>
        {projectData ? (
            <img
              src={projectData.Image || "/placeholder.jpg"}
              alt={projectName}
            />
          ) : (
            <p>Loading...</p>
          )}

        </div>
        <div className={styles.contact}>
          <p className={inter.className} style={{fontWeight:"bold", fontSize:"1.2em"}}>How to Donate/Invest</p>
          <p className={inter.className} style={{textDecoration: "underline"}}>We will advise you on everything you need to fulfill to participate in an transaction. Avoid mistakes!</p>
        </div>
      </div>

    </main>
  )
}
