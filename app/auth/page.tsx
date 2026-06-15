"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AuthTabs from "@/components/auth/AuthTabs";
import OTPInput from "@/components/auth/OTPInput";

type Mode = "login" | "signup";

const OTP_CODE = "1234";

const normalize = (v: string) =>
  v
    .replace(/[۰-۹]/g, (d) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    )
    .replace(/[٠-٩]/g, (d) =>
      String("٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const phoneN = normalize(phone);

  const phoneValid = /^09\d{9}$/.test(phoneN);

  const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const nameValid = fullName.trim().length > 2;

  const canSend =
    mode === "login"
      ? phoneValid
      : phoneValid && emailValid && nameValid;

  useEffect(() => {
    if (otp.length < 4) {
      setVerified(false);
      return;
    }
    setVerified(otp === OTP_CODE);
  }, [otp]);

  const sendOtp = async () => {
    setLoading(true);
    await new Promise((r) =>
      setTimeout(r, 900)
    );
    setOtpSent(true);
    setLoading(false);
  };

  const submit = async () => {
    setLoading(true);
    await new Promise((r) =>
      setTimeout(r, 900)
    );

    setSuccess(
      mode === "login"
        ? "ورود موفق بود"
        : "ثبت نام موفق بود"
    );

    setLoading(false);
  };

  const resetMode = (m: Mode) => {
    setMode(m);
    setOtp("");
    setOtpSent(false);
    setVerified(false);
    setSuccess("");
    setPhone("");
    setEmail("");
    setFullName("");
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen my-[60px] flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="rounded-[28px] bg-white border border-[#D1D5DB] shadow-[0_20px_70px_rgba(0,0,0,0.08)] p-7">

          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-[#0F172A]">
              {mode === "login"
                ? "ورود به حساب کاربری"
                : "ساخت حساب کاربری"}
            </h1>

            <p className="text-sm text-[#475569] mt-2">
              {mode === "login"
                ? "ورود سریع با شماره موبایل"
                : "ثبت نام با شماره موبایل و دریافت کد تایید"}
            </p>
          </div>

          <AuthTabs mode={mode} onChange={resetMode} />

          <div className="mt-6 space-y-4">

            {mode === "signup" && (
              <>
                <input
                  placeholder="نام و نام خانوادگی"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 outline-none focus:border-[#16A34A]"
                />

                {!nameValid && fullName.length > 0 && (
                  <p className="text-sm pb-3 text-red-500">
                    نام و نام خانوادگی باید حداقل ۳ حرف باشد
                  </p>
                )}

                <input
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 outline-none focus:border-[#16A34A]"
                />

                {!emailValid && email.length > 0 && (
                  <p className="text-sm pb-3 text-red-500">
                    ایمیل معتبر وارد کنید
                  </p>
                )}
              </>
            )}

            <input
              placeholder="شماره موبایل"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 outline-none focus:border-[#16A34A]"
            />

            {!phoneValid && phone.length > 0 && (
              <p className="text-sm pb-3 text-red-500">
                شماره موبایل معتبر نیست
              </p>
            )}

            {!otpSent ? (
              <button
                disabled={!canSend || loading}
                onClick={sendOtp}
                className="cursor-pointer w-full h-12 rounded-xl bg-[#16A34A] text-white font-medium hover:bg-[#15803D] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? "در حال ارسال..."
                  : "ارسال کد تایید"}
              </button>
            ) : (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                  />

                  {!verified &&
                    otp.length === 4 && (
                      <p className="text-sm pb-3 text-red-500">
                        کد اشتباه است
                      </p>
                    )}

                  {verified && (
                    <p className="text-sm pb-3 text-[#16A34A]">
                      کد تایید شد
                    </p>
                  )}

                  <button
                    disabled={!verified || loading}
                    onClick={submit}
                    className="w-full h-12 rounded-xl bg-[#16A34A] text-white font-medium hover:bg-[#15803D] disabled:opacity-50"
                  >
                    {mode === "login"
                      ? "ورود"
                      : "ثبت نام"}
                  </button>
                </motion.div>
              </AnimatePresence>
            )}

            {success && (
              <div className="bg-[#ECFDF5] border border-[#A7F3D0] text-[#16A34A] p-3 text-center rounded-xl">
                {success}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </main>
  );
}