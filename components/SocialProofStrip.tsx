interface SocialProofStripProps {
  items: { value: string; label: string }[];
  disclaimer: string;
}

export function SocialProofStrip({ items, disclaimer }: SocialProofStripProps) {
  return (
    <div>
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8 text-center">
        {items.map((item) => (
          <div key={item.label}>
            <div className="text-4xl tablet:text-5xl desktop:text-6xl font-bold text-brand-lime">
              {item.value}
            </div>
            <div className="mt-2 text-brand-cream font-medium">{item.label}</div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-brand-gray text-center">{disclaimer}</p>
    </div>
  );
}
