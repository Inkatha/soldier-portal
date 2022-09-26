import { Avatar, Button, Drawer } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
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
} from "./styled";
import { Soldier } from "../../../../shared/interfaces/Soldier";

interface CustomDrawerProps {
  selectedSoldier: Soldier | null;
  isVisible: boolean;
  toggle: Function;
  unsetSelectedData: Function;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  selectedSoldier,
  isVisible,
  toggle,
  unsetSelectedData,
}) => {
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
              variant="contained"
              size="small"
              startIcon={<PhoneIphoneIcon />}
            >
              Send Text
            </Button>
            <Button variant="contained" size="small" startIcon={<EmailIcon />}>
              Send Email
            </Button>
          </ActionButtonContainer>
          <NavigationButtonContainer>
            <Button variant="contained" size="small">
              <KeyboardArrowLeftIcon />
            </Button>
            <Button variant="contained" size="small">
              <KeyboardArrowRightIcon />
            </Button>
          </NavigationButtonContainer>
        </InlineRow>
        <TabHeaderContainer>
          <InlineRow>
            <TabHeader>Details</TabHeader>
            <TabHeader>Post</TabHeader>
            <TabHeader>Final Call</TabHeader>
            <TabHeader>Notes</TabHeader>
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

          <FooterContentContainer>
            <FooterContent>
              <Button variant="contained">Save</Button>
              <Button variant="contained">Cancel</Button>
            </FooterContent>
          </FooterContentContainer>
        </TabContentContainer>
      </DrawerContentContainer>
    </Drawer>
  );
};

export default CustomDrawer;
