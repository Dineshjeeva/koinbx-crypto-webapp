import { Box, Button, Divider, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import React from "react";
import RightArrowIcon from "../svg/right-arrow";
import styles from "./responsiveHeader.module.css";

const AppNavList: { name: string; route: string }[] = [
  {
    name: "Markets",
    route: "/markets",
  },
  {
    name: "Fees",
    route: "/fees",
  },
  {
    name: "Trade",
    route: "/trade",
  },
  {
    name: "List your Crypto",
    route: "/list-crypto",
  },
];

interface SidebarProps {
  onClose: (value: boolean) => void;
}

export const AppResponsiveSidebar = ({ onClose }: SidebarProps) => {
  return (
    <div className={styles.side_nav_container}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <IconButton onClick={() => onClose(false)}>
          <CloseIcon />
        </IconButton>{" "}
      </Box>
      <a href="/Logout" className={styles.login_btn}>
        Logout
      </a>
      <a href="/deposit" className={styles.signup_btn}>
        Deposit
      </a>

      {AppNavList.map((list, index) => (
        <div className={styles.list_container} key={index}>
          <p>{list.name}</p>
          <RightArrowIcon />
        </div>
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={"/speaker_img.png"}
            height={55}
            width={55}
            alt="Trade contest Image"
          />
          <p className={styles.trade_content_test}>Trade Contest</p>
        </div>
        <div>
          <p
            style={{
              background: "red",
              color: "white",
              padding: " 5px 10px",
              borderRadius: "10px",
            }}
            className={styles.trade_content_badge}
          >
            Live+
          </p>
        </div>
      </div>
      <Divider
        sx={{
          width: "100%",
          background: "black",
          height: "2px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            style={{
              color: "black",
              textTransform: "none",
            }}
          >
            Download
          </Button>
        </Box>
        <Box>
          <DownloadIcon />
        </Box>
      </Box>
    </div>
  );
};
