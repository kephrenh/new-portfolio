/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (data: any) => JSON.parse(JSON.stringify(data));

export const ensureError = (value: unknown): Error => {
  if (value instanceof Error) return value;

  let stringified = "[Unable to stringify the thrown value]";

  try {
    stringified = JSON.stringify(value);
  } catch {}
  const error = new Error(`This value was thrown as is, not through an Error: ${stringified}`);
  return error;
};
