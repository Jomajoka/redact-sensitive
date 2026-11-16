export interface RedactOptions {
  replacement?: string;
  only?: string[];
  except?: string[];
  keepLabels?: boolean;
  custom?: Array<{ pattern: string | RegExp; flags?: string; replacement?: string }>;
}

export interface SensitiveMatch {
  type: string;
  value: string;
}

export function redact(input: string, options?: RedactOptions): string;
export function redactObject<T>(value: T, options?: RedactOptions): T;
export function findSensitive(input: string): SensitiveMatch[];
