import { styled } from "@mui/system";

interface GridCellProps {
  clickable?: boolean;
}

export const GridCell = styled("div")<GridCellProps>(({ clickable }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  paddingTop: "8px",
  paddingBottom: "8px",
  ":hover": {
    cursor: clickable ? 'pointer' : 'default'
  }
}));

export const GridHeaderContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px #afafaf;
  margin-bottom: 18px;
`;

export const GridHeader = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const GridRow = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const GridRowContainer = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const GridContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px #afafaf;
  padding-bottom: 8px;
`;

export const GridTitleContainer = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StyledDivider = styled("hr")`
  border-color: #fafafa;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const StyledName = styled("span")`
  margin-left: 12px;
`;
