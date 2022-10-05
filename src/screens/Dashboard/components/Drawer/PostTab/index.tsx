import {
  InfoCell,
  TabContentColumn,
  TabContentColumnContainer,
  TabContentContainer,
  TabContentLabel,
} from "../styled";

const PostTab = () => (
  <TabContentContainer>
    <TabContentColumnContainer>
      <TabContentColumn>
        <InfoCell>
          <TabContentLabel>Is Assigned a Post</TabContentLabel>
          <div>Yes</div>
        </InfoCell>
        <InfoCell>
          <TabContentLabel>Post Location</TabContentLabel>
          <div>Base 2</div>
        </InfoCell>
      </TabContentColumn>

      <TabContentColumn>
        <InfoCell>
          <TabContentLabel>Time Slot</TabContentLabel>
          <div>Wednesday 10PM-2AM</div>
        </InfoCell>
      </TabContentColumn>
    </TabContentColumnContainer>
  </TabContentContainer>
);

export default PostTab;
