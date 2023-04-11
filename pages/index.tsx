import Head from "next/head";
import { Manrope } from "next/font/google";
import styles from "./Home.module.css";
import { useState } from "react";

const manrope = Manrope({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
});

export default function Home() {
  const [price, setPrice] = useState(16);
  const [billing, setBilling] = useState(false);
  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive pricing component</title>
        <meta name="description" content="Made by LoaiEsam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading}>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>

        <div className={styles.card}>
          <div className={styles.cardFirstSection}>
            <p>100K PAGEVIEWS</p>
            <span>
              <span>${price}.00</span>
              <p>/ month</p>
            </span>
          </div>

          <div className={styles.cardSecondSection}>
            <input
              className={styles.rangeInput}
              type="range"
              min="1"
              max="30"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          <div className={styles.cardThirdSection}>
            <span>Monthly Billing</span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                onChange={(e) => setBilling(e.target.checked)}
              />
              <span className={styles.slider}></span>
            </label>
            <span>Yearly Billing</span>
            <span className={styles.discount}>25% discount</span>
          </div>

          <div className={styles.cardFourthSection}>
            <div>
              <span>Unlimited websites</span>
              <span>100% data ownership</span>
              <span>Email reports</span>
            </div>
            <button
              className={styles.submitButton}
              onClick={() =>
                alert(
                  JSON.stringify({
                    price: price,
                    billing: billing ? "yearly" : "monthly",
                  })
                )
              }
            >
              Start my trial
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
