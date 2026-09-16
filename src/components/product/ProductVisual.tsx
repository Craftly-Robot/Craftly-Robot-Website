"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import {
  IconHome,
  IconBriefcase,
  IconBell,
  IconMessageCircle,
  IconBuilding,
  IconHeadphones,
  IconCpu,
  IconRobot,
  IconSend,
  IconCloud,
  IconDeviceLaptop,
  IconArrowRight,
  IconArrowBackUp,
  IconUsers,
  IconUser,
  IconCrown,
  IconClipboardText,
  IconUpload,
  IconShieldCheck,
  IconGitBranch,
  IconCalendar,
  IconChartBar,
  IconPlug,
  IconCode,
  IconSearch,
  IconTestPipe,
  IconLock,
  IconFolder,
  IconCircleCheck,
  IconPaperclip,
  IconSitemap,
  IconArrowsExchange,
  IconClock,
} from "@tabler/icons-react";
import {
  productScenes,
  type ProductScene,
  type ProductSceneId,
} from "../../data/productVisuals";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import ImageWithFallback from "../common/ImageWithFallback";
import "./ProductVisual.css";

const icons = {
  work: IconBriefcase,
  bell: IconBell,
  chat: IconMessageCircle,
  users: IconUsers,
  flow: IconGitBranch,
  resource: IconFolder,
  agent: IconRobot,
  calendar: IconCalendar,
  chart: IconChartBar,
  plug: IconPlug,
  code: IconCode,
  search: IconSearch,
  shield: IconShieldCheck,
  test: IconTestPipe,
  git: IconGitBranch,
  cloud: IconCloud,
  lock: IconLock,
};

const sidebar = [
  ["Home", IconHome],
  ["Work", IconBriefcase],
  ["Notifications", IconBell],
  ["Chat", IconMessageCircle],
  ["Department", IconBuilding],
  ["Support", IconHeadphones],
  ["Training", IconCpu],
  ["Agent", IconRobot],
  ["Feedback", IconSend],
] as const;

const trainingDocs = "/resources/documentation/workspace/resources/training";

type ProductVisualProps = {
  className?: string;
} & (
  | { variant: "overview"; scene?: never }
  | { variant?: "feature"; scene: ProductSceneId }
);

