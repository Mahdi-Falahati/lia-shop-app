import { useRef } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const normalize = (v: string) =>
  v
    .replace(/[۰-۹]/g, (d) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    )
    .replace(/[٠-٩]/g, (d) =>
      String("٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );

export default function OTPInput({ value, onChange }: Props) {
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const values = [
    value[0] || "",
    value[1] || "",
    value[2] || "",
    value[3] || "",
  ];

  const handleChange = (index: number, val: string) => {
    const normalized = normalize(val);
    const digit = normalized.replace(/\D/g, "").slice(0, 1);

    const arr = [...values];
    arr[index] = digit;

    const next = arr.join("");
    onChange(next);

    if (digit && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (!values[index] && index > 0) {
        inputs.current[index - 1]?.focus();
      }

      const arr = [...values];
      arr[index] = "";
      onChange(arr.join(""));
    }
  };

  return (
    <div>
      <label className="mb-3 block text-sm text-gray-700">
        کد تایید
      </label>

      <div dir="ltr" className="flex justify-between gap-3">
        {[0, 1, 2, 3].map((i) => (
          <input
            key={i}
            ref={(el) => {
              inputs.current[i] = el;
            }}
            value={values[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            maxLength={1}
            inputMode="numeric"
            autoComplete="one-time-code"
            className="h-14 w-14 rounded-xl border border-[#d8c6b7] bg-white text-center text-lg font-bold text-[#2a1a0e] outline-none focus:border-[#9b765d] focus:ring-2 focus:ring-[#9b765d]/25"
          />
        ))}
      </div>
    </div>
  );
}