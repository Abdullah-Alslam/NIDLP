"use client";

import Link from "next/link";

function AddNewOrderButton() {
  return (
    <div className="flex justify-end">
      <Link href="/nidlp/addneworder">
        <button
          className="px-6 py-3 rounded-lg text-white font-bold shadow-md transition hover:opacity-90 cursor-pointer"
          style={{
            background: "linear-gradient(90deg, #66B4A5, #5291A9, #634AAE)",
          }}
        >
          + إضافة طلب جديد
        </button>
      </Link>
    </div>
  );
}

export default AddNewOrderButton;