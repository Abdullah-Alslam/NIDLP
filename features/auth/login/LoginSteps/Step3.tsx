"use client";

import { pesrsonalData } from "@/data/loginData/LoginData";

function Step3() {
  return (
    <main className="w-full max-w-2xl mx-auto px-4 sm:px-6">

      {/* Header */}
      <header className="flex flex-col gap-3 items-center pt-6 sm:pt-8 border-b border-gray-200 pb-6 text-center">

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          المعلومات الشخصية
        </h1>

        <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
          برجاء مراجعة المعلومات التالية المسترجعة من نفاذ
        </p>
      </header>

      {/* Content */}
      <section
        aria-label="Personal Information"
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 text-sm pt-6 pb-10"
      >
        {pesrsonalData.map((item) => (
          <div
            key={item.name}
            className="space-y-1"
          >
            <p className="text-gray-500 text-xs sm:text-sm">
              {item.name}
            </p>

            <p className="text-gray-900 text-sm sm:text-[15px] font-medium leading-6">
              {item.Value}
            </p>
          </div>
        ))}
      </section>

    </main>
  );
}

export default Step3;