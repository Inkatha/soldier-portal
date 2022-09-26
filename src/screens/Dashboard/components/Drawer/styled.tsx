import { styled } from "@mui/system";

export const DrawerContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: 100%;
`;

export const DrawerToolbar = styled("div")`
  display: flex;
  flex-direction: row;
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

export const ActionButtonContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  height: 35px;
`;

export const NavigationButtonContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 135px;
  height: 35px;
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
  border: 1px solid #0ea501;
  color: #0ea501;
  border-radius: 5px;
`;

export const TabHeaderContainer = styled("div")`
  padding-top: 30px;
  padding-bottom: 25px;
`;

export const TabHeader = styled("div")`
  font-size: 32px;
  text-transform: uppercase;
  font-family: "Roboto Condensed";
`;

export const TabContentContainer = styled("div")`
  height: 70%;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  padding: 30px;
`;

export const TabContentLabel = styled("div")`
  font-size: 16px;
  color: #939393;
`;

export const TabContentColumnContainer = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 20%;
`;

export const TabContentColumn = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const InfoCell = styled("div")``;

export const FooterContentContainer = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  height: 150px;
`;

export const FooterContent = styled("div")`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  max-height: 35px;
  &:first-child {
    margin-right: 5px;
  }
`;
