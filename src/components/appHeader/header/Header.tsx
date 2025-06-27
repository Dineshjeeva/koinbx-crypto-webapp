import { Avatar, Box, Button, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";

import AppMenuIcon from "../../svg/app-menu";
import { AppNavList } from "@koinbx/types/AppNavigation";
import { AppResponsiveSidebar } from "../app-side-nav/responsiveHeader";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import colors from "@koinbx/utils/colors";
import styles from "../app-header.module.css";

const AppHeader: React.FC = () => {
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <nav className="navbar">
      <div className={styles.header_container}>
        {/* Logo */}
        <a href={"/#"} className={styles.app_logo}>
          <Image
            src={"/koinbx_logo.svg"}
            height={100}
            width={135}
            alt={"Logo"}
          />
        </a>

        {/* Nav Links */}
        <div className={styles.nav_left}>
          <AppMenuIcon />
          {AppNavList.map((list, index) => (
            <a
              style={
                index === AppNavList.length - 1
                  ? {
                      borderLeft: `2px solid ${colors.black}`,
                      marginLeft: "12px",
                      paddingLeft: "18px",
                    }
                  : {}
              }
              href={list.route}
              key={index}
              className={`${styles.nav_list} hover_item`}
            >
              {list.name}
            </a>
          ))}
        </div>

        {/* Right Side: Contest, Buttons, Avatar, Menu */}
        <div className={styles.nav_right}>
          {/* Trade Contest */}
          <a href="/trade-contest" className={styles.trade_contest}>
            <div className={styles.speaker_effect}>
              <Image
                src={"/speaker_img.png"}
                height={55}
                width={55}
                alt="Trade contest Image"
              />
            </div>
            <div className={styles.trade_content_container}>
              <p className={styles.trade_content_badge}>Live+</p>
              <p className={styles.trade_content_test}>Trade Contest</p>
            </div>
          </a>

          {/* Deposit Button */}

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              gap: "10px",
            }}
          >
            <Button
              sx={{
                borderRadius: "30px",
                backgroundColor: "green",
                padding: "5px 15px",
                textTransform: "none",
                minWidth: 150,
                width: "100%",
              }}
              variant="contained"
            >
              Deposit
            </Button>

            {/* Avatar */}
            <Avatar sx={{ width: 35, height: 35 }} />

            {/* Download Icon */}
            <IconButton>
              <DownloadIcon />
            </IconButton>
          </Box>

          {/* MUI Menu Icon Button */}
          <Box
            sx={{
              gap: "10px",
              display: { xs: "flex", sm: "flex", lg: "none" },
            }}
          >
            <Avatar
              sx={{
                width: 35,
                height: 35,
                display: { xs: "flex", sm: "flex", lg: "none" },
              }}
            />

            <IconButton
              onClick={() => setOpenSideNav(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer
            anchor="right"
            open={openSideNav}
            onClose={() => setOpenSideNav(false)}
          >
            <div style={{ width: 300 }}>
              <AppResponsiveSidebar onClose={() => setOpenSideNav(false)} />
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
