import DocsLayout from '../../DocsLayout';
import './TasksPage.css';

export default function TasksPage() {
  return (
    <DocsLayout 
      title="Tasks — Craftly Workspace"
      description="Tasks in Craftly Workspace"
      tocItems={[
        { id: 'tasks', label: 'Tasks' },
        { id: 'what-is-command-chain', label: 'What Is the Command Chain?' },
        { id: 'how-tasks-are-assigned', label: 'How Tasks Are Assigned' },
        { id: 'executing-a-task', label: 'Executing a Task' },
        { id: 'task-submission', label: 'Task Submission' },
        { id: 'what-if-you-cannot-complete', label: 'What If You Cannot Complete a Task?' },
        { id: 'complete-task-flow', label: 'The Complete Task Flow' },
        { id: 'why-craftly-uses-this', label: 'Why Craftly Uses This System' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Tasks & Operations &gt; <strong>Tasks</strong>
      </div>

      <h1 className="docs__title" id="tasks">Tasks</h1>
      
      <p className="docs__text">
        Craftly Workspace provides a structured system for issuing, distributing, executing, and submitting official company tasks.
      </p>
      
      <p className="docs__text">
        A task in Craftly is not simply a personal to do item. It represents actual work assigned by the organization, with a clear source, responsible person, expected outcome, and submission process.
      </p>

      <p className="docs__text">
        Craftly uses two primary ways to distribute official tasks:
      </p>
      
      <ul className="docs__list">
        <li>Notice Board</li>
        <li>Command Chain</li>
      </ul>

      <h2 className="docs__section-title" id="what-is-command-chain">But What Is the Command Chain?</h2>
      
      <p className="docs__text">
        The Command Chain is Craftly's hierarchical communication and task distribution system.
      </p>
      
      <p className="docs__text">
        It is the structured path through which official commands, instructions, and tasks move through the organization.
      </p>
      
      <p className="docs__text">The hierarchy follows:</p>
      
      <div className="docs__code-block tasks__flow-box">
        Chairman &rarr; CEO &rarr; C-Suite &rarr; Senior &rarr; Junior &rarr; Executive
      </div>
      
      <p className="docs__text">
        A command can originate at a higher level and be passed down through the appropriate organizational levels until it reaches the person responsible for carrying out the work.
      </p>
      
      <p className="docs__text">
        Each level is responsible for passing relevant work to the appropriate people under its responsibility.
      </p>
      
      <p className="docs__text">
        The Command Chain therefore provides a clear relationship between:
      </p>
      
      <div className="docs__code-block tasks__flow-box">
        Who issued the command &rarr; Who received it &rarr; Who is responsible &rarr; Who executes it
      </div>
      
      <p className="docs__text">
        This keeps organizational communication structured and prevents official tasks from being distributed randomly or without accountability.
      </p>

      <h2 className="docs__section-title" id="how-tasks-are-assigned">How Tasks Are Assigned</h2>
      
      <p className="docs__text">
        Craftly uses two official channels for distributing tasks.
      </p>
      
      <h3 className="docs__subsection-title">1. Notice Board</h3>
      <p className="docs__text">
        The Notice Board is used when an official task needs to be announced to a department, unit, group, or the wider organization.
      </p>
      <p className="docs__text">
        A task posted on the Notice Board contains the necessary instructions and expectations so that the responsible members can understand what needs to be done.
      </p>
      <p className="docs__text">
        The Notice Board works as a centralized location for officially published organizational tasks and notices.
      </p>

      <h3 className="docs__subsection-title">2. Command Chain</h3>
      <p className="docs__text">
        Tasks can also be assigned directly through the Command Chain.
      </p>
      <p className="docs__text">
        In this case, the task follows the organization's hierarchy and is passed from the appropriate leadership level to the people responsible for executing it.
      </p>
      <p className="docs__text">For example:</p>
      
      <div className="docs__code-block tasks__flow-box">
        CEO &rarr; C-Suites &rarr; Senior &rarr; Junior &rarr; Executive
      </div>

      <p className="docs__text">
        A leader does not need to send the task to everyone. They pass it through the appropriate organizational structure until it reaches the person or team responsible for the work.
      </p>
      <p className="docs__text">
        This makes the Command Chain the primary mechanism for hierarchical task delegation and execution.
      </p>

      <h2 className="docs__section-title" id="executing-a-task">Executing a Task</h2>
      <p className="docs__text">
        Once a member receives an official task, they are responsible for completing it according to the instructions provided.
      </p>
      <p className="docs__text">The member should understand:</p>
      <ul className="docs__list">
        <li>What needs to be done</li>
        <li>Why it needs to be done</li>
        <li>What output is expected</li>
        <li>When it needs to be completed</li>
        <li>Who is responsible for the task</li>
      </ul>
      <p className="docs__text">
        A task remains an active responsibility until the required work has been completed and submitted.
      </p>

      <h2 className="docs__section-title" id="task-submission">Task Submission</h2>
      <p className="docs__text">
        Once the work is completed, the member can submit the result through the Task Submission system.
      </p>
      <p className="docs__text">
        A member can submit up to 5 files per task.
      </p>
      <p className="docs__text">Supported formats include:</p>
      <ul className="docs__list">
        <li>Images / Photos</li>
        <li>PDF</li>
        <li>Text</li>
        <li>JSON</li>
        <li>CSV</li>
      </ul>
      <p className="docs__text">
        This allows different types of work to be submitted in the format that best represents the actual result.
      </p>
      <p className="docs__text">For example:</p>

      <div className="docs__code-block tasks__flow-box tasks__flow-box--column">
        <div>Task Assigned</div>
        <div>&darr;</div>
        <div>Work Completed</div>
        <div>&darr;</div>
        <div>Output / Evidence Prepared</div>
        <div>&darr;</div>
        <div>Task Submission</div>
        <div>&darr;</div>
        <div>Submitted Work Recorded</div>
      </div>

      <p className="docs__text">
        The submission should represent the actual output of the assigned task, rather than simply indicating that the task was completed.
      </p>

      <h2 className="docs__section-title" id="what-if-you-cannot-complete">What If You Cannot Complete a Task?</h2>
      <p className="docs__text">
        Sometimes a member may be unable to complete an assigned task because of a technical problem, lack of information, insufficient resources, or another blocker.
      </p>
      <p className="docs__text">
        In that situation, the member should not silently leave the task incomplete.
      </p>
      <p className="docs__text">
        Instead, they should contact their Unit Leader and explain the situation.
      </p>
      <p className="docs__text">They should communicate:</p>
      <ul className="docs__list">
        <li>Why the task could not be completed</li>
        <li>What problem occurred</li>
        <li>What is currently blocking the work</li>
        <li>What kind of help or resources are needed</li>
      </ul>
      <p className="docs__text">
        The Unit Leader can then determine the appropriate next step.
      </p>
      <p className="docs__text">The process becomes:</p>

      <div className="docs__code-block tasks__flow-box tasks__flow-box--column">
        <div>Task Assigned</div>
        <div>&darr;</div>
        <div>Work Begins</div>
        <div>&darr;</div>
        <div>Problem Occurs</div>
        <div>&darr;</div>
        <div>Member Contacts Unit Leader</div>
        <div>&darr;</div>
        <div>Problem Identified</div>
        <div>&darr;</div>
        <div>Support / Resolution</div>
        <div>&darr;</div>
        <div>Work Continues</div>
      </div>
      
      <p className="docs__text">
        This makes problems visible to the organization instead of allowing incomplete work to disappear without explanation.
      </p>

      <h2 className="docs__section-title" id="complete-task-flow">The Complete Task Flow</h2>
      <p className="docs__text">
        The complete Craftly task system can be understood as:
      </p>
      
      <div className="docs__code-block tasks__flow-box tasks__flow-box--column">
        <div>Task Issued</div>
        <div>&darr;</div>
        <div>Notice Board or Command Chain</div>
        <div>&darr;</div>
        <div>Task Assigned to Responsible Member</div>
        <div>&darr;</div>
        <div>Task Execution</div>
        <div>&darr;</div>
        <div>Completed?</div>
        
        <div className="tasks__decision-grid">
          <div className="tasks__decision-col">
            <div className="tasks__decision-yes">If Yes</div>
            <div>Prepare Output</div>
            <div>&darr;</div>
            <div>Task Submission</div>
            <div>&darr;</div>
            <div>Upload up to 5 Files</div>
            <div>&darr;</div>
            <div>Task Completed / Recorded</div>
          </div>
          <div className="tasks__decision-col">
            <div className="tasks__decision-no">If No</div>
            <div>Identify Blocker</div>
            <div>&darr;</div>
            <div>Contact Unit Leader</div>
            <div>&darr;</div>
            <div>Resolve the Problem</div>
            <div>&darr;</div>
            <div>Continue the Task</div>
          </div>
        </div>
      </div>

      <h2 className="docs__section-title" id="why-craftly-uses-this">Why Craftly Uses This System</h2>
      <p className="docs__text">
        The purpose of the Task and Command Chain system is to make organizational work clear, traceable, and accountable.
      </p>
      <p className="docs__text">Every official task should have:</p>
      <ul className="docs__list">
        <li>A clear source</li>
        <li>A defined path</li>
        <li>A responsible person</li>
        <li>A specific expected outcome</li>
        <li>A way to submit the result</li>
        <li>A clear escalation path when something goes wrong</li>
      </ul>
      <p className="docs__text">
        This creates a simple principle:
      </p>
      <div className="tasks__summary-box">
        <p className="docs__text tasks__summary-text">
          Commands should have a clear path. Work should have a clear owner. Completed work should have a verifiable submission. Problems should have a clear path to resolution.
        </p>
      </div>
      <p className="docs__text">
        That is how Craftly Workspace turns organizational instructions into structured, accountable execution.
      </p>
    </DocsLayout>
  );
}
