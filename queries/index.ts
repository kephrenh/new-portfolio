import { ensureError } from "@/lib/utils";

export const getProjects = async () => {
  try {
    const res = await fetch("/api/projects");
    if (!res.ok) {
      throw new Error(`No response from the server: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    const err = ensureError(error);
    throw new Error(err);
  }
};
