import DocsLayout from './DocsLayout';

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
        { id: "faq-42", label: "42. Where should I ask if I have a question that isn't in the FAQ?" }
      ]}
    >
      <div className="docs__breadcrumb">
        Craftly Documentation &gt; <strong>FAQ</strong>
      </div>
      
      <h1 className="docs__title" id="faq">Frequently Asked Questions</h1>

      <h3 id="faq-1" className="docs__section-title" style={{ fontSize: '18px', marginTop: '32px' }}>1. What is Craftly Workspace?</h3>
      <p className="docs__text">
        Craftly Workspace is the central system Craftly uses to coordinate people, work, communication, resources, and day-to-day operations.
      </p>

      <h3 id="faq-2" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>2. How do I join Craftly?</h3>
      <p className="docs__text">
        Start the onboarding process through the official Craftly joining system and complete the required questions and steps. After onboarding is completed, you will receive your Private Key, Workspace and Craftly Robot acess.
      </p>

      <h3 id="faq-3" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>3. What is the Private Key?</h3>
      <p className="docs__text">
        Your Private Key is a sensitive part of your Craftly identity and is required to log in to Craftly Workspace. Keep it secure and never share it with anyone.
      </p>

      <h3 id="faq-4" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>4. What happens if I lose my Private Key?</h3>
      <p className="docs__text">
        If you are still logged in to Workspace, you can request a new key from your Profile. If you are logged out, recovery may require the account recovery or verification process.
      </p>

      <h3 id="faq-5" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>5. Can I share my Private Key with someone else?</h3>
      <p className="docs__text">
        No. Your Private Key should remain private. Never send it to another member, post it publicly, or store it somewhere insecure.
      </p>

      <h3 id="faq-6" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>6. What happens after I complete onboarding?</h3>
      <p className="docs__text">
        After completing onboarding, you wait for your organizational position to be assigned. Once your position is active, you can begin your responsibilities within Craftly.
      </p>

      <h3 id="faq-7" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>7. What is the Command Chain?</h3>
      <p className="docs__text">
        The Command Chain is Craftly's hierarchical system for passing official commands, instructions, and tasks through the organization.
      </p>
      <p className="docs__text" style={{ fontWeight: 500 }}>
        Chairman &rarr; CEO &rarr; C-Suite &rarr; Senior &rarr; Junior &rarr; Executive
      </p>

      <h3 id="faq-8" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>8. How are official tasks assigned?</h3>
      <p className="docs__text">
        Official tasks can be distributed through the Notice Board or through the Command Chain, depending on the nature of the work.
      </p>

      <h3 id="faq-9" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>9. What is the Notice Board?</h3>
      <p className="docs__text">
        The Notice Board is the official place for organizational announcements, important messages, updates, instructions, and other information that needs to be communicated to members.
      </p>

      <h3 id="faq-10" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>10. How do I submit a completed task?</h3>
      <p className="docs__text">
        Use the Task Submission option associated with the task. You can submit up to 5 files, including images, PDF, text, JSON, or CSV.
      </p>

      <h3 id="faq-11" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>11. What if I cannot complete my task?</h3>
      <p className="docs__text">
        If you are unable to complete an assigned task, contact your Unit Leader and explain the problem or blocker instead of leaving the task unresolved.
      </p>

      <h3 id="faq-12" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>12. What are Projects in Workspace?</h3>
      <p className="docs__text">
        Projects are practical work assignments, primarily used within Operations, that help members demonstrate their ability to understand requirements, solve problems, use technical tools, and deliver real results.
      </p>

      <h3 id="faq-13" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>13. Where can I find project instructions?</h3>
      <p className="docs__text">
        Go to Work &gt; Department &gt; Projects and open the relevant project. Download the project package and read the included AGENT.md file before starting.
      </p>

      <h3 id="faq-14" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>14. What is AGENT.md?</h3>
      <p className="docs__text">
        AGENT.md contains the project's specific instructions, requirements, rules, technical expectations, and other information you need to understand before working on the project.
      </p>

      <h3 id="faq-15" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>15. What is a Support Request?</h3>
      <p className="docs__text">
        A Support Request allows members to ask for help or report an issue through a structured system instead of relying only on informal communication.
      </p>

      <h3 id="faq-16" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>16. What types of Support Requests can I create?</h3>
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

      <h3 id="faq-17" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>17. When should I contact my Unit Commander through Support?</h3>
      <p className="docs__text">
        If your Unit Commander is inactive, does not provide clear instructions, or does not properly explain what to do, how to do it, where to do it, or why the work is required, you can report the issue through the appropriate Support Request.
      </p>

      <h3 id="faq-18" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>18. What happens if I have a technical problem?</h3>
      <p className="docs__text">
        Create a Technical Issue Support Request and provide enough information about the problem so the responsible team can understand and investigate it.
      </p>

      <h3 id="faq-19" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>19. Can I suggest improvements to Craftly?</h3>
      <p className="docs__text">
        Yes. Use the Suggestions Support Request category to share ideas, improvements, or feedback that could make Craftly better.
      </p>

      <h3 id="faq-20" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>20. What should I do after onboarding?</h3>
      <p className="docs__text">
        Stay ready for your position to be assigned. Once active, understand your responsibilities, stay involved, complete your work sincerely, communicate clearly, and continue improving.
      </p>

      <h3 id="faq-21" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>21. I was assigned a project, but I don't understand how to work on it. What should I do?</h3>
      <p className="docs__text">
        First, download the project package and read the AGENT.md file carefully. It contains the project's objectives, instructions, requirements, and technical guidelines.
      </p>
      <p className="docs__text">
        If you still don't understand the task after reading the instructions, do not guess or make random changes. Contact your Unit Leader or use a relevant Support Request to ask for clarification.
      </p>

      <h3 id="faq-22" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>22. How do I submit my completed project?</h3>
      <p className="docs__text">
        After completing and testing the project, follow the project's provided Git workflow to push your code to the designated Craftly repository/server.
      </p>
      <p className="docs__text">
        Make sure you have followed the AGENT.md instructions and that your final work is properly committed and pushed.
      </p>
      <p className="docs__text">
        If the project also requires a formal Task Submission, submit the completed work there as instructed.
      </p>

      <h3 id="faq-23" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>23. How do I know what my role is?</h3>
      <p className="docs__text">
        Your organizational position and responsibilities will be available through Craftly Workspace once your position has been assigned. Make sure you understand your role before taking responsibility for work.
      </p>

      <h3 id="faq-24" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>24. Who should I contact if I don't understand my responsibility?</h3>
      <p className="docs__text">
        Start with your Unit Leader. If your Unit Leader is unavailable or is not providing enough guidance, you can submit a Unit Commander Support Request.
      </p>

      <h3 id="faq-25" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>25. Can I start working before my position is assigned?</h3>
      <p className="docs__text">
        No. Complete your onboarding first and wait for your organizational position to be assigned. Once your position becomes active, follow the responsibilities associated with it.
      </p>

      <h3 id="faq-26" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>26. What should I do if I am blocked while working on a task?</h3>
      <p className="docs__text">
        First, try to understand the issue and check the available project instructions and resources. If you are still blocked, contact your Unit Leader and explain exactly what is preventing you from continuing.
      </p>

      <h3 id="faq-27" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>27. What if I cannot meet a task deadline?</h3>
      <p className="docs__text">
        Do not silently leave the task incomplete. Inform your Unit Leader as early as possible, explain the reason, and communicate what support or additional time you may need.
      </p>

      <h3 id="faq-28" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>28. Can I modify the project structure or files however I want?</h3>
      <p className="docs__text">
        Not unless the project instructions allow it. Always read the project's AGENT.md and follow its requirements before making significant changes.
      </p>

      <h3 id="faq-29" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>29. What should I do before starting a project?</h3>
      <p className="docs__text">
        Follow this basic workflow:
      </p>
      <p className="docs__text" style={{ fontWeight: 500 }}>
        Download &rarr; Extract &rarr; Read AGENT.md &rarr; Understand Requirements &rarr; Set Up Environment &rarr; Work &rarr; Test &rarr; Commit &rarr; Push &rarr; Submit
      </p>

      <h3 id="faq-30" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>30. Where can I find the resources I need for my work?</h3>
      <p className="docs__text">
        Check the relevant Department Resources in Craftly Workspace first. Project specific resources may also be included inside the project's downloaded package.
      </p>

      <h3 id="faq-31" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>31. What happens after I submit my work?</h3>
      <p className="docs__text">
        Your submission can be reviewed according to the project's requirements and organizational workflow. The result of your work may contribute to evaluating your ability to handle future responsibilities.
      </p>

      <h3 id="faq-32" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>32. Can I submit unfinished work?</h3>
      <p className="docs__text">
        Only when the responsible leader or project instructions explicitly allow it. If you cannot finish the work, communicate the blocker instead of submitting something incomplete as if it were finished.
      </p>

      <h3 id="faq-33" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>33. What if I submit the wrong file?</h3>
      <p className="docs__text">
        If the submission can still be corrected, follow the project's submission instructions or contact your Unit Leader. Avoid repeatedly submitting incorrect versions without first understanding what needs to be fixed.
      </p>

      <h3 id="faq-34" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>34. What if my task instructions are unclear or contradictory?</h3>
      <p className="docs__text">
        Do not make assumptions about an official task. Ask your Unit Leader for clarification and explain exactly which part of the instructions is unclear or conflicting.
      </p>

      <h3 id="faq-35" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>35. What if I don't have the technical knowledge required for a project?</h3>
      <p className="docs__text">
        Projects are also an opportunity to learn. Start by reviewing the provided instructions, resources, and project documentation. If you remain blocked, ask your Unit Leader for guidance or request appropriate support.
      </p>

      <h3 id="faq-36" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>36. How should I communicate with my team?</h3>
      <p className="docs__text">
        Keep communication clear, respectful, relevant, and timely. When discussing work, provide enough context so the person receiving your message understands the situation without unnecessary back-and-forth.
      </p>

      <h3 id="faq-37" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>37. What if I need to report something sensitive?</h3>
      <p className="docs__text">
        Use the appropriate Support Request category, such as Legal or Safety or Ethics Report, depending on the situation. Avoid sharing sensitive information in public organizational channels.
      </p>

      <h3 id="faq-38" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>38. What if I am going to be unavailable?</h3>
      <p className="docs__text">
        If you know that you will be unavailable and it may affect your responsibilities, communicate with the appropriate leader beforehand whenever possible.
      </p>

      <h3 id="faq-39" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>39. How can I improve my position within Craftly?</h3>
      <p className="docs__text">
        Focus on consistent execution, technical growth, reliability, communication, and understanding your responsibilities. Practical project performance and your contribution to the organization can help demonstrate that you are ready for greater responsibility.
      </p>

      <h3 id="faq-40" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>40. What if I make a mistake?</h3>
      <p className="docs__text">
        Be transparent about it. Inform the appropriate person, explain what happened, and work toward correcting it. Hiding a mistake can create a larger problem; communicating it early gives the team a chance to resolve it.
      </p>

      <h3 id="faq-41" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>41. Is Craftly Workspace the same as Craftly Robot?</h3>
      <p className="docs__text">
        No. Craftly Workspace is the current operational system for coordinating people, work, communication, and organizational processes. Craftly Robot is Craftly's active agentic-AI research and development direction.
      </p>

      <h3 id="faq-42" className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>42. Where should I ask if I have a question that isn't in the FAQ?</h3>
      <p className="docs__text">
        If you cannot find the answer in the documentation, use the appropriate Support Request or contact the responsible person through the organization's communication structure.
      </p>

      <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #eaeaeb' }}>
        <h3 className="docs__section-title" style={{ fontSize: '18px', marginTop: 0 }}>Can't find your answer?</h3>
        <p className="docs__text">
          If your question or problem isn't covered here, use the appropriate Support Request in Craftly Workspace and let the responsible team know how they can help.
        </p>
        <p className="docs__text" style={{ marginBottom: 0, fontWeight: 500 }}>
          When in doubt: read the documentation first, check your project instructions, communicate with your Unit Leader, and use Support Requests when you need structured assistance.
        </p>
      </div>

    </DocsLayout>
  );
}
