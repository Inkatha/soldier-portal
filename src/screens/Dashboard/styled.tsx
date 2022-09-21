import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";

export const DashboardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
`;

export const DrawerContentContainer = styled("div")`
  padding: 50px;
`;

export const DrawerToolbar = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const SearchBarContainer = styled("div")`
  margin-bottom: 8px;
`;

export const DashboardTitle = styled("div")`
  font-family: Roboto;
  color: #5f5f5f;
  font-weight: normal;
  margin-bottom: 12px;
  font-size: 36px;
`;

export const DashboardSubtitle = styled("div")`
  font-family: Roboto;
  color: #afafaf;
  font-weight: normal;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const InlineRow = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const SoldierCard = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SoldierCardDetails = styled("div")`
  margin-left: 8px;
`;

export const StyledDrawer = styled(Drawer)`
  width: 500px;
`;

export const StyledName = styled("span")`
  font-size: 32px;
  color: black;
`;

export const StyledPosition = styled("span")`
  color: #c6c6c6;
`;

export const StyledActiveLabel = styled("span")`
  display: flex;
  align-self: center;
  font-size: 12px;
  padding: 6px;
  background-color: #c4f3c0;
  border-width: 1px;
  border-color: #0ea501;
  color: #0ea501;
  border-radius: 5px;
`;
