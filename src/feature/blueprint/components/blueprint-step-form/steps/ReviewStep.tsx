import type { BlueprintStepFormData } from "../schema";

interface ItemProps {
  label: string;
  value: string | undefined;
}

function Item({ label, value }: ItemProps) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-gray">
        {label}
      </p>
      <p className="text-sm text-brand-white">
        {value?.trim() ? value : (
          <span className="opacity-40">Not provided</span>
        )}
      </p>
    </div>
  );
}

export default function ReviewStep({ data }: { data: BlueprintStepFormData }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Item label="Work email" value={data.email} />
        <Item label="First name" value={data.firstName} />
        <Item label="Last name" value={data.lastName} />
        <Item label="Company name" value={data.companyName} />
        <Item label="Company website" value={data.companyDomain} />
      </div>
      <div className="space-y-4 rounded-lg border border-dashed border-brand-gray2/30 bg-white/5 px-4 py-3">
        <Item label="Your Service / Product" value={data.companyServiceOrProduct} />
        <Item label="Your ideal customer (ICP)" value={data.icp} />
        <Item label="Your biggest pain point" value={data.companyPainPoint} />
      </div>
    </div>
  );
}
