import React from "react";
import {
  GridCell,
  GridContainer,
  GridHeader,
  GridHeaderContainer,
  GridTitleContainer,
  GridRow,
  StyledDivider,
  StyledName,
} from "./styled";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { Avatar, Checkbox } from "@mui/material";

interface Data {
  name: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
}

interface DataGridProps {
  headers: Array<string>;
  data: Array<Data>;
  onDataClick: Function;
  setSelectedData: Function;
}

const DataGrid: React.FC<DataGridProps> = ({
  headers,
  data,
  onDataClick,
  setSelectedData,
}: DataGridProps) => (
  <>
    <GridHeaderContainer>
      <Checkbox />
      <GridTitleContainer>
        <GridHeader>
          {headers.map((header) => (
            <GridCell key={header}>
              {header} <UnfoldMoreRoundedIcon fontSize="small" />
            </GridCell>
          ))}
        </GridHeader>
      </GridTitleContainer>
    </GridHeaderContainer>
    <GridContainer>
      {data.map((d, index) => (
        <>
          <GridRow key={d.email}>
            <Checkbox />
            <GridCell
              clickable={true}
              onClick={() => {
                onDataClick();
                setSelectedData(d);
              }}
            >
              <Avatar>{d.name[0]}</Avatar> <StyledName>{d.name}</StyledName>
            </GridCell>
            <GridCell
              clickable={true}
              onClick={() => {
                onDataClick();
                setSelectedData(d);
              }}
            >
              {d.email}
            </GridCell>
            <GridCell>{d.phoneNumber}</GridCell>
            <GridCell>{d.isActive ? "Yes" : "No"}</GridCell>
          </GridRow>
          {index + 1 < data.length ? <StyledDivider /> : null}
        </>
      ))}
    </GridContainer>
  </>
);

export default DataGrid;
