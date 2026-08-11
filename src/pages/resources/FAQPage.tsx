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
        { id: "faq-22", label: "22. How do I submit my completed project?" }
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

      <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #eaeaeb' }}>
        <h3 className="docs__section-title" style={{ fontSize: '18px', marginTop: 0 }}>Can't find your answer?</h3>
        <p className="docs__text" style={{ marginBottom: 0 }}>
          If your question or problem isn't covered here, use the appropriate Support Request in Craftly Workspace and let the responsible team know how they can help.
        </p>
      </div>

    </DocsLayout>
  );
}
