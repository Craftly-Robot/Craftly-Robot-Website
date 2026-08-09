import DocsLayout from './DocsLayout';

export default function PlanPage() {
  return (
    <DocsLayout 
      title="The Craftly Plan — Craftly Documentation"
      description="The Craftly Plan - Workspace, Robot, and Glass."
      tocItems={[
        { id: 'the-craftly-plan', label: 'The Craftly Plan' },
        { id: 'what-works-today', label: 'What works today' },
        { id: 'what-were-building-now', label: 'What we\'re building now' },
        { id: 'where-were-going', label: 'Where we\'re going' },
        { id: 'why-were-building-it', label: 'Why we\'re building it' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; <strong>The Craftly Plan</strong>
      </div>

      <h1 className="docs__title" id="the-craftly-plan">The Craftly Plan</h1>
      <p className="docs__text">
        Craftly is being built step by step. Our first priority is to build the organization itself and create the systems that allow people to work together effectively. Craftly Workspace is the foundation of that effort, giving us a place to coordinate people, work, communication, and everyday operations.
      </p>
      <p className="docs__text">
        As the organization and its systems grow, we are using what we learn to build Craftly Robot. Our active research and development direction for a broad real world AI assistant. Over the long term, these efforts are intended to lead toward Craftly Glass, a much more ambitious vision for how people may interact with intelligent technology.
      </p>

      <h2 className="docs__heading" id="what-works-today">What works today</h2>
      <p className="docs__text">
        Craftly Workspace is our current working product. It supports the day-to-day operation of the organization, including onboarding, agreements, task evidence, communication, resources, and coordination between people and teams.
      </p>

      <h2 className="docs__heading" id="what-were-building-now">What we're building now</h2>
      <p className="docs__text">
        Craftly Robot is currently under active research and development. We are working toward a broad real world assistant whose agents can understand requests, discover relevant capabilities, coordinate with other agents or services, and help turn those requests into safe, useful actions.
      </p>
      <p className="docs__text">
        Robot is not yet a finished public product. Many of its capabilities are still being researched and developed, including agent discovery and agent-to-agent coordination.
      </p>

      <h2 className="docs__heading" id="where-were-going">Where we're going</h2>
      <p className="docs__text">
        Craftly Glass is our long-term vision for an augmented-reality wearable that brings intelligent systems closer to the physical world. It is a future direction rather than a current product, with a horizon of roughly a decade.
      </p>

      <h2 className="docs__heading" id="why-were-building-it">Why we're building it</h2>
      <p className="docs__text">
        At the center of all three stages is the same idea:
      </p>
      <p className="docs__text docs__text--highlight">
        <strong>Technology should help people coordinate, create, and accomplish useful work at scale without losing sight of the people doing that work.</strong>
      </p>
      <p className="docs__text">
        We want to build an organization where people, software, and intelligent systems can work together effectively, while treating every contributor with respect and dignity.
      </p>

      <div className="docs__card" style={{ marginTop: '2rem' }}>
        <h3 className="docs__card-title">Workspace → Robot → Glass</h3>
        <p className="docs__card-description">
          Build the organization → Build the intelligence → Extend it into the world.
        </p>
      </div>
    </DocsLayout>
  );
}
