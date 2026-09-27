import DocPage from "../DocPage";

export default function CloudUseComputePage() {
  return (
    <DocPage
      title="Use Compute — Craftly Documentation"
      description="Deploy and run AI workloads, scientific models, and simulations on Craftly Cloud."
      crumbs={["Documentation", "Craftly Cloud", "Use Compute"]}
      pageId="use-compute"
      pageTitle="Use Compute"
      tocItems={[
        { id: "who-can-use", label: "Who Can Access Compute?" },
        { id: "supported-workloads", label: "Supported Workloads & Frameworks" },
        { id: "api-access", label: "API & SDK Integration" },
        { id: "research-grants", label: "University & Researcher Grants" },
      ]}
    >
      <p className="docs__text">
        Craftly Cloud provides researchers, developers, university faculties, and startup teams in Bangladesh with high-performance, cost-effective distributed compute power without requiring foreign currency credit cards or complex infrastructure management.
      </p>

      <h2 className="docs__heading" id="who-can-use">
        Who Can Access Compute?
      </h2>
      <ul className="docs__list">
        <li>
          <strong>Scientific Researchers:</strong> Academic teams working on life sciences, molecular dynamics, epidemiology, and climate modeling.
        </li>
        <li>
          <strong>AI Developers &amp; Startups:</strong> Teams fine-tuning open-source LLMs, building computer vision pipelines, or running high-throughput inference.
        </li>
        <li>
          <strong>Undergraduate &amp; Graduate Students:</strong> Students working on thesis projects, engineering simulations, or machine learning competitions.
        </li>
      </ul>

      <h2 className="docs__heading" id="supported-workloads">
        Supported Workloads &amp; Frameworks
      </h2>
      <p className="docs__text">
        Craftly Cloud’s distributed execution layer supports standard containerized and micro-kernel workloads across the AI and scientific computing ecosystem:
      </p>
      <ul className="docs__list">
        <li>
          <strong>Deep Learning:</strong> PyTorch, TensorFlow, JAX, ONNX Runtime, and Hugging Face transformers.
        </li>
        <li>
          <strong>LLM Inference &amp; Fine-Tuning:</strong> vLLM, llama.cpp, LoRA adapters, and multi-node batch inference.
        </li>
        <li>
          <strong>Scientific Computing:</strong> NumPy, SciPy, BLAST/Clustal bio-informatics, Monte Carlo simulations, and ray-tracing pipelines.
        </li>
      </ul>

      <h2 className="docs__heading" id="api-access">
        API &amp; SDK Integration
      </h2>
      <p className="docs__text">
        Submitting a job to Craftly Cloud is as simple as making an API call using our Python or TypeScript SDK:
      </p>
      <div
        style={{
          backgroundColor: "var(--color-bg-secondary)",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid var(--color-border)",
          margin: "16px 0",
          fontFamily: "monospace",
          fontSize: "14px",
          overflowX: "auto",
        }}
      >
        <code>
          from craftly import CloudClient<br /><br />
          client = CloudClient(api_key="your_api_key")<br />
          job = client.submit(<br />
          &nbsp;&nbsp;model="meta-llama/Llama-3-8B-Instruct",<br />
          &nbsp;&nbsp;task="batch_inference",<br />
          &nbsp;&nbsp;inputs="data/queries.jsonl",<br />
          &nbsp;&nbsp;min_nodes=10,<br />
          )<br />
          print(f&quot;Dispatched job &#123;job.id&#125; across Bangladesh mesh&quot;)
        </code>
      </div>

      <h2 className="docs__heading" id="research-grants">
        University &amp; Researcher Grants
      </h2>
      <p className="docs__text">
        Under our pilot initiative with the <strong>Ministry of Science and Technology</strong>, Craftly allocates dedicated compute pools to verified researchers and university teams across Bangladesh at zero cost. To apply for a research compute grant, contact our academic partnerships team with your project proposal.
      </p>
    </DocPage>
  );
}
