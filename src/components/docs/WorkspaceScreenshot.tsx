import { useEffect, useId, useRef, useState } from "react";
import { IconArrowsMaximize, IconX } from "@tabler/icons-react";
import ImageWithFallback from "../common/ImageWithFallback";
import type { WorkspaceScreenshot as Screenshot } from "../../data/docs/workspaceScreenshots";
import "./WorkspaceScreenshot.css";

interface Props {
  screenshot: Screenshot;
}

function ScreenshotDialog({ screenshot, onDismiss }: Props & { onDismiss: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [actualSize, setActualSize] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function changeSize(value: boolean) {
    setActualSize(value);
    viewportRef.current?.scrollTo(0, 0);
  }

  function dismiss() {
    // Close before unmounting so focus can return to the image trigger.
    dialogRef.current?.close();
    onDismiss();
  }

  return (
    <dialog
      ref={dialogRef}
      className="workspace-screenshot-dialog"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <div className="workspace-screenshot-dialog__layout">
        <header className="workspace-screenshot-dialog__header">
          <p id={titleId} className="workspace-screenshot-dialog__title">{screenshot.title}</p>
          <button
            type="button"
            className="workspace-screenshot-dialog__close"
            aria-label="Close screenshot"
            onClick={dismiss}
            autoFocus
          >
            <IconX size={20} stroke={1.5} aria-hidden="true" />
          </button>
        </header>
        <div className="workspace-screenshot-dialog__toolbar" role="group" aria-label="Screenshot size">
          <button type="button" aria-pressed={!actualSize} onClick={() => changeSize(false)}>Fit screen</button>
          <button type="button" aria-pressed={actualSize} onClick={() => changeSize(true)}>Actual size (100%)</button>
        </div>
        <div
          ref={viewportRef}
          className={`workspace-screenshot-dialog__viewport${actualSize ? " workspace-screenshot-dialog__viewport--actual" : ""}`}
          role="region"
          aria-label={actualSize ? "Screenshot at actual size. Scroll to explore." : "Full screenshot"}
          tabIndex={0}
        >
          {failed ? (
            <p className="workspace-screenshot__unavailable">This screenshot could not be loaded. Close this view and try again.</p>
          ) : (
            <ImageWithFallback
              src={screenshot.src}
              alt={screenshot.alt}
              width={screenshot.width}
              height={screenshot.height}
              style={actualSize ? { width: screenshot.width, height: screenshot.height } : undefined}
              onError={() => setFailed(true)}
              draggable={false}
            />
          )}
        </div>
        <footer className="workspace-screenshot-dialog__footer">
          <p id={descriptionId}>{screenshot.description}</p>
          <p className="workspace-screenshot-dialog__hint" aria-live="polite">
            {actualSize ? "Scroll to explore the screen. Choose Fit screen to see the whole layout." : "Choose Actual size to read smaller labels."}
          </p>
        </footer>
      </div>
    </dialog>
  );
}

export default function WorkspaceScreenshot({ screenshot }: Props) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const captionId = useId();

  return (
    <figure className="workspace-screenshot">
      {failed ? (
        <p className="workspace-screenshot__unavailable">This screenshot could not be loaded. Follow the instructions on this page.</p>
      ) : (
        <button
          ref={triggerRef}
          type="button"
          className="workspace-screenshot__trigger"
          aria-label={`Enlarge screenshot: ${screenshot.title}`}
          aria-describedby={captionId}
          aria-haspopup="dialog"
          onClick={() => setOpen(true)}
        >
          <ImageWithFallback
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
          <span className="workspace-screenshot__expand">
            <IconArrowsMaximize size={16} stroke={1.5} aria-hidden="true" />
            View full screen
          </span>
        </button>
      )}
      <figcaption id={captionId} className="workspace-screenshot__caption">
        <span className="workspace-screenshot__title">{screenshot.title}</span>
        <span>{screenshot.description}</span>
      </figcaption>
      {open && (
        <ScreenshotDialog
          screenshot={screenshot}
          onDismiss={() => {
            setOpen(false);
            triggerRef.current?.focus({ preventScroll: true });
          }}
        />
      )}
    </figure>
  );
}
