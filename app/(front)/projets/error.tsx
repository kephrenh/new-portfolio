"use client"; // Error boundaries must be Client Components

import { ErrorDisplay } from "@/components/error-display";
import { ensureError } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Log the error to an error reporting service
    const err = ensureError(error);
    setMessage(err);
    console.error(error);
  }, [error]);

  return (
    <>
      <h1>Projects Page Error</h1>
      <ErrorDisplay message={message} reset={reset} />
    </>
  );
}
