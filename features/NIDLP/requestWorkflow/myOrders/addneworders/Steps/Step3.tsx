"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";

function Step3() {
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setProgress(0);

    // clear old interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    let value = 0;
    intervalRef.current = setInterval(() => {
      value += 10;
      setProgress(value);

      if (value >= 100 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, 150);
  };

  return (
    <div className="space-y-6">
      {/* ===== ROW 1 ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 text-right block">
            اسم الشخص المسؤول <span className="text-red-500">*</span>
          </label>

          <Input
            id="name"
            className="h-10 text-sm placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#119DA9]"
            placeholder="الاسم الكامل"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700 text-right block">
            رقم الشخص المسؤول <span className="text-red-500">*</span>
          </label>

          <div className="flex overflow-hidden border rounded-md focus-within:ring-2 focus-within:ring-[#119DA9]">
            <select
              className="h-10 bg-gray-50 px-2 text-sm outline-none border-r"
              aria-label="رمز الدولة"
            >
              <option>+971</option>
              <option>+966</option>
              <option>+20</option>
              <option>+49</option>
            </select>

            <Input
              id="phone"
              type="tel"
              inputMode="numeric"
              className="h-10 border-0 text-sm placeholder:text-[#9CA3AF] focus-visible:ring-0"
              placeholder="5XXXXXXXX"
            />
          </div>
        </div>

        {/* Job */}
        <div className="space-y-2">
          <label htmlFor="job" className="text-sm font-medium text-gray-700 text-right block">
            الدور الوظيفي <span className="text-red-500">*</span>
          </label>

          <Input
            id="job"
            className="h-10 text-sm placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-[#119DA9]"
            placeholder="المسمى الوظيفي"
          />
        </div>
      </div>

      {/* ===== UPLOAD ===== */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-1 justify-end">
          تحميل ملف العمل
          <span className="text-gray-400 text-xs" aria-hidden>
            ⓘ
          </span>
        </label>

        {/* Upload Box */}
        <label
          htmlFor="file-upload"
          className="border-2 border-dashed rounded-xl h-32 sm:h-36 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#119DA9] transition bg-white text-center px-2"
        >
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          <span className="text-[#119DA9] text-xl sm:text-2xl">⬆️</span>

          <p className="text-xs sm:text-sm text-gray-600">
            <span className="text-[#119DA9] font-medium underline">
              اختر الملف
            </span>{" "}
            أو اسحب الملف هنا
          </p>

          <p className="text-[10px] sm:text-xs text-gray-400">
            2MB كحد أقصى — PDF / Word / Excel / Images
          </p>
        </label>

        {/* FILE INFO */}
        {fileName && (
          <div className="text-sm text-gray-600 text-right break-all">
            📄 {fileName}
          </div>
        )}

        {/* PROGRESS */}
        {progress > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-500">
              <span>جاري الرفع...</span>
              <span>{progress}%</span>
            </div>

            <div
              className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full bg-gradient-to-r from-[#119DA9] to-[#0d7f89] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {progress === 100 && (
              <p className="text-xs text-green-600 text-right">
                ✔ تم رفع الملف بنجاح
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Step3;