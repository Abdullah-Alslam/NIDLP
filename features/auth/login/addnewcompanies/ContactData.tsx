"use client";

import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  phone: string;
  landline: string;
};

export default function ContactData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <main className="w-full mx-auto px-2 sm:px-0">
      <header>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 pb-6 sm:pb-8">
          معلومات عامة
        </h1>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-4 sm:pt-8"
        dir="rtl"
        noValidate
      >
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-900">
            البريد الإلكتروني الرئيسي للشركة{" "}
            <span className="text-red-600">*</span>
          </label>

          <input
            id="email"
            type="email"
            placeholder="info@example.com"
            aria-invalid={!!errors.email}
            {...register("email", { required: true })}
            className="
              w-full border rounded-md px-3 py-2 text-right
              outline-none transition
              focus:ring-2 focus:ring-[#119DA9]
              placeholder:text-gray-400
              border-gray-300
            "
          />

          {errors.email && (
            <p className="text-xs text-red-500">هذا الحقل مطلوب</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-900">
            رقم الجوال الرئيسي للشركة <span className="text-red-600">*</span>
          </label>

          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#119DA9]">
            {/* country code */}
            <div className="px-3 bg-gray-50 border-l text-sm text-gray-600">
              +966
            </div>

            <input
              id="phone"
              type="tel"
              placeholder="رقم الهاتف"
              aria-invalid={!!errors.phone}
              {...register("phone", { required: true })}
              className="w-full px-3 py-2 outline-none text-right placeholder:text-gray-400"
            />
          </div>

          {errors.phone && (
            <p className="text-xs text-red-500">هذا الحقل مطلوب</p>
          )}
        </div>

        {/* Landline */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="landline"
            className="text-sm font-medium text-gray-900"
          >
            رقم الهاتف الثابت للشركة <span className="text-red-600">*</span>
          </label>

          <input
            id="landline"
            type="tel"
            placeholder="رقم الهاتف الثابت"
            aria-invalid={!!errors.landline}
            {...register("landline", { required: true })}
            className="
              w-full border rounded-md px-3 py-2 text-right
              outline-none transition
              focus:ring-2 focus:ring-[#119DA9]
              placeholder:text-gray-400
              border-gray-300
            "
          />

          {errors.landline && (
            <p className="text-xs text-red-500">هذا الحقل مطلوب</p>
          )}
        </div>
      </form>
    </main>
  );
}
