import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";   
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/img/Snapp.webp";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const superAppItems = [
    "درخواست تاکسی",
    "پیک موتوری",
    "سفارش آنلاین غذا",
    "سوپرمارکت آنلاین اسنپ",
    "رزرو بلیط هواپیما",
    "رزرو هتل",
    "رزرو بلیط قطار",
    "رزرو بلیط اتوبوس",
    "درخواست وانت بار",
    "خدمات اسباب‌کشی",
    "فروشگاه اسنپ",
    "سرویس اعتباری",
    "اسنپ بیمه",
    "پزشک و مشاور",
    "اسنپ پرو",
    "سرمایه‌گذاری",
  ];

  return (
    <nav className="sticky top-0 flex items-center bg-white px-10 my-4 h-16 shadow-sm">
      {/* لوگو */}
      <div className="w-40 h-10 mr-36">
        <img src={Logo} alt="لوگو" className="w-full h-full object-cover" />
      </div>

      {/* منوی دسکتاپ */}
      <div className="hidden md:flex">
        <ul className="flex flex-row-reverse gap-9 items-center">
          
          <li><a href="#">ثبت نام راننده اسنپ</a></li>
          <li><a href="#">باشگاه رانندگان</a></li>
          <li><a href="#">پنل سازمانی</a></li>
          <li><a href="#">بلاگ</a></li>
          <li><a href="#">درباره اسنپ</a></li>
          <li className="relative group">
            <a href="#" className="flex items-center gap-1">
             سوپر اپ اسنپ <HiChevronDown />
            </a>
            <ul className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              {superAppItems.map((item, index) => (
                <li
                  key={index}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* آیکون منوی موبایل */}
      <div className="md:hidden ml-auto">
        <button onClick={() => setOpenMenu(true)}>
          <TiThMenu size={28} />
        </button>
      </div>

      {/* منوی موبایل */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold">منو</h2>
          <button onClick={() => setOpenMenu(false)}>
            <AiOutlineClose size={24} />
          </button>
        </div>

        <ul className="flex flex-col p-4 space-y-3">
          <li><a href="#">درباره اسنپ</a></li>
          <li><a href="#">ثبت نام راننده</a></li>
          <li><a href="#">باشگاه رانندگان</a></li>
          <li><a href="#">پنل سازمانی</a></li>
          <li><a href="#">بلاگ</a></li>
          <li>
            <details>
              <summary className="cursor-pointer">سوپر اپ اسنپ</summary>
              <ul className="pl-4 mt-2 space-y-2">
                {superAppItems.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
