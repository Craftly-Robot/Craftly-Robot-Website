import DocsLayout from './DocsLayout';
import './FAQPage.css';

export default function FAQPage() {
  return (
    <DocsLayout 
      title="FAQ" 
      description="Frequently asked questions about Craftly Workspace and Robot."
      tocItems={[
        { id: "faq", label: "Frequently Asked Questions" },
        { id: "faq-1", label: "1. What is Craftly Workspace?" },
        { id: "faq-2", label: "2. How do I join Craftly?" },
        { id: "faq-3", label: "3. What is the Private Key?" },
        { id: "faq-4", label: "4. What happens if I lose my Private Key?" },
        { id: "faq-5", label: "5. Can I share my Private Key with someone else?" },
        { id: "faq-6", label: "6. What happens after I complete onboarding?" },
        { id: "faq-7", label: "7. What is the Command Chain?" },
        { id: "faq-8", label: "8. How are official tasks assigned?" },
        { id: "faq-9", label: "9. What is the Notice Board?" },
        { id: "faq-10", label: "10. How do I submit a completed task?" },
        { id: "faq-11", label: "11. What if I cannot complete my task?" },
        { id: "faq-12", label: "12. What are Projects in Workspace?" },
        { id: "faq-13", label: "13. Where can I find project instructions?" },
        { id: "faq-14", label: "14. What is AGENT.md?" },
        { id: "faq-15", label: "15. What is a Support Request?" },
        { id: "faq-16", label: "16. What types of Support Requests can I create?" },
        { id: "faq-17", label: "17. When should I contact my Unit Commander through Support?" },
        { id: "faq-18", label: "18. What happens if I have a technical problem?" },
        { id: "faq-19", label: "19. Can I suggest improvements to Craftly?" },
        { id: "faq-20", label: "20. What should I do after onboarding?" },
        { id: "faq-21", label: "21. I was assigned a project, but I don't understand how to work on it." },
        { id: "faq-22", label: "22. How do I submit my completed project?" },
        { id: "faq-23", label: "23. How do I know what my role is?" },
        { id: "faq-24", label: "24. Who should I contact if I don't understand my responsibility?" },
        { id: "faq-25", label: "25. Can I start working before my position is assigned?" },
        { id: "faq-26", label: "26. What should I do if I am blocked while working on a task?" },
        { id: "faq-27", label: "27. What if I cannot meet a task deadline?" },
        { id: "faq-28", label: "28. Can I modify the project structure or files however I want?" },
        { id: "faq-29", label: "29. What should I do before starting a project?" },
        { id: "faq-30", label: "30. Where can I find the resources I need for my work?" },
        { id: "faq-31", label: "31. What happens after I submit my work?" },
        { id: "faq-32", label: "32. Can I submit unfinished work?" },
        { id: "faq-33", label: "33. What if I submit the wrong file?" },
        { id: "faq-34", label: "34. What if my task instructions are unclear or contradictory?" },
        { id: "faq-35", label: "35. What if I don't have the technical knowledge required for a project?" },
        { id: "faq-36", label: "36. How should I communicate with my team?" },
        { id: "faq-37", label: "37. What if I need to report something sensitive?" },
        { id: "faq-38", label: "38. What if I am going to be unavailable?" },
        { id: "faq-39", label: "39. How can I improve my position within Craftly?" },
        { id: "faq-40", label: "40. What if I make a mistake?" },
        { id: "faq-41", label: "41. Is Craftly Workspace the same as Craftly Robot?" },
                { id: "faq-42", label: "42. Where should I ask if I have a question that isn't in the FAQ?" },
        { id: "faq-43", label: "43. Can I change my department after joining?" },
        { id: "faq-44", label: "44. Can I work with another department?" },
        { id: "faq-45", label: "45. Can my role or position change?" },
        { id: "faq-46", label: "46. Who decides my position?" },
        { id: "faq-47", label: "47. Can I request a different role?" },
        { id: "faq-48", label: "48. What happens if my task is reassigned?" },
        { id: "faq-49", label: "49. Can I ask for a deadline extension?" },
        { id: "faq-50", label: "50. What if my task submission is rejected?" },
        { id: "faq-51", label: "51. Can I edit my task submission after submitting it?" },
        { id: "faq-52", label: "52. Can I submit more than five files for a task?" },
        { id: "faq-53", label: "53. Who reviews my completed work?" },
        { id: "faq-54", label: "54. Can I use AI when working on a Craftly project?" },
        { id: "faq-55", label: "55. Can I use my own tools for a project?" },
        { id: "faq-56", label: "56. Are Craftly project files private?" },
        { id: "faq-57", label: "57. Do I need to push my code before submitting a project?" },
        { id: "faq-58", label: "58. What should I do if the project environment does not work?" },
        { id: "faq-59", label: "59. What if I discover a serious bug in Craftly Workspace?" },
        { id: "faq-60", label: "60. What should I do if I do not receive an important notification?" },
        { id: "faq-61", label: "61. Can I update my profile information?" },
        { id: "faq-62", label: "62. Who can see my personal information?" },
        { id: "faq-63", label: "63. How is attendance used?" },
        { id: "faq-64", label: "64. Can my performance signal decrease?" },
        { id: "faq-65", label: "65. Is a high department ranking permanent?" },
        { id: "faq-66", label: "66. Is completing onboarding enough to receive a salary?" },
        { id: "faq-67", label: "67. When will Craftly start paying salaries?" },
        { id: "faq-68", label: "68. How will I receive my salary in the future?" },
        { id: "faq-69", label: "69. Can I leave Craftly after joining?" },
        { id: "faq-70", label: "70. What happens if I become inactive?" },
        { id: "faq-71", label: "71. Can I appeal an organizational decision?" },
        { id: "faq-72", label: "72. What if I disagree with my manager?" },
        { id: "faq-73", label: "73. What if a manager gives me an unsafe or inappropriate instruction?" },
        { id: "faq-74", label: "74. Can I contact senior leadership directly?" },
        { id: "faq-75", label: "75. Can I contact someone through their private WhatsApp number?" },
        { id: "faq-76", label: "76. Is Craftly Robot the same as ChatGPT?" },
        { id: "faq-77", label: "77. Is Craftly Robot fully autonomous?" },
        { id: "faq-78", label: "78. Can my Robot communicate with another person's Robot?" },
        { id: "faq-79", label: "79. Can I create my own agent?" },
        { id: "faq-80", label: "80. Does Agent-to-Agent Negotiation mean the agents can make deals without me?" },
        { id: "faq-81", label: "81. What happens if two agents cannot agree?" },
        { id: "faq-82", label: "82. What if Robot does not understand my request?" },
        { id: "faq-83", label: "83. Can Robot access everything on my phone?" },
        { id: "faq-84", label: "84. Does Robot automatically share all my information with other agents?" },
        { id: "faq-85", label: "85. What happens if an agent gives incorrect information?" },
        { id: "faq-86", label: "86. Where can I learn about Craftly product updates?" },
        { id: "faq-87", label: "87. Where can I find the latest documentation?" },
        { id: "faq-88", label: "88. What if I cannot find an answer in the documentation?" }
      ]}
    >
      <div className="docs__breadcrumb">
        Craftly Documentation &gt; <strong>FAQ</strong>
      </div>
      
      <h1 className="docs__title" id="faq">Frequently Asked Questions</h1>

      <h3 id="faq-1" className="docs__section-title faq__question-first">1. What is Craftly Workspace?</h3>
      <p className="docs__text">
        Craftly Workspace is the central system Craftly uses to coordinate people, work, communication, resources, and day-to-day operations.
      </p>

      <h3 id="faq-2" className="docs__section-title faq__question">2. How do I join Craftly?</h3>
      <p className="docs__text">
        Start the onboarding process through the official Craftly joining system and complete the required questions and steps. After onboarding is completed, you will receive your Private Key, Workspace and Craftly Robot acess.
      </p>

      <h3 id="faq-3" className="docs__section-title faq__question">3. What is the Private Key?</h3>
      <p className="docs__text">
        Your Private Key is a sensitive part of your Craftly identity and is required to log in to Craftly Workspace. Keep it secure and never share it with anyone.
      </p>

      <h3 id="faq-4" className="docs__section-title faq__question">4. What happens if I lose my Private Key?</h3>
      <p className="docs__text">
        If you are still logged in to Workspace, you can request a new key from your Profile. If you are logged out, recovery may require the account recovery or verification process.
      </p>

      <h3 id="faq-5" className="docs__section-title faq__question">5. Can I share my Private Key with someone else?</h3>
      <p className="docs__text">
        No. Your Private Key should remain private. Never send it to another member, post it publicly, or store it somewhere insecure.
      </p>

      <h3 id="faq-6" className="docs__section-title faq__question">6. What happens after I complete onboarding?</h3>
      <p className="docs__text">
        After completing onboarding, you wait for your organizational position to be assigned. Once your position is active, you can begin your responsibilities within Craftly.
      </p>

      <h3 id="faq-7" className="docs__section-title faq__question">7. What is the Command Chain?</h3>
      <p className="docs__text">
        The Command Chain is Craftly's hierarchical system for passing official commands, instructions, and tasks through the organization.
      </p>
      <p className="docs__text faq__bold">
        Chairman &rarr; CEO &rarr; C-Suite &rarr; Senior &rarr; Junior &rarr; Executive
      </p>

      <h3 id="faq-8" className="docs__section-title faq__question">8. How are official tasks assigned?</h3>
      <p className="docs__text">
        Official tasks can be distributed through the Notice Board or through the Command Chain, depending on the nature of the work.
      </p>

      <h3 id="faq-9" className="docs__section-title faq__question">9. What is the Notice Board?</h3>
      <p className="docs__text">
        The Notice Board is the official place for organizational announcements, important messages, updates, instructions, and other information that needs to be communicated to members.
      </p>

      <h3 id="faq-10" className="docs__section-title faq__question">10. How do I submit a completed task?</h3>
      <p className="docs__text">
        Use the Task Submission option associated with the task. You can submit up to 5 files, including images, PDF, text, JSON, or CSV.
      </p>

      <h3 id="faq-11" className="docs__section-title faq__question">11. What if I cannot complete my task?</h3>
      <p className="docs__text">
        If you are unable to complete an assigned task, contact your Unit Leader and explain the problem or blocker instead of leaving the task unresolved.
      </p>

      <h3 id="faq-12" className="docs__section-title faq__question">12. What are Projects in Workspace?</h3>
      <p className="docs__text">
        Projects are practical work assignments, primarily used within Operations, that help members demonstrate their ability to understand requirements, solve problems, use technical tools, and deliver real results.
      </p>

      <h3 id="faq-13" className="docs__section-title faq__question">13. Where can I find project instructions?</h3>
      <p className="docs__text">
        Go to Work &gt; Department &gt; Projects and open the relevant project. Download the project package and read the included AGENT.md file before starting.
      </p>

      <h3 id="faq-14" className="docs__section-title faq__question">14. What is AGENT.md?</h3>
      <p className="docs__text">
        AGENT.md contains the project's specific instructions, requirements, rules, technical expectations, and other information you need to understand before working on the project.
      </p>

      <h3 id="faq-15" className="docs__section-title faq__question">15. What is a Support Request?</h3>
      <p className="docs__text">
        A Support Request allows members to ask for help or report an issue through a structured system instead of relying only on informal communication.
      </p>

      <h3 id="faq-16" className="docs__section-title faq__question">16. What types of Support Requests can I create?</h3>
      <p className="docs__text">
        You can submit requests for:
      </p>
      <ul className="docs__list">
        <li>Unit Commander</li>
        <li>Technical Issue</li>
        <li>Legal or Safety</li>
        <li>Attendance Correction</li>
        <li>Ethics Report</li>
        <li>Suggestions</li>
        <li>Private Key Recovery</li>
      </ul>

      <h3 id="faq-17" className="docs__section-title faq__question">17. When should I contact my Unit Commander through Support?</h3>
      <p className="docs__text">
        If your Unit Commander is inactive, does not provide clear instructions, or does not properly explain what to do, how to do it, where to do it, or why the work is required, you can report the issue through the appropriate Support Request.
      </p>

      <h3 id="faq-18" className="docs__section-title faq__question">18. What happens if I have a technical problem?</h3>
      <p className="docs__text">
        Create a Technical Issue Support Request and provide enough information about the problem so the responsible team can understand and investigate it.
      </p>

      <h3 id="faq-19" className="docs__section-title faq__question">19. Can I suggest improvements to Craftly?</h3>
      <p className="docs__text">
        Yes. Use the Suggestions Support Request category to share ideas, improvements, or feedback that could make Craftly better.
      </p>

      <h3 id="faq-20" className="docs__section-title faq__question">20. What should I do after onboarding?</h3>
      <p className="docs__text">
        Stay ready for your position to be assigned. Once active, understand your responsibilities, stay involved, complete your work sincerely, communicate clearly, and continue improving.
      </p>

      <h3 id="faq-21" className="docs__section-title faq__question">21. I was assigned a project, but I don't understand how to work on it. What should I do?</h3>
      <p className="docs__text">
        First, download the project package and read the AGENT.md file carefully. It contains the project's objectives, instructions, requirements, and technical guidelines.
      </p>
      <p className="docs__text">
        If you still don't understand the task after reading the instructions, do not guess or make random changes. Contact your Unit Leader or use a relevant Support Request to ask for clarification.
      </p>

      <h3 id="faq-22" className="docs__section-title faq__question">22. How do I submit my completed project?</h3>
      <p className="docs__text">
        After completing and testing the project, follow the project's provided Git workflow to push your code to the designated Craftly repository/server.
      </p>
      <p className="docs__text">
        Make sure you have followed the AGENT.md instructions and that your final work is properly committed and pushed.
      </p>
      <p className="docs__text">
        If the project also requires a formal Task Submission, submit the completed work there as instructed.
      </p>

      <h3 id="faq-23" className="docs__section-title faq__question">23. How do I know what my role is?</h3>
      <p className="docs__text">
        Your organizational position and responsibilities will be available through Craftly Workspace once your position has been assigned. Make sure you understand your role before taking responsibility for work.
      </p>

      <h3 id="faq-24" className="docs__section-title faq__question">24. Who should I contact if I don't understand my responsibility?</h3>
      <p className="docs__text">
        Start with your Unit Leader. If your Unit Leader is unavailable or is not providing enough guidance, you can submit a Unit Commander Support Request.
      </p>

      <h3 id="faq-25" className="docs__section-title faq__question">25. Can I start working before my position is assigned?</h3>
      <p className="docs__text">
        No. Complete your onboarding first and wait for your organizational position to be assigned. Once your position becomes active, follow the responsibilities associated with it.
      </p>

      <h3 id="faq-26" className="docs__section-title faq__question">26. What should I do if I am blocked while working on a task?</h3>
      <p className="docs__text">
        First, try to understand the issue and check the available project instructions and resources. If you are still blocked, contact your Unit Leader and explain exactly what is preventing you from continuing.
      </p>

      <h3 id="faq-27" className="docs__section-title faq__question">27. What if I cannot meet a task deadline?</h3>
      <p className="docs__text">
        Do not silently leave the task incomplete. Inform your Unit Leader as early as possible, explain the reason, and communicate what support or additional time you may need.
      </p>

      <h3 id="faq-28" className="docs__section-title faq__question">28. Can I modify the project structure or files however I want?</h3>
      <p className="docs__text">
        Not unless the project instructions allow it. Always read the project's AGENT.md and follow its requirements before making significant changes.
      </p>

      <h3 id="faq-29" className="docs__section-title faq__question">29. What should I do before starting a project?</h3>
      <p className="docs__text">
        Follow this basic workflow:
      </p>
      <p className="docs__text faq__bold">
        Download &rarr; Extract &rarr; Read AGENT.md &rarr; Understand Requirements &rarr; Set Up Environment &rarr; Work &rarr; Test &rarr; Commit &rarr; Push &rarr; Submit
      </p>

      <h3 id="faq-30" className="docs__section-title faq__question">30. Where can I find the resources I need for my work?</h3>
      <p className="docs__text">
        Check the relevant Department Resources in Craftly Workspace first. Project specific resources may also be included inside the project's downloaded package.
      </p>

      <h3 id="faq-31" className="docs__section-title faq__question">31. What happens after I submit my work?</h3>
      <p className="docs__text">
        Your submission can be reviewed according to the project's requirements and organizational workflow. The result of your work may contribute to evaluating your ability to handle future responsibilities.
      </p>

      <h3 id="faq-32" className="docs__section-title faq__question">32. Can I submit unfinished work?</h3>
      <p className="docs__text">
        Only when the responsible leader or project instructions explicitly allow it. If you cannot finish the work, communicate the blocker instead of submitting something incomplete as if it were finished.
      </p>

      <h3 id="faq-33" className="docs__section-title faq__question">33. What if I submit the wrong file?</h3>
      <p className="docs__text">
        If the submission can still be corrected, follow the project's submission instructions or contact your Unit Leader. Avoid repeatedly submitting incorrect versions without first understanding what needs to be fixed.
      </p>

      <h3 id="faq-34" className="docs__section-title faq__question">34. What if my task instructions are unclear or contradictory?</h3>
      <p className="docs__text">
        Do not make assumptions about an official task. Ask your Unit Leader for clarification and explain exactly which part of the instructions is unclear or conflicting.
      </p>

      <h3 id="faq-35" className="docs__section-title faq__question">35. What if I don't have the technical knowledge required for a project?</h3>
      <p className="docs__text">
        Projects are also an opportunity to learn. Start by reviewing the provided instructions, resources, and project documentation. If you remain blocked, ask your Unit Leader for guidance or request appropriate support.
      </p>

      <h3 id="faq-36" className="docs__section-title faq__question">36. How should I communicate with my team?</h3>
      <p className="docs__text">
        Keep communication clear, respectful, relevant, and timely. When discussing work, provide enough context so the person receiving your message understands the situation without unnecessary back-and-forth.
      </p>

      <h3 id="faq-37" className="docs__section-title faq__question">37. What if I need to report something sensitive?</h3>
      <p className="docs__text">
        Use the appropriate Support Request category, such as Legal or Safety or Ethics Report, depending on the situation. Avoid sharing sensitive information in public organizational channels.
      </p>

      <h3 id="faq-38" className="docs__section-title faq__question">38. What if I am going to be unavailable?</h3>
      <p className="docs__text">
        If you know that you will be unavailable and it may affect your responsibilities, communicate with the appropriate leader beforehand whenever possible.
      </p>

      <h3 id="faq-39" className="docs__section-title faq__question">39. How can I improve my position within Craftly?</h3>
      <p className="docs__text">
        Focus on consistent execution, technical growth, reliability, communication, and understanding your responsibilities. Practical project performance and your contribution to the organization can help demonstrate that you are ready for greater responsibility.
      </p>

      <h3 id="faq-40" className="docs__section-title faq__question">40. What if I make a mistake?</h3>
      <p className="docs__text">
        Be transparent about it. Inform the appropriate person, explain what happened, and work toward correcting it. Hiding a mistake can create a larger problem; communicating it early gives the team a chance to resolve it.
      </p>

      <h3 id="faq-41" className="docs__section-title faq__question">41. Is Craftly Workspace the same as Craftly Robot?</h3>
      <p className="docs__text">
        No. Craftly Workspace is the current operational system for coordinating people, work, communication, and organizational processes. Craftly Robot is Craftly's active agentic-AI research and development direction.
      </p>

      <h3 id="faq-42" className="docs__section-title faq__question">42. Where should I ask if I have a question that isn't in the FAQ?</h3>
      <p className="docs__text">
        If you cannot find the answer in the documentation, use the appropriate Support Request or contact the responsible person through the organization's communication structure.
      </p>

      <h3 id="faq-43" className="docs__section-title faq__question">43. Can I change my department after joining?</h3>
      <p className="docs__text">
        Department placement can change when Craftly's needs or a member's skills, responsibilities, and performance change. Any change should follow the appropriate organizational process.
      </p>

      <h3 id="faq-44" className="docs__section-title faq__question">44. Can I work with another department?</h3>
      <p className="docs__text">
        Yes. Members may collaborate across departments when a project, task, or organizational requirement requires it. Your primary department still determines your main responsibilities and resources.
      </p>

      <h3 id="faq-45" className="docs__section-title faq__question">45. Can my role or position change?</h3>
      <p className="docs__text">
        Yes. Roles are not necessarily permanent. Your responsibilities may change based on demonstrated reliability, quality of work, technical ability, leadership, communication, and organizational needs.
      </p>

      <h3 id="faq-46" className="docs__section-title faq__question">46. Who decides my position?</h3>
      <p className="docs__text">
        Your position is determined by Craftly's Board Members and top level leadership, including the C-Suite, based on the organization's current needs and your demonstrated contribution, reliability, skills, and performance.
      </p>

      <h3 id="faq-47" className="docs__section-title faq__question">47. Can I request a different role?</h3>
      <p className="docs__text">
        You can communicate your interests and goals to your manager or the appropriate leadership. Role changes depend on organizational needs and whether you are ready to take on the responsibilities of the requested role.
      </p>

      <h3 id="faq-48" className="docs__section-title faq__question">48. What happens if my task is reassigned?</h3>
      <p className="docs__text">
        A task may be reassigned when priorities, responsibilities, or organizational requirements change. Follow the updated assignment and ask your manager if anything about the change is unclear.
      </p>

      <h3 id="faq-49" className="docs__section-title faq__question">49. Can I ask for a deadline extension?</h3>
      <p className="docs__text">
        If you have a genuine blocker or cannot reasonably complete a task on time, communicate with your Unit Leader as early as possible and explain the situation. Do not wait until after the deadline without communicating.
      </p>

      <h3 id="faq-50" className="docs__section-title faq__question">50. What if my task submission is rejected?</h3>
      <p className="docs__text">
        Review the feedback, understand what needs to be corrected, make the required changes, and resubmit the work according to the task instructions.
      </p>

      <h3 id="faq-51" className="docs__section-title faq__question">51. Can I edit my task submission after submitting it?</h3>
      <p className="docs__text">
        This depends on the task and the Workspace workflow. If you need to change a submission, follow the available correction process or contact the responsible leader.
      </p>

      <h3 id="faq-52" className="docs__section-title faq__question">52. Can I submit more than five files for a task?</h3>
      <p className="docs__text">
        The Task Submission system currently supports up to 5 files per submission. Combine or organize your supporting material when necessary, while following the project's or task's submission requirements.
      </p>

      <h3 id="faq-53" className="docs__section-title faq__question">53. Who reviews my completed work?</h3>
      <p className="docs__text">
        Work is generally reviewed through the appropriate reporting and management structure. The responsible reviewer can depend on the task, department, and member's position.
      </p>

      <h3 id="faq-54" className="docs__section-title faq__question">54. Can I use AI when working on a Craftly project?</h3>
      <p className="docs__text">
        This depends on the project's instructions. Always read the project's AGENT.md file and follow its specific rules about AI tools, external services, and development practices.
      </p>

      <h3 id="faq-55" className="docs__section-title faq__question">55. Can I use my own tools for a project?</h3>
      <p className="docs__text">
        Only when the project instructions allow it. If a project provides a specific environment, MCP configuration, repository, or workflow, follow those requirements rather than replacing them without approval.
      </p>

      <h3 id="faq-56" className="docs__section-title faq__question">56. Are Craftly project files private?</h3>
      <p className="docs__text">
        Project files should be treated as internal organizational resources unless explicitly marked otherwise. Do not publish, redistribute, or share internal project materials without appropriate permission.
      </p>

      <h3 id="faq-57" className="docs__section-title faq__question">57. Do I need to push my code before submitting a project?</h3>
      <p className="docs__text">
        When a project provides a Git workflow, you should follow the required process, including committing and pushing your completed work to the designated repository before making the formal submission.
      </p>

      <h3 id="faq-58" className="docs__section-title faq__question">58. What should I do if the project environment does not work?</h3>
      <p className="docs__text">
        First, check the project's AGENT.md, setup instructions, dependencies, and provided resources. If the problem continues, contact your Unit Leader or submit a Technical Issue Support Request with the relevant error details.
      </p>

      <h3 id="faq-59" className="docs__section-title faq__question">59. What if I discover a serious bug in Craftly Workspace?</h3>
      <p className="docs__text">
        Use the appropriate reporting or Support Request channel and provide enough information for the issue to be investigated. Include steps to reproduce the problem when possible.
      </p>

      <h3 id="faq-60" className="docs__section-title faq__question">60. What should I do if I do not receive an important notification?</h3>
      <p className="docs__text">
        First check your Workspace notifications and relevant communication channels. If the issue appears to be technical or prevents you from receiving required information, submit a Technical Issue Support Request.
      </p>

      <h3 id="faq-61" className="docs__section-title faq__question">61. Can I update my profile information?</h3>
      <p className="docs__text">
        Profile information can be updated through the available Workspace profile settings. Some information may require additional verification or administrative approval.
      </p>

      <h3 id="faq-62" className="docs__section-title faq__question">62. Who can see my personal information?</h3>
      <p className="docs__text">
        Access to personal and organizational information should depend on the member's role, permissions, and legitimate organizational need. Sensitive information should not be exposed more broadly than necessary.
      </p>

      <h3 id="faq-63" className="docs__section-title faq__question">63. How is attendance used?</h3>
      <p className="docs__text">
        Attendance can contribute to organizational participation and performance signals. Consistent attendance helps demonstrate that a member is actively participating in their responsibilities.
      </p>

      <h3 id="faq-64" className="docs__section-title faq__question">64. Can my performance signal decrease?</h3>
      <p className="docs__text">
        Yes. Performance signals are dynamic and can change as your activity, verified work, attendance, participation, and other contribution signals change. Other members' increased contribution can also affect your relative department ranking.
      </p>

      <h3 id="faq-65" className="docs__section-title faq__question">65. Is a high department ranking permanent?</h3>
      <p className="docs__text">
        No. Department rankings are live and can change over time. The ranking reflects current contribution rather than a permanent position or title.
      </p>

      <h3 id="faq-66" className="docs__section-title faq__question">66. Is completing onboarding enough to receive a salary?</h3>
      <p className="docs__text">
        No. Completing onboarding only establishes your membership process. Compensation is intended for verified members who have an active role and are contributing to real Craftly work under the applicable compensation structure.
      </p>

      <h3 id="faq-67" className="docs__section-title faq__question">67. When will Craftly start paying salaries?</h3>
      <p className="docs__text">
        Craftly is currently operating as a non-profit organization, so regular salary payments are not yet active across the organization. A structured compensation system is planned as Craftly secures funding and establishes the required infrastructure.
      </p>

      <h3 id="faq-68" className="docs__section-title faq__question">68. How will I receive my salary in the future?</h3>
      <p className="docs__text">
        Once the compensation system is available, eligible verified members will be able to manage payment information through their Craftly Workspace profile. Supported options may include bank accounts, bKash, and other supported payment gateways.
      </p>

      <h3 id="faq-69" className="docs__section-title faq__question">69. Can I leave Craftly after joining?</h3>
      <p className="docs__text">
        Members can communicate their intention to leave through the appropriate organizational process. Any responsibilities, active tasks, projects, or organizational access should be properly handed over before leaving.
      </p>

      <h3 id="faq-70" className="docs__section-title faq__question">70. What happens if I become inactive?</h3>
      <p className="docs__text">
        Extended inactivity can affect your responsibilities, communication, performance signals, or organizational position. If you expect to be unavailable, communicate with your manager as early as possible.
      </p>

      <h3 id="faq-71" className="docs__section-title faq__question">71. Can I appeal an organizational decision?</h3>
      <p className="docs__text">
        If you believe a decision affecting your role, responsibilities, or access needs to be reviewed, raise the matter through the appropriate reporting or escalation path and provide clear reasons and evidence.
      </p>

      <h3 id="faq-72" className="docs__section-title faq__question">72. What if I disagree with my manager?</h3>
      <p className="docs__text">
        You should first communicate respectfully with your manager and try to understand the reasoning behind the decision. If the matter cannot be resolved, use the appropriate reporting or escalation process rather than bypassing the organizational structure.
      </p>

      <h3 id="faq-73" className="docs__section-title faq__question">73. What if a manager gives me an unsafe or inappropriate instruction?</h3>
      <p className="docs__text">
        Do not ignore the situation or proceed blindly. Ask for clarification when appropriate and use the relevant Legal or Safety or Ethics Report Support Request if the instruction involves a serious safety, legal, or ethical concern.
      </p>

      <h3 id="faq-74" className="docs__section-title faq__question">74. Can I contact senior leadership directly?</h3>
      <p className="docs__text">
        Direct communication with senior leadership is controlled to protect privacy and maintain clear organizational boundaries. If you need to reach someone above your access level, follow your reporting structure and ask your manager or Unit Leader to facilitate the communication.
      </p>

      <h3 id="faq-75" className="docs__section-title faq__question">75. Can I contact someone through their private WhatsApp number?</h3>
      <p className="docs__text">
        Only when that contact is officially available to you. Do not obtain or use another member's private number without authorization. Follow the reporting structure when direct contact is not provided.
      </p>

      <h3 id="faq-76" className="docs__section-title faq__question">76. Is Craftly Robot the same as ChatGPT?</h3>
      <p className="docs__text">
        No. Craftly Robot is a real AI system with conversational capabilities, but it is being developed toward a broader agentic model that can discover relevant people, services, and agents and coordinate real-world tasks through agent-to-agent communication.
      </p>

      <h3 id="faq-77" className="docs__section-title faq__question">77. Is Craftly Robot fully autonomous?</h3>
      <p className="docs__text">
        No. Craftly Robot is currently under active research and development. Its agentic capabilities are being built progressively, and consequential real-world actions are intended to remain subject to appropriate human review and confirmation.
      </p>

      <h3 id="faq-78" className="docs__section-title faq__question">78. Can my Robot communicate with another person's Robot?</h3>
      <p className="docs__text">
        This is one of the core directions of Craftly Robot. Agent-to-agent communication and negotiation are being actively developed so that agents can discover, communicate, align requirements, and coordinate possible solutions.
      </p>

      <h3 id="faq-79" className="docs__section-title faq__question">79. Can I create my own agent?</h3>
      <p className="docs__text">
        Craftly Robot is being developed toward a broader ecosystem where specialized agents and capabilities can participate in the network. The exact tools and public development workflow depend on the current Robot release.
      </p>

      <h3 id="faq-80" className="docs__section-title faq__question">80. Does Agent-to-Agent Negotiation mean the agents can make deals without me?</h3>
      <p className="docs__text">
        Not automatically. Agents can help discover participants, exchange information, and negotiate possible conditions, but consequential commitments should remain subject to appropriate human confirmation.
      </p>

      <h3 id="faq-81" className="docs__section-title faq__question">81. What happens if two agents cannot agree?</h3>
      <p className="docs__text">
        The agents can report that the requirements could not be aligned and return the available information to the user. The user can then modify the requirements, choose another option, or stop the process.
      </p>

      <h3 id="faq-82" className="docs__section-title faq__question">82. What if Robot does not understand my request?</h3>
      <p className="docs__text">
        Robot may ask follow-up questions to clarify your goal, requirements, or constraints. The clearer your request, the more effectively the system can determine what should happen next.
      </p>

      <h3 id="faq-83" className="docs__section-title faq__question">83. Can Robot access everything on my phone?</h3>
      <p className="docs__text">
        Access should depend on the capabilities and permissions available to the Robot application. Robot should not be assumed to have unrestricted access to every device resource.
      </p>

      <h3 id="faq-84" className="docs__section-title faq__question">84. Does Robot automatically share all my information with other agents?</h3>
      <p className="docs__text">
        No. Agent communication should operate within defined identity, permission, and privacy boundaries. Only information relevant and authorized for the task should be shared where appropriate.
      </p>

      <h3 id="faq-85" className="docs__section-title faq__question">85. What happens if an agent gives incorrect information?</h3>
      <p className="docs__text">
        The Robot should treat information received from another agent as input to be evaluated rather than automatically assuming it is correct. Important decisions should remain reviewable, especially when they may have real-world consequences.
      </p>

      <h3 id="faq-86" className="docs__section-title faq__question">86. Where can I learn about Craftly product updates?</h3>
      <p className="docs__text">
        Check the Craftly Release Notes for new features, improvements, fixes, and product changes across Craftly Workspace and Craftly Robot.
      </p>

      <h3 id="faq-87" className="docs__section-title faq__question">87. Where can I find the latest documentation?</h3>
      <p className="docs__text">
        Use the official Craftly documentation from the main website. Product-specific documentation is organized separately for Craftly Workspace and Craftly Robot.
      </p>

      <h3 id="faq-88" className="docs__section-title faq__question">88. What if I cannot find an answer in the documentation?</h3>
      <p className="docs__text">
        Check the relevant product documentation first. If your question is still unresolved, use the appropriate Support Request category or contact the responsible person through your reporting structure.
      </p>


      <div className="faq__contact-box">
        <h3 className="docs__section-title faq__contact-title">Can't find your answer?</h3>
        <p className="docs__text">
          If your question or problem isn't covered here, use the appropriate Support Request in Craftly Workspace and let the responsible team know how they can help.
        </p>
        <p className="docs__text faq__bold-no-margin">
          When in doubt: read the documentation first, check your project instructions, communicate with your Unit Leader, and use Support Requests when you need structured assistance.
        </p>
      </div>

    </DocsLayout>
  );
}
