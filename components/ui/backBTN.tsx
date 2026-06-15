"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  label?: string;
  className?: string;
};

export default function BackButton({
  label = "بازگشت",
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`
        fixed top-20 right-6 z-50 cursor-pointer flex items-center gap-2 px-4 py-2 rounded-2 bg-white/60 backdrop-blur-xl border border-white/ shadow-[0_10px_40px_rgba(0,0,0,0.08 text-slate-700 hover:text-slate-900 hover:bg-white/ transition-all duration-300 hover:-translate-y-1 active:scale- gro ${className}
      `}
    >
      <svg
        className="
          w-4 h-4
          transition-transform duration-300
          group-hover:-translate-x-1
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>

      <span className="text-sm font-medium">
        {label}
      </span>
    </button>
  );
}