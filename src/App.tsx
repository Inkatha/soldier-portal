import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MediationIcon from "@mui/icons-material/Mediation";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import Dashboard from "./screens/Dashboard";
import {
  PageContainer,
  SideBarContainer,
  SectionsWrapper,
  SectionBanner,
  Section,
  Title,
} from "./styled";

function App() {
  return (
    <>
      <PageContainer>
        <SideBarContainer>
          <Title>Soldier Portal</Title>
          <SectionsWrapper>
            <Section>
              <DashboardIcon />
              Dashboard
            </Section>
            <SectionBanner>Organization</SectionBanner>
            <Section>
              <MediationIcon fontSize="small" /> Structure
            </Section>
            <Section>
              <AssessmentIcon fontSize="small" />
              Reports
            </Section>
            <Section>
              <SettingsIcon fontSize="small" />
              Settings
            </Section>
          </SectionsWrapper>
        </SideBarContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </>
  );
}

export default App;
