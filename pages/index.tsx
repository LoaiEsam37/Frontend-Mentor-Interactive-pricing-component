import Head from 'next/head';
import { Manrope } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

const manrope = Manrope({ subsets: ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"]})

export default function Home() {
  const [price, setPrice] = useState(0);
  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive pricing component</title>
        <meta name="description" content="Made by LoaiEsam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.heading} >Simple, traffic-based pricing</h1>
        <p>
        Sign-up for our 30-day trial. No credit card required. 
        </p>

        <div className={styles.card}>

          <div className={styles.row}>
            <p>100k Pageviews</p>
            <p>
              <span className={styles.price} >${price}.00</span>
              /month
            </p>
          </div>

          <div className={styles.row}>
            <input className={styles.rangeInput} type="range" onChange={(e) => setPrice(Number(e.target.value))}/>
          </div>

          <div className={styles.row}>
            <input type="checkbox" />
          </div>

          <div className={styles.row}>
          <div className={styles.column}>
            <span>Unlimited websites</span>
            <span>100% data ownership</span>
            <span>Email reports</span>
          </div>
          <button className={styles.submitButton}>Start my trial</button>
          </div>

        </div>

      </main>
    </>
  )
}
