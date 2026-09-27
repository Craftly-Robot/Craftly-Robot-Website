import DocPage from "../DocPage";

export default function CloudEarningsPage() {
  return (
    <DocPage
      title="Earnings & Rewards — Craftly Documentation"
      description="Understand how earnings, compensation, and rewards work on Craftly Cloud."
      crumbs={["Documentation", "Craftly Cloud", "Earnings"]}
      pageId="earnings"
      pageTitle="Earnings & Rewards"
      tocItems={[
        { id: "how-earnings-work", label: "How Earnings Work" },
        { id: "reward-factors", label: "Reward Factors & Multipliers" },
        { id: "payout-methods", label: "Payout Methods" },
        { id: "dashboard-tracking", label: "Tracking Your Node" },
      ]}
    >
      <p className="docs__text">
        Craftly Cloud believes in fair, transparent compensation for community members who contribute their machine’s capacity to Bangladesh’s national AI network.
      </p>

      <h2 className="docs__heading" id="how-earnings-work">
        How Earnings Work
      </h2>
      <p className="docs__text">
        Earnings accrue based on a combination of <strong>Availability (Uptime)</strong> and <strong>Verified Work Done (Compute Units)</strong>:
      </p>
      <ul className="docs__list">
        <li>
          <strong>Standby Uptime:</strong> You earn baseline points simply for keeping your node connected and available on the network to handle overflow traffic.
        </li>
        <li>
          <strong>Active Compute Cycles:</strong> When your machine actively processes micro-batches (such as inference requests or dataset tokenization), you earn rewards at an accelerated rate proportional to the work performed.
        </li>
      </ul>

      <h2 className="docs__heading" id="reward-factors">
        Reward Factors &amp; Multipliers
      </h2>
      <p className="docs__text">
        Different hardware configurations receive different multipliers based on network demand:
      </p>
      <ul className="docs__list">
        <li>
          <strong>GPU Nodes (NVIDIA RTX / Apple Silicon):</strong> Earn higher reward multipliers due to high demand for deep learning acceleration.
        </li>
        <li>
          <strong>High RAM Capacity (32GB+):</strong> Receives bonus allocation for hosting larger language model weights in memory.
        </li>
        <li>
          <strong>Consistency Streak:</strong> Nodes that maintain steady daily uptime without unexpected drops earn weekly reliability bonuses.
        </li>
      </ul>

      <h2 className="docs__heading" id="payout-methods">
        Payout Methods
      </h2>
      <p className="docs__text">
        Contributors can withdraw accumulated earnings directly in Bangladeshi Taka (BDT) using convenient local payment channels:
      </p>
      <ul className="docs__list">
        <li>
          <strong>Mobile Financial Services:</strong> Instant withdrawals to bKash, Nagad, and Rocket.
        </li>
        <li>
          <strong>Bank Transfer:</strong> Direct deposit to any commercial bank in Bangladesh.
        </li>
        <li>
          <strong>Craftly Compute Credits:</strong> Convert earnings into compute credits to run your own AI training jobs at discounted rates.
        </li>
      </ul>

      <h2 className="docs__heading" id="dashboard-tracking">
        Tracking Your Node
      </h2>
      <p className="docs__text">
        You can monitor your node’s real-time statistics directly from the Craftly desktop application or the web dashboard. The dashboard displays:
      </p>
      <ul className="docs__list">
        <li>Total uptime hours for the current cycle.</li>
        <li>Completed computational micro-tasks.</li>
        <li>Current reward balance and historical transaction ledger.</li>
      </ul>
    </DocPage>
  );
}
