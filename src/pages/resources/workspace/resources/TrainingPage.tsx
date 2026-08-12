import DocsLayout from '../../DocsLayout';

export default function TrainingPage() {
  return (
    <DocsLayout 
      title="Training — Craftly Workspace"
      description="Training in Craftly Workspace"
      tocItems={[
        { id: 'training', label: 'Training' },
        { id: 'what-is-decentralized-ai-training', label: 'What is Decentralized AI Training?' },
        { id: 'contributing-with-your-own-hardware', label: '1. Contributing With Your Own Hardware' },
        { id: 'contributing-with-cloud-gpus', label: '2. Contributing With Cloud GPUs' },
        { id: 'choosing-a-training-method', label: 'Choosing a Training Method' },
        { id: 'how-members-contribute', label: 'How Members Contribute' },
        { id: 'why-contribute', label: 'Why Contribute?' },
        { id: 'important', label: 'Important' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Resources &gt; <strong>Training</strong>
      </div>

      <h1 className="docs__title" id="training">Training</h1>
      <p className="docs__text">
        Craftly's Training section is where members can contribute computing resources to the development and training of Craftly's AI systems through decentralized AI training.
      </p>
      <p className="docs__text">
        Instead of depending entirely on a single centralized datacenter, Craftly can distribute training workloads across computing resources contributed by members. This allows members to participate in AI development using hardware they already have or through available cloud GPU platforms.
      </p>
      <p className="docs__text">
        Members can contribute in two main ways:
      </p>
      <ul className="docs__list">
        <li>Personal NVIDIA GPU</li>
        <li>Cloud based GPU</li>
      </ul>

      <h2 className="docs__subtitle" id="what-is-decentralized-ai-training">What is Decentralized AI Training?</h2>
      <p className="docs__text">
        Decentralized AI training means that AI training workloads can be distributed across multiple independent computing nodes instead of running everything on one centralized machine.
      </p>
      <p className="docs__text">
        A member can contribute their available GPU computing power to a training workload. Depending on the training architecture, the contributed node can perform assigned computation, process training batches, or participate in other parts of the training pipeline.
      </p>
      <p className="docs__text">
        This allows Craftly to make use of computing resources from multiple contributors and build a larger distributed training environment.
      </p>
      <p className="docs__text">
        The goal is simple:
      </p>
      <p className="docs__text">
        <strong>More contributors → more available computing resources → greater ability to experiment, train, and improve AI systems.</strong>
      </p>

      <h2 className="docs__subtitle" id="contributing-with-your-own-hardware">1. Contributing With Your Own Hardware</h2>
      <p className="docs__text">
        Members who have a suitable NVIDIA GPU can contribute using their own computer.
      </p>
      <p className="docs__text">
        At the current stage, Craftly's decentralized training environment is designed around NVIDIA GPUs and the CUDA ecosystem. Therefore, other GPU types are not currently supported for this contribution workflow.
      </p>
      <h3 className="docs__sub-subtitle">What you need</h3>
      <p className="docs__text">
        You generally need:
      </p>
      <ul className="docs__list">
        <li>A computer with a supported NVIDIA GPU</li>
        <li>Proper NVIDIA drivers</li>
        <li>CUDA compatible environment</li>
        <li>Stable internet connection</li>
        <li>Enough system RAM and storage for the assigned workload</li>
        <li>The required Craftly training environment and dependencies</li>
      </ul>
      <p className="docs__text">
        The exact GPU requirement can vary depending on the training workload.
      </p>
      <p className="docs__text">
        You do not necessarily need an extremely expensive GPU to contribute. Smaller GPUs can still be useful for suitable workloads, experimentation, testing, or distributed tasks when the training system supports them.
      </p>

      <h2 className="docs__subtitle" id="contributing-with-cloud-gpus">2. Contributing With Cloud GPUs</h2>
      <p className="docs__text">
        Members who do not have a suitable NVIDIA GPU can also participate using cloud based GPU environments.
      </p>
      <p className="docs__text">
        Some useful options include:
      </p>
      
      <h3 className="docs__sub-subtitle">Google Colab</h3>
      <p className="docs__text">
        Google Colab provides a hosted notebook environment where users can access computing resources without setting up a local machine. Its free tier can provide access to GPUs, although availability and usage limits are dynamic and are not guaranteed.
      </p>
      <p className="docs__text">
        This makes Colab useful for members who:
      </p>
      <ul className="docs__list">
        <li>Do not own an NVIDIA GPU</li>
        <li>Want to experiment with the training environment</li>
        <li>Want to test training code</li>
        <li>Want to contribute smaller workloads</li>
      </ul>
      <p className="docs__text">
        <strong>Important:</strong> Free Colab resources are limited and can change depending on availability and usage. Google does not guarantee a fixed amount of free GPU time.
      </p>

      <h3 className="docs__sub-subtitle">Kaggle</h3>
      <p className="docs__text">
        Kaggle Notebooks can also provide access to NVIDIA GPUs for supported workloads. Kaggle currently documents a GPU quota that is generally 30 hours per week or sometimes higher depending on demand and available resources.
      </p>
      <p className="docs__text">
        Kaggle can therefore be useful for:
      </p>
      <ul className="docs__list">
        <li>Training experiments</li>
        <li>Testing models</li>
        <li>Running CUDA based workloads</li>
        <li>Contributing available GPU compute</li>
        <li>Learning how AI training environments work</li>
      </ul>
      <p className="docs__text">
        The quota is not a permanent guarantee and can depend on Kaggle's current resource availability and policies.
      </p>

      <h3 className="docs__sub-subtitle">Modal</h3>
      <p className="docs__text">
        Modal is another option for running GPU workloads in the cloud.
      </p>
      <p className="docs__text">
        Its current Starter plan provides $30/month in free compute credits, which can be used for compute resources including GPUs.
      </p>
      <p className="docs__text">
        This can be particularly useful for members who need a more programmable cloud environment rather than a traditional notebook based workflow.
      </p>
      <p className="docs__text">
        Modal charges based on actual compute usage, and the free credits are applied against that usage.
      </p>

      <h2 className="docs__subtitle" id="choosing-a-training-method">Choosing a Training Method</h2>
      <p className="docs__text">
        You can choose the method that best matches the resources available to you:
      </p>
      <div className="docs__table-container">
        <table className="docs__table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal NVIDIA GPU</td>
              <td>Members with their own GPU hardware</td>
            </tr>
            <tr>
              <td>Google Colab</td>
              <td>Beginners, testing, and smaller workloads</td>
            </tr>
            <tr>
              <td>Kaggle</td>
              <td>Training experiments with limited free GPU quota</td>
            </tr>
            <tr>
              <td>Modal</td>
              <td>Programmable cloud GPU workloads</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="docs__text">
        The available resources, GPU types, quotas, and provider policies can change over time, so members should always check the current limits of the platform they are using.
      </p>

      <h2 className="docs__subtitle" id="how-members-contribute">How Members Contribute</h2>
      <p className="docs__text">
        The general contribution flow is:
      </p>
      <p className="docs__text">
        <strong>Choose a compute method</strong> → <strong>Prepare the environment</strong> → <strong>Connect to the training workload</strong> → <strong>Run the assigned workload</strong> → <strong>Report/submit the result</strong> → <strong>Continue contributing</strong>
      </p>
      <p className="docs__text">
        For personal hardware, the member prepares their NVIDIA/CUDA environment and connects the machine according to Craftly's training instructions.
      </p>
      <p className="docs__text">
        For cloud platforms, the member creates the required environment, installs the required dependencies, and runs the provided training workload.
      </p>
      <p className="docs__text">
        The exact setup process may differ depending on the training project and the hardware being used.
      </p>

      <h2 className="docs__subtitle" id="why-contribute">Why Contribute?</h2>
      <p className="docs__text">
        Decentralized training gives members an opportunity to participate directly in Craftly's AI development rather than only using the finished systems.
      </p>
      <p className="docs__text">
        By contributing compute resources, members can:
      </p>
      <ul className="docs__list">
        <li>Participate in AI training</li>
        <li>Gain practical experience with GPU computing</li>
        <li>Learn distributed AI infrastructure</li>
        <li>Work with CUDA and machine learning workloads</li>
        <li>Understand real world model training pipelines</li>
        <li>Contribute computing resources to Craftly's research</li>
        <li>Build experience with large scale AI infrastructure</li>
      </ul>
      <p className="docs__text">
        Training contribution can also become a practical way for technically capable members to demonstrate their ability to work with AI infrastructure and contribute to the organization's technical development.
      </p>

      <h2 className="docs__subtitle" id="important">Important</h2>
      <p className="docs__text">
        Never run unknown code or training workloads on your personal computer without understanding what they do. Only run workloads provided through Craftly's official training workflow and follow the documented security requirements.
      </p>
      <p className="docs__text">
        Cloud providers also have their own usage policies, quotas, and verification requirements. These policies can change, so Craftly's documentation should be treated as the workflow guide while the provider's current terms determine the actual availability of their free resources.
      </p>
    </DocsLayout>
  );
}
