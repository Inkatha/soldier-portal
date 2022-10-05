import {
  InfoCell,
  TabContentColumn,
  TabContentColumnContainer,
  TabContentContainer,
  TabContentLabel,
} from "../styled";

const DetailsTab = () => (
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
);

export default DetailsTab;
