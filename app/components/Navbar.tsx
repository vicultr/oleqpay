"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 pt-6 pb-6 sm:pb-8 bg-[#f5f4ed]">
      <div className="max-w-[90rem] mx-auto">
        <Card className="bg-white shadow-md border-none rounded-2xl sm:rounded-[2rem]">
          <div className="px-4 sm:px-10 py-0 sm:py-0 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Asset 1.png"
                alt="OleqPay Logo"
                width={80}
                height={50}
                className="object-contain"
              />
            </Link>

            <ul className="hidden lg:flex gap-6 xl:gap-8 font-medium text-gray-700">
              <li className="cursor-pointer hover:text-gray-900">Home</li>
              <li className="cursor-pointer hover:text-gray-900">About</li>
              <li className="cursor-pointer hover:text-gray-900">Services</li>
              <li className="cursor-pointer hover:text-gray-900">Pages ▾</li>
              <li className="cursor-pointer hover:text-gray-900">Blog</li>
              <li className="cursor-pointer hover:text-gray-900">Contact</li>
            </ul>

            <div className="flex items-center gap-3">
              <Button className="hidden sm:flex bg-[#a3e635] hover:bg-[#84cc16] text-gray-900 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm font-medium shadow-none">
                14-Day Free Trial
              </Button>

              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t px-6 py-4">
              <ul className="space-y-4 font-medium text-gray-700">
                <li className="cursor-pointer hover:text-gray-900">Home</li>
                <li className="cursor-pointer hover:text-gray-900">About</li>
                <li className="cursor-pointer hover:text-gray-900">Services</li>
                <li className="cursor-pointer hover:text-gray-900">Pages ▾</li>
                <li className="cursor-pointer hover:text-gray-900">Blog</li>
                <li className="cursor-pointer hover:text-gray-900">Contact</li>
              </ul>
              <Button className="w-full mt-4 bg-[#a3e635] hover:bg-[#84cc16] text-gray-900 rounded-full py-2 text-sm font-medium shadow-none sm:hidden">
                14-Day Free Trial
              </Button>
            </div>
          )}
        </Card>
      </div>
    </nav>
  );
}