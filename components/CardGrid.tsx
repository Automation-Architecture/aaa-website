import Link from "next/link";

interface Card {
  title: string;
  outcome: string;
  body: string;
  href?: string;
}

interface CardGridProps {
  cards: Card[];
}

function CardContent({ card }: { card: Card }) {
  return (
    <>
      <h3 className="font-bold">{card.title}</h3>
      <p className="mt-2 font-semibold text-brand-lime">{card.outcome}</p>
      <p className="mt-3 text-brand-cream/80">{card.body}</p>
    </>
  );
}

export function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
      {cards.map((card) => {
        const className =
          "block p-6 bg-brand-teal border border-brand-gray/20 rounded-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-brand-lime";

        if (card.href) {
          return (
            <Link key={card.title} href={card.href} className={className}>
              <CardContent card={card} />
            </Link>
          );
        }

        return (
          <div key={card.title} className={className}>
            <CardContent card={card} />
          </div>
        );
      })}
    </div>
  );
}
