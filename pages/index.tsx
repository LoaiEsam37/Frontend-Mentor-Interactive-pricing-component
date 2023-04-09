import Head from 'next/head'
import { Manrope } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const manrope = Manrope({ subsets: ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"]})

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive pricing component</title>
        <meta name="description" content="Made by LoaiEsam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        Simple, traffic-based pricing
        Sign-up for our 30-day trial. No credit card required. 

        Pageviews
        $ /month

        Monthly Billing
        Yearly Billing 25% discount

        Unlimited websites
        100% data ownership
        Email reports

        Start my trial
      </main>
    </>
  )
}
