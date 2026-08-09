import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

/* ── Lazy-loaded pages for code splitting ── */
const HomePage = lazy(() => import('./pages/HomePage'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const WorkspacePage = lazy(() => import('./pages/products/WorkspacePage'));
const RobotPage = lazy(() => import('./pages/products/RobotPage'));
const OperationsPage = lazy(() => import('./pages/use-cases/OperationsPage'));
const AgentNegotiationPage = lazy(() => import('./pages/use-cases/AgentNegotiationPage'));
const AIPage = lazy(() => import('./pages/use-cases/AIPage'));
const DocumentationPage = lazy(() => import('./pages/resources/DocumentationPage'));
const OverviewPage = lazy(() => import('./pages/resources/robot/OverviewPage'));
const GettingStartedPage = lazy(() => import('./pages/resources/robot/GettingStartedPage'));
const BuildWithCraftlyPage = lazy(() => import('./pages/resources/robot/BuildWithCraftlyPage'));
const FeatureOverviewPage = lazy(() => import('./pages/resources/robot/FeatureOverviewPage'));
const ProjectsPage = lazy(() => import('./pages/resources/robot/ProjectsPage'));
const BlogPage = lazy(() => import('./pages/resources/BlogPage'));
const SupportPage = lazy(() => import('./pages/resources/SupportPage'));
const ReleasesPage = lazy(() => import('./pages/resources/ReleasesPage'));
const PressPage = lazy(() => import('./pages/resources/PressPage'));

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader__spinner" />
    </div>
  );
}

export default function App() {
  return (
    <Layout>
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
          <Route path="/resources/documentation/overview" element={<OverviewPage />} />
          <Route path="/resources/documentation/getting-started" element={<GettingStartedPage />} />
          <Route path="/resources/documentation/build-with-craftly" element={<BuildWithCraftlyPage />} />
          <Route path="/resources/documentation/feature-overview" element={<FeatureOverviewPage />} />
          <Route path="/resources/documentation/projects" element={<ProjectsPage />} />
          <Route path="/resources/blog" element={<BlogPage />} />
          <Route path="/resources/support" element={<SupportPage />} />
          <Route path="/resources/releases" element={<ReleasesPage />} />
          <Route path="/resources/press" element={<PressPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
