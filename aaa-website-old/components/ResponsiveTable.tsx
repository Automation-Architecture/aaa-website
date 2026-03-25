interface ResponsiveTableProps {
  caption: string;
  headers: string[];
  rows: string[][];
}

export function ResponsiveTable({ caption, headers, rows }: ResponsiveTableProps) {
  return (
    <div className="overflow-hidden">
      {/* Desktop table */}
      <table className="hidden tablet:table w-full border-collapse">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b-2 border-brand-lime/30">
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-4 py-3 text-left font-semibold text-brand-teal"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-brand-cream" : "bg-brand-cream/60"}
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-brand-teal">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile card layout */}
      <div className="tablet:hidden space-y-4">
        {rows.map((row, i) => (
          <div
            key={i}
            className="rounded-lg border border-brand-gray/20 bg-brand-cream p-4 space-y-2"
          >
            {row.map((cell, j) => (
              <div key={j}>
                <span className="font-semibold text-brand-teal text-sm">
                  {headers[j]}:{" "}
                </span>
                <span className="text-brand-teal">{cell}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
