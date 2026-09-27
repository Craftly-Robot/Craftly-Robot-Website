import DocPage from "../DocPage";

export default function CloudOverviewPage() {
  return (
    <DocPage
      title="Craftly Cloud Overview — Craftly Documentation"
      description="Overview of Craftly Cloud, Bangladesh's sovereign distributed AI compute network."
      crumbs={["Documentation", "Craftly Cloud", "Overview"]}
      pageId="craftly-cloud-overview"
      pageTitle="Craftly Cloud Overview"
      tocItems={[
        { id: "what-is-craftly-cloud", label: "What is Craftly Cloud?" },
        { id: "the-vision", label: "National AI Compute Mesh" },
        { id: "why-decentralized", label: "Why Decentralized Compute?" },
        { id: "key-pillars", label: "Key Pillars" },
      ]}
    >
      <p className="docs__text">
        <strong>Craftly Cloud</strong> is Bangladesh’s sovereign AI compute network. Rather than relying exclusively on massive, multi-billion-dollar foreign data centers, Craftly Cloud pools idle computing power from everyday personal computers, workstations, and local servers into a high-performance distributed supercomputing mesh.
      </p>

      <h2 className="docs__heading" id="what-is-craftly-cloud">
        What is Craftly Cloud?
      </h2>
      <p className="docs__text">
        Modern AI models require vast computing power—primarily high-speed RAM, powerful GPUs, and multi-core CPUs. Millions of computers across Bangladesh sit idle for 16 to 20 hours each day. Craftly Cloud securely connects these idle resources into a unified sovereign grid capable of processing complex AI workloads, scientific research, and machine learning models.
      </p>
      <p className="docs__text">
        At the <em>Bangladesh Innovation Fair 2026</em>, Craftly presented this national-scale architecture to government leaders, leading to an invitation to develop a pilot program in collaboration with the <strong>Ministry of Science and Technology</strong>.
      </p>

      <h2 className="docs__heading" id="the-vision">
        National AI Compute Mesh
      </h2>
      <p className="docs__text">
        Our mission is to put sovereign computing capacity behind work that matters most to society:
      </p>
      <ul className="docs__list">
        <li>
          <strong>Cancer &amp; Healthcare Research:</strong> Accelerating genomic sequencing, molecular simulation, and oncology research for researchers in Bangladesh.
        </li>
        <li>
          <strong>University Students:</strong> Providing students and lab researchers with accessible, zero-cost high-performance compute to train machine learning models beyond the limits of their personal hardware.
        </li>
        <li>
          <strong>Young Entrepreneurs:</strong> Enabling local innovators to build, test, and deploy AI products locally without expensive cloud bills.
        </li>
      </ul>

      <h2 className="docs__heading" id="why-decentralized">
        Why Decentralized Compute?
      </h2>
      <p className="docs__text">
        Traditional centralized cloud providers require massive capital expenditure, foreign currency outflow, and high latency over international undersea cables. A distributed mesh within Bangladesh keeps data local, reduces latency to sub-10 milliseconds across local ISPs, and democratizes compute ownership.
      </p>

      <h2 className="docs__heading" id="key-pillars">
        Key Pillars
      </h2>
      <ul className="docs__list">
        <li>
          <strong>Zero Friction:</strong> Any Mac, Windows, or Linux computer can join with a simple one-click client.
        </li>
        <li>
          <strong>Absolute Privacy:</strong> Workloads run in fully sandboxed, isolated micro-environments with zero access to personal files, browsing data, or keystrokes.
        </li>
        <li>
          <strong>Fair Compensation:</strong> Contributors are rewarded transparently for node uptime and verified compute cycles.
        </li>
      </ul>
    </DocPage>
  );
}
