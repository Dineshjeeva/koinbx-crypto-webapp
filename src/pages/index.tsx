import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

import AppHeader from "@koinbx/components/header/Header";
import Head from "next/head";
import { PrimeReactProvider } from "primereact/api";
import { TradingList } from "@koinbx/components/tradeItemList/tradingList";
import styles from "@koinbx/styles/Home.module.css";

export default function Home() {
  return (
    <PrimeReactProvider>
      <Head>
        {/* Title Refered from KoinBx Site and Favicon also*/}
        <title>
          Buy, Sell & Trade Cryptocurrency on Trusted Global Exchange | KoinBX
        </title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="KoinBX India’s trusted cryptocurrency exchange & trading platform. Buy, sell & trade BTC, ETH, USDT and INR cryptocurrencies at best prices. Start trading now."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* App Structure */}
      <div>
        {/* App Header  */}
        <header>
          <AppHeader />
        </header>

        {/* App Body Container */}
        <main className={styles.body_container}>
          <TradingList />
        </main>
      </div>
    </PrimeReactProvider>
  );
}
