"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { nationalAddress, publicData } from "@/data/addnewcompany/publicdata";

export default function PublicData() {
  return (
    <div className="w-full px-3 sm:px-6 py-4 space-y-10">
      {/* Title */}
      <header>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          معلومات عامة
        </h1>
      </header>

      {/* General Info */}

      <section
        aria-label="General Information"
        className="w-full p-4 sm:p-6 space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 text-sm">
          {publicData.map((item) => (
            <div key={item.name} className="space-y-1">
              <p className="text-[#6B7280] text-xs sm:text-sm">{item.name}</p>
              <p className="text-sm sm:text-[14px] text-black font-medium leading-6 text-right">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* National Address */}
      <section
        aria-label="National Address"
        className="w-full p-4 sm:p-6 space-y-6 border-t"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          العنوان الوطني
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          {nationalAddress.map((item) => (
            <div key={item.name} className="space-y-1">
              <p className="text-[#6B7280] text-xs sm:text-sm">{item.name}</p>
              <p className="text-sm sm:text-[14px] text-black font-medium leading-6 text-right">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Table Section */}
      <section
        aria-label="Owners and Managers Table"
        className="bg-white rounded-2xl shadow-sm border overflow-x-auto"
      >
        <div className="p-4 sm:p-6 border-b">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">
            بيانات الملاك والمدراء
          </h2>
        </div>

        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="text-right">الاسم</TableHead>
              <TableHead className="text-right">نوع الهوية</TableHead>
              <TableHead className="text-right">رقم الهوية</TableHead>
              <TableHead className="text-right">الجنسية</TableHead>
              <TableHead className="text-right">علاقة الطرف</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[
              {
                name: "أحمد محمد",
                idType: "هوية وطنية",
                idNumber: "1234567890",
                nationality: "سعودي",
                relation: "مالك",
              },
              {
                name: "سارة خالد",
                idType: "هوية وطنية",
                idNumber: "9876543210",
                nationality: "سعودية",
                relation: "شريك",
              },
            ].map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.idType}</TableCell>
                <TableCell>{row.idNumber}</TableCell>
                <TableCell>{row.nationality}</TableCell>
                <TableCell>{row.relation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
