interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-7xl px-4 py-16 tablet:px-6 tablet:py-24">{children}</div>
    </section>
  );
}
