"use client";

import { useState, useEffect } from "react";

type OS = "Windows" | "macOS" | "Linux" | "Android" | "iOS" | "Unknown";

function detectOS(): OS {
  if (typeof window === "undefined") return "Unknown";

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (/android/i.test(userAgent)) {
    return "Android";
  } else if (
    /iphone|ipad|ipod/i.test(userAgent) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1)
  ) {
    return "iOS";
  } else if (userAgent.indexOf("win") !== -1) {
    return "Windows";
  } else if (userAgent.indexOf("mac") !== -1) {
    return "macOS";
  } else if (userAgent.indexOf("linux") !== -1) {
    return "Linux";
  }

  return "Unknown";
}

export function useOS(): OS {
  const [os, setOs] = useState<OS>("Unknown");

  useEffect(() => {
    setOs(detectOS());
  }, []);

  return os;
}
