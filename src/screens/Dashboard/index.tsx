import { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

import Button from "../../components/Button";

import {
  DashboardContainer,
  DashboardSubtitle,
  DashboardTitle,
  InlineRow,
  SearchBarContainer,
} from "./styled";

import DataGrid from "../../components/DataGrid";
import Drawer from "./components/Drawer";

const Dashboard = () => {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const [selectedSoldier, setSelectedSoldier] = useState(null);

  const soldierData = [
    {
      name: "Malik Inkatha",
      email: "malik.inkatha@gmail.com",
      phoneNumber: "702-325-4359",
      isActive: true,
    },
    {
      name: "Malik Inkatha",
      email: "malik.inkatha@gmail.com",
      phoneNumber: "702-325-4359",
      isActive: true,
    },
    {
      name: "Malik Inkatha",
      email: "malik.inkatha@gmail.com",
      phoneNumber: "702-325-4359",
      isActive: true,
    },
    {
      name: "Malik Inkatha",
      email: "malik.inkatha@gmail.com",
      phoneNumber: "702-325-4359",
      isActive: true,
    },
    {
      name: "Malik Inkatha",
      email: "malik.inkatha@gmail.com",
      phoneNumber: "702-325-4359",
      isActive: true,
    },
    {
      name: "Malik Inkatha",
      email: "malik.inkatha@gmail.com",
      phoneNumber: "702-325-4359",
      isActive: true,
    },
    {
      name: "Malik Inkatha",
      email: "malik.inkatha@gmail.com",
      phoneNumber: "702-325-4359",
      isActive: true,
    },
    {
      name: "Malik Inkatha",
      email: "malik.inkatha@gmail.com",
      phoneNumber: "702-325-4359",
      isActive: true,
    },
    {
      name: "Malik Inkatha",
      email: "malik.inkatha@gmail.com",
      phoneNumber: "702-325-4359",
      isActive: true,
    },
  ];

  return (
    <>
      <DashboardContainer>
        <DashboardTitle>Soldiers</DashboardTitle>
        <InlineRow>
          <DashboardSubtitle>Total Soldiers: 204</DashboardSubtitle>
          <div>
            <Button
              variant="outlined"
              type="neutral"
              startIcon={<PhoneIphoneIcon />}
              size="small"
            >
              Send Text
            </Button>
            &nbsp;
            <Button
              variant="outlined"
              type="neutral"
              startIcon={<EmailIcon />}
              size="small"
            >
              Send Email
            </Button>
          </div>
        </InlineRow>
        <SearchBarContainer>
          <TextField
            variant="standard"
            InputProps={{
              startAdornment: <SearchIcon fontSize="small" />,
            }}
          />
        </SearchBarContainer>
        <DataGrid
          headers={["Name", "Email", "Phone Number", "Is Active"]}
          data={soldierData}
          onDataClick={() => setDrawerToggle(true)}
          setSelectedData={setSelectedSoldier}
        />
      </DashboardContainer>
      <Drawer
        selectedSoldier={selectedSoldier}
        isVisible={drawerToggle}
        toggle={setDrawerToggle}
        unsetSelectedData={() => setSelectedSoldier(null)}
      />
    </>
  );
};

export default Dashboard;
