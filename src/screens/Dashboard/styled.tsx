import { styled } from "@mui/system";

export const DashboardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
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

