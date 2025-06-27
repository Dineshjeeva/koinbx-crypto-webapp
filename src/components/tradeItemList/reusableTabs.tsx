// components/ReusableTabs.tsx
import React from "react";
import { Tabs, Tab } from "@mui/material";
import colors from "@koinbx/utils/colors";

type TabItem = {
  type: string;
  name: string;
};

interface ReusableTabsProps {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (val: string) => void;
  indicatorColor?: string;
  activeColor?: string;
  inactiveColor?: string;
  backgroundColor?: string;
}

const ReusableTabs: React.FC<ReusableTabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  indicatorColor = colors.green,
  activeColor = colors.green,
  inactiveColor = colors.tabInactive,
  backgroundColor = colors.tabBackground,
}) => {
  return (
    <Tabs
      TabIndicatorProps={{
        style: {
          backgroundColor: indicatorColor,
        },
      }}
      sx={{
        background: backgroundColor,
      }}
      textColor="inherit"
      value={activeTab}
      onChange={(_, val) => setActiveTab(val)}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.type}
          label={tab.name}
          value={tab.type}
          sx={{
            color: activeTab === tab.type ? activeColor : inactiveColor,
            fontWeight: activeTab === tab.type ? 600 : 400,
            textTransform: "none",
          }}
        />
      ))}
    </Tabs>
  );
};

export default ReusableTabs;
