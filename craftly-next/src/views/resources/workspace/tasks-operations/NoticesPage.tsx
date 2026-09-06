import { IconFileDescription, IconUsers, IconBell } from "@tabler/icons-react";
import DocPage from "../../DocPage";
import { useScrollReveal } from "../../../../hooks/useScrollReveal";
import "./NoticesPage.css";

const sampleNotices = [
  { title: "Workspace update", icon: IconFileDescription },
  { title: "Team briefing", icon: IconUsers },
  { title: "Submission reminder", icon: IconBell },
] as const;

export default function NoticesPage() {
  const visualRef = useScrollReveal();
  return (
    <DocPage
      title="Notice Board — Craftly Workspace"
      description="Notice Board in Craftly Workspace"
      crumbs={["Documentation", "Craftly Workspace", "Tasks & Operations", "Notice Board"]}
      pageId="notice-board"
      pageTitle="Notice Board"
      tocItems={[{ id: "notice-board", label: "Notice Board" }]}
    >
      <p className="docs__text">
        The Notice Board is the official place for sharing organizational
        notices and messages.
      </p>

      <p className="docs__text">
        Any official announcement, important message, update, instruction, or
        information that needs to be communicated to members can be published on
        the Notice Board.
      </p>

      <div ref={visualRef} className="notice-preview reveal">
        <figure aria-labelledby="notice-preview-title" aria-describedby="notice-preview-caption">
          <figcaption className="notice-preview__header">
            <h2 id="notice-preview-title">Notice Board</h2>
            <p id="notice-preview-caption">Sample notices</p>
          </figcaption>
          <div className="notice-preview__body">
            <ul className="notice-preview__list" aria-label="Sample notices">
              {sampleNotices.map(({ title, icon: Icon }, index) => (
                <li key={title} className={index === 0 ? "notice-preview__item notice-preview__item--selected" : "notice-preview__item"}>
                  <Icon size={32} stroke={1.5} aria-hidden="true" />
                  <span>{title}{index === 0 && <span className="sr-only"> — shown in detail</span>}</span>
                </li>
              ))}
            </ul>
            <div className="notice-preview__detail">
              <p className="notice-preview__eyebrow">Organization update</p>
              <h3>Workspace update</h3>
              <p className="notice-preview__message">
                The latest workspace guidance is now available. Review the shared
                resources before your next task.
              </p>
              <p className="notice-preview__audience">For all members</p>
            </div>
          </div>
        </figure>
      </div>
    </DocPage>
  );
}
