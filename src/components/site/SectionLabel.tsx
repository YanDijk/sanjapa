export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.42em] text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </span>
  );
}
