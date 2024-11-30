import Image from 'next/image';
import { Spirax } from 'next/font/google';
import { Inter } from 'next/font/google';
import ImageGrid from '@/components/ImageGrid';
import styles from "@/app/about-us/page.module.css"

const spirax = Spirax({
  weight: '400',
  subsets: ['latin'],
})  
const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

const text = {
    "Overview": "Tradivista is a pioneering initiative designed to merge traditional investment models with cutting-edge tokenization technology. Our mission is to create a sustainable and transparent framework for the preservation of the cultural and natural heritage of Trang An, a UNESCO World Heritage Site. By engaging investors in our conservation efforts, we aim to generate not only financial returns but also significant cultural and ecological benefits, ensuring the long-term sustainability of this unique heritage site.",
    "Preservation": "Trang An is renowned for its breathtaking landscapes, rich biodiversity, and significant cultural heritage. However, rapid tourism development, environmental degradation, and climate change pose serious threats to its preservation. To safeguard this invaluable site for future generations, it is crucial to secure adequate funding and implement effective conservation strategies.",
    "FIdentification": "We will conduct a detailed analysis to identify the financial requirements for:",
    "F1": "Conservation projects to protect the site’s biodiversity and restore degraded areas.",
    "F2": "Sustainable tourism infrastructure that balances visitor experience with environmental care.",
    "F3": "Community engagement programs to align local livelihoods with preservation goals.",
    "Investments": "Leveraging blockchain technology, we will tokenize investments, allowing individuals and organizations to directly fund specific conservation projects through cultural shares:",
    "I1": "Investors purchase tokens representing symbolic ownership in the preservation effort.",
    "I2": "Blockchain ensures complete transparency, allowing investors to track how funds are allocated and their tangible impacts.",
    "CPreserve": "Local communities are essential to long-term conservation success. VHPF will:",
    "C1": "Engage stakeholders in planning and implementing preservation activities.",
    "C2": "Develop eco-friendly tourism practices that prioritize local artisans, businesses, and cultural education.",
    "C3": "Share economic benefits from tourism directly with the community.",
    "Tourism": "By building environmentally responsible tourism infrastructure, we will transform Trang An into a model of sustainable economic growth. Initiatives include:",
    "T1": "Eco-lodges and guided tours highlighting Trang An’s natural and cultural significance.",
    "T2": "Promotion of local craftsmanship through cultural markets and events.",
    "T3": "Visitor education campaigns to foster respect and care for the site.",
    "Experience": "To make heritage preservation accessible, our platform is designed with simplicity in mind. Through an intuitive interface, investors can explore projects, track their contributions, and monitor the real-time impact of their investments",
    "transparency": "Our tokenization model ensures that every dollar is tracked and accounted for, offering unparalleled visibility into fund utilization and project impact.",
    "impact": "Your investment directly funds tangible outcomes: restored temples, protected wildlife habitats, and sustainable tourism initiatives.",
    "innovation": "Combining traditional investment principles with cutting-edge blockchain technology, VHPF pioneers a new era of socially responsible investing.",
    "accessibility": "Designed to be fast and easy, the platform democratizes heritage preservation, making it accessible to investors of all backgrounds.",
    "join us": "Join Us in Preserving Trang An: Investing in the Vietnam Heritage Preservation Fund offers a unique opportunity to be part of a transformative movement that prioritizes cultural and ecological sustainability. Together, we can ensure that the beauty and heritage of Trang An are preserved for future generations while generating tangible returns for our investors."
}

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        <div className={styles.description}>
          <p className={`${styles.title} ${spirax.className}`}>About us</p>
          <p className={`${styles.subtitle} ${inter.className}`}>
          {`${text['Overview']}`}
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
      <div className={styles.container}>

        <div className={styles.image}>
          <Image
            src="/ImageHolder.jpg"
            alt="Traditional art"
            width={1080}
            height={960}
            layout="intrinsic"
          />
        </div>
        <div className={styles.description}>
          <p className={`${styles.title} ${spirax.className}`}>The Need for Preservation</p>
          <p className={`${styles.subtitle} ${inter.className}`}>
          {`${text['Preservation']}`}
          </p>
        </div>

      </div>
      <div className={styles.container}>

        <div className={styles.description}>
          <p className={`${styles.title} ${spirax.className}`}>1. Capital Identification</p>
          <p className={`${styles.subtitle} ${inter.className}`}>
          {`${text['FIdentification']}`}
          </p>
          <ul  className={`${styles.subtitle} ${inter.className}`}>
            <li>{`${text["F1"]}`}</li>
            <li>{`${text["F2"]}`}</li>
            <li>{`${text["F3"]}`}</li>
          </ul>
        </div>

      </div>
      <div className={styles.container}>

        <div className={styles.description}>
          <p className={`${styles.title} ${spirax.className}`}>2. Tokenized Investments</p>
          <p className={`${styles.subtitle} ${inter.className}`}>
          {`${text['Investments']}`}
          </p>
          <ul  className={`${styles.subtitle} ${inter.className}`}>
            <li>{`${text["I1"]}`}</li>
            <li>{`${text["I2"]}`}</li>
          </ul>
        </div>
        
      </div>
      <div className={styles.container}>

        <div className={styles.description}>
          <p className={`${styles.title} ${spirax.className}`}>3. Community-Centric Preservation</p>
          <p className={`${styles.subtitle} ${inter.className}`}>
          {`${text['CPreserve']}`}
          </p>
          <ul  className={`${styles.subtitle} ${inter.className}`}>
            <li>{`${text["C1"]}`}</li>
            <li>{`${text["C2"]}`}</li>
            <li>{`${text["C3"]}`}</li>
          </ul>
        </div>
        
      </div>
      <div className={styles.container}>

        <div className={styles.description}>
          <p className={`${styles.title} ${spirax.className}`}>4. Sustainable Tourism Development</p>
          <p className={`${styles.subtitle} ${inter.className}`}>
          {`${text['Tourism']}`}
          </p>
          <ul  className={`${styles.subtitle} ${inter.className}`}>
            <li>{`${text["T1"]}`}</li>
            <li>{`${text["T2"]}`}</li>
            <li>{`${text["T3"]}`}</li>
          </ul>
        </div>
        
      </div>
      <div className={styles.container}>

        <div className={styles.description}>
          <p className={`${styles.title} ${spirax.className}`}>5. User-Friendly Investment Experience</p>
          <p className={`${styles.subtitle} ${inter.className}`}>
          {`${text['Experience']}`}
          </p>
        </div>
        
      </div>
      <div className={styles.container}>
        
        <div className={styles.description}>
          <p className={`${styles.title} ${spirax.className}`}>Why Invest in VHPF?</p>
          <ul  className={`${styles.subtitle} ${inter.className}`}>
            <li>
              <p className={`${styles.subtitle} ${inter.className}`}>1. Transparency Through Blockchain</p>
              <p className={`${styles.subtitle} ${inter.className}`}>
                {`${text['transparency']}`}
              </p>
            </li>
            <li>
              <p className={`${styles.subtitle} ${inter.className}`}>2. Direct Impact</p>
              <p className={`${styles.subtitle} ${inter.className}`}>
                {`${text['impact']}`}
              </p>
            </li>
          </ul>
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
      <div className={styles.container}>
        <div className={styles.description}>
          <ul  className={`${styles.subtitle} ${inter.className}`}>
            <li>
              <p className={`${styles.subtitle} ${inter.className}`}>3. Innovation in Heritage Conservation</p>
              <p className={`${styles.subtitle} ${inter.className}`}>
                {`${text['innovation']}`}
              </p>
            </li>
            <li>
              <p className={`${styles.subtitle} ${inter.className}`}>4. Accessibility and Inclusivity</p>
              <p className={`${styles.subtitle} ${inter.className}`}>
                {`${text['accessibility']}`}
              </p>
            </li>
          </ul>
        </div>

      </div>
      <div className={`${styles.container} ${styles.down}`}>

        <div className={styles.description}>
          <p className={`${styles.subtitle} ${inter.className}`}>
          {`${text['join us']}`}
          </p>
        </div>

      </div>
      

    </main>
  );
}
