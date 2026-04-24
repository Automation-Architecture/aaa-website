"use client";

import { Control, Controller } from "react-hook-form";
import { TypeformInput, TypeformTextarea } from "../TypeformInput";
import type { SingleFieldQuestionConfig } from "../config";
import type { BlueprintStepFormData } from "../schema";

interface SingleFieldStepProps {
  control: Control<BlueprintStepFormData>;
  name: keyof BlueprintStepFormData;
  config: SingleFieldQuestionConfig;
  errorText?: string;
  onEnter?: () => void;
}

export default function SingleFieldStep({
  control,
  name,
  config,
  errorText,
  onEnter,
}: SingleFieldStepProps) {
  const isTextarea = config.type === "textarea";

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) =>
        isTextarea ? (
          <TypeformTextarea
            placeholder={config.placeholder}
            value={field.value ?? ""}
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur}
            ref={field.ref}
            helperText={config.helperText}
            errorText={errorText}
            rows={config.rows ?? 3}
            onEnter={onEnter}
          />
        ) : (
          <TypeformInput
            type={config.type === "url" ? "url" : "text"}
            inputMode={config.type === "url" ? "url" : undefined}
            autoComplete={config.type === "url" ? "url" : undefined}
            placeholder={config.placeholder}
            value={field.value ?? ""}
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur}
            ref={field.ref}
            helperText={config.helperText}
            errorText={errorText}
            onEnter={onEnter}
          />
        )
      }
    />
  );
}
