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
  {
    name: "Earnings",
    route: "/earnings",
  },
];

export const AppSideNav = () => {
  return (
    <div className={styles.side_nav_container}>
      <a href="/Login" className={styles.login_btn}>
        Login
      </a>
      <a href="/signup" className={styles.signup_btn}>
        Register
      </a>

      {AppNavList.map((list, index) => (
        <div className={styles.list_container} key={index}>
          <p>{list.name}</p>
          <RightArrowIcon />
        </div>
      ))}

      <div className={styles.list_container}>
        <p>Trade Center</p>
        <RightArrowIcon />
      </div>
    </div>
  );
};
