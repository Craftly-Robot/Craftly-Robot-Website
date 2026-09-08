"use client";

import { Suspense, lazy, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import animationData from "../../public/assets/animations/404.json";
import "./NotFoundPage.css";

const Lottie = lazy(() => import("lottie-react").then((m) => ({ default: m.Lottie })));

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("hide-footer");
    return () => {
      document.body.classList.remove("hide-footer");
    };
  }, []);

  return (
    <div className="not-found-page">
      <div className="not-found-header">
        <button onClick={() => router.back()} className="not-found-back">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </button>
      </div>{" "}
      <div className="not-found-content">
        <div className="not-found-animation">
          <Suspense fallback={null}>
            <Lottie src={animationData} loop={true} autoplay={true} />
          </Suspense>
        </div>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-text">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="not-found-btn">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
