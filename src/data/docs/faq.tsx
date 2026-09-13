import type { ReactNode } from "react";

export interface FaqEntry {
  id: string;
  question: string;
  answer: ReactNode;
  /** Plain-text version of the answer, used for structured data. */
  answerText: string;
}

/** Content extracted from FAQPage. Rendered by FAQPage.tsx. */
export const faqEntries: FaqEntry[] = [
  {
    id: "faq-1",
    question: "1. What is Craftly Workspace?",
    answer: (
      <>
        <p className="docs__text">
          Craftly Workspace is the central system Craftly uses to coordinate
          people, work, communication, resources, and day-to-day operations.
        </p>
      </>
    ),
    answerText:
      "Craftly Workspace is the central system Craftly uses to coordinate people, work, communication, resources, and day-to-day operations.",
  },
  {
    id: "faq-2",
    question: "2. How do I join Craftly?",
    answer: (
      <>
        <p className="docs__text">
          Start the onboarding process through the official Craftly joining
          system and complete the required questions and steps. After onboarding
          is completed, you will receive your Private Key, Workspace and Craftly
          Robot acess.
        </p>
      </>
    ),
    answerText:
      "Start the onboarding process through the official Craftly joining system and complete the required questions and steps. After onboarding is completed, you will receive your Private Key, Workspace and Craftly Robot acess.",
  },
  {
    id: "faq-3",
    question: "3. What is the Private Key?",
    answer: (
      <>
        <p className="docs__text">
          Your Private Key is a sensitive part of your Craftly identity and is
          required to log in to Craftly Workspace. Keep it secure and never
          share it with anyone.
        </p>
      </>
    ),
    answerText:
      "Your Private Key is a sensitive part of your Craftly identity and is required to log in to Craftly Workspace. Keep it secure and never share it with anyone.",
  },
  {
    id: "faq-4",
    question: "4. What happens if I lose my Private Key?",
    answer: (
      <>
        <p className="docs__text">
          If you are still logged in to Workspace, you can request a new key
          from your Profile. If you are logged out, recovery may require the
          account recovery or verification process.
        </p>
      </>
    ),
    answerText:
      "If you are still logged in to Workspace, you can request a new key from your Profile. If you are logged out, recovery may require the account recovery or verification process.",
  },
  {
    id: "faq-5",
    question: "5. Can I share my Private Key with someone else?",
    answer: (
      <>
        <p className="docs__text">
          No. Your Private Key should remain private. Never send it to another
          member, post it publicly, or store it somewhere insecure.
        </p>
      </>
    ),
    answerText:
      "No. Your Private Key should remain private. Never send it to another member, post it publicly, or store it somewhere insecure.",
  },
  {
    id: "faq-6",
    question: "6. What happens after I complete onboarding?",
    answer: (
      <>
        <p className="docs__text">
          After completing onboarding, you wait for your organizational position
          to be assigned. Once your position is active, you can begin your
          responsibilities within Craftly.
        </p>
      </>
    ),
    answerText:
      "After completing onboarding, you wait for your organizational position to be assigned. Once your position is active, you can begin your responsibilities within Craftly.",
  },
  {
    id: "faq-7",
    question: "7. What is the Command Chain?",
    answer: (
      <>
        <p className="docs__text">
          The Command Chain is Craftly's hierarchical system for passing
          official commands, instructions, and tasks through the organization.
        </p>
        <p className="docs__text" style={{ fontWeight: 500 }}>
          Chairman &rarr; CEO &rarr; C-Suite &rarr; Senior &rarr; Junior &rarr;
          Executive
        </p>
      </>
    ),
    answerText:
      "The Command Chain is Craftly's hierarchical system for passing official commands, instructions, and tasks through the organization. Chairman → CEO → C-Suite → Senior → Junior → Executive",
  },
  {
    id: "faq-8",
    question: "8. How are official tasks assigned?",
    answer: (
      <>
        <p className="docs__text">
          Official tasks can be distributed through the Notice Board or through
          the Command Chain, depending on the nature of the work.
        </p>
      </>
    ),
    answerText:
      "Official tasks can be distributed through the Notice Board or through the Command Chain, depending on the nature of the work.",
  },
  {
    id: "faq-9",
    question: "9. What is the Notice Board?",
    answer: (
      <>
        <p className="docs__text">
          The Notice Board is the official place for organizational
          announcements, important messages, updates, instructions, and other
          information that needs to be communicated to members.
        </p>
      </>
    ),
    answerText:
      "The Notice Board is the official place for organizational announcements, important messages, updates, instructions, and other information that needs to be communicated to members.",
  },
  {
    id: "faq-10",
    question: "10. How do I submit a completed task?",
    answer: (
      <>
        <p className="docs__text">
          Use the Task Submission option associated with the task. You can
          submit up to 5 files, including images, PDF, text, JSON, or CSV.
        </p>
      </>
    ),
    answerText:
      "Use the Task Submission option associated with the task. You can submit up to 5 files, including images, PDF, text, JSON, or CSV.",
  },
  {
    id: "faq-11",
    question: "11. What if I cannot complete my task?",
    answer: (
      <>
        <p className="docs__text">
          If you are unable to complete an assigned task, contact your Unit
          Leader and explain the problem or blocker instead of leaving the task
          unresolved.
        </p>
      </>
    ),
    answerText:
      "If you are unable to complete an assigned task, contact your Unit Leader and explain the problem or blocker instead of leaving the task unresolved.",
  },
  {
    id: "faq-12",
    question: "12. What are Projects in Workspace?",
    answer: (
      <>
        <p className="docs__text">
          Projects are practical work assignments, primarily used within
          Operations, that help members demonstrate their ability to understand
          requirements, solve problems, use technical tools, and deliver real
          results.
        </p>
      </>
    ),
    answerText:
      "Projects are practical work assignments, primarily used within Operations, that help members demonstrate their ability to understand requirements, solve problems, use technical tools, and deliver real results.",
  },
  {
    id: "faq-13",
    question: "13. Where can I find project instructions?",
    answer: (
      <>
        <p className="docs__text">
          Go to Work &gt; Department &gt; Projects and open the relevant
          project. Download the project package and read the included AGENT.md
          file before starting.
        </p>
      </>
    ),
    answerText:
      "Go to Work > Department > Projects and open the relevant project. Download the project package and read the included AGENT.md file before starting.",
  },
  {
    id: "faq-14",
    question: "14. What is AGENT.md?",
    answer: (
      <>
        <p className="docs__text">
          AGENT.md contains the project's specific instructions, requirements,
          rules, technical expectations, and other information you need to
          understand before working on the project.
        </p>
      </>
    ),
    answerText:
      "AGENT.md contains the project's specific instructions, requirements, rules, technical expectations, and other information you need to understand before working on the project.",
  },
  {
    id: "faq-15",
    question: "15. What is a Support Request?",
    answer: (
      <>
        <p className="docs__text">
          A Support Request allows members to ask for help or report an issue
          through a structured system instead of relying only on informal
          communication.
        </p>
      </>
    ),
    answerText:
      "A Support Request allows members to ask for help or report an issue through a structured system instead of relying only on informal communication.",
  },
  {
    id: "faq-16",
    question: "16. What types of Support Requests can I create?",
    answer: (
      <>
        <p className="docs__text">You can submit requests for:</p>
        <ul className="docs__list">
          <li>Unit Commander</li>
          <li>Technical Issue</li>
          <li>Legal or Safety</li>
          <li>Attendance Correction</li>
          <li>Ethics Report</li>
          <li>Suggestions</li>
          <li>Private Key Recovery</li>
        </ul>
      </>
    ),
    answerText:
      "You can submit requests for: Unit Commander Technical Issue Legal or Safety Attendance Correction Ethics Report Suggestions Private Key Recovery",
  },
  {
    id: "faq-17",
    question: "17. When should I contact my Unit Commander through Support?",
    answer: (
      <>
        <p className="docs__text">
          If your Unit Commander is inactive, does not provide clear
          instructions, or does not properly explain what to do, how to do it,
          where to do it, or why the work is required, you can report the issue
          through the appropriate Support Request.
        </p>
      </>
    ),
    answerText:
      "If your Unit Commander is inactive, does not provide clear instructions, or does not properly explain what to do, how to do it, where to do it, or why the work is required, you can report the issue through the appropriate Support Request.",
  },
  {
    id: "faq-18",
    question: "18. What happens if I have a technical problem?",
    answer: (
      <>
        <p className="docs__text">
          Create a Technical Issue Support Request and provide enough
          information about the problem so the responsible team can understand
          and investigate it.
        </p>
      </>
    ),
    answerText:
      "Create a Technical Issue Support Request and provide enough information about the problem so the responsible team can understand and investigate it.",
  },
  {
    id: "faq-19",
    question: "19. Can I suggest improvements to Craftly?",
    answer: (
      <>
        <p className="docs__text">
          Yes. Use the Suggestions Support Request category to share ideas,
          improvements, or feedback that could make Craftly better.
        </p>
      </>
    ),
    answerText:
      "Yes. Use the Suggestions Support Request category to share ideas, improvements, or feedback that could make Craftly better.",
  },
  {
    id: "faq-20",
    question: "20. What should I do after onboarding?",
    answer: (
      <>
        <p className="docs__text">
          Stay ready for your position to be assigned. Once active, understand
          your responsibilities, stay involved, complete your work sincerely,
          communicate clearly, and continue improving.
        </p>
      </>
    ),
    answerText:
      "Stay ready for your position to be assigned. Once active, understand your responsibilities, stay involved, complete your work sincerely, communicate clearly, and continue improving.",
  },
  {
    id: "faq-21",
    question:
      "21. I was assigned a project, but I don't understand how to work on it. What should I do?",
    answer: (
      <>
        <p className="docs__text">
          First, download the project package and read the AGENT.md file
          carefully. It contains the project's objectives, instructions,
          requirements, and technical guidelines.
        </p>
        <p className="docs__text">
          If you still don't understand the task after reading the instructions,
          do not guess or make random changes. Contact your Unit Leader or use a
          relevant Support Request to ask for clarification.
        </p>
      </>
    ),
    answerText:
      "First, download the project package and read the AGENT.md file carefully. It contains the project's objectives, instructions, requirements, and technical guidelines. If you still don't understand the task after reading the instructions, do not guess or make random changes. Contact your Unit Leader or use a relevant Support Request to ask for clarification.",
  },
  {
    id: "faq-22",
    question: "22. How do I submit my completed project?",
    answer: (
      <>
        <p className="docs__text">
          After completing and testing the project, follow the project's
          provided Git workflow to push your code to the designated Craftly
          repository/server.
        </p>
        <p className="docs__text">
          Make sure you have followed the AGENT.md instructions and that your
          final work is properly committed and pushed.
        </p>
        <p className="docs__text">
          If the project also requires a formal Task Submission, submit the
          completed work there as instructed.
        </p>
      </>
    ),
    answerText:
      "After completing and testing the project, follow the project's provided Git workflow to push your code to the designated Craftly repository/server. Make sure you have followed the AGENT.md instructions and that your final work is properly committed and pushed. If the project also requires a formal Task Submission, submit the completed work there as instructed.",
  },
  {
    id: "faq-23",
    question: "23. How do I know what my role is?",
    answer: (
      <>
        <p className="docs__text">
          Your organizational position and responsibilities will be available
          through Craftly Workspace once your position has been assigned. Make
          sure you understand your role before taking responsibility for work.
        </p>
      </>
    ),
    answerText:
      "Your organizational position and responsibilities will be available through Craftly Workspace once your position has been assigned. Make sure you understand your role before taking responsibility for work.",
  },
  {
    id: "faq-24",
    question:
      "24. Who should I contact if I don't understand my responsibility?",
    answer: (
      <>
        <p className="docs__text">
          Start with your Unit Leader. If your Unit Leader is unavailable or is
          not providing enough guidance, you can submit a Unit Commander Support
          Request.
        </p>
      </>
    ),
    answerText:
      "Start with your Unit Leader. If your Unit Leader is unavailable or is not providing enough guidance, you can submit a Unit Commander Support Request.",
  },
  {
    id: "faq-25",
    question: "25. Can I start working before my position is assigned?",
    answer: (
      <>
        <p className="docs__text">
          No. Complete your onboarding first and wait for your organizational
          position to be assigned. Once your position becomes active, follow the
          responsibilities associated with it.
        </p>
      </>
    ),
    answerText:
      "No. Complete your onboarding first and wait for your organizational position to be assigned. Once your position becomes active, follow the responsibilities associated with it.",
  },
  {
    id: "faq-26",
    question: "26. What should I do if I am blocked while working on a task?",
    answer: (
      <>
        <p className="docs__text">
          First, try to understand the issue and check the available project
          instructions and resources. If you are still blocked, contact your
          Unit Leader and explain exactly what is preventing you from
          continuing.
        </p>
      </>
    ),
    answerText:
      "First, try to understand the issue and check the available project instructions and resources. If you are still blocked, contact your Unit Leader and explain exactly what is preventing you from continuing.",
  },
  {
    id: "faq-27",
    question: "27. What if I cannot meet a task deadline?",
    answer: (
      <>
        <p className="docs__text">
          Do not silently leave the task incomplete. Inform your Unit Leader as
          early as possible, explain the reason, and communicate what support or
          additional time you may need.
        </p>
      </>
    ),
    answerText:
      "Do not silently leave the task incomplete. Inform your Unit Leader as early as possible, explain the reason, and communicate what support or additional time you may need.",
  },
  {
    id: "faq-28",
    question: "28. Can I modify the project structure or files however I want?",
    answer: (
      <>
        <p className="docs__text">
          Not unless the project instructions allow it. Always read the
          project's AGENT.md and follow its requirements before making
          significant changes.
        </p>
      </>
    ),
    answerText:
      "Not unless the project instructions allow it. Always read the project's AGENT.md and follow its requirements before making significant changes.",
  },
  {
    id: "faq-29",
    question: "29. What should I do before starting a project?",
    answer: (
      <>
        <p className="docs__text">Follow this basic workflow:</p>
        <p className="docs__text" style={{ fontWeight: 500 }}>
          Download &rarr; Extract &rarr; Read AGENT.md &rarr; Understand
          Requirements &rarr; Set Up Environment &rarr; Work &rarr; Test &rarr;
          Commit &rarr; Push &rarr; Submit
        </p>
      </>
    ),
    answerText:
      "Follow this basic workflow: Download → Extract → Read AGENT.md → Understand Requirements → Set Up Environment → Work → Test → Commit → Push → Submit",
  },
  {
    id: "faq-30",
    question: "30. Where can I find the resources I need for my work?",
    answer: (
      <>
        <p className="docs__text">
          Check the relevant Department Resources in Craftly Workspace first.
          Project specific resources may also be included inside the project's
          downloaded package.
        </p>
      </>
    ),
    answerText:
      "Check the relevant Department Resources in Craftly Workspace first. Project specific resources may also be included inside the project's downloaded package.",
  },
  {
    id: "faq-31",
    question: "31. What happens after I submit my work?",
    answer: (
      <>
        <p className="docs__text">
          Your submission can be reviewed according to the project's
          requirements and organizational workflow. The result of your work may
          contribute to evaluating your ability to handle future
          responsibilities.
        </p>
      </>
    ),
    answerText:
      "Your submission can be reviewed according to the project's requirements and organizational workflow. The result of your work may contribute to evaluating your ability to handle future responsibilities.",
  },
  {
    id: "faq-32",
    question: "32. Can I submit unfinished work?",
    answer: (
      <>
        <p className="docs__text">
          Only when the responsible leader or project instructions explicitly
          allow it. If you cannot finish the work, communicate the blocker
          instead of submitting something incomplete as if it were finished.
        </p>
      </>
    ),
    answerText:
      "Only when the responsible leader or project instructions explicitly allow it. If you cannot finish the work, communicate the blocker instead of submitting something incomplete as if it were finished.",
  },
  {
    id: "faq-33",
    question: "33. What if I submit the wrong file?",
    answer: (
      <>
        <p className="docs__text">
          If the submission can still be corrected, follow the project's
          submission instructions or contact your Unit Leader. Avoid repeatedly
          submitting incorrect versions without first understanding what needs
          to be fixed.
        </p>
      </>
    ),
    answerText:
      "If the submission can still be corrected, follow the project's submission instructions or contact your Unit Leader. Avoid repeatedly submitting incorrect versions without first understanding what needs to be fixed.",
  },
  {
    id: "faq-34",
    question: "34. What if my task instructions are unclear or contradictory?",
    answer: (
      <>
        <p className="docs__text">
          Do not make assumptions about an official task. Ask your Unit Leader
          for clarification and explain exactly which part of the instructions
          is unclear or conflicting.
        </p>
      </>
    ),
    answerText:
      "Do not make assumptions about an official task. Ask your Unit Leader for clarification and explain exactly which part of the instructions is unclear or conflicting.",
  },
  {
    id: "faq-35",
    question:
      "35. What if I don't have the technical knowledge required for a project?",
    answer: (
      <>
        <p className="docs__text">
          Projects are also an opportunity to learn. Start by reviewing the
          provided instructions, resources, and project documentation. If you
          remain blocked, ask your Unit Leader for guidance or request
          appropriate support.
        </p>
      </>
    ),
    answerText:
      "Projects are also an opportunity to learn. Start by reviewing the provided instructions, resources, and project documentation. If you remain blocked, ask your Unit Leader for guidance or request appropriate support.",
  },
  {
    id: "faq-36",
    question: "36. How should I communicate with my team?",
    answer: (
      <>
        <p className="docs__text">
          Keep communication clear, respectful, relevant, and timely. When
          discussing work, provide enough context so the person receiving your
          message understands the situation without unnecessary back-and-forth.
        </p>
      </>
    ),
    answerText:
      "Keep communication clear, respectful, relevant, and timely. When discussing work, provide enough context so the person receiving your message understands the situation without unnecessary back-and-forth.",
  },
  {
    id: "faq-37",
    question: "37. What if I need to report something sensitive?",
    answer: (
      <>
        <p className="docs__text">
          Use the appropriate Support Request category, such as Legal or Safety
          or Ethics Report, depending on the situation. Avoid sharing sensitive
          information in public organizational channels.
        </p>
      </>
    ),
    answerText:
      "Use the appropriate Support Request category, such as Legal or Safety or Ethics Report, depending on the situation. Avoid sharing sensitive information in public organizational channels.",
  },
  {
    id: "faq-38",
    question: "38. What if I am going to be unavailable?",
    answer: (
      <>
        <p className="docs__text">
          If you know that you will be unavailable and it may affect your
          responsibilities, communicate with the appropriate leader beforehand
          whenever possible.
        </p>
      </>
    ),
    answerText:
      "If you know that you will be unavailable and it may affect your responsibilities, communicate with the appropriate leader beforehand whenever possible.",
  },
  {
    id: "faq-39",
    question: "39. How can I improve my position within Craftly?",
    answer: (
      <>
        <p className="docs__text">
          Focus on consistent execution, technical growth, reliability,
          communication, and understanding your responsibilities. Practical
          project performance and your contribution to the organization can help
          demonstrate that you are ready for greater responsibility.
        </p>
      </>
    ),
    answerText:
      "Focus on consistent execution, technical growth, reliability, communication, and understanding your responsibilities. Practical project performance and your contribution to the organization can help demonstrate that you are ready for greater responsibility.",
  },
  {
    id: "faq-40",
    question: "40. What if I make a mistake?",
    answer: (
      <>
        <p className="docs__text">
          Be transparent about it. Inform the appropriate person, explain what
          happened, and work toward correcting it. Hiding a mistake can create a
          larger problem; communicating it early gives the team a chance to
          resolve it.
        </p>
      </>
    ),
    answerText:
      "Be transparent about it. Inform the appropriate person, explain what happened, and work toward correcting it. Hiding a mistake can create a larger problem; communicating it early gives the team a chance to resolve it.",
  },
  {
    id: "faq-41",
    question: "41. Is Craftly Workspace the same as Craftly Robot?",
    answer: (
      <>
        <p className="docs__text">
          No. Craftly Workspace is the current operational system for
          coordinating people, work, communication, and organizational
          processes. Craftly Robot is Craftly's active agentic-AI research and
          development direction.
        </p>
      </>
    ),
    answerText:
      "No. Craftly Workspace is the current operational system for coordinating people, work, communication, and organizational processes. Craftly Robot is Craftly's active agentic-AI research and development direction.",
  },
  {
    id: "faq-42",
    question:
      "42. Where should I ask if I have a question that isn't in the FAQ?",
    answer: (
      <>
        <p className="docs__text">
          If you cannot find the answer in the documentation, use the
          appropriate Support Request or contact the responsible person through
          the organization's communication structure.
        </p>
      </>
    ),
    answerText:
      "If you cannot find the answer in the documentation, use the appropriate Support Request or contact the responsible person through the organization's communication structure.",
  },
  {
    id: "faq-43",
    question: "43. Can I change my department after joining?",
    answer: (
      <>
        <p className="docs__text">
          Department placement can change when Craftly's needs or a member's
          skills, responsibilities, and performance change. Any change should
          follow the appropriate organizational process.
        </p>
      </>
    ),
    answerText:
      "Department placement can change when Craftly's needs or a member's skills, responsibilities, and performance change. Any change should follow the appropriate organizational process.",
  },
  {
    id: "faq-44",
    question: "44. Can I work with another department?",
    answer: (
      <>
        <p className="docs__text">
          Yes. Members may collaborate across departments when a project, task,
          or organizational requirement requires it. Your primary department
          still determines your main responsibilities and resources.
        </p>
      </>
    ),
    answerText:
      "Yes. Members may collaborate across departments when a project, task, or organizational requirement requires it. Your primary department still determines your main responsibilities and resources.",
  },
  {
    id: "faq-45",
    question: "45. Can my role or position change?",
    answer: (
      <>
        <p className="docs__text">
          Yes. Roles are not necessarily permanent. Your responsibilities may
          change based on demonstrated reliability, quality of work, technical
          ability, leadership, communication, and organizational needs.
        </p>
      </>
    ),
    answerText:
      "Yes. Roles are not necessarily permanent. Your responsibilities may change based on demonstrated reliability, quality of work, technical ability, leadership, communication, and organizational needs.",
  },
  {
    id: "faq-46",
    question: "46. Who decides my position?",
    answer: (
      <>
        <p className="docs__text">
          Your position is determined by Craftly's Board Members and top level
          leadership, including the C-Suite, based on the organization's current
          needs and your demonstrated contribution, reliability, skills, and
          performance.
        </p>
      </>
    ),
    answerText:
      "Your position is determined by Craftly's Board Members and top level leadership, including the C-Suite, based on the organization's current needs and your demonstrated contribution, reliability, skills, and performance.",
  },
  {
    id: "faq-47",
    question: "47. Can I request a different role?",
    answer: (
      <>
        <p className="docs__text">
          You can communicate your interests and goals to your manager or the
          appropriate leadership. Role changes depend on organizational needs
          and whether you are ready to take on the responsibilities of the
          requested role.
        </p>
      </>
    ),
    answerText:
      "You can communicate your interests and goals to your manager or the appropriate leadership. Role changes depend on organizational needs and whether you are ready to take on the responsibilities of the requested role.",
  },
  {
    id: "faq-48",
    question: "48. What happens if my task is reassigned?",
    answer: (
      <>
        <p className="docs__text">
          A task may be reassigned when priorities, responsibilities, or
          organizational requirements change. Follow the updated assignment and
          ask your manager if anything about the change is unclear.
        </p>
      </>
    ),
    answerText:
      "A task may be reassigned when priorities, responsibilities, or organizational requirements change. Follow the updated assignment and ask your manager if anything about the change is unclear.",
  },
  {
    id: "faq-49",
    question: "49. Can I ask for a deadline extension?",
    answer: (
      <>
        <p className="docs__text">
          If you have a genuine blocker or cannot reasonably complete a task on
          time, communicate with your Unit Leader as early as possible and
          explain the situation. Do not wait until after the deadline without
          communicating.
        </p>
      </>
    ),
    answerText:
      "If you have a genuine blocker or cannot reasonably complete a task on time, communicate with your Unit Leader as early as possible and explain the situation. Do not wait until after the deadline without communicating.",
  },
  {
    id: "faq-50",
    question: "50. What if my task submission is rejected?",
    answer: (
      <>
        <p className="docs__text">
          Review the feedback, understand what needs to be corrected, make the
          required changes, and resubmit the work according to the task
          instructions.
        </p>
      </>
    ),
    answerText:
      "Review the feedback, understand what needs to be corrected, make the required changes, and resubmit the work according to the task instructions.",
  },
  {
    id: "faq-51",
    question: "51. Can I edit my task submission after submitting it?",
    answer: (
      <>
        <p className="docs__text">
          This depends on the task and the Workspace workflow. If you need to
          change a submission, follow the available correction process or
          contact the responsible leader.
        </p>
      </>
    ),
    answerText:
      "This depends on the task and the Workspace workflow. If you need to change a submission, follow the available correction process or contact the responsible leader.",
  },
  {
    id: "faq-52",
    question: "52. Can I submit more than five files for a task?",
    answer: (
      <>
        <p className="docs__text">
          The Task Submission system currently supports up to 5 files per
          submission. Combine or organize your supporting material when
          necessary, while following the project's or task's submission
          requirements.
        </p>
      </>
    ),
    answerText:
      "The Task Submission system currently supports up to 5 files per submission. Combine or organize your supporting material when necessary, while following the project's or task's submission requirements.",
  },
  {
    id: "faq-53",
    question: "53. Who reviews my completed work?",
    answer: (
      <>
        <p className="docs__text">
          Work is generally reviewed through the appropriate reporting and
          management structure. The responsible reviewer can depend on the task,
          department, and member's position.
        </p>
      </>
    ),
    answerText:
      "Work is generally reviewed through the appropriate reporting and management structure. The responsible reviewer can depend on the task, department, and member's position.",
  },
  {
    id: "faq-54",
    question: "54. Can I use AI when working on a Craftly project?",
    answer: (
      <>
        <p className="docs__text">
          This depends on the project's instructions. Always read the project's
          AGENT.md file and follow its specific rules about AI tools, external
          services, and development practices.
        </p>
      </>
    ),
    answerText:
      "This depends on the project's instructions. Always read the project's AGENT.md file and follow its specific rules about AI tools, external services, and development practices.",
  },
  {
    id: "faq-55",
    question: "55. Can I use my own tools for a project?",
    answer: (
      <>
        <p className="docs__text">
          Only when the project instructions allow it. If a project provides a
          specific environment, MCP configuration, repository, or workflow,
          follow those requirements rather than replacing them without approval.
        </p>
      </>
    ),
    answerText:
      "Only when the project instructions allow it. If a project provides a specific environment, MCP configuration, repository, or workflow, follow those requirements rather than replacing them without approval.",
  },
  {
    id: "faq-56",
    question: "56. Are Craftly project files private?",
    answer: (
      <>
        <p className="docs__text">
          Project files should be treated as internal organizational resources
          unless explicitly marked otherwise. Do not publish, redistribute, or
          share internal project materials without appropriate permission.
        </p>
      </>
    ),
    answerText:
      "Project files should be treated as internal organizational resources unless explicitly marked otherwise. Do not publish, redistribute, or share internal project materials without appropriate permission.",
  },
  {
    id: "faq-57",
    question: "57. Do I need to push my code before submitting a project?",
    answer: (
      <>
        <p className="docs__text">
          When a project provides a Git workflow, you should follow the required
          process, including committing and pushing your completed work to the
          designated repository before making the formal submission.
        </p>
      </>
    ),
    answerText:
      "When a project provides a Git workflow, you should follow the required process, including committing and pushing your completed work to the designated repository before making the formal submission.",
  },
  {
    id: "faq-58",
    question: "58. What should I do if the project environment does not work?",
    answer: (
      <>
        <p className="docs__text">
          First, check the project's AGENT.md, setup instructions, dependencies,
          and provided resources. If the problem continues, contact your Unit
          Leader or submit a Technical Issue Support Request with the relevant
          error details.
        </p>
      </>
    ),
    answerText:
      "First, check the project's AGENT.md, setup instructions, dependencies, and provided resources. If the problem continues, contact your Unit Leader or submit a Technical Issue Support Request with the relevant error details.",
  },
  {
    id: "faq-59",
    question: "59. What if I discover a serious bug in Craftly Workspace?",
    answer: (
      <>
        <p className="docs__text">
          Use the appropriate reporting or Support Request channel and provide
          enough information for the issue to be investigated. Include steps to
          reproduce the problem when possible.
        </p>
      </>
    ),
    answerText:
      "Use the appropriate reporting or Support Request channel and provide enough information for the issue to be investigated. Include steps to reproduce the problem when possible.",
  },
  {
    id: "faq-60",
    question:
      "60. What should I do if I do not receive an important notification?",
    answer: (
      <>
        <p className="docs__text">
          First check your Workspace notifications and relevant communication
          channels. If the issue appears to be technical or prevents you from
          receiving required information, submit a Technical Issue Support
          Request.
        </p>
      </>
    ),
    answerText:
      "First check your Workspace notifications and relevant communication channels. If the issue appears to be technical or prevents you from receiving required information, submit a Technical Issue Support Request.",
  },
  {
    id: "faq-61",
    question: "61. Can I update my profile information?",
    answer: (
      <>
        <p className="docs__text">
          Profile information can be updated through the available Workspace
          profile settings. Some information may require additional verification
          or administrative approval.
        </p>
      </>
    ),
    answerText:
      "Profile information can be updated through the available Workspace profile settings. Some information may require additional verification or administrative approval.",
  },
  {
    id: "faq-62",
    question: "62. Who can see my personal information?",
    answer: (
      <>
        <p className="docs__text">
          Access to personal and organizational information should depend on the
          member's role, permissions, and legitimate organizational need.
          Sensitive information should not be exposed more broadly than
          necessary.
        </p>
      </>
    ),
    answerText:
      "Access to personal and organizational information should depend on the member's role, permissions, and legitimate organizational need. Sensitive information should not be exposed more broadly than necessary.",
  },
  {
    id: "faq-63",
    question: "63. How is attendance used?",
    answer: (
      <>
        <p className="docs__text">
          Attendance can contribute to organizational participation and
          performance signals. Consistent attendance helps demonstrate that a
          member is actively participating in their responsibilities.
        </p>
      </>
    ),
    answerText:
      "Attendance can contribute to organizational participation and performance signals. Consistent attendance helps demonstrate that a member is actively participating in their responsibilities.",
  },
  {
    id: "faq-64",
    question: "64. Can my performance signal decrease?",
    answer: (
      <>
        <p className="docs__text">
          Yes. Performance signals are dynamic and can change as your activity,
          verified work, attendance, participation, and other contribution
          signals change. Other members' increased contribution can also affect
          your relative department ranking.
        </p>
      </>
    ),
    answerText:
      "Yes. Performance signals are dynamic and can change as your activity, verified work, attendance, participation, and other contribution signals change. Other members' increased contribution can also affect your relative department ranking.",
  },
  {
    id: "faq-65",
    question: "65. Is a high department ranking permanent?",
    answer: (
      <>
        <p className="docs__text">
          No. Department rankings are live and can change over time. The ranking
          reflects current contribution rather than a permanent position or
          title.
        </p>
      </>
    ),
    answerText:
      "No. Department rankings are live and can change over time. The ranking reflects current contribution rather than a permanent position or title.",
  },
  {
    id: "faq-66",
    question: "66. Is completing onboarding enough to receive a salary?",
    answer: (
      <>
        <p className="docs__text">
          No. Completing onboarding only establishes your membership process.
          Compensation is intended for verified members who have an active role
          and are contributing to real Craftly work under the applicable
          compensation structure.
        </p>
      </>
    ),
    answerText:
      "No. Completing onboarding only establishes your membership process. Compensation is intended for verified members who have an active role and are contributing to real Craftly work under the applicable compensation structure.",
  },
  {
    id: "faq-67",
    question: "67. When will Craftly start paying salaries?",
    answer: (
      <>
        <p className="docs__text">
          Craftly is currently operating as a non-profit organization, so
          regular salary payments are not yet active across the organization. A
          structured compensation system is planned as Craftly secures funding
          and establishes the required infrastructure.
        </p>
      </>
    ),
    answerText:
      "Craftly is currently operating as a non-profit organization, so regular salary payments are not yet active across the organization. A structured compensation system is planned as Craftly secures funding and establishes the required infrastructure.",
  },
  {
    id: "faq-68",
    question: "68. How will I receive my salary in the future?",
    answer: (
      <>
        <p className="docs__text">
          Once the compensation system is available, eligible verified members
          will be able to manage payment information through their Craftly
          Workspace profile. Supported options may include bank accounts, bKash,
          and other supported payment gateways.
        </p>
      </>
    ),
    answerText:
      "Once the compensation system is available, eligible verified members will be able to manage payment information through their Craftly Workspace profile. Supported options may include bank accounts, bKash, and other supported payment gateways.",
  },
  {
    id: "faq-69",
    question: "69. Can I leave Craftly after joining?",
    answer: (
      <>
        <p className="docs__text">
          Members can communicate their intention to leave through the
          appropriate organizational process. Any responsibilities, active
          tasks, projects, or organizational access should be properly handed
          over before leaving.
        </p>
      </>
    ),
    answerText:
      "Members can communicate their intention to leave through the appropriate organizational process. Any responsibilities, active tasks, projects, or organizational access should be properly handed over before leaving.",
  },
  {
    id: "faq-70",
    question: "70. What happens if I become inactive?",
    answer: (
      <>
        <p className="docs__text">
          Extended inactivity can affect your responsibilities, communication,
          performance signals, or organizational position. If you expect to be
          unavailable, communicate with your manager as early as possible.
        </p>
      </>
    ),
    answerText:
      "Extended inactivity can affect your responsibilities, communication, performance signals, or organizational position. If you expect to be unavailable, communicate with your manager as early as possible.",
  },
  {
    id: "faq-71",
    question: "71. Can I appeal an organizational decision?",
    answer: (
      <>
        <p className="docs__text">
          If you believe a decision affecting your role, responsibilities, or
          access needs to be reviewed, raise the matter through the appropriate
          reporting or escalation path and provide clear reasons and evidence.
        </p>
      </>
    ),
    answerText:
      "If you believe a decision affecting your role, responsibilities, or access needs to be reviewed, raise the matter through the appropriate reporting or escalation path and provide clear reasons and evidence.",
  },
  {
    id: "faq-72",
    question: "72. What if I disagree with my manager?",
    answer: (
      <>
        <p className="docs__text">
          You should first communicate respectfully with your manager and try to
          understand the reasoning behind the decision. If the matter cannot be
          resolved, use the appropriate reporting or escalation process rather
          than bypassing the organizational structure.
        </p>
      </>
    ),
    answerText:
      "You should first communicate respectfully with your manager and try to understand the reasoning behind the decision. If the matter cannot be resolved, use the appropriate reporting or escalation process rather than bypassing the organizational structure.",
  },
  {
    id: "faq-73",
    question:
      "73. What if a manager gives me an unsafe or inappropriate instruction?",
    answer: (
      <>
        <p className="docs__text">
          Do not ignore the situation or proceed blindly. Ask for clarification
          when appropriate and use the relevant Legal or Safety or Ethics Report
          Support Request if the instruction involves a serious safety, legal,
          or ethical concern.
        </p>
      </>
    ),
    answerText:
      "Do not ignore the situation or proceed blindly. Ask for clarification when appropriate and use the relevant Legal or Safety or Ethics Report Support Request if the instruction involves a serious safety, legal, or ethical concern.",
  },
  {
    id: "faq-74",
    question: "74. Can I contact senior leadership directly?",
    answer: (
      <>
        <p className="docs__text">
          Direct communication with senior leadership is controlled to protect
          privacy and maintain clear organizational boundaries. If you need to
          reach someone above your access level, follow your reporting structure
          and ask your manager or Unit Leader to facilitate the communication.
        </p>
      </>
    ),
    answerText:
      "Direct communication with senior leadership is controlled to protect privacy and maintain clear organizational boundaries. If you need to reach someone above your access level, follow your reporting structure and ask your manager or Unit Leader to facilitate the communication.",
  },
  {
    id: "faq-75",
    question:
      "75. Can I contact someone through their private WhatsApp number?",
    answer: (
      <>
        <p className="docs__text">
          Only when that contact is officially available to you. Do not obtain
          or use another member's private number without authorization. Follow
          the reporting structure when direct contact is not provided.
        </p>
      </>
    ),
    answerText:
      "Only when that contact is officially available to you. Do not obtain or use another member's private number without authorization. Follow the reporting structure when direct contact is not provided.",
  },
  {
    id: "faq-76",
    question: "76. Is Craftly Robot the same as ChatGPT?",
    answer: (
      <>
        <p className="docs__text">
          No. Craftly Robot is a real AI system with conversational
          capabilities, but it is being developed toward a broader agentic model
          that can discover relevant people, services, and agents and coordinate
          real-world tasks through agent-to-agent communication.
        </p>
      </>
    ),
    answerText:
      "No. Craftly Robot is a real AI system with conversational capabilities, but it is being developed toward a broader agentic model that can discover relevant people, services, and agents and coordinate real-world tasks through agent-to-agent communication.",
  },
  {
    id: "faq-77",
    question: "77. Is Craftly Robot fully autonomous?",
    answer: (
      <>
        <p className="docs__text">
          No. Craftly Robot is currently under active research and development.
          Its agentic capabilities are being built progressively, and
          consequential real-world actions are intended to remain subject to
          appropriate human review and confirmation.
        </p>
      </>
    ),
    answerText:
      "No. Craftly Robot is currently under active research and development. Its agentic capabilities are being built progressively, and consequential real-world actions are intended to remain subject to appropriate human review and confirmation.",
  },
  {
    id: "faq-78",
    question: "78. Can my Robot communicate with another person's Robot?",
    answer: (
      <>
        <p className="docs__text">
          This is one of the core directions of Craftly Robot. Agent-to-agent
          communication and negotiation are being actively developed so that
          agents can discover, communicate, align requirements, and coordinate
          possible solutions.
        </p>
      </>
    ),
    answerText:
      "This is one of the core directions of Craftly Robot. Agent-to-agent communication and negotiation are being actively developed so that agents can discover, communicate, align requirements, and coordinate possible solutions.",
  },
  {
    id: "faq-79",
    question: "79. Can I create my own agent?",
    answer: (
      <>
        <p className="docs__text">
          Craftly Robot is being developed toward a broader ecosystem where
          specialized agents and capabilities can participate in the network.
          The exact tools and public development workflow depend on the current
          Robot release.
        </p>
      </>
    ),
    answerText:
      "Craftly Robot is being developed toward a broader ecosystem where specialized agents and capabilities can participate in the network. The exact tools and public development workflow depend on the current Robot release.",
  },
  {
    id: "faq-80",
    question:
      "80. Does Agent-to-Agent Negotiation mean the agents can make deals without me?",
    answer: (
      <>
        <p className="docs__text">
          Not automatically. Agents can help discover participants, exchange
          information, and negotiate possible conditions, but consequential
          commitments should remain subject to appropriate human confirmation.
        </p>
      </>
    ),
    answerText:
      "Not automatically. Agents can help discover participants, exchange information, and negotiate possible conditions, but consequential commitments should remain subject to appropriate human confirmation.",
  },
  {
    id: "faq-81",
    question: "81. What happens if two agents cannot agree?",
    answer: (
      <>
        <p className="docs__text">
          The agents can report that the requirements could not be aligned and
          return the available information to the user. The user can then modify
          the requirements, choose another option, or stop the process.
        </p>
      </>
    ),
    answerText:
      "The agents can report that the requirements could not be aligned and return the available information to the user. The user can then modify the requirements, choose another option, or stop the process.",
  },
  {
    id: "faq-82",
    question: "82. What if Robot does not understand my request?",
    answer: (
      <>
        <p className="docs__text">
          Robot may ask follow-up questions to clarify your goal, requirements,
          or constraints. The clearer your request, the more effectively the
          system can determine what should happen next.
        </p>
      </>
    ),
    answerText:
      "Robot may ask follow-up questions to clarify your goal, requirements, or constraints. The clearer your request, the more effectively the system can determine what should happen next.",
  },
  {
    id: "faq-83",
    question: "83. Can Robot access everything on my phone?",
    answer: (
      <>
        <p className="docs__text">
          Access should depend on the capabilities and permissions available to
          the Robot application. Robot should not be assumed to have
          unrestricted access to every device resource.
        </p>
      </>
    ),
    answerText:
      "Access should depend on the capabilities and permissions available to the Robot application. Robot should not be assumed to have unrestricted access to every device resource.",
  },
  {
    id: "faq-84",
    question:
      "84. Does Robot automatically share all my information with other agents?",
    answer: (
      <>
        <p className="docs__text">
          No. Agent communication should operate within defined identity,
          permission, and privacy boundaries. Only information relevant and
          authorized for the task should be shared where appropriate.
        </p>
      </>
    ),
    answerText:
      "No. Agent communication should operate within defined identity, permission, and privacy boundaries. Only information relevant and authorized for the task should be shared where appropriate.",
  },
  {
    id: "faq-85",
    question: "85. What happens if an agent gives incorrect information?",
    answer: (
      <>
        <p className="docs__text">
          The Robot should treat information received from another agent as
          input to be evaluated rather than automatically assuming it is
          correct. Important decisions should remain reviewable, especially when
          they may have real-world consequences.
        </p>
      </>
    ),
    answerText:
      "The Robot should treat information received from another agent as input to be evaluated rather than automatically assuming it is correct. Important decisions should remain reviewable, especially when they may have real-world consequences.",
  },
  {
    id: "faq-86",
    question: "86. Where can I learn about Craftly product updates?",
    answer: (
      <>
        <p className="docs__text">
          Check the Craftly Release Notes for new features, improvements, fixes,
          and product changes across Craftly Workspace and Craftly Robot.
        </p>
      </>
    ),
    answerText:
      "Check the Craftly Release Notes for new features, improvements, fixes, and product changes across Craftly Workspace and Craftly Robot.",
  },
  {
    id: "faq-87",
    question: "87. Where can I find the latest documentation?",
    answer: (
      <>
        <p className="docs__text">
          Use the official Craftly documentation from the main website.
          Product-specific documentation is organized separately for Craftly
          Workspace and Craftly Robot.
        </p>
      </>
    ),
    answerText:
      "Use the official Craftly documentation from the main website. Product-specific documentation is organized separately for Craftly Workspace and Craftly Robot.",
  },
  {
    id: "faq-88",
    question: "88. What if I cannot find an answer in the documentation?",
    answer: (
      <>
        <p className="docs__text">
          Check the relevant product documentation first. If your question is
          still unresolved, use the appropriate Support Request category or
          contact the responsible person through your reporting structure.
        </p>
      </>
    ),
    answerText:
      "Check the relevant product documentation first. If your question is still unresolved, use the appropriate Support Request category or contact the responsible person through your reporting structure.",
  },
];