/** Marketing-only UI: illustrative states, never connected to product data or compute. */
export default function ProductVisual(props: ProductVisualProps) {
  const titleId = useId();
  const descriptionId = useId();
  const container = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const reducedMotion = useReducedMotion();
  const overview = props.variant === "overview";
  const scene = overview ? null : productScenes[props.scene];

  useEffect(() => {
    if (!overview || reducedMotion || !container.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(container.current);
    return () => observer.disconnect();
  }, [overview, reducedMotion]);

  return (
    <div
      ref={container}
      className={`product-visual ${overview ? "product-visual--overview" : "product-visual--feature"} ${props.className ?? ""}`}
      data-scene={overview ? "training-overview" : props.scene}
      data-entered={entered && !reducedMotion ? "true" : "false"}
      data-reduced-motion={reducedMotion ? "true" : "false"}
    >
      {overview ? (
        <TrainingOverview titleId={titleId} descriptionId={descriptionId} />
      ) : (
        scene && (
          <figure
            className="pv-scene"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
          >
            <figcaption className="pv-scene__header">
              <span className="pv-eyebrow">
                Craftly {scene.product === "workspace" ? "Workspace" : "Robot"}
              </span>
              <span className="pv-caption">Illustrative product view</span>
            </figcaption>
            <div className="pv-scene__title" id={titleId}>
              {scene.title}
            </div>
            <p className="sr-only" id={descriptionId}>
              {scene.description}
            </p>
            <SceneContent scene={scene} />
            <div className="pv-scene__footer">
              <span>{scene.detail}</span>
              {"cta" in scene && scene.cta && (
                <Link href={scene.cta.to}>
                  {scene.cta.label}
                  <IconArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
            </div>
          </figure>
        )
      )}
    </div>
  );
}

function TrainingOverview({
  titleId,
  descriptionId,
}: {
  titleId: string;
  descriptionId: string;
}) {
  return (
    <section
      className="pv-dashboard"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <aside className="pv-sidebar" aria-label="Illustrative Workspace sidebar">
        <div className="pv-brand">
          <ImageWithFallback
            src="/assets/brand/craftly-wordmark.svg"
            alt="Craftly"
            width="105"
            height="48"
          />
          <span>Workspace</span>
        </div>
        <ul className="pv-sidebar__items">
          {sidebar.map(([label, Icon]) => (
            <li
              key={label}
              className={label === "Training" ? "pv-sidebar__active" : ""}
            >
              <Icon size={21} stroke={1.65} aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
        <div className="pv-sidebar__profile">
          <div className="pv-sidebar__avatar" aria-hidden="true">
            W
          </div>
          <div className="pv-sidebar__profile-info">
            <span className="pv-sidebar__profile-name">Wasif Abdullah Musa</span>
            <span className="pv-sidebar__profile-role">Chairman</span>
          </div>
        </div>
      </aside>
      <div className="pv-dashboard__body">
        <div className="pv-training">
          <div className="pv-training__top">
            <span>Training Command Center</span>
            <span className="pv-caption">Illustrative product view</span>
          </div>
          <h2 id={titleId}>Decentralized model training</h2>
          <p className="sr-only" id={descriptionId}>
            Members contribute personal or cloud GPU compute to a shared
            training workload. Below: chain of command and reporting, task
            evidence and review, and department communication. This is an
            illustration, not live training data.
          </p>
          <div className="pv-compute">
            <ComputeNodes cloud={false} />
            <div className="pv-compute__network">
              <TrainingNetworkVisual />
              <strong>
                Shared training
                <br />
                workload
              </strong>
            </div>
            <ComputeNodes cloud />
          </div>
          <div className="pv-training__bottom">
            <div className="pv-progress">
              <span>
                Training progress <small>Illustrative</small>
              </span>
              <div className="pv-progress__track" aria-hidden="true">
                <span />
              </div>
            </div>
            <Link className="pv-training__cta" href={trainingDocs}>
              Explore training
              <IconArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="pv-pillars">
          <div className="pv-pillar">
            <h3>Chain of command</h3>
            <MiniSteps
              items={["Leadership", "Team lead", "Member"]}
              symbols={[IconCrown, IconUsers, IconUser]}
            />
            <p>
              <IconArrowBackUp size={18} aria-hidden="true" />
              Report back through the same structure
            </p>
          </div>
          <div className="pv-pillar">
            <h3>Work &amp; evidence</h3>
            <MiniSteps
              items={["Assigned", "Submitted", "Review"]}
              symbols={[IconClipboardText, IconUpload, IconShieldCheck]}
            />
            <p>Evidence connects work to review</p>
          </div>
          <div className="pv-pillar">
            <h3>Departments &amp; communication</h3>
            <MiniSteps
              items={["Engineering", "Notices", "Research"]}
              symbols={[IconBuilding, IconBell, IconUsers]}
            />
            <p>Updates reach the right teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainingNetworkVisual() {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pv-network-svg"
      aria-hidden="true"
    >
      <g className="pv-net-dashed">
        <path d="M 0 240 L 240 240 C 285 240, 345 350, 379 400" />
        <path d="M 0 497 L 333 497" />
        <path d="M 0 768 L 240 768 C 285 768, 345 666, 379 618" />
        <path d="M 1024 240 L 784 240 C 739 240, 679 350, 647 400" />
        <path d="M 1024 497 L 691 497" />
        <path d="M 1024 768 L 784 768 C 739 768, 679 666, 647 618" />
      </g>

      <circle cx="513" cy="508" r="168" className="pv-net-ring" />

      <g className="pv-net-green-dots">
        <circle cx="379" cy="400" r="7" />
        <circle cx="333" cy="497" r="7" />
        <circle cx="379" cy="618" r="7" />
        <circle cx="647" cy="400" r="7" />
        <circle cx="691" cy="497" r="7" />
        <circle cx="647" cy="618" r="7" />
      </g>

      <g className="pv-net-cube-edges">
        <line x1="513" y1="419" x2="436" y2="464" />
        <line x1="436" y1="464" x2="436" y2="553" />
        <line x1="436" y1="553" x2="513" y2="598" />
        <line x1="513" y1="598" x2="590" y2="553" />
        <line x1="590" y1="553" x2="590" y2="464" />
        <line x1="590" y1="464" x2="513" y2="419" />
        <line x1="436" y1="464" x2="513" y2="508" />
        <line x1="590" y1="464" x2="513" y2="508" />
        <line x1="513" y1="508" x2="513" y2="598" />
      </g>

      <g className="pv-net-cube-nodes">
        <circle cx="513" cy="419" r="13" />
        <circle cx="436" cy="464" r="13" />
        <circle cx="590" cy="464" r="13" />
        <circle cx="436" cy="553" r="13" />
        <circle cx="590" cy="553" r="13" />
        <circle cx="513" cy="598" r="13" />
      </g>
    </svg>
  );
}

function ComputeNodes({ cloud }: { cloud: boolean }) {
  const Icon = cloud ? IconCloud : IconDeviceLaptop;
  const label = cloud ? "Cloud GPU" : "Personal GPU";
  return (
    <div className="pv-nodes">
      <h3>{label} nodes</h3>
      {[0, 1, 2].map((i) => (
        <div className="pv-node" key={i}>
          <Icon size={30} stroke={1.5} aria-hidden="true" />
          <div>
            <strong>{label}</strong>
            <span>
              <i />
              Contributing
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniSteps({
  items,
  symbols,
}: {
  items: readonly string[];
  symbols: readonly (typeof IconUser)[];
}) {
  return (
    <ol className="pv-steps">
      {items.map((label, i) => {
        const Icon = symbols[i] ?? IconCircleCheck;
        return (
          <li key={label}>
            <span className="pv-steps__icon">
              <Icon size={25} stroke={1.5} aria-hidden="true" />
            </span>
            <span>{label}</span>
            {i < items.length - 1 && (
              <IconArrowRight
                className="pv-steps__arrow"
                size={15}
                aria-hidden="true"
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function SceneContent({ scene }: { scene: ProductScene }) {
  const Icon = icons[scene.icon];
  if (scene.kind === "messages")
    return (
      <div className="pv-messages">
        {scene.steps.map((step, i) => (
          <div key={step} className="pv-message">
            <IconMessageCircle size={20} stroke={1.5} aria-hidden="true" />
            <div>
              <span>
                {i === 0 ? "Team channel" : i === 1 ? "Update" : "Follow-up"}
              </span>
              <strong>{step}</strong>
            </div>
          </div>
        ))}
      </div>
    );
  if (scene.kind === "schedule")
    return (
      <div className="pv-schedule">
        <div className="pv-schedule__heading">
          <IconCalendar size={32} stroke={1.5} aria-hidden="true" />
          <span>Scheduled workflow</span>
        </div>
        {scene.steps.map((step) => (
          <div className="pv-scene-row" key={step}>
            <IconClock size={19} aria-hidden="true" />
            <span>{step}</span>
          </div>
        ))}
      </div>
    );
  if (scene.kind === "review")
    return (
      <div className="pv-review">
        <div className="pv-review__subject">
          <Icon size={36} stroke={1.5} aria-hidden="true" />
          <span>Review workspace</span>
        </div>
        {scene.steps.map((step, i) => (
          <div className="pv-scene-row" key={step}>
            {i === 2 ? (
              <IconShieldCheck size={20} aria-hidden="true" />
            ) : (
              <IconPaperclip size={20} aria-hidden="true" />
            )}
            <span>{step}</span>
          </div>
        ))}
      </div>
    );
  if (scene.kind === "resources")
    return (
      <div className="pv-resource-list">
        {scene.steps.map((step, i) => (
          <div className="pv-resource" key={step}>
            {i === 0 ? (
              <Icon size={26} stroke={1.5} aria-hidden="true" />
            ) : (
              <IconFolder size={26} stroke={1.5} aria-hidden="true" />
            )}
            <span>{step}</span>
            <IconArrowRight size={16} aria-hidden="true" />
          </div>
        ))}
      </div>
    );
  if (scene.kind === "network")
    return (
      <div className="pv-network-scene">
        <div className="pv-network-scene__hub">
          <Icon size={38} stroke={1.4} aria-hidden="true" />
          <span>Connected context</span>
        </div>
        <MiniSteps
          items={scene.steps}
          symbols={[IconSitemap, IconArrowsExchange, IconUsers]}
        />
      </div>
    );
  return (
    <div className="pv-workflow">
      <div className="pv-workflow__subject">
        <Icon size={38} stroke={1.5} aria-hidden="true" />
        <span>From intent to outcome</span>
      </div>
      <MiniSteps
        items={scene.steps}
        symbols={[IconClipboardText, IconGitBranch, IconCircleCheck]}
      />
    </div>
  );
}
