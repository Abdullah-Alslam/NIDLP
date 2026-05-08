"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectViewport } from "@radix-ui/react-select";
import { useState } from "react";

function Step1() {
  const [impact, setImpact] = useState("");

  return (
    <div className="pt-8 md:pt-12">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-8">
          {/* اسم الطلب */}
          <div className="col-span-full space-y-1">
            <label htmlFor="title" className="text-sm">
              اسم الطلب <span className="text-red-500">*</span>
            </label>
            <Input
              id="title"
              className="placeholder:text-[#9CA3AF]"
              placeholder="قم بوصف طلبك بعنوان واضح وموجز"
            />
          </div>

          {/* نوع الطلب */}
          <div className="space-y-2 w-full">
            <label className="text-sm">
              نوع الطلب <span className="text-red-500">*</span>
            </label>

            <Select>
              <SelectTrigger className="h-11 w-full flex-row-reverse justify-between text-right focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue placeholder="اختر نوع الطلب (تحدي / اقتراح)" />
              </SelectTrigger>

              <SelectContent className="text-right">
                <SelectItem value="1">اقتراح</SelectItem>
                <SelectItem value="2">تحدي</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* مصدر الطلب */}
          <div className="space-y-2 w-full">
            <label className="text-sm">
              مصدر الطلب (الجهة) <span className="text-red-500">*</span>
            </label>

            <Select>
              <SelectTrigger className="h-11 w-full flex-row-reverse justify-between text-right focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue placeholder="الجهة المسؤولة عن معالجة الطلب" />
              </SelectTrigger>

              <SelectContent className="text-right">
                <SelectItem value="transport_authority">
                  الهيئة العامة للنقل
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* القطاع */}
          <div className="space-y-2 w-full">
            <label className="text-sm">
              القطاع المسؤول <span className="text-red-500">*</span>
            </label>

            <Select>
              <SelectTrigger className="h-11 w-full flex-row-reverse justify-between text-right focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue placeholder="القطاع" />
              </SelectTrigger>

              <SelectContent>
                <SelectViewport className="p-1">
                  <SelectItem value="land_transport">
                    قطاع النقل البري
                  </SelectItem>
                  <SelectItem value="rail_transport">السكك الحديدية</SelectItem>
                  <SelectItem value="sea_cargo">الشحن البحري</SelectItem>
                  <SelectItem value="air_cargo">الشحن الجوي</SelectItem>
                  <SelectItem value="logistics">اللوجستيات</SelectItem>
                  <SelectItem value="ecommerce">التجارة الإلكترونية</SelectItem>
                  <SelectItem value="last_mile">الميل الأخير</SelectItem>
                </SelectViewport>
              </SelectContent>
            </Select>
          </div>

          {/* مجال الطلب */}
          <div className="space-y-2 w-full">
            <label className="text-sm">
              مجال الطلب <span className="text-red-500">*</span>
            </label>

            <Select>
              <SelectTrigger className="h-11 w-full flex-row-reverse justify-between text-right focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue placeholder="مجال الطلب" />
              </SelectTrigger>

              <SelectContent className="text-right">
                <SelectItem value="legislative">تشريعي</SelectItem>
                <SelectItem value="procedural">إجرائي</SelectItem>
                <SelectItem value="infrastructure">بنية تحتية</SelectItem>
                <SelectItem value="technical">تقني</SelectItem>
                <SelectItem value="investment">استثماري</SelectItem>
                <SelectItem value="governance">حوكمة</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* تأثير الطلب */}
          <div className="space-y-2 w-full">
            <label className="text-sm">
              تأثير الطلب <span className="text-red-500">*</span>
            </label>

            <Select value={impact} onValueChange={setImpact}>
              <SelectTrigger className="h-11 w-full flex-row-reverse justify-between text-right focus:ring-2 focus:ring-[#119DA9]">
                <SelectValue placeholder="التأثير" />
              </SelectTrigger>

              <SelectContent className="text-right">
                <SelectItem value="height">مرتفع</SelectItem>
                <SelectItem value="time">الوقت</SelectItem>
                <SelectItem value="quality">جودة الخدمة</SelectItem>
                <SelectItem value="life">حياة الإنسان</SelectItem>
                <SelectItem value="strategy">استراتيجي</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* other impact */}
          {impact === "other" && (
            <div className="col-span-full space-y-1">
              <label className="text-sm">
                اضافة تأثير آخر <span className="text-red-500">*</span>
              </label>

              <Textarea
                className="h-20 placeholder:text-[#9CA3AF]"
                placeholder="اشرح التأثير الآخر..."
              />
            </div>
          )}

          {/* شرح الطلب */}
          <div className="col-span-full space-y-1">
            <label className="text-sm">
              شرح الطلب <span className="text-red-500">*</span>
            </label>

            <Textarea className="h-40" placeholder="اشرح الطلب..." />
          </div>

          {/* السبب */}
          <div className="col-span-full space-y-1">
            <label className="text-sm ">سبب الطلب </label>
            <span className="text-red-500">*</span>

            <Textarea className="h-40" placeholder="سبب الطلب..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;
