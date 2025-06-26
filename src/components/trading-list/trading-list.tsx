import {
  Box,
  Button,
  CircularProgress,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";
import React, { useState } from "react";

import ChartPage from "../charts/chart";
import Image from "next/image";
import { TradingListType } from "@koinbx/types/TradingListType";
import styles from "./trading-list.module.css";
import useFetchTrading from "@koinbx/hooks/useFetchTrading";

const TABS = [
  { name: "HOT COINS", type: "hot_coins" },
  { name: "NEW LISTING", type: "new_listing" },
];

export const TradingList = () => {
  const tradingData = useFetchTrading();
  const [activeTab, setActiveTab] = useState("hot_coins");

  const filteredData = tradingData.filter((item) => item.type === activeTab);

  const getPairName = (tradeList: TradingListType) => (
    <Box display="flex" alignItems="center" gap={1}>
      <Image
        src={tradeList.image}
        alt="Stock Icon"
        height={40}
        width={40}
        style={{ borderRadius: 4 }}
      />
      <span className={styles.pair_name}>{tradeList.pair}</span>
    </Box>
  );

  const getLastPrice = (tradeList: TradingListType) => (
    <span className={styles.pair_name}>{tradeList.lastPrice}</span>
  );

  const getTradeChange = (tradeList: TradingListType) => (
    <span
      style={{
        color: tradeList.change < 0 ? "#f6465d" : "#2ebd85",
        fontWeight: 500,
      }}
    >
      {tradeList.change}%
    </span>
  );

  const getPerDayChart = (tradeList: TradingListType) => (
    <ChartPage
      data={tradeList.chartData}
      color={tradeList.change < 0 ? "#f6465d" : "#2ebd85"}
    />
  );

  const getTradeAction = (tradeList: TradingListType) => (
    <Button
      variant="contained"
      size="small"
      href={`/trade/${tradeList.pair}`}
      style={{
        backgroundColor: "#1976d2",
        textTransform: "none",
        fontWeight: 600,
      }}
    >
      Trade
    </Button>
  );

  return (
    <Box className={styles.trade_list_container}>
      <h2 className={styles.top_gainer_title}>
        Catch Your Next Trading Opportunity
      </h2>

      <Box className={styles.trade_container}>
        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={(_, val) => setActiveTab(val)}
          textColor="primary"
          indicatorColor="primary"
        >
          {TABS.map((tab) => (
            <Tab key={tab.type} label={tab.name} value={tab.type} />
          ))}
        </Tabs>

        {/* Table */}
        <Box sx={{ overflow: "auto", maxHeight: 350 }}>
          {tradingData.length === 0 ? (
            <Box display="flex" justifyContent="center" p={3}>
              <CircularProgress size={24} />
            </Box>
          ) : (
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Trading Pair</TableCell>
                  <TableCell>Last Price</TableCell>
                  <TableCell>24 hrs Change</TableCell>
                  <TableCell>Per/Day Chart</TableCell>
                  <TableCell>Trade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((trade) => (
                  <TableRow key={trade.pair}>
                    <TableCell>{getPairName(trade)}</TableCell>
                    <TableCell>{getLastPrice(trade)}</TableCell>
                    <TableCell>{getTradeChange(trade)}</TableCell>
                    <TableCell>{getPerDayChart(trade)}</TableCell>
                    <TableCell>{getTradeAction(trade)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Box>
      </Box>
    </Box>
  );
};
