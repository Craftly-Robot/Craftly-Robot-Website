/**
 * Animation timing constants for consistent motion across the site.
 */
export const ANIMATION = {
  /* Durations */
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  SLOWER: 800,

  /* Easing */
  EASE_OUT: 'cubic-bezier(0.16, 1, 0.3, 1)',
  EASE_IN_OUT: 'cubic-bezier(0.45, 0, 0.55, 1)',
  EASE_SPRING: 'cubic-bezier(0.34, 1.56, 0.64, 1)',

  /* Scroll reveal defaults */
  REVEAL_THRESHOLD: 0.15,
  REVEAL_ROOT_MARGIN: '0px 0px -60px 0px',

  /* Stagger delay per item (ms) */
  STAGGER_DELAY: 80,
} as const;
