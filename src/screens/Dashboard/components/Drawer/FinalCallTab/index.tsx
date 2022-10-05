import {
  InfoCell,
  TabContentColumn,
  TabContentColumnContainer,
  TabContentContainer,
  TabContentLabel,
} from "../styled";

const FinalCallTab = () => (

  
    <TabContentContainer>
      <TabContentColumnContainer>
        <TabContentColumn>
          <InfoCell>
            <TabContentLabel>Soldering Days(s)</TabContentLabel>
            <div>Sunday, Saturday</div>
          </InfoCell>
        </TabContentColumn>
  
        <TabContentColumn>
          <InfoCell>
            <TabContentLabel>Time Slot</TabContentLabel>
            <div>12PM-4PM</div>
          </InfoCell>
        </TabContentColumn>
      </TabContentColumnContainer>
    </TabContentContainer>
)

export default FinalCallTab;