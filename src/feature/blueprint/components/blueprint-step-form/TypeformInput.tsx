"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TypeformInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  className?: string;
  helperText?: React.ReactNode;
  errorText?: string;
  onEnter?: () => void;
}

export const TypeformInput = React.forwardRef<
  HTMLInputElement,
  TypeformInputProps
>(({ className, helperText, errorText, onEnter, onKeyDown, ...props }, ref) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) onKeyDown(e);
    if (e.defaultPrevented) return;
    if (e.key === "Enter" && !e.shiftKey && onEnter) {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <input
        ref={ref}
        className={cn(
          "w-full bg-transparent py-3 text-lg text-brand-white placeholder:text-brand-gray/60",
          "border-0 border-b-2 border-brand-gray2/30 outline-none transition-[border-color,border-width] duration-200",
          "focus:border-brand-lime focus:border-b-[3px]",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
        onKeyDown={handleKeyDown}
        {...props}
      />
      {helperText && !errorText && (
        <p className="mt-2 text-sm text-brand-gray">{helperText}</p>
      )}
      {errorText && (
        <p className="mt-2 text-sm text-red-400">{errorText}</p>
      )}
    </div>
  );
});
TypeformInput.displayName = "TypeformInput";

export interface TypeformTextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  className?: string;
  helperText?: React.ReactNode;
  errorText?: string;
  onEnter?: () => void;
}

export const TypeformTextarea = React.forwardRef<
  HTMLTextAreaElement,
  TypeformTextareaProps
>(({ className, helperText, errorText, onEnter, onKeyDown, ...props }, ref) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (onKeyDown) onKeyDown(e);
    if (e.defaultPrevented) return;
    if (e.key === "Enter" && !e.shiftKey && onEnter) {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <textarea
        ref={ref}
        className={cn(
          "min-h-[120px] w-full resize-y bg-transparent py-3 text-lg text-brand-white placeholder:text-brand-gray/60",
          "border-0 border-b-2 border-brand-gray2/30 outline-none transition-[border-color,border-width] duration-200",
          "focus:border-brand-lime focus:border-b-[3px]",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
        onKeyDown={handleKeyDown}
        {...props}
      />
      {helperText && !errorText && (
        <p className="mt-2 text-sm text-brand-gray">{helperText}</p>
      )}
      {errorText && (
        <p className="mt-2 text-sm text-red-400">{errorText}</p>
      )}
    </div>
  );
});
TypeformTextarea.displayName = "TypeformTextarea";
