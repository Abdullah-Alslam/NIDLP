"use client";

import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import CompaniesTable from "./CompainesTable";
import PublicData from "./PublicData";
import ContactData from "./ContactData";

const steps = [
  "اختر الشركة",
  "استرجاع معلومات الشركة",
  "املأ معلومات الاتصال بالشركة",
];

function AddNewCompaniesPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const nextStep = () => {
    if (!isLastStep) setCurrentStep((p) => p + 1);
  };

  const prevStep = () => {
    if (!isFirstStep) setCurrentStep((p) => p - 1);
  };

  const router = useRouter();

  const handleNext = () => {
    if (isLastStep) {
      router.push("/auth/login");
      return;
    }

    nextStep();
  };

  return (
    <div className="min-h-screen w-full flex justify-center px-3 sm:px-6 py-6 bg-gray-50">
      <main className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-4 sm:p-8 relative">
        {/* Back */}
        <Link
          href="/companies"
          className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[#119DA9] text-sm font-medium flex items-center gap-2 hover:opacity-80 transition"
        >
          <span className="text-lg">›</span>
          العودة إلى الشركات
        </Link>

        {/* Title */}
        <header className="text-center mb-8 sm:mb-10">
          <h1 className="text-xl sm:text-3xl font-extrabold text-gray-900">
            إضافة شركة جديدة
          </h1>
        </header>

        {/* Stepper */}
        <nav
          aria-label="Stepper"
          className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 mb-10 relative"
        >
          {steps.map((step, index) => {
            const isActive = currentStep === index;
            const isDone = currentStep > index;

            return (
              <div
                key={index}
                className="flex flex-1 flex-col items-center relative"
              >
                {/* connector (desktop only) */}
                {index !== steps.length - 1 && (
                  <div className="hidden  absolute top-4 left-1/2 w-full h-0.5">
                    <div
                      className={`h-full transition-all duration-300 ${
                        currentStep > index ? "bg-[#119DA9]" : "bg-gray-200"
                      }`}
                    />
                  </div>
                )}

                {/* circle */}
                <div
                  role="button"
                  aria-current={isActive ? "step" : undefined}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 shadow-sm z-10 ${
                    isDone
                      ? "bg-[#119DA9] text-white"
                      : isActive
                        ? "border-2 border-[#119DA9] text-[#119DA9] bg-white scale-110"
                        : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {isDone ? "✓" : index + 1}
                </div>

                {/* label */}
                <p
                  className={`mt-2 text-[11px] sm:text-xs text-center transition ${
                    isActive ? "text-[#119DA9] font-semibold" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
              </div>
            );
          })}
        </nav>

        {/* Content */}
        <section className="min-h-75 flex items-center justify-center">
          {currentStep === 0 && <CompaniesTable />}
          {currentStep === 1 && <PublicData />}
          {currentStep === 2 && <ContactData />}
        </section>

        {/* Actions */}
        <footer className="flex flex-col sm:flex-row justify-end items-start gap-3 mt-8">
          {/* Previous */}
          <button
            onClick={prevStep}
            disabled={isFirstStep}
            className="
      w-auto
      px-4 py-2
      rounded-md
      border border-gray-300
      text-gray-600
      text-sm
      disabled:opacity-40 disabled:cursor-not-allowed
      hover:bg-gray-50
      transition
    "
          >
            السابق
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="
    w-auto
    px-4 py-2
    rounded-md
    bg-[#119DA9]
    text-white
    text-sm
    hover:opacity-90
    transition
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
  "
          >
            التالي
          </button>
        </footer>
      </main>
    </div>
  );
}

export default AddNewCompaniesPage;
