export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://craftly-robot-website.vercel.app/#organization",
        "name": "Craftly",
        "url": "https://craftly-robot-website.vercel.app",
        "logo": "https://craftly-robot-website.vercel.app/assets/brand/craftly-wordmark.svg",
        "description":
          "Craftly builds intelligent systems for the agentic era — Craftly Workspace, Craftly Robot, and Craftly Cloud.",
        "sameAs": [
          "https://github.com/Craftly-Robot/Craftly-Robot-Website"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://craftly-robot-website.vercel.app/#website",
        "url": "https://craftly-robot-website.vercel.app",
        "name": "Craftly",
        "publisher": {
          "@id": "https://craftly-robot-website.vercel.app/#organization"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Craftly Robot",
        "operatingSystem": "Android, Windows, macOS, Linux",
        "applicationCategory": "DeveloperApplication",
        "description":
          "An agentic AI system for autonomous software engineering, multi-agent coordination, and human-in-the-loop action.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Craftly Workspace",
        "operatingSystem": "Windows, macOS, Linux",
        "applicationCategory": "BusinessApplication",
        "description":
          "Your intelligent workspace for operating modern organizations, task management, and communication.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Craftly Cloud",
        "applicationCategory": "CloudApplication",
        "description":
          "High-performance edge infrastructure & runtime for intelligent agent clusters with sub-10ms global latency.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
