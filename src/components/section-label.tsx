export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-muted-2 uppercase">
      Sec.{index} — {title}
    </p>
  );
}
