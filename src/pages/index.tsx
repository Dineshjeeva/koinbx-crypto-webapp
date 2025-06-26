import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AppHeader from "@koinbx/components/header/Header";
import Head from "next/head";
import { TradingList } from "@koinbx/components/tradeItemList/tradingList";
import styles from "@koinbx/styles/Home.module.css";

// ✅ MUI

// (Optional) create a custom theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Customize your primary color
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
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

      <div>
        {/* App Header */}
        <header>
          <AppHeader />
        </header>

        {/* App Body */}
        <main className={styles.body_container}>
          <Container maxWidth="lg">
            <TradingList />
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
