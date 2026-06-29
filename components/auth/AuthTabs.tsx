type Props = {
  mode: "login" | "signup";
  onChange: (mode: "login" | "signup") => void;
};

export default function AuthTabs({ mode, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 rounded-2xl bg-[#f0e8e0] p-1">
      <button
        onClick={() => onChange("login")}
        className={`h-11 cursor-pointer rounded-xl text-sm font-medium transition ${
          mode === "login"
            ? "bg-white text-[#5b4638] shadow-sm"
            : "text-[#475569]"
        }`}
      >
        ورود
      </button>

      <button
        onClick={() => onChange("signup")}
        className={`h-11 cursor-pointer rounded-xl text-sm font-medium transition ${
          mode === "signup"
            ? "bg-white text-[#5b4638] shadow-sm"
            : "text-[#475569]"
        }`}
      >
        ثبت نام
      </button>
    </div>
  );
}