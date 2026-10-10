export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
      <span className="h-px w-6 bg-accent" />
      {children}
    </p>
  );
}
