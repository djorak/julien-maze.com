export const BREAKPOINTS = {
  sm: '36em',
  md: '48em',
  lg: '62em',
  xl: '75em',
  xxl: '87.5em',
};

export const mq = (breakpoint) =>
  `@media (min-width: ${BREAKPOINTS[breakpoint]})`;
