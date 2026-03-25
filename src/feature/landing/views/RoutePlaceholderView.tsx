import { Section } from "@/components/common/Section";

interface RoutePlaceholderViewProps {
  title: string;
}

export function RoutePlaceholderView({ title }: RoutePlaceholderViewProps) {
  return (
    <Section className="bg-brand-cream">
      <h1 className="text-4xl font-semibold tablet:text-5xl">{title}</h1>
      <p className="mt-4 text-brand-body">
        Placeholder page created for route parity with the old website. Content
        will be migrated later.
      </p>
    </Section>
  );
}
