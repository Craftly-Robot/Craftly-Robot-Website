"use client";

import { useServerInsertedHTML } from "next/navigation";

export default function ThemeScript() {
  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var s=localStorage.getItem("craftly-theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){}try{var seen=sessionStorage.getItem("craftly-intro-seen");if(!seen&&window.location.pathname==="/"&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("intro-active","intro-hold");sessionStorage.setItem("craftly-intro-seen","1");}else{document.documentElement.classList.remove("intro-active","intro-hold");}}catch(e){}})();`,
        }}
      />
    );
  });

  return null;
}
