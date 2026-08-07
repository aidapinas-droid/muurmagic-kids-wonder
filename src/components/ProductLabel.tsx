import { labelMeta, type ProductLabel } from "@/data/library";

export function ProductLabelBadge({
  label,
  className = "",
}: {
  label: ProductLabel;
  className?: string;
}) {
  const meta = labelMeta[label];
  return (
    <span
      className={
        "inline-flex items-center gap-1 rounded-full px-3 py-1 font-nunito text-xs font-bold shadow-soft " +
        meta.className +
        " " +
        className
      }
    >
      <span aria-hidden="true">{meta.emoji}</span>
      {meta.text}
    </span>
  );
}

export function ProductLabelList({ labels }: { labels: ProductLabel[] }) {
  if (!labels.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((l) => (
        <ProductLabelBadge key={l} label={l} />
      ))}
    </div>
  );
}
