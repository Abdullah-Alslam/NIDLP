"use client";

import { CameraIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

function Step4() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState<string>("/icons/Avatar.svg");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <main className="w-full max-w-2xl mx-auto px-4 sm:px-6">

      {/* Header */}
      <header className="text-center pt-6 sm:pt-8 pb-6 border-b border-gray-200 space-y-2">

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          المعلومات الشخصية
        </h1>

        <p className="text-sm sm:text-base text-gray-500">
          برجاء مراجعة المعلومات التالية المسترجعة من نفاذ
        </p>

        <p className="text-sm text-gray-500">
          وإضافة رقم الجوال الخاص بك
        </p>

      </header>

      {/* Avatar Section */}
      <section className="flex flex-col items-center gap-5 py-8">

        {/* Avatar */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32">

          <Image
            src={avatar}
            width={140}
            height={140}
            alt="user avatar"
            className="w-full h-full rounded-full object-cover border"
          />

        </div>

        {/* Hidden input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Upload Button */}
        <button
          type="button"
          onClick={openFilePicker}
          className="
            flex items-center gap-2
            px-4 py-2
            rounded-md
            border-2 border-[#119DA9]
            text-[#119DA9]
            text-sm
            hover:bg-[#119DA9] hover:text-white
            transition
            focus:outline-none focus:ring-2 focus:ring-[#119DA9]
          "
        >
          <CameraIcon className="w-5 h-5" />
          تحميل صورة الملف الشخصي
        </button>

      </section>

      {/* Form */}
      <form className="space-y-6 pb-10">

        <div className="flex flex-col gap-2">

          <label
            htmlFor="phone"
            className="text-sm font-medium text-gray-900"
          >
            رقم الجوال <span className="text-red-500">*</span>
          </label>

          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#119DA9]">

            <span className="px-3 bg-gray-50 text-sm text-gray-600 border-l">
              +966
            </span>

            <input
              id="phone"
              type="tel"
              placeholder="أدخل رقم الجوال"
              className="
                w-full px-3 py-2
                text-right
                outline-none
                placeholder:text-gray-400
              "
            />

          </div>

        </div>

      </form>

    </main>
  );
}

export default Step4;