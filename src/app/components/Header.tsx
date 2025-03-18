"use client";
import Link from "next/link";
import { Menu, Dropdown, Button, MenuProps } from "antd";
import { DownOutlined, GlobalOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import vietnamFlag from "@/assets/icons/vietnam-flag.svg";
import registerIcon from "@/assets/icons/register.svg";
import caretDownIcon from "@/assets/icons/CaretDown.svg";

const solutionsMenu: MenuProps["items"] = [
  {
    key: "erp",
    label: <Link href="/solutions/erp">ERP</Link>,
  },
  {
    key: "crm",
    label: <Link href="/solutions/crm">CRM</Link>,
  },
  {
    key: "inventory",
    label: <Link href="/solutions/inventory">Quản lý Kho</Link>,
  },
];

const resourcesMenu: MenuProps["items"] = [
  {
    key: "docs",
    label: <Link href="/resources/docs">Tài liệu</Link>,
  },
  {
    key: "tutorials",
    label: <Link href="/resources/tutorials">Hướng dẫn</Link>,
  },
  {
    key: "blog",
    label: <Link href="/blog">Blog</Link>,
  },
];

const languageMenu: MenuProps["items"] = [
  {
    key: "vn",
    label: "🇻🇳 Tiếng Việt",
  },
  {
    key: "en",
    label: "🇬🇧 English",
  },
  {
    key: "jp",
    label: "🇯🇵 日本語",
  },
];

const Header = () => {
  return (
    <header className="bg-white py-4  fixed left-0 right-0 top-0 z-50">
      <div className="max-w-7xl m-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          <Image src={logo} alt={""} />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-2 text-lg font-medium">
            {/* Dropdown: Giải pháp */}
            <li className="p-2">
              <Link href="/blog" className="text-gray-700 hover:text-green-600">
                Về chúng tôi
              </Link>
            </li>
            <li className="p-2">
              <Dropdown menu={{ items: solutionsMenu }} trigger={["hover"]}>
                <div className="flex items-center gap-2">
                  <Link
                    href="/blog"
                    className="text-gray-700 hover:text-green-600"
                  >
                    Giải pháp
                  </Link>
                  <Image src={caretDownIcon} alt={""} width={16} height={16} />
                </div>
              </Dropdown>
            </li>

            {/* Dropdown: Tài nguyên */}
            <li className="p-2">
              <Dropdown menu={{ items: resourcesMenu }} trigger={["hover"]}>
                <div className="flex items-center gap-2">
                  <Link
                    href="/blog"
                    className="text-gray-700 hover:text-green-600"
                  >
                    Tài nguyên
                  </Link>
                  <Image src={caretDownIcon} alt={""} width={16} height={16} />
                </div>
              </Dropdown>
            </li>

            <li className="p-2">
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Language & CTA */}
        <div className="flex items-center space-x-4">
          {/* Dropdown: Chọn ngôn ngữ */}
          <Dropdown menu={{ items: languageMenu }} trigger={["click", "hover"]}>
            <div className="border border-solid border-[#ccc] py-2 px-3 w-[94px] rounded-[40px] bg-gradient-to-r from-[rgba(9,9,11,0.05)] to-[rgba(9,9,11,0.1)] cursor-pointer">
              <div className="flex items-center gap-3">
                <Image src={vietnamFlag} alt={""} width={24} height={24} />
                <div className="flex items-center gap-1">
                  <span>VI</span>
                  <Image src={caretDownIcon} alt={""} width={16} height={16} />
                </div>
              </div>
            </div>
          </Dropdown>

          {/* Nút "Trở thành khách hàng" */}
          <Link href="/register">
            <div className="bg-[#1AD598] border-none text-white hover:bg-green-400 rounded-[40px] py-2 px-3 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-[#052B1E] font-bold">
                  Trở thành khách hàng
                </span>
                <Image src={registerIcon} alt={""} width={24} height={24} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
