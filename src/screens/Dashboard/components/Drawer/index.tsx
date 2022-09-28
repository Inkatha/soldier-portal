import { useState } from "react";
import { Avatar, Drawer } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import Button from "../../../../components/Button";
import {
  ActionButtonContainer,
  DrawerContentContainer,
  InfoCell,
  InlineRow,
  FooterContentContainer,
  FooterContent,
  NavigationButtonContainer,
  SoldierCard,
  SoldierCardDetails,
  StyledName,
  StyledActiveLabel,
  StyledPosition,
  TabHeader,
  TabHeaderContainer,
  TabContentColumn,
  TabContentColumnContainer,
  TabContentContainer,
  TabContentLabel,
  TabHeaderButton,
} from "./styled";
import { Soldier } from "../../../../shared/interfaces/Soldier";

interface CustomDrawerProps {
  selectedSoldier: Soldier | null;
  isVisible: boolean;
  toggle: Function;
  unsetSelectedData: Function;
}

const TabConstants = {
  DETAILS: "Details",
  POST: "Post",
  FINAL_CALL: "Final Call",
  NOTES: "Notes",
};

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  selectedSoldier,
  isVisible,
  toggle,
  unsetSelectedData,
}) => {
  const [tabSelected, setTabSelected] = useState("");
  const { DETAILS, POST, FINAL_CALL, NOTES } = TabConstants;
  return (
    <Drawer
      anchor="right"
      open={isVisible}
      onClose={() => {
        toggle(false);
        unsetSelectedData();
      }}
      PaperProps={{
        sx: {
          width: "60%",
        },
      }}
    >
      <DrawerContentContainer>
        <InlineRow>
          <SoldierCard>
            <Avatar />
            <SoldierCardDetails>
              <InlineRow>
                <StyledName>Malik Inkatha</StyledName>&nbsp;
                <StyledActiveLabel>Active</StyledActiveLabel>
              </InlineRow>
              <StyledPosition>Student Communications Officer</StyledPosition>
            </SoldierCardDetails>
          </SoldierCard>
          <ActionButtonContainer>
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
          </ActionButtonContainer>
          <NavigationButtonContainer>
            <Button variant="outlined" type="neutral" size="small">
              <KeyboardArrowLeftIcon />
            </Button>
            &nbsp;
            <Button variant="outlined" type="neutral" size="small">
              <KeyboardArrowRightIcon />
            </Button>
          </NavigationButtonContainer>
        </InlineRow>
        <TabHeaderContainer>
          <InlineRow>
            <TabHeaderButton
              onClick={() => setTabSelected(DETAILS)}
              active={!tabSelected || tabSelected === DETAILS}
            >
              <TabHeader>Details</TabHeader>
            </TabHeaderButton>
            <TabHeaderButton
              onClick={() => setTabSelected(POST)}
              active={tabSelected === POST}
            >
              <TabHeader>Post</TabHeader>
            </TabHeaderButton>
            <TabHeaderButton
              onClick={() => setTabSelected(FINAL_CALL)}
              active={tabSelected === FINAL_CALL}
            >
              <TabHeader>Final Call</TabHeader>
            </TabHeaderButton>
            <TabHeaderButton
              onClick={() => setTabSelected(NOTES)}
              active={tabSelected === NOTES}
            >
              <TabHeader>Notes</TabHeader>
            </TabHeaderButton>
          </InlineRow>
        </TabHeaderContainer>
        <TabContentContainer>
          <TabContentColumnContainer>
            <TabContentColumn>
              <InfoCell>
                <TabContentLabel>Email</TabContentLabel>
                <div>malik.inkatha@gmail.com</div>
              </InfoCell>
              <InfoCell>
                <TabContentLabel>Phone Number</TabContentLabel>
                <div>702-325-4359</div>
              </InfoCell>
              <InfoCell>
                <TabContentLabel>Address</TabContentLabel>
                <div>185 E 34th St</div>
                <div>Steger, Illinois 60475</div>
              </InfoCell>
              <InfoCell>
                <TabContentLabel>Marital Status</TabContentLabel>
                <div>Married</div>
              </InfoCell>
            </TabContentColumn>

            <TabContentColumn>
              <InfoCell>
                <TabContentLabel>Education Level</TabContentLabel>
                <div>Bachelors</div>
              </InfoCell>
              <InfoCell>
                <TabContentLabel>Subject Studied</TabContentLabel>
                <div>Computer Science</div>
              </InfoCell>
              <InfoCell>
                <TabContentLabel>School Attended</TabContentLabel>
                <div>Aurora University</div>
              </InfoCell>
              <InfoCell>
                <TabContentLabel>Is Active</TabContentLabel>
                <div>Yes</div>
              </InfoCell>
            </TabContentColumn>
          </TabContentColumnContainer>
        </TabContentContainer>
        <FooterContentContainer>
          <FooterContent>
            <Button type="neutral" variant="outlined" size="medium">
              Save
            </Button>
            &nbsp;
            <Button type="danger" variant="outlined" size="medium">
              Cancel
            </Button>
          </FooterContent>
        </FooterContentContainer>
      </DrawerContentContainer>
    </Drawer>
  );
};

export default CustomDrawer;
