"use client";

import CompanyButton from "../../Buttons/CompanyButton";
import NotificationsButton from "../../Buttons/NotificationsButton";
import UserButton from "../../Buttons/UserButton";
function Header() {
  return (
    <main className="bg-[#2E1866] w-full h-20 ">
      <div className="flex justify-between">
        <section className="flex">
          <div className="py-3.5 pr-6 ">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="flex-col pr-15 pt-3.5 text-white"></div>
        </section>

        <section className="flex gap-4 py-4 pl-8">
          <NotificationsButton />

          <CompanyButton />

          <UserButton />
        </section>
      </div>
    </main>
  );
}

export default Header;
