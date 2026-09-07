export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <p className="font-mono text-xs tracking-widest text-muted-2 uppercase">
      Sec.{index} — {title}
    </p>
  );
}
