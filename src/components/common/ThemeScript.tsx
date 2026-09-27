"use client";

import { useServerInsertedHTML } from "next/navigation";

export default function ThemeScript() {
  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var s=localStorage.getItem("craftly-theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){}try{var isMob=(window.innerWidth&&window.innerWidth<768)||/Mobi|Android|iPhone|iPad|iPod|FBAN|FBAV|Instagram/i.test(navigator.userAgent);var seen=false;try{seen=!!sessionStorage.getItem("craftly-intro-seen");}catch(e){}var isHome=window.location.pathname==="/"||window.location.pathname==="";var isRed=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(isHome&&!isMob&&!seen&&!isRed){document.documentElement.classList.add("intro-active","intro-hold");}else{document.documentElement.classList.remove("intro-active","intro-hold");}}catch(e){}})();`,
        }}
      />
    );
  });

  return null;
}
