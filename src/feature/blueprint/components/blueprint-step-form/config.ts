import type { BlueprintStepFormData } from "./schema";

export type StepKey =
  | "personal"
  | "companyName"
  | "companyDomain"
  | "companyService"
  | "icp"
  | "painPoint"
  | "review";

export interface StepMeta {
  key: StepKey;
  title: string;
  description: string;
}

export const steps: StepMeta[] = [
  {
    key: "personal",
    title: "Your information",
    description: "We'll use this to send your report and personalize it.",
  },
  {
    key: "companyName",
    title: "Company name",
    description: "What is your company called?",
  },
  {
    key: "companyDomain",
    title: "Company website",
    description: "Your company's website",
  },
  {
    key: "companyService",
    title: "Your Offer",
    description: "Describe your company's main service or product.",
  },
  {
    key: "icp",
    title: "Your Ideal Customer Profile (ICP)",
    description: "Describe your ICP: who they are, and what their problems are.",
  },
  {
    key: "painPoint",
    title: "Biggest challenge",
    description:
      "What's the biggest pain point (e.g. manual processes, targeting quality leads, etc.)",
  },
  {
    key: "review",
    title: "Review & Submit",
    description:
      "Please confirm your submission. Use the back button if you have any changes.",
  },
];

export type PersonalFieldKey = "email" | "firstName" | "lastName";

export interface PersonalQuestionConfig {
  field: PersonalFieldKey;
  label: string;
  description: string;
  placeholder: string;
  helperText?: string;
  type?: string;
  autoComplete?: string;
}

export const personalQuestions: PersonalQuestionConfig[] = [
  {
    field: "email",
    label: "Your Email",
    description: "We'll send your AI opportunity report to this address.",
    placeholder: "Type your answer",
    type: "email",
    autoComplete: "email",
  },
  {
    field: "firstName",
    label: "First Name",
    description: "So we can personalize your report.",
    placeholder: "Type your answer",
    autoComplete: "given-name",
  },
  {
    field: "lastName",
    label: "Last Name",
    description: "So we can personalize your report.",
    placeholder: "Type your answer",
    autoComplete: "family-name",
  },
];

export interface SingleFieldQuestionConfig {
  placeholder: string;
  helperText?: string;
  type?: "text" | "url" | "textarea";
  rows?: number;
}

export const companyNameQuestion: SingleFieldQuestionConfig = {
  placeholder: "Type your answer",
};

export const companyDomainQuestion: SingleFieldQuestionConfig = {
  placeholder: "Type your answer",
  type: "url",
};

export const companyServiceQuestion: SingleFieldQuestionConfig = {
  placeholder: "Type your answer",
  type: "textarea",
  rows: 3,
};

export const icpQuestion: SingleFieldQuestionConfig = {
  placeholder: "Type your answer",
  type: "textarea",
  rows: 4,
};

export const painPointQuestion: SingleFieldQuestionConfig = {
  placeholder: "Type your answer",
  type: "textarea",
  rows: 3,
};

export type { BlueprintStepFormData };
