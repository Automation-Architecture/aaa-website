import * as yup from "yup";

const domainValidator = (val: string | undefined) => {
  if (!val) return false;
  try {
    const url = new URL(
      val.startsWith("http://") || val.startsWith("https://")
        ? val
        : `https://${val}`
    );
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

export const blueprintStepFormSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  companyName: yup.string().required("Company name is required"),
  companyDomain: yup
    .string()
    .required("Company website or domain is required")
    .test(
      "valid-url",
      "Please enter a valid website (e.g. example.com or https://example.com)",
      domainValidator
    ),
  companyServiceOrProduct: yup
    .string()
    .required("Please describe your company's service or product"),
  icp: yup
    .string()
    .required("ICP is required")
    .min(5, "Please enter at least 5 characters so we can tailor your report."),
  companyPainPoint: yup
    .string()
    .required("Please share your company's biggest pain point"),
});

export type BlueprintStepFormData = yup.InferType<typeof blueprintStepFormSchema>;

export const defaultBlueprintFormValues: BlueprintStepFormData = {
  email: "",
  firstName: "",
  lastName: "",
  companyName: "",
  companyDomain: "",
  companyServiceOrProduct: "",
  icp: "",
  companyPainPoint: "",
};
