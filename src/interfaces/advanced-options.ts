export interface AdvancedOptions {
  // A set of custom backoff strategies keyed by name.
  backoffStrategies?: {};
  disableRun?: boolean;
}

export const AdvancedOptionsDefaults: AdvancedOptions = {
  backoffStrategies: {},
  disableRun: false,
};
