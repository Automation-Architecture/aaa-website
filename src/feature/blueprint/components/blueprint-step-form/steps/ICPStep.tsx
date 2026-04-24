"use client";

import { Control, Controller } from "react-hook-form";
import { TypeformTextarea } from "../TypeformInput";
import { icpQuestion } from "../config";
import type { BlueprintStepFormData } from "../schema";

interface ICPStepProps {
  control: Control<BlueprintStepFormData>;
  errorText?: string;
  onEnter?: () => void;
}

export default function ICPStep({ control, errorText, onEnter }: ICPStepProps) {
  return (
    <Controller
      control={control}
      name="icp"
      render={({ field }) => (
        <TypeformTextarea
          placeholder={icpQuestion.placeholder}
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          onBlur={field.onBlur}
          ref={field.ref}
          helperText={icpQuestion.helperText}
          errorText={errorText}
          rows={icpQuestion.rows ?? 4}
          onEnter={onEnter}
        />
      )}
    />
  );
}
