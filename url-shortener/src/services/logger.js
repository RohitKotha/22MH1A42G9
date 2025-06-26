export function useLogger() {
  return {
    log: (...args) => console.log('[LOG]:', ...args),
    error: (...args) => console.error('[ERROR]:', ...args),
  };
}
