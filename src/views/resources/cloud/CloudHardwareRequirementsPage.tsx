import DocPage from "../DocPage";

export default function CloudHardwareRequirementsPage() {
  return (
    <DocPage
      title="Hardware & Requirements — Craftly Documentation"
      description="Hardware and operating system requirements for Craftly Cloud."
      crumbs={["Documentation", "Craftly Cloud", "Hardware & Requirements"]}
      pageId="hardware-requirements"
      pageTitle="Hardware & Requirements"
      tocItems={[
        { id: "supported-os", label: "Supported Operating Systems" },
        { id: "minimum-specs", label: "Minimum Specifications" },
        { id: "recommended-specs", label: "Recommended Specifications" },
        { id: "network-specs", label: "Network & Connectivity" },
      ]}
    >
      <p className="docs__text">
        Craftly Cloud is designed to run efficiently across a wide variety of hardware, from lightweight student laptops to dedicated multi-GPU creator workstations.
      </p>

      <h2 className="docs__heading" id="supported-os">
        Supported Operating Systems
      </h2>
      <ul className="docs__list">
        <li>
          <strong>Windows:</strong> Windows 10 (64-bit, Version 2004 or later) and Windows 11.
        </li>
        <li>
          <strong>macOS:</strong> macOS 12 (Monterey) or newer. Fully optimized for Apple Silicon (M1, M2, M3, M4 chips) and Intel-based Macs.
        </li>
        <li>
          <strong>Linux:</strong> Ubuntu 20.04+, Debian 11+, Fedora 36+, Arch Linux, and standard systemd-based distributions (x86_64 and arm64).
        </li>
      </ul>

      <h2 className="docs__heading" id="minimum-specs">
        Minimum Specifications
      </h2>
      <p className="docs__text">
        To join the network as a general contribution node:
      </p>
      <ul className="docs__list">
        <li>
          <strong>Processor:</strong> Dual-core 64-bit CPU (Intel Core i3 / AMD Ryzen 3 or equivalent).
        </li>
        <li>
          <strong>Memory (RAM):</strong> 4 GB total system RAM (at least 1.5 GB available for allocation).
        </li>
        <li>
          <strong>Storage:</strong> 2 GB free disk space for cache and sandbox execution binaries.
        </li>
        <li>
          <strong>GPU:</strong> Optional (integrated Intel/AMD graphics supported for lightweight tasks).
        </li>
      </ul>

      <h2 className="docs__heading" id="recommended-specs">
        Recommended Specifications
      </h2>
      <p className="docs__text">
        High-performance nodes receive higher task priority and increased reward multipliers:
      </p>
      <ul className="docs__list">
        <li>
          <strong>Processor:</strong> 6+ cores / 12+ threads (Intel Core i7/i9, AMD Ryzen 7/9, or Apple M-series Pro/Max).
        </li>
        <li>
          <strong>Memory (RAM):</strong> 16 GB to 32+ GB DDR4/DDR5 unified memory.
        </li>
        <li>
          <strong>GPU:</strong> NVIDIA RTX 3060/4060 or higher (8+ GB VRAM), or Apple Silicon with 16+ GB unified memory.
        </li>
        <li>
          <strong>Storage:</strong> NVMe SSD with 20+ GB dedicated cache space.
        </li>
      </ul>

      <h2 className="docs__heading" id="network-specs">
        Network &amp; Connectivity
      </h2>
      <ul className="docs__list">
        <li>
          <strong>Internet Speed:</strong> Minimum 5 Mbps download / 2 Mbps upload. Recommended 20+ Mbps broadband.
        </li>
        <li>
          <strong>Domestic Peering:</strong> Connection via Bangladeshi ISPs supporting BDIX peering provides optimal performance and lowest latency.
        </li>
        <li>
          <strong>Firewall / Router:</strong> No open inbound ports or port-forwarding required. The client establishes outbound secure connections only.
        </li>
      </ul>
    </DocPage>
  );
}
