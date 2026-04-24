"use client";

import { Control, Controller } from "react-hook-form";
import { TypeformInput } from "../TypeformInput";
import { personalQuestions } from "../config";
import type { BlueprintStepFormData } from "../schema";

interface PersonalStepProps {
  control: Control<BlueprintStepFormData>;
  fieldIndex: 0 | 1 | 2;
  errorText?: string;
  onEnter?: () => void;
}

export default function PersonalStep({
  control,
  fieldIndex,
  errorText,
  onEnter,
}: PersonalStepProps) {
  const config = personalQuestions[fieldIndex];

  return (
    <Controller
      control={control}
      name={config.field}
      render={({ field }) => (
        <TypeformInput
          type={config.type ?? "text"}
          autoComplete={config.autoComplete}
          placeholder={config.placeholder}
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          onBlur={field.onBlur}
          ref={field.ref}
          helperText={config.helperText}
          errorText={errorText}
          onEnter={onEnter}
        />
      )}
    />
  );
}
