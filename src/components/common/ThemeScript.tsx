"use client";

import { useServerInsertedHTML } from "next/navigation";

export default function ThemeScript() {
  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var s=localStorage.getItem("craftly-theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){}try{if(window.location.pathname==="/"&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("intro-active","intro-hold");}}catch(e){}})();`,
        }}
      />
    );
  });

  return null;
}
