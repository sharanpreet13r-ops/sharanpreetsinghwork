export default function SmokeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      <div className="absolute -left-1/4 top-[-10%] h-[70vh] w-[70vh] rounded-full bg-ember/40 blur-[120px] animate-drift1" />
      <div className="absolute right-[-15%] top-[10%] h-[60vh] w-[60vh] rounded-full bg-[#ff8a3d]/30 blur-[130px] animate-drift2" />
      <div className="absolute bottom-[-20%] left-[20%] h-[55vh] w-[55vh] rounded-full bg-[#c92e00]/30 blur-[140px] animate-drift3" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/60 to-ink animate-flicker" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,#0a0908_75%)]" />
    </div>
  );
}
