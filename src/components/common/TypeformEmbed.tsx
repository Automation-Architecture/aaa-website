"use client";

export function TypeformEmbed() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center gap-6 rounded-lg border-2 border-dashed border-brand-gray/30 p-8 text-center">
      <p className="text-brand-gray">Fill out the AI Blueprint intake form:</p>
      <a
        href="https://pipelineiq.app/new-report"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-[10px] bg-brand-lime px-8 py-3 font-bold text-brand-teal hover:opacity-90 transition-opacity"
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
