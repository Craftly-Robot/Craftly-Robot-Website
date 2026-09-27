import DocPage from "../DocPage";

export default function CloudHowItWorksPage() {
  return (
    <DocPage
      title="How Craftly Cloud Works — Craftly Documentation"
      description="Technical architecture and execution model of Craftly Cloud."
      crumbs={["Documentation", "Craftly Cloud", "How It Works"]}
      pageId="how-it-works"
      pageTitle="How Craftly Cloud Works"
      tocItems={[
        { id: "distributed-architecture", label: "Distributed Grid Architecture" },
        { id: "workload-scheduling", label: "Workload Partitioning & Scheduling" },
        { id: "sandboxed-execution", label: "Sandboxed Execution" },
        { id: "cryptographic-verification", label: "Cryptographic Verification & Consensus" },
      ]}
    >
      <p className="docs__text">
        Craftly Cloud turns a decentralized network of heterogeneous consumer and enterprise hardware into a coherent high-performance compute fabric. The system relies on four core architectural layers.
      </p>

      <h2 className="docs__heading" id="distributed-architecture">
        Distributed Grid Architecture
      </h2>
      <p className="docs__text">
        When you install the Craftly client and connect your computer, your machine announces its available hardware capacity (CPU threads, GPU VRAM, free RAM, and storage cache) to the Craftly domestic orchestrator via a secure, outbound-only WebSocket connection.
      </p>
      <p className="docs__text">
        Nodes are automatically grouped by geographic proximity and domestic ISP routing to maintain sub-10ms peer-to-peer latency. Because all traffic stays within Bangladesh’s domestic internet exchange points (BDIX), data transfer between nodes is near-instantaneous and consumes zero international bandwidth.
      </p>

      <h2 className="docs__heading" id="workload-scheduling">
        Workload Partitioning &amp; Scheduling
      </h2>
      <p className="docs__text">
        Large computational jobs—such as batch neural network inference, dataset tokenization, or genomic sequence alignment—are split into deterministic, independent micro-tasks.
      </p>
      <ul className="docs__list">
        <li>
          <strong>Task Chunking:</strong> Heavy models are sharded across compatible nodes based on each node's real-time memory and processing profile.
        </li>
        <li>
          <strong>Dynamic Fault Tolerance:</strong> If a contributor closes their laptop or disconnects, the scheduler detects the missing heartbeat within 300 milliseconds and transparently reassigns the pending micro-task to an active peer node.
        </li>
      </ul>

      <h2 className="docs__heading" id="sandboxed-execution">
        Sandboxed Execution
      </h2>
      <p className="docs__text">
        Security is non-negotiable. Compute tasks run inside hardware-enforced WebAssembly or lightweight containerized sandboxes.
      </p>
      <p className="docs__text">
        The guest process has strictly no visibility into your file system, network interfaces, browser cache, or other applications. The sandbox only has access to a pre-allocated segment of RAM and virtual scratch space, ensuring your system remains completely secure.
      </p>

      <h2 className="docs__heading" id="cryptographic-verification">
        Cryptographic Verification &amp; Consensus
      </h2>
      <p className="docs__text">
        To guarantee data integrity and prevent malicious or corrupted calculations:
      </p>
      <ul className="docs__list">
        <li>
          <strong>Zero-Knowledge Checkpoints:</strong> Micro-tasks return cryptographically signed proofs of computation alongside intermediate results.
        </li>
        <li>
          <strong>Redundant Verification:</strong> Sensitive calculations are cross-checked through multi-node sampling before final assembly.
        </li>
      </ul>
    </DocPage>
  );
}
