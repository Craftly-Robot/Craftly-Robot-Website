import DocsLayout from '../../DocsLayout';

export default function MembersPage() {
  return (
    <DocsLayout 
      title="Members â€” Craftly Workspace"
      description="Members in Craftly Workspace"
      tocItems={[
        { id: 'members', label: 'Members' },
        { id: 'department-member-ranking', label: 'Department Member Ranking' },
        { id: 'what-is-performance-signal', label: 'What Is Performance Signal?' },
        { id: 'why-did-my-ranking-go-down', label: 'Why Did My Ranking Go Down?' },
        { id: 'how-can-i-improve-my-ranking', label: 'How Can I Improve My Ranking?' },
        { id: 'departments-are-different', label: 'Departments Are Different' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; People & Roles &gt; <strong>Members</strong>
      </div>

      <h1 className="docs__title" id="members">Members</h1>
      <p className="docs__text">The Members section in Craftly Workspace gives you a live view of the people working across your department.</p>
      <p className="docs__text">Craftly has members contributing across different departments and functional areas. Everyone does not have the same responsibilities, workload, or opportunities, so the ranking is intended to reflect individual contribution and engagement within the member's department, rather than simply showing who joined first or who holds the highest position.</p>

      <div className="docs__image-container" style={{ marginTop: '32px', marginBottom: '48px' }}>
        <img src="/assets/Members/1.png" alt="Members" className="docs__image" />
      </div>

      <h2 className="docs__subtitle" id="department-member-ranking">Department Member Ranking</h2>
      <p className="docs__text">The Members section includes a live department ranking based on a combination of signals that reflect a member's contribution and participation.</p>
      <p className="docs__text">The ranking can change over time.</p>
      <p className="docs__text">Your position may move up or down as your activity, completed work, participation, attendance, and other contribution signals change.</p>
      <p className="docs__text">This means being high on the ranking once does not guarantee that you will remain there permanently.</p>
      <p className="docs__text">The ranking reflects your current contribution, not your permanent status.</p>

      <h2 className="docs__subtitle" id="what-is-performance-signal">What Is Performance Signal?</h2>
      <p className="docs__text">A Performance Signal is a combined indication of how actively and consistently a member is contributing to Craftly.</p>
      <p className="docs__text">It is influenced by multiple types of meaningful participation rather than a single activity.</p>
      <p className="docs__text">Examples include:</p>

      <h3 className="docs__heading-3" id="attendance">Attendance</h3>
      <p className="docs__text">Consistent attendance and active participation in organizational activities contribute to your performance signal.</p>

      <h3 className="docs__heading-3" id="verified-work">Verified Work</h3>
      <p className="docs__text">Completing assigned work is important, but verified and accepted work provides a stronger indication that the work was actually completed to the required standard.</p>

      <h3 className="docs__heading-3" id="hierarchy-chat-participation">Hierarchy Chat Participation</h3>
      <p className="docs__text">Communication through the organizational hierarchy also contributes to your overall participation.</p>
      <p className="docs__text">This includes meaningful communication with:</p>
      <ul className="docs__list">
        <li>The people you report to</li>
        <li>Members who report to you</li>
        <li>Relevant people within your reporting structure</li>
      </ul>
      <p className="docs__text">The goal is not to send unnecessary messages, but to maintain effective organizational communication.</p>

      <h3 className="docs__heading-3" id="agent-to-agent-negotiation">Agent-to-Agent Negotiation</h3>
      <p className="docs__text">Participation in Craftly Robot's agent-to-agent negotiation capabilities can also contribute to your performance signal when the feature is available and relevant to your work.</p>

      <h3 className="docs__heading-3" id="department-projects">Department Projects</h3>
      <p className="docs__text">For members of Operations, practical project participation and successful project work can contribute significantly to their performance signal.</p>
      <p className="docs__text">Other departments may have their own relevant forms of contribution.</p>

      <h3 className="docs__heading-3" id="department-work">Department Work</h3>
      <p className="docs__text">Consistently participating in the actual work of your department is an important part of your overall contribution.</p>

      <h3 className="docs__heading-3" id="invitations">Invitations</h3>
      <p className="docs__text">If you use your official Craftly invitation link and people join through your invitation, this can contribute to your performance signal.</p>
      <p className="docs__text">The purpose is to recognize members who actively help grow the organization.</p>

      <h3 className="docs__heading-3" id="decentralized-contribution">Decentralized Contribution</h3>
      <p className="docs__text">Contributing computing resources or participating in Craftly's decentralized infrastructure and training systems, where available, can also contribute to your performance signal.</p>

      <h3 className="docs__heading-3" id="model-training">Model Training</h3>
      <p className="docs__text">Participation in approved model training and AI research activities can provide additional contribution signals.</p>

      <h3 className="docs__heading-3" id="bug-reports">Bug Reports</h3>
      <p className="docs__text">Finding and properly reporting genuine bugs helps improve Craftly's systems and can contribute to your performance signal.</p>

      <h3 className="docs__heading-3" id="feature-requests">Feature Requests</h3>
      <p className="docs__text">Useful and well described feature requests can also contribute by helping Craftly identify meaningful improvements.</p>

      <h2 className="docs__subtitle" id="why-did-my-ranking-go-down">Why Did My Ranking Go Down?</h2>
      <p className="docs__text">A lower ranking does not necessarily mean that you performed badly.</p>
      <p className="docs__text">Because the ranking is live, other members may become more active, complete more verified work, participate in more activities, or contribute in additional ways.</p>
      <p className="docs__text">For example:</p>
      <p className="docs__text"><strong>Your activity stays the same &rarr; Other members increase their contribution &rarr; Their performance signals increase &rarr; Your relative ranking moves down</strong></p>
      <p className="docs__text">Your position can also change if your own activity or contribution decreases over time.</p>
      <p className="docs__text">This is why the ranking should be viewed as a current performance signal, not a permanent score or judgment of your ability.</p>

      <h2 className="docs__subtitle" id="how-can-i-improve-my-ranking">How Can I Improve My Ranking?</h2>
      <p className="docs__text">There is no single action that guarantees a higher ranking.</p>
      <p className="docs__text">The best approach is to consistently contribute meaningful work across the areas relevant to your role.</p>
      <p className="docs__text">Focus on:</p>
      <ul className="docs__list">
        <li>Maintaining good attendance</li>
        <li>Completing assigned work</li>
        <li>Producing work that gets verified and accepted</li>
        <li>Participating meaningfully in your reporting hierarchy</li>
        <li>Contributing to your department</li>
        <li>Completing relevant projects</li>
        <li>Participating in available AI/agent activities</li>
        <li>Helping improve Craftly through bug reports and feature requests</li>
        <li>Contributing to decentralized infrastructure or model training when available</li>
        <li>Helping grow the organization through legitimate invitations</li>
      </ul>
      <p className="docs__text">The goal is not to perform random activities just to increase a number.</p>
      <p className="docs__text">The goal is to become a reliable, active, and useful contributor to your department.</p>
      <p className="docs__text">Contribute consistently. Do meaningful work. Communicate well. Keep learning. Your performance signal will reflect your contribution over time.</p>

      <h2 className="docs__subtitle" id="departments-are-different">Important: Departments Are Different</h2>
      <p className="docs__text">Not every member has access to the same activities.</p>
      <p className="docs__text">For example, an Operations member may have opportunities to work on Projects that are not available to someone in another department. Similarly, some technical or research activities may only be available to members with relevant responsibilities.</p>
      <p className="docs__text">Therefore, the ranking should be understood within the context of each member's department and available responsibilities, rather than assuming that every member must perform exactly the same activities.</p>
      <p className="docs__text">The system is designed to recognize meaningful contribution appropriate to the member's role and department.</p>
    </DocsLayout>
  );
}
