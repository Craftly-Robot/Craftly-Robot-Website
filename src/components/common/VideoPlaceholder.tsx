import "./VideoPlaceholder.css";

interface VideoPlaceholderProps {
  label: string;
}

export default function VideoPlaceholder({ label }: VideoPlaceholderProps) {
  return (
    <div className="video-placeholder">
      {/* Floating Mock UI Panels */}
      <div className="mock-panel mock-panel--main">
        <div className="mock-panel__header">
          <div className="mock-panel__dots">
            <span />
            <span />
            <span />
          </div>
          <div className="mock-panel__title">{label}</div>
        </div>
        <div className="mock-panel__body">
          <div className="mock-line mock-line--lg" />
          <div className="mock-line mock-line--md" />
          <div className="mock-line mock-line--sm" />
          <div className="mock-box" />
        </div>
      </div>

      <div className="mock-panel mock-panel--side mock-panel--right">
        <div className="mock-panel__header">
          <div className="mock-panel__title">Agent Status</div>
        </div>
        <div className="mock-panel__body">
          <div className="mock-circle" />
          <div className="mock-line mock-line--sm" />
          <div className="mock-line mock-line--sm" style={{ width: "40%" }} />
        </div>
      </div>

      <div className="mock-panel mock-panel--side mock-panel--left">
        <div className="mock-panel__header">
          <div className="mock-panel__title">Execution Trace</div>
        </div>
        <div className="mock-panel__body">
          <div className="mock-line mock-line--code" />
          <div
            className="mock-line mock-line--code"
            style={{ width: "70%", marginLeft: "12px" }}
          />
          <div className="mock-line mock-line--code" style={{ width: "85%" }} />
        </div>
      </div>
    </div>
  );
}
