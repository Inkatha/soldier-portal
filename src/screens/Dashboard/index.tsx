import { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button, Drawer } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  DashboardContainer,
  DrawerContentContainer,
  DashboardSubtitle,
  DashboardTitle,
  InlineRow,
  SearchBarContainer,
  SoldierCard,
  SoldierCardDetails,
  StyledName,
  StyledActiveLabel,
  StyledPosition,
} from "./styled";

import DataGrid from "../../components/DataGrid";

const Dashboard = () => {
  const [drawerToggle, setDrawerToggle] = useState(false);
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
        />
      </DashboardContainer>
      <Drawer
        anchor="right"
        open={drawerToggle}
        onClose={() => setDrawerToggle(false)}
        PaperProps={{
          sx: {
            width: "50%",
          },
        }}
      >
        <DrawerContentContainer>
          <InlineRow>
            <SoldierCard>
              <Avatar />
              <SoldierCardDetails>
                <InlineRow>
                  <StyledName>Malik Inkatha</StyledName>{" "}
                  <StyledActiveLabel>Active</StyledActiveLabel>
                </InlineRow>
                <StyledPosition>Student Communications Officer</StyledPosition>
              </SoldierCardDetails>
            </SoldierCard>
            <div>
              <Button variant="contained">Send Text</Button>
              <Button variant="contained">Send Email</Button>
            </div>
            <div>
              <Button variant="contained">
                <KeyboardArrowLeftIcon />
              </Button>
              <Button variant="contained">
                <KeyboardArrowRightIcon />
              </Button>
            </div>
          </InlineRow>
        </DrawerContentContainer>
      </Drawer>
    </>
  );
};

export default Dashboard;
