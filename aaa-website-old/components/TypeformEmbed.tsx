"use client";

import { useEffect, useRef, useState } from "react";
import { Widget } from "@typeform/embed-react";
import { trackEvent } from "@/lib/analytics";

const TYPEFORM_ID = process.env.NEXT_PUBLIC_TYPEFORM_ID;
const TIMEOUT_MS = 8000;

type EmbedState = "loading" | "loaded" | "fallback";

function Skeleton() {
  return (
    <div
      className="flex min-h-[500px] flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-brand-gray/30 p-8"
      aria-label="Loading intake form..."
    >
      <div className="h-4 w-3/4 animate-pulse rounded bg-brand-gray/20" />
      <div className="h-4 w-1/2 animate-pulse rounded bg-brand-gray/20" />
      <div className="h-4 w-2/3 animate-pulse rounded bg-brand-gray/20" />
      <div className="mt-4 h-10 w-40 animate-pulse rounded bg-brand-gray/20" />
    </div>
  );
}

function Fallback() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center gap-6 rounded-lg border-2 border-dashed border-brand-gray/30 p-8 text-center">
      <p className="text-brand-gray">
        The intake form couldn&rsquo;t load. You can fill it out directly:
      </p>
      <a
        href="https://pipelineiq.app/new-report"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-md bg-brand-lime px-8 py-3 font-bold text-brand-teal hover:opacity-90 transition-opacity"
      >
        Open Blueprint Form
      </a>
      <p className="text-sm text-brand-gray">
        Or email us at{" "}
        <a
          href="mailto:hello@automationarchitecture.ai"
          className="underline hover:text-brand-lime transition-colors"
        >
          hello@automationarchitecture.ai
        </a>
      </p>
    </div>
  );
}

function NoScriptFallback() {
  return (
    <noscript>
      <p>
        JavaScript is required to load the intake form.{" "}
        <a href="https://pipelineiq.app/new-report">
          Fill out the form directly
        </a>.
      </p>
    </noscript>
  );
}

export function TypeformEmbed() {
  const [state, setState] = useState<EmbedState>("loading");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!TYPEFORM_ID) {
      setState("fallback");
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setState((prev) => {
        if (prev === "loading") {
          trackEvent("form_load_error");
          return "fallback";
        }
        return prev;
      });
    }, TIMEOUT_MS);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!TYPEFORM_ID) {
    return (
      <>
        <Fallback />
        <NoScriptFallback />
      </>
    );
  }

  return (
    <>
      {state === "loading" && <Skeleton />}

      <div
        className={state === "loaded" ? "min-h-[500px]" : "h-0 overflow-hidden"}
        aria-hidden={state !== "loaded"}
      >
        <Widget
          id={TYPEFORM_ID}
          style={{ width: "100%", minHeight: 500 }}
          onReady={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setState("loaded");
            trackEvent("form_start");
          }}
          onSubmit={() => {
            trackEvent("generate_lead");
          }}
        />
      </div>

      {state === "fallback" && <Fallback />}

      <NoScriptFallback />
    </>
  );
}
