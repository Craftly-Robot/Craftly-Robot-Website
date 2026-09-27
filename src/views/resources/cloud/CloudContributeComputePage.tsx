import DocPage from "../DocPage";

export default function CloudContributeComputePage() {
  return (
    <DocPage
      title="Contribute Compute — Craftly Documentation"
      description="Learn how to contribute your idle computer power to Craftly Cloud."
      crumbs={["Documentation", "Craftly Cloud", "Contribute Compute"]}
      pageId="contribute-compute"
      pageTitle="Contribute Compute"
      tocItems={[
        { id: "how-contribution-works", label: "How Contribution Works" },
        { id: "idle-detection", label: "Zero-Lag Idle Detection" },
        { id: "resource-sliders", label: "Customizable Resource Sliders" },
        { id: "bandwidth-usage", label: "Bandwidth & Data Consumption" },
      ]}
    >
      <p className="docs__text">
        Contributing to Craftly Cloud turns your computer into a productive asset for Bangladesh without compromising your daily workflow, gaming performance, or device longevity.
      </p>

      <h2 className="docs__heading" id="how-contribution-works">
        How Contribution Works
      </h2>
      <p className="docs__text">
        Most people use their computers for email, document editing, watching videos, or light browsing—utilizing only 5% to 15% of their computer’s true capacity. When you step away or leave your computer on, the vast majority of your RAM and processor goes to waste.
      </p>
      <p className="docs__text">
        Craftly Cloud quietly activates during these idle windows. It accepts small, self-contained micro-batches of computational work from vetted domestic projects (such as university medical experiments or AI research), completes the calculation, sends back the verified result, and releases memory immediately.
      </p>

      <h2 className="docs__heading" id="idle-detection">
        Zero-Lag Idle Detection
      </h2>
      <p className="docs__text">
        Your personal computing always takes 100% priority. Craftly incorporates proactive system monitoring:
      </p>
      <ul className="docs__list">
        <li>
          <strong>Mouse &amp; Keyboard Activity:</strong> If you move your mouse or start typing, Craftly throttles down instantly.
        </li>
        <li>
          <strong>Foreground App Priority:</strong> If a demanding game, video editor, or browser with 50 tabs is launched, Craftly yields CPU/GPU priority in real time.
        </li>
        <li>
          <strong>Thermal &amp; Acoustic Throttling:</strong> You can cap maximum fan speeds and operating temperatures so your machine stays cool and completely silent.
        </li>
      </ul>

      <h2 className="docs__heading" id="resource-sliders">
        Customizable Resource Sliders
      </h2>
      <p className="docs__text">
        In the Craftly client Settings panel, you can fine-tune:
      </p>
      <ul className="docs__list">
        <li>
          <strong>CPU Threads:</strong> Dedicate 1, 2, 4, or all available cores.
        </li>
        <li>
          <strong>RAM Allocation:</strong> Set a strict upper ceiling (e.g., maximum 8 GB or 16 GB).
        </li>
        <li>
          <strong>GPU Acceleration:</strong> Enable or disable your dedicated NVIDIA or Apple Silicon GPU for compute tasks.
        </li>
        <li>
          <strong>Schedule:</strong> Allow contribution 24/7 or restrict it strictly to nighttime hours (e.g., 11:00 PM to 7:00 AM).
        </li>
      </ul>

      <h2 className="docs__heading" id="bandwidth-usage">
        Bandwidth &amp; Data Consumption
      </h2>
      <p className="docs__text">
        Compute tasks are highly data-efficient. The orchestrator sends compact computation kernels and receives compressed mathematical results—typically requiring less than 20–50 MB of data per hour. Furthermore, because traffic routes through domestic BDIX peering, it does not count against metered international data packages on most Bangladeshi broadband connections.
      </p>
    </DocPage>
  );
}
