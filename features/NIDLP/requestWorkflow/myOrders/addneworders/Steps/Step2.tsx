"use client";

import { useState, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";

type FormKeys = "solutions" | "support" | "international";

function Step2() {
  const [values, setValues] = useState<Record<FormKeys, string>>({
    solutions: "",
    support: "",
    international: "",
  });

  const maxWords = 500;

  const countWords = useCallback((text: string) => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  }, []);

  const handleChange = useCallback(
    (key: FormKeys, value: string) => {
      const words = countWords(value);
      if (words <= maxWords) {
        setValues((prev) => ({ ...prev, [key]: value }));
      }
    },
    [countWords]
  );

  const renderField = (
    id: FormKeys,
    label: string,
    placeholder: string
  ) => (
    <div className="space-y-2 p-3 sm:p-4 border rounded-xl bg-white hover:shadow-sm transition">
      
      {/* Label */}
      <div className="text-right">
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700"
        >
          {label} <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Textarea */}
      <Textarea
        id={id}
        rows={5}
        className="min-h-[140px] sm:min-h-[150px] resize-none focus:ring-2 focus:ring-[#119DA9]"
        placeholder={placeholder}
        value={values[id]}
        onChange={(e) => handleChange(id, e.target.value)}
        aria-describedby={`${id}-counter`}
      />

      {/* Counter */}
      <div
        id={`${id}-counter`}
        className="flex justify-between text-xs text-gray-500"
      >
        <span className="hidden sm:block">
          الحد الأقصى {maxWords} كلمة
        </span>
        <span>
          {countWords(values[id])} / {maxWords}
        </span>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {renderField(
        "solutions",
        "الحلول المقترحة",
        "اذا كان لديك حل للتحدي فلا تتردد في تضمينه هنا..."
      )}

      {renderField(
        "support",
        "الدعم المطلوب",
        "اذكر أي موارد أو مساعدة تحتاجها..."
      )}

      {renderField(
        "international",
        "التجارب الدولية",
        "شارك بأي خبرات دولية ذات صلة..."
      )}
    </div>
  );
}

export default Step2;