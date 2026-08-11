import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

/* â”€â”€ Lazy-loaded pages for code splitting â”€â”€ */
const HomePage = lazy(() => import('./pages/HomePage'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const WorkspacePage = lazy(() => import('./pages/products/WorkspacePage'));
const RobotPage = lazy(() => import('./pages/products/RobotPage'));
const OperationsPage = lazy(() => import('./pages/use-cases/OperationsPage'));
const AgentNegotiationPage = lazy(() => import('./pages/use-cases/AgentNegotiationPage'));
const AIPage = lazy(() => import('./pages/use-cases/AIPage'));
const DocumentationPage = lazy(() => import('./pages/resources/DocumentationPage'));
const PlanPage = lazy(() => import('./pages/resources/PlanPage'));
const WhatIsRobotPage = lazy(() => import('./pages/resources/robot/overview/WhatIsRobotPage'));
const RobotArchitecturePage = lazy(() => import('./pages/resources/robot/overview/RobotArchitecturePage'));
const HowRobotWorksPage = lazy(() => import('./pages/resources/robot/overview/HowRobotWorksPage'));
const AgentModelPage = lazy(() => import('./pages/resources/robot/overview/AgentModelPage'));
const CurrentStatusPage = lazy(() => import('./pages/resources/robot/overview/CurrentStatusPage'));
const LongTermVisionPage = lazy(() => import('./pages/resources/robot/overview/LongTermVisionPage'));

const RobotPrerequisitesPage = lazy(() => import('./pages/resources/robot/getting-started/PrerequisitesPage'));
const RobotInstallationPage = lazy(() => import('./pages/resources/robot/getting-started/InstallationPage'));
const RobotQuickstartPage = lazy(() => import('./pages/resources/robot/getting-started/QuickstartPage'));
const RobotCreateFirstAgentPage = lazy(() => import('./pages/resources/robot/getting-started/CreateFirstAgentPage'));
const RobotRunFirstTaskPage = lazy(() => import('./pages/resources/robot/getting-started/RunFirstTaskPage'));
const RobotNextStepsPage = lazy(() => import('./pages/resources/robot/getting-started/NextStepsPage'));

const RobotAgentsPage = lazy(() => import('./pages/resources/robot/build-with-craftly/AgentsPage'));
const RobotTasksPage = lazy(() => import('./pages/resources/robot/build-with-craftly/TasksPage'));
const RobotToolsPage = lazy(() => import('./pages/resources/robot/build-with-craftly/ToolsPage'));
const RobotWorkflowsPage = lazy(() => import('./pages/resources/robot/build-with-craftly/WorkflowsPage'));
const RobotContextMemoryPage = lazy(() => import('./pages/resources/robot/build-with-craftly/ContextMemoryPage'));
const RobotAgentRuntimePage = lazy(() => import('./pages/resources/robot/build-with-craftly/AgentRuntimePage'));
const RobotIntegrationsPage = lazy(() => import('./pages/resources/robot/build-with-craftly/IntegrationsPage'));
const RobotCustomAgentsPage = lazy(() => import('./pages/resources/robot/build-with-craftly/CustomAgentsPage'));

const RobotAgenticAIPage = lazy(() => import('./pages/resources/robot/feature-overview/AgenticAIPage'));
const RobotToolUsePage = lazy(() => import('./pages/resources/robot/feature-overview/ToolUsePage'));
const RobotPlanningReasoningPage = lazy(() => import('./pages/resources/robot/feature-overview/PlanningReasoningPage'));
const RobotAgentDiscoveryPage = lazy(() => import('./pages/resources/robot/feature-overview/AgentDiscoveryPage'));
const RobotAgentNegotiationPage = lazy(() => import('./pages/resources/robot/feature-overview/AgentNegotiationPage'));
const RobotMultiAgentCoordinationPage = lazy(() => import('./pages/resources/robot/feature-overview/MultiAgentCoordinationPage'));
const RobotPrivacyBoundariesPage = lazy(() => import('./pages/resources/robot/feature-overview/PrivacyBoundariesPage'));
const RobotHumanConfirmationPage = lazy(() => import('./pages/resources/robot/feature-overview/HumanConfirmationPage'));
const RobotRealWorldTaskCoordinationPage = lazy(() => import('./pages/resources/robot/feature-overview/RealWorldTaskCoordinationPage'));


const WhatIsWorkspacePage = lazy(() => import('./pages/resources/workspace/overview/WhatIsWorkspacePage'));
const HowWorkspaceWorksPage = lazy(() => import('./pages/resources/workspace/overview/HowWorkspaceWorksPage'));
const WorkspaceStructurePage = lazy(() => import('./pages/resources/workspace/overview/WorkspaceStructurePage'));
const CoreConceptsPage = lazy(() => import('./pages/resources/workspace/overview/CoreConceptsPage'));

const CreateAccountPage = lazy(() => import('./pages/resources/workspace/getting-started/CreateAccountPage'));
const JoinOrganizationPage = lazy(() => import('./pages/resources/workspace/getting-started/JoinOrganizationPage'));
const CompleteProfilePage = lazy(() => import('./pages/resources/workspace/getting-started/CompleteProfilePage'));
const UnderstandWorkspacePage = lazy(() => import('./pages/resources/workspace/getting-started/UnderstandWorkspacePage'));
const FirstTaskPage = lazy(() => import('./pages/resources/workspace/getting-started/FirstTaskPage'));

const OrgStructurePage = lazy(() => import('./pages/resources/workspace/organization/OrgStructurePage'));
const DepartmentsPage = lazy(() => import('./pages/resources/workspace/organization/DepartmentsPage'));
const TeamsPage = lazy(() => import('./pages/resources/workspace/organization/TeamsPage'));
const ReportingStructurePage = lazy(() => import('./pages/resources/workspace/organization/ReportingStructurePage'));
const RolesPermissionsPage = lazy(() => import('./pages/resources/workspace/organization/RolesPermissionsPage'));

const MembersPage = lazy(() => import('./pages/resources/workspace/people-roles/MembersPage'));
const RolesPage = lazy(() => import('./pages/resources/workspace/people-roles/RolesPage'));
const PermissionsPage = lazy(() => import('./pages/resources/workspace/people-roles/PermissionsPage'));
const ManagersPage = lazy(() => import('./pages/resources/workspace/people-roles/ManagersPage'));
const AccessControlPage = lazy(() => import('./pages/resources/workspace/people-roles/AccessControlPage'));

const TasksPage = lazy(() => import('./pages/resources/workspace/tasks-operations/TasksPage'));
const TaskAssignmentPage = lazy(() => import('./pages/resources/workspace/tasks-operations/TaskAssignmentPage'));
const TaskEvidencePage = lazy(() => import('./pages/resources/workspace/tasks-operations/TaskEvidencePage'));
const SupportRequestsPage = lazy(() => import('./pages/resources/workspace/tasks-operations/SupportRequestsPage'));
const NoticesPage = lazy(() => import('./pages/resources/workspace/tasks-operations/NoticesPage'));
const OperationalWorkflowsPage = lazy(() => import('./pages/resources/workspace/tasks-operations/OperationalWorkflowsPage'));

const DirectCommunicationPage = lazy(() => import('./pages/resources/workspace/communication/DirectCommunicationPage'));
const TeamCommunicationPage = lazy(() => import('./pages/resources/workspace/communication/TeamCommunicationPage'));
const ChainOfCommandPage = lazy(() => import('./pages/resources/workspace/communication/ChainOfCommandPage'));
const ReportingCommunicationPage = lazy(() => import('./pages/resources/workspace/communication/ReportingCommunicationPage'));
const NotificationsPage = lazy(() => import('./pages/resources/workspace/communication/NotificationsPage'));

const OrgResourcesPage = lazy(() => import('./pages/resources/workspace/resources/OrgResourcesPage'));
const DeptResourcesPage = lazy(() => import('./pages/resources/workspace/resources/DeptResourcesPage'));
const TrainingPage = lazy(() => import('./pages/resources/workspace/resources/TrainingPage'));
const TrainingParticipationPage = lazy(() => import('./pages/resources/workspace/resources/TrainingParticipationPage'));
const ResourceAccessPage = lazy(() => import('./pages/resources/workspace/resources/ResourceAccessPage'));

const WelcomeSetupPage = lazy(() => import('./pages/resources/workspace/onboarding/WelcomeSetupPage'));
const OnboardingQuestionsPage = lazy(() => import('./pages/resources/workspace/onboarding/OnboardingQuestionsPage'));
const AgreementsPage = lazy(() => import('./pages/resources/workspace/onboarding/AgreementsPage'));
const PrivateKeyPage = lazy(() => import('./pages/resources/workspace/onboarding/PrivateKeyPage'));
const CompletingOnboardingPage = lazy(() => import('./pages/resources/workspace/onboarding/CompletingOnboardingPage'));
const BlogPage = lazy(() => import('./pages/resources/BlogPage'));
const SupportPage = lazy(() => import('./pages/resources/SupportPage'));
const ReleasesPage = lazy(() => import('./pages/resources/ReleasesPage'));
const FAQPage = lazy(() => import('./pages/resources/FAQPage'));
const PressPage = lazy(() => import('./pages/resources/PressPage'));

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader__spinner" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<DownloadPage />} />

          {/* Product pages */}
          <Route path="/products/workspace" element={<WorkspacePage />} />
          <Route path="/products/robot" element={<RobotPage />} />

          {/* Use case pages */}
          <Route path="/use-cases/operations" element={<OperationsPage />} />
          <Route path="/use-cases/agent-negotiation" element={<AgentNegotiationPage />} />
          <Route path="/use-cases/ai" element={<AIPage />} />

          {/* Resource pages */}
          <Route path="/resources/documentation" element={<DocumentationPage />} />
          <Route path="/resources/documentation/plan" element={<PlanPage />} />
          <Route path="/resources/documentation/faq" element={<FAQPage />} />
          
          <Route path="/resources/documentation/workspace/overview/what-is-craftly-workspace" element={<WhatIsWorkspacePage />} />
          <Route path="/resources/documentation/workspace/overview/how-workspace-works" element={<HowWorkspaceWorksPage />} />
          <Route path="/resources/documentation/workspace/overview/workspace-structure" element={<WorkspaceStructurePage />} />
          <Route path="/resources/documentation/workspace/overview/core-concepts" element={<CoreConceptsPage />} />

          <Route path="/resources/documentation/workspace/getting-started/create-account" element={<CreateAccountPage />} />
          <Route path="/resources/documentation/workspace/getting-started/join-organization" element={<JoinOrganizationPage />} />
          <Route path="/resources/documentation/workspace/getting-started/complete-profile" element={<CompleteProfilePage />} />
          <Route path="/resources/documentation/workspace/getting-started/understand-workspace" element={<UnderstandWorkspacePage />} />
          <Route path="/resources/documentation/workspace/getting-started/first-task" element={<FirstTaskPage />} />

          <Route path="/resources/documentation/workspace/organization/org-structure" element={<OrgStructurePage />} />
          <Route path="/resources/documentation/workspace/organization/departments" element={<DepartmentsPage />} />
          <Route path="/resources/documentation/workspace/organization/teams" element={<TeamsPage />} />
          <Route path="/resources/documentation/workspace/organization/reporting-structure" element={<ReportingStructurePage />} />
          <Route path="/resources/documentation/workspace/organization/roles-permissions" element={<RolesPermissionsPage />} />

          <Route path="/resources/documentation/workspace/people-roles/members" element={<MembersPage />} />
          <Route path="/resources/documentation/workspace/people-roles/roles" element={<RolesPage />} />
          <Route path="/resources/documentation/workspace/people-roles/permissions" element={<PermissionsPage />} />
          <Route path="/resources/documentation/workspace/people-roles/managers" element={<ManagersPage />} />
          <Route path="/resources/documentation/workspace/people-roles/access-control" element={<AccessControlPage />} />

          <Route path="/resources/documentation/workspace/tasks-operations/tasks" element={<TasksPage />} />
          <Route path="/resources/documentation/workspace/tasks-operations/task-assignment" element={<TaskAssignmentPage />} />
          <Route path="/resources/documentation/workspace/tasks-operations/task-evidence" element={<TaskEvidencePage />} />
          <Route path="/resources/documentation/workspace/tasks-operations/support-requests" element={<SupportRequestsPage />} />
          <Route path="/resources/documentation/workspace/tasks-operations/notices" element={<NoticesPage />} />
          <Route path="/resources/documentation/workspace/tasks-operations/operational-workflows" element={<OperationalWorkflowsPage />} />

          <Route path="/resources/documentation/workspace/communication/direct-communication" element={<DirectCommunicationPage />} />
          <Route path="/resources/documentation/workspace/communication/team-communication" element={<TeamCommunicationPage />} />
          <Route path="/resources/documentation/workspace/communication/chain-of-command" element={<ChainOfCommandPage />} />
          <Route path="/resources/documentation/workspace/communication/reporting-communication" element={<ReportingCommunicationPage />} />
          <Route path="/resources/documentation/workspace/communication/notifications" element={<NotificationsPage />} />

          <Route path="/resources/documentation/workspace/resources/org-resources" element={<OrgResourcesPage />} />
          <Route path="/resources/documentation/workspace/resources/dept-resources" element={<DeptResourcesPage />} />
          <Route path="/resources/documentation/workspace/resources/training" element={<TrainingPage />} />
          <Route path="/resources/documentation/workspace/resources/training-participation" element={<TrainingParticipationPage />} />
          <Route path="/resources/documentation/workspace/resources/resource-access" element={<ResourceAccessPage />} />

          <Route path="/resources/documentation/workspace/onboarding/welcome-setup" element={<WelcomeSetupPage />} />
          <Route path="/resources/documentation/workspace/onboarding/onboarding-questions" element={<OnboardingQuestionsPage />} />
          <Route path="/resources/documentation/workspace/onboarding/agreements" element={<AgreementsPage />} />
          <Route path="/resources/documentation/workspace/onboarding/private-key" element={<PrivateKeyPage />} />
          <Route path="/resources/documentation/workspace/onboarding/completing-onboarding" element={<CompletingOnboardingPage />} />

          <Route path="/resources/documentation/robot/overview/what-is-craftly-robot" element={<WhatIsRobotPage />} />
          <Route path="/resources/documentation/robot/overview/architecture" element={<RobotArchitecturePage />} />
          <Route path="/resources/documentation/robot/overview/how-robot-works" element={<HowRobotWorksPage />} />
          <Route path="/resources/documentation/robot/overview/agent-model" element={<AgentModelPage />} />
          <Route path="/resources/documentation/robot/overview/current-status" element={<CurrentStatusPage />} />
          <Route path="/resources/documentation/robot/overview/long-term-vision" element={<LongTermVisionPage />} />

          <Route path="/resources/documentation/robot/getting-started/prerequisites" element={<RobotPrerequisitesPage />} />
          <Route path="/resources/documentation/robot/getting-started/installation" element={<RobotInstallationPage />} />
          <Route path="/resources/documentation/robot/getting-started/quickstart" element={<RobotQuickstartPage />} />
          <Route path="/resources/documentation/robot/getting-started/create-first-agent" element={<RobotCreateFirstAgentPage />} />
          <Route path="/resources/documentation/robot/getting-started/run-first-task" element={<RobotRunFirstTaskPage />} />
          <Route path="/resources/documentation/robot/getting-started/next-steps" element={<RobotNextStepsPage />} />

          <Route path="/resources/documentation/robot/build-with-craftly/agents" element={<RobotAgentsPage />} />
          <Route path="/resources/documentation/robot/build-with-craftly/tasks" element={<RobotTasksPage />} />
          <Route path="/resources/documentation/robot/build-with-craftly/tools" element={<RobotToolsPage />} />
          <Route path="/resources/documentation/robot/build-with-craftly/workflows" element={<RobotWorkflowsPage />} />
          <Route path="/resources/documentation/robot/build-with-craftly/context-memory" element={<RobotContextMemoryPage />} />
          <Route path="/resources/documentation/robot/build-with-craftly/agent-runtime" element={<RobotAgentRuntimePage />} />
          <Route path="/resources/documentation/robot/build-with-craftly/integrations" element={<RobotIntegrationsPage />} />
          <Route path="/resources/documentation/robot/build-with-craftly/custom-agents" element={<RobotCustomAgentsPage />} />

          <Route path="/resources/documentation/robot/feature-overview/agentic-ai" element={<RobotAgenticAIPage />} />
          <Route path="/resources/documentation/robot/feature-overview/tool-use" element={<RobotToolUsePage />} />
          <Route path="/resources/documentation/robot/feature-overview/planning-reasoning" element={<RobotPlanningReasoningPage />} />
          <Route path="/resources/documentation/robot/feature-overview/agent-discovery" element={<RobotAgentDiscoveryPage />} />
          <Route path="/resources/documentation/robot/feature-overview/agent-to-agent-negotiation" element={<RobotAgentNegotiationPage />} />
          <Route path="/resources/documentation/robot/feature-overview/multi-agent-coordination" element={<RobotMultiAgentCoordinationPage />} />
          <Route path="/resources/documentation/robot/feature-overview/privacy-boundaries" element={<RobotPrivacyBoundariesPage />} />
          <Route path="/resources/documentation/robot/feature-overview/human-confirmation" element={<RobotHumanConfirmationPage />} />
          <Route path="/resources/documentation/robot/feature-overview/real-world-task-coordination" element={<RobotRealWorldTaskCoordinationPage />} />
          <Route path="/resources/blog" element={<BlogPage />} />
          <Route path="/resources/support" element={<SupportPage />} />
          <Route path="/resources/releases" element={<ReleasesPage />} />
          <Route path="/resources/press" element={<PressPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}


