import DocPage from "./DocPage";

export default function SalaryCompensationPage() {
  return (
    <DocPage
      title="Salary & Compensation — Craftly Documentation"
      description="Information regarding salary and compensation at Craftly."
      crumbs={["Documentation", "Salary & Compensation"]}
      pageId="salary-compensation"
      pageTitle="Salary & Compensation"
      tocItems={[
        { id: "salary-compensation", label: "Salary & Compensation" },
        { id: "who-is-eligible", label: "Who Is Eligible?" },
        {
          id: "how-compensation-will-work",
          label: "How Compensation Will Work",
        },
        { id: "payment-through-workspace", label: "Payment Through Workspace" },
        {
          id: "compensation-is-based-on-real-contribution",
          label: "Compensation Is Based on Real Contribution",
        },
        { id: "current-status", label: "Current Status" },
      ]}
    >
      <p className="docs__text">
        Craftly is currently operating as a non profit organization, so regular
        salary payments are not yet available across the organization.
      </p>
      <p className="docs__text">
        As Craftly grows and secures funding, we plan to introduce a structured
        compensation system through Craftly Workspace.
      </p>

      <h2 className="docs__heading" id="who-is-eligible">
        Who Is Eligible?
      </h2>
      <p className="docs__text">
        Salary and compensation will be available only to verified Craftly
        members who have:
      </p>
      <ul className="docs__list">
        <li>Completed the full Craftly onboarding process</li>
        <li>Become an officially verified member</li>
        <li>Been assigned an active role within the organization</li>
        <li>Contributed to real Craftly work</li>
        <li>Met the organization's requirements for compensation</li>
      </ul>
      <p className="docs__text">
        Completing onboarding alone does not automatically make someone eligible
        for salary.
      </p>
      <p className="docs__text">
        The compensation system is intended for members who have actually joined
        the organization and are actively contributing through their assigned
        responsibilities.
      </p>

      <h2 className="docs__heading" id="how-compensation-will-work">
        How Compensation Will Work
      </h2>
      <p className="docs__text">
        Once Craftly's funded compensation system becomes available, an eligible
        member will have a Payment section inside their Craftly Workspace
        profile.
      </p>
      <p className="docs__text">From there, members will be able to:</p>
      <ul className="docs__list">
        <li>View their compensation information</li>
        <li>See available payment details</li>
        <li>Add a supported payment method</li>
        <li>Select where they want to receive their compensation</li>
        <li>Track relevant payment status and history</li>
      </ul>
      <p className="docs__text">The available payment methods may include:</p>
      <p className="docs__text docs__text--highlight">
        <strong>Bank Account · bKash · Other Supported Payment Gateways</strong>
      </p>
      <p className="docs__text">
        The exact payment methods and availability may depend on the member's
        location and the payment infrastructure supported by Craftly at the
        time.
      </p>

      <h2 className="docs__heading" id="payment-through-workspace">
        Payment Through Workspace
      </h2>
      <p className="docs__text">
        The goal is to keep compensation connected to the member's existing
        Craftly identity.
      </p>
      <p className="docs__text">
        Instead of maintaining a completely separate salary system, Workspace
        can become the central place where verified members manage their
        compensation information alongside their organizational profile.
      </p>
      <p className="docs__text">A future workflow may look like:</p>
      <div className="docs__workflow">
        <div className="docs__workflow-step">Verified Member</div>
        <div className="docs__workflow-arrow">→</div>
        <div className="docs__workflow-step">Active Role</div>
        <div className="docs__workflow-arrow">→</div>
        <div className="docs__workflow-step">Compensation Eligibility</div>
        <div className="docs__workflow-arrow">→</div>
        <div className="docs__workflow-step">Payment Profile</div>
        <div className="docs__workflow-arrow">→</div>
        <div className="docs__workflow-step">Payment Method</div>
        <div className="docs__workflow-arrow">→</div>
        <div className="docs__workflow-step">Salary Payment</div>
      </div>

      <h2
        className="docs__heading"
        id="compensation-is-based-on-real-contribution"
      >
        Compensation Is Based on Real Contribution
      </h2>
      <p className="docs__text">
        Craftly's compensation system is intended for people who are actually
        contributing to the organization.
      </p>
      <p className="docs__text">
        Membership alone is not the same as employment or compensation
        eligibility.
      </p>
      <p className="docs__text">
        Factors that may be relevant to compensation include:
      </p>
      <ul className="docs__list">
        <li>Active organizational responsibility</li>
        <li>Completed and verified work</li>
        <li>Role and scope of responsibility</li>
        <li>Reliability</li>
        <li>Contribution to the organization</li>
        <li>Applicable compensation agreements</li>
        <li>Craftly's available financial resources</li>
      </ul>
      <p className="docs__text">
        The exact compensation structure will depend on Craftly's funding,
        organizational requirements, legal obligations, and the applicable
        agreement with each member.
      </p>

      <h2 className="docs__heading" id="current-status">
        Current Status
      </h2>
      <p className="docs__text">Salary payments are not currently active.</p>
      <p className="docs__text">
        Craftly is currently operating as a non profit organization while it
        continues to build its products, organization, and infrastructure.
      </p>
      <p className="docs__text">
        Once Craftly raises sufficient funding and establishes the necessary
        compensation and payment systems, eligible verified members will be able
        to manage their payment information through Craftly Workspace.
      </p>
      <p className="docs__text docs__text--highlight">
        For now, focus on learning, contributing, and doing meaningful work.
        Compensation will be introduced as Craftly's funding and organizational
        infrastructure mature.
      </p>
    </DocPage>
  );
}
