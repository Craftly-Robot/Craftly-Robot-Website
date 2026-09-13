import type { ReactNode } from "react";

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  tags: string[];
  content: ReactNode;
}

/**
 * Blog articles, newest first. Add new entries at the top of the list.
 * Rendered by BlogPage (listing) and BlogArticlePage (detail).
 */
export const blogArticles: BlogArticle[] = [
  {
    slug: "craftly-plan-workspace-robot-glass",
    title: "The Craftly Plan: Workspace → Robot → Glass",
    description:
      "How Craftly is building step by step — the organization first, then intelligence, then extending it into the world.",
    date: "2026-08-20",
    tags: ["Craftly", "Roadmap"],
    content: (
      <>
        <p className="docs__text">
          Craftly is being built step by step. Our first priority is to build
          the organization itself and create the systems that allow people to
          work together effectively. Craftly Workspace is the foundation of that
          effort — a place to coordinate people, work, communication, and
          everyday operations.
        </p>
        <p className="docs__text">
          As the organization and its systems grow, we are using what we learn
          to build Craftly Robot: our active research and development direction
          for a broad real-world AI assistant. Over the long term, these efforts
          are intended to lead toward Craftly Glass, a much more ambitious
          vision for how people may interact with intelligent technology.
        </p>
        <h2 className="docs__subtitle">What works today</h2>
        <p className="docs__text">
          Craftly Workspace is our current working product. It supports
          day-to-day operation of the organization, including onboarding,
          agreements, task evidence, communication, resources, and coordination
          between people and teams.
        </p>
        <h2 className="docs__subtitle">What we're building now</h2>
        <p className="docs__text">
          Craftly Robot is under active research and development. We are working
          toward a broad real-world assistant whose agents can understand
          requests, discover relevant capabilities, coordinate with other agents
          or services, and help turn those requests into safe, useful actions.
        </p>
        <h2 className="docs__subtitle">Where we're going</h2>
        <p className="docs__text">
          Craftly Glass is our long-term vision for an augmented-reality
          wearable that brings intelligent systems closer to the physical world.
          It is a future direction rather than a current product.
        </p>
        <p className="docs__text docs__text--highlight">
          <strong>
            Technology should help people coordinate, create, and accomplish
            useful work at scale without losing sight of the people doing that
            work.
          </strong>
        </p>
      </>
    ),
  },
  {
    slug: "why-agent-to-agent-negotiation-matters",
    title: "Why Agent-to-Agent Negotiation Matters",
    description:
      "A look at how autonomous agents discovering and coordinating with each other changes what real-world AI assistants can do.",
    date: "2026-08-10",
    tags: ["Research", "AI Agents"],
    content: (
      <>
        <p className="docs__text">
          Most AI assistants today operate alone. They answer questions and
          complete tasks inside a single product boundary. Real work rarely
          works that way — it involves finding the right capability, agreeing on
          scope, and coordinating across systems and people.
        </p>
        <p className="docs__text">
          That is why agent-to-agent negotiation is one of our core research
          directions for Craftly Robot. Instead of hard-coding every
          integration, agents should be able to discover relevant capabilities
          and negotiate how a task gets done.
        </p>
        <h2 className="docs__subtitle">Discovery before coordination</h2>
        <p className="docs__text">
          The first problem is discovery: an agent needs to find which other
          agents or services can actually help. The second is coordination: once
          found, agents must clarify goals, requirements, and constraints before
          acting.
        </p>
        <h2 className="docs__subtitle">Safety through confirmation</h2>
        <p className="docs__text">
          Negotiation does not mean acting without oversight. Human confirmation
          remains a central part of our design: agents propose, people approve.
          You can read more in the Robot documentation on human confirmation and
          real-world task coordination.
        </p>
        <p className="docs__text docs__text--highlight">
          <strong>
            Agents should propose and coordinate; people stay in control of what
            actually happens.
          </strong>
        </p>
      </>
    ),
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}
