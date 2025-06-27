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
} from "@mui/material";
import React, { useState } from "react";

import ChartPage from "../charts/chart";
import Image from "next/image";
import { TradingListType } from "@koinbx/types/TradingListType";
import styles from "./tradingList.module.css";
import useFetch from "@koinbx/hooks/useFetch";
import ReusableTabs from "./reusableTabs";
import colors from "@koinbx/utils/colors";

const TABS = [
  { name: "HOT COINS", type: "hot_coins" },
  { name: "NEW LISTING", type: "new_listing" },
];

export const TradingList = () => {
  const tradingData = useFetch();
  const [activeTab, setActiveTab] = useState("hot_coins");

  const filteredData = tradingData.filter((item) => item.type === activeTab);

  const getPairName = (tradeList: TradingListType) => (
    <Box width={"max-content"} display="flex" alignItems="center" gap={1}>
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
    <span className={styles.pair_name}>₹ {tradeList.lastPrice}</span>
  );

  const getTradeChange = (tradeList: TradingListType) => (
    <span
      style={{
        color: tradeList.change < 0 ? colors.chartRed: colors.chartGreen,
        fontWeight: 500,
      }}
    >
      {tradeList.change}%
    </span>
  );

  const getPerDayChart = (tradeList: TradingListType) => (
    <ChartPage
      data={tradeList.chartData}
      color={tradeList.change < 0 ? colors.chartRed: colors.chartGreen}
    />
  );

  const getTradeAction = (tradeList: TradingListType) => (
    <Button
      variant="outlined"
      size="small"
      href={`/trade/${tradeList.pair}`}
      style={{
        border: "1px solid green",
        textTransform: "capitalize",
        color: "black",
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
       <ReusableTabs
        tabs={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

        {/* Table */}
        <Box sx={{ overflow: "auto", maxHeight: 350 }}>
          {tradingData.length === 0 ? (
            <Box display="flex" justifyContent="center" p={3}>
              <CircularProgress size={24} />
            </Box>
          ) : (
            <Table
              stickyHeader
              size="small"
              sx={{
                padding: "10px 0",
              }}
            >
              <TableHead>
                <TableRow
                  sx={{
                    "& th": {
                      color: "#808080a8",
                      fontWeight: "bold",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                    },
                  }}
                >
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
                    <TableCell
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      {getLastPrice(trade)}
                    </TableCell>
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
