import DocsLayout from '../DocsLayout';

export default function ProjectsPage() {
  return (
    <DocsLayout 
      title="Projects — Craftly Robot"
      description="Projects in Craftly Robot"
      tocItems={[
        { id: 'projects', label: 'Projects' },
        { id: 'project-structure-feature', label: 'Project Structure' },
        { id: 'create-project-feature', label: 'Create a Project' },
        { id: 'manage-agents-feature', label: 'Manage Agents' },
        { id: 'configure-tasks-feature', label: 'Configure Tasks' },
        { id: 'monitor-execution-feature', label: 'Monitor Execution' },
        { id: 'project-workflows-feature', label: 'Project Workflows' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; <strong>Projects</strong>
      </div>

      <h1 className="docs__title" id="projects">Projects</h1>
      
      <h2 id="project-structure-feature" className="docs__section-title">Project Structure</h2>
      <p className="docs__text">Organize your agents, tools, and workflows into distinct projects.</p>
      
      <h2 id="create-project-feature" className="docs__section-title">Create a Project</h2>
      <p className="docs__text">Learn how to initialize a new project workspace.</p>
      
      <h2 id="manage-agents-feature" className="docs__section-title">Manage Agents</h2>
      <p className="docs__text">Add, configure, and monitor agents within your project.</p>
      
      <h2 id="configure-tasks-feature" className="docs__section-title">Configure Tasks</h2>
      <p className="docs__text">Define project-specific tasks and objectives.</p>
      
      <h2 id="monitor-execution-feature" className="docs__section-title">Monitor Execution</h2>
      <p className="docs__text">Track progress and review logs for all agent activity in your project.</p>
      
      <h2 id="project-workflows-feature" className="docs__section-title">Project Workflows</h2>
      <p className="docs__text">Build comprehensive workflows that span multiple agents and tasks.</p>
    </DocsLayout>
  );
}
