import { useEffect, useState } from "react";

interface Props {
  target: string; // مثال: "2025-03-15T09:00:00"
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function CountdownTimer({ target }: Props) {
  const [diff, setDiff] = useState<number>(() => +new Date(target) - Date.now());

  useEffect(() => {
    const id = setInterval(() => setDiff(+new Date(target) - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (diff <= 0) return null;

  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;

  const box = (val: number, label: string) => (
    <div className="flex w-[90px] flex-col items-center justify-center rounded-md bg-white/10 py-4 backdrop-blur">
      <span className="text-3xl font-bold text-white">{pad(val)}</span>
      <span className="mt-1 text-xs uppercase text-slate-300">{label}</span>
    </div>
  );

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      {box(days, "Days")}
      {box(hours, "Hours")}
      {box(minutes, "Minutes")}
      {box(seconds, "Seconds")}
    </div>
  );
}
