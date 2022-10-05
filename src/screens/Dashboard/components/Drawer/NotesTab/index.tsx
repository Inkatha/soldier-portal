import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import Button from "../../../../../components/Button";
import { TabContentColumnContainer, TabContentContainer } from "../styled";

import { NoteHeaderContainer, RowContainer, ColumnContainer } from "./styled";

const NotesTab = () => (
  <TabContentContainer>
    <NoteHeaderContainer>
      <Button type="info" size="small" variant="outlined">
        Add Note
      </Button>
      <RowContainer>
        <div>Recent First</div> <UnfoldMoreRoundedIcon fontSize='small' />
      </RowContainer>
    </NoteHeaderContainer>
    <TabContentColumnContainer>
      <RowContainer>
        <div>Avatar</div>
        <ColumnContainer>
          <RowContainer>
            <div>Brother John X</div>
            <div>August 5, 2022 - 4:23PM</div>
          </RowContainer>

          <div>
            Mentioned that he will program my radio when he gets an opportunity
          </div>
        </ColumnContainer>

        <RowContainer>
          <div>Action Button</div>
          <div>Action Button</div>
        </RowContainer>
      </RowContainer>
    </TabContentColumnContainer>
  </TabContentContainer>
);

export default NotesTab;
