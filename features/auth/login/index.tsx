"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import clsx from "clsx";

import Step1 from "../../../features/auth/login/LoginSteps/Step1";
import Step2 from "../../../features/auth/login/LoginSteps/Step2";
import Step3 from "../../../features/auth/login/LoginSteps/Step3";
import Step4 from "../../../features/auth/login/LoginSteps/Step4";
import { useRouter } from "next/navigation";

const steps = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

function LoginPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [role, setRole] = useState("");
  const router = useRouter();

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length;

  const isNextDisabled = currentStep === 1 && !role;

  const handleNext = useCallback(() => {
    if (isLastStep) {
      router.push("/nidlp");
      return;
    }

    setCurrentStep((prev) => prev + 1);
  }, [isLastStep, router]);

  const handlePrev = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onChangeRole={setRole} />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-linear-to-b from-[#150131] via-[#16023f] to-[#19054b] px-4">
      
      {/* Logo */}
      <header className="pt-8 sm:pt-10">
        <Image
          src="/NIDLP ARABIC LOGO.png"
          alt="NIDLP Logo"
          width={280}
          height={160}
          priority
          className="w-50 sm:w-65 md:w-[320px] h-auto"
        />
      </header>

      {/* Card */}
      <section className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-2xl shadow-2xl mt-6">

        {/* Step Content */}
        <div>{renderStep()}</div>

        {/* Controls */}
        <div className="pb-6 px-4 sm:px-6 flex gap-3">

          {/* Previous */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={isFirstStep}
            className={clsx(
              "w-1/3 py-3 rounded-xl font-semibold text-sm transition",
              isFirstStep
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            )}
          >
            السابق
          </button>

          {/* Next / Submit */}
          <button
            type="button"
            onClick={handleNext}
            disabled={isNextDisabled}
            className={clsx(
              "w-2/3 py-3 rounded-xl font-semibold text-sm transition-all",
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-linear-to-r from-[#5291A9] via-[#5A6FB0] to-[#634AAE] text-white hover:opacity-90"
            )}
          >
            {isLastStep ? "تأكيد" : "التالي"}
          </button>

        </div>
      </section>
    </main>
  );
}

export default LoginPage;