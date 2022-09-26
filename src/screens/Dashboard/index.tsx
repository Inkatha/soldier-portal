import { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

import {
  DashboardContainer,
  DashboardSubtitle,
  DashboardTitle,
  InlineRow,
  SearchBarContainer,
} from "./styled";

import DataGrid from "../../components/DataGrid";
import CustomDrawer from "./components/Drawer";

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
            <Button variant="contained">Send Text</Button>
            <Button variant="contained">Send Email</Button>
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
      <CustomDrawer
        selectedSoldier={selectedSoldier}
        isVisible={drawerToggle}
        toggle={setDrawerToggle}
        unsetSelectedData={() => setSelectedSoldier(null)}
      />
    </>
  );
};

export default Dashboard;
