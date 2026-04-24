"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AlertCircle, Check, ChevronDown, ChevronUp, ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  blueprintStepFormSchema,
  defaultBlueprintFormValues,
  type BlueprintStepFormData,
} from "./schema";
import {
  steps,
  personalQuestions,
  companyNameQuestion,
  companyDomainQuestion,
  companyServiceQuestion,
  painPointQuestion,
} from "./config";
import PersonalStep from "./steps/PersonalStep";
import SingleFieldStep from "./steps/SingleFieldStep";
import ICPStep from "./steps/ICPStep";
import ReviewStep from "./steps/ReviewStep";

const FORM_REPORT_API = "/api/blueprint/form-report";

const PERSONAL_SCREENS = 3;
const SINGLE_STEPS = 5;
const TOTAL_SCREENS = PERSONAL_SCREENS + SINGLE_STEPS + 1;

function getScreenIndex(stepIndex: number, personalSubIndex: number): number {
  if (stepIndex === 0) return personalSubIndex;
  return PERSONAL_SCREENS + (stepIndex - 1);
}

const isSingleStep = (key: string) =>
  key === "companyName" ||
  key === "companyDomain" ||
  key === "companyService" ||
  key === "painPoint";

export function BlueprintStepForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [personalSubIndex, setPersonalSubIndex] = useState<0 | 1 | 2>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [duplicateReport, setDuplicateReport] = useState<{
    shareUrl: string;
    message?: string;
  } | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const form = useForm<BlueprintStepFormData>({
    resolver: yupResolver(blueprintStepFormSchema),
    defaultValues: defaultBlueprintFormValues,
    mode: "onTouched",
  });

  const { control, trigger, formState, watch } = form;
  const formData = watch();
  const errors = formState.errors;

  const currentStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;
  const screenIndex = getScreenIndex(currentStepIndex, personalSubIndex);

  const completion = useMemo(
    () => (isSubmitted ? 100 : ((screenIndex + 1) / TOTAL_SCREENS) * 100),
    [screenIndex, isSubmitted]
  );

  const canGoNext = useMemo(() => {
    if (currentStep.key === "personal") {
      const field = personalQuestions[personalSubIndex].field;
      return (formData[field] as string).trim().length > 0;
    }
    if (currentStep.key === "companyName")
      return formData.companyName.trim().length > 0;
    if (currentStep.key === "companyDomain")
      return formData.companyDomain.trim().length > 0;
    if (currentStep.key === "companyService")
      return formData.companyServiceOrProduct.trim().length > 0;
    if (currentStep.key === "icp") return formData.icp.trim().length >= 5;
    if (currentStep.key === "painPoint")
      return formData.companyPainPoint.trim().length > 0;
    return true;
  }, [currentStep.key, formData, personalSubIndex]);

  const getFieldsToValidate = (): (keyof BlueprintStepFormData)[] => {
    if (currentStep.key === "personal")
      return [personalQuestions[personalSubIndex].field];
    if (currentStep.key === "companyName") return ["companyName"];
    if (currentStep.key === "companyDomain") return ["companyDomain"];
    if (currentStep.key === "companyService") return ["companyServiceOrProduct"];
    if (currentStep.key === "icp") return ["icp"];
    if (currentStep.key === "painPoint") return ["companyPainPoint"];
    return [];
  };

  const handleNext = async () => {
    const fieldsToValidate = getFieldsToValidate();
    if (fieldsToValidate.length > 0) {
      const valid = await trigger(fieldsToValidate);
      if (!valid) return;
    }
    if (isLastStep && currentStep.key === "review") {
      handleSubmitForm();
      return;
    }
    if (currentStep.key === "personal" && personalSubIndex < 2) {
      setPersonalSubIndex((prev) => (prev + 1) as 0 | 1 | 2);
      return;
    }
    setPersonalSubIndex(0);
    setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    if (currentStep.key === "personal" && personalSubIndex > 0) {
      setPersonalSubIndex((prev) => (prev - 1) as 0 | 1 | 2);
      return;
    }
    if (currentStepIndex === 0 || isSubmitting) return;
    const nextStep = currentStepIndex - 1;
    setCurrentStepIndex(nextStep);
    if (nextStep === 0) setPersonalSubIndex(2);
  };

  const onSubmit = async (data: BlueprintStepFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(false);
      setDuplicateReport(null);

      const res = await fetch(FORM_REPORT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (res.status === 409) {
        let payload: { share_token?: string; error?: string } | null = null;
        try {
          payload = await res.json();
        } catch {
          payload = null;
        }
        const shareToken =
          typeof payload?.share_token === "string" ? payload.share_token : "";
        const message =
          typeof payload?.error === "string" ? payload.error : undefined;
        if (shareToken) {
          setDuplicateReport({
            shareUrl: `https://www.pipelineiq.app/share/${shareToken}`,
            message,
          });
          return;
        }
        setSubmitError(true);
        return;
      }

      if (!res.ok) {
        setSubmitError(true);
        return;
      }

      setSubmittedEmail(data.email);
      setIsSubmitted(true);
    } catch (err) {
      console.error("[BlueprintStepForm] Submit error:", err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitForm = form.handleSubmit(onSubmit);

  const currentLabel = useMemo(() => {
    if (currentStep.key === "personal")
      return personalQuestions[personalSubIndex].label;
    return currentStep.title;
  }, [currentStep, personalSubIndex]);

  const currentDescription = useMemo(() => {
    if (currentStep.key === "personal")
      return personalQuestions[personalSubIndex].description;
    return currentStep.description;
  }, [currentStep, personalSubIndex]);

  if (submitError) {
    return (
      <div className="flex flex-col items-start gap-4 animate-fade-in-slide-up">
        <div className="inline-flex size-10 items-center justify-center rounded-full bg-red-500/20">
          <AlertCircle className="size-5 text-red-400" />
        </div>
        <h2 className="text-[1.25rem] font-bold text-brand-white">
          Something went wrong
        </h2>
        <p className="text-[0.9375rem] leading-relaxed text-brand-gray">
          We couldn&apos;t process your submission. Please try again.
        </p>
        <Button
          onClick={() => setSubmitError(false)}
          className="mt-2 h-[42px] rounded-[10px] px-6 font-bold"
        >
          <RefreshCw className="mr-2 size-4" />
          Try again
        </Button>
      </div>
    );
  }

  if (duplicateReport) {
    return (
      <div className="flex flex-col items-start gap-4 animate-fade-in-slide-up">
        <div className="inline-flex size-10 items-center justify-center rounded-full bg-brand-lime/20">
          <Check className="size-5 text-brand-lime" />
        </div>
        <h2 className="text-[1.25rem] font-bold text-brand-white">
          Report already exists
        </h2>
        <p className="text-[0.9375rem] leading-relaxed text-brand-gray">
          {duplicateReport.message ??
            "We already have a report for this email. You can view it using the link below."}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={duplicateReport.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[42px] items-center gap-2 rounded-[10px] bg-brand-lime px-6 text-[0.9375rem] font-bold text-brand-black hover:bg-brand-lime/90"
          >
            View my report
            <ExternalLink className="size-4" />
          </a>
          <Button
            variant="outline"
            onClick={() => setDuplicateReport(null)}
            className="h-[42px] rounded-[10px] border-brand-gray2/30 bg-white/5 px-5 text-brand-white hover:bg-white/10"
          >
            Back to form
          </Button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-start gap-4 animate-fade-in-slide-up">
        <div className="inline-flex size-10 items-center justify-center rounded-full bg-brand-lime">
          <Check className="size-5 text-brand-black" />
        </div>
        <h2 className="text-[1.375rem] font-bold text-brand-white min-[1025px]:text-[1.5rem]">
          Thank you!
        </h2>
        <p className="text-[0.9375rem] leading-relaxed text-brand-gray">
          We&apos;ve received your information and will generate your tailored AI
          opportunity report. We&apos;ll send the results to{" "}
          <strong className="text-brand-white">{submittedEmail}</strong> once
          it&apos;s ready — please check that inbox (and your spam folder).
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Progress bar */}
      <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-brand-lime transition-all duration-300 ease-out"
          style={{ width: `${Math.max(2, completion)}%` }}
        />
      </div>

      {/* Step content */}
      <div
        key={`${currentStepIndex}-${personalSubIndex}`}
        className="animate-fade-in-slide-up"
      >
        <h2 className="text-[1.25rem] font-bold text-brand-white min-[1025px]:text-[1.375rem]">
          {currentLabel}
        </h2>
        <p className="mt-1 text-[0.875rem] text-brand-gray min-[1025px]:text-[1rem]">
          {currentDescription}
        </p>

        <div className="mt-5">
          {currentStep.key === "personal" && (
            <PersonalStep
              control={control}
              fieldIndex={personalSubIndex}
              errorText={errors[personalQuestions[personalSubIndex].field]?.message}
              onEnter={handleNext}
            />
          )}
          {currentStep.key === "companyName" && (
            <SingleFieldStep
              control={control}
              name="companyName"
              config={companyNameQuestion}
              errorText={errors.companyName?.message}
              onEnter={handleNext}
            />
          )}
          {currentStep.key === "companyDomain" && (
            <SingleFieldStep
              control={control}
              name="companyDomain"
              config={companyDomainQuestion}
              errorText={errors.companyDomain?.message}
              onEnter={handleNext}
            />
          )}
          {currentStep.key === "companyService" && (
            <SingleFieldStep
              control={control}
              name="companyServiceOrProduct"
              config={companyServiceQuestion}
              errorText={errors.companyServiceOrProduct?.message}
              onEnter={handleNext}
            />
          )}
          {currentStep.key === "icp" && (
            <ICPStep
              control={control}
              errorText={errors.icp?.message}
              onEnter={handleNext}
            />
          )}
          {currentStep.key === "painPoint" && (
            <SingleFieldStep
              control={control}
              name="companyPainPoint"
              config={painPointQuestion}
              errorText={errors.companyPainPoint?.message}
              onEnter={handleNext}
            />
          )}
          {currentStep.key === "review" && (
            <div className="animate-fade-in-slide-up">
              <ReviewStep data={formData} />
            </div>
          )}
        </div>

        {/* Actions */}
        {currentStep.key !== "review" ? (
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleBack}
                disabled={
                  (currentStepIndex === 0 && personalSubIndex === 0) ||
                  isSubmitting
                }
                className="size-9 rounded-lg border-brand-gray2/30 bg-white/5 text-brand-white hover:bg-white/10 disabled:opacity-30"
                aria-label="Previous"
              >
                <ChevronUp className="size-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={!canGoNext || isSubmitting}
                className="size-9 rounded-lg border-brand-lime bg-brand-lime text-brand-black hover:bg-brand-lime/90 disabled:opacity-30"
                aria-label="Next"
              >
                <ChevronDown className="size-4" />
              </Button>
            </div>
            <Button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext || isSubmitting}
              className="h-[42px] rounded-[10px] px-6 text-[0.9375rem] font-bold"
            >
              {currentStep.key === "personal" && personalSubIndex < 2
                ? "OK"
                : isSingleStep(currentStep.key) || currentStep.key === "icp"
                  ? "OK"
                  : "Next"}
            </Button>
          </div>
        ) : (
          <div className="mt-6 flex gap-3">
            <Button
              type="button"
              onClick={handleBack}
              variant="outline"
              className="h-[42px] rounded-[10px] border-brand-gray2/30 bg-white/5 px-5 text-brand-white hover:bg-white/10"
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={handleSubmitForm}
              disabled={isSubmitting}
              className="h-[42px] rounded-[10px] px-6 font-bold"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              {!isSubmitting && <Check className="ml-1.5 size-4" />}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
