export const waitFor = (ms: number) => {
  const start = Date.now();
  let now = start;
  while (now - start <= ms) {
    now = Date.now();
  }
};
