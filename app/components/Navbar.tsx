"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 pt-4 sticky top-0 z-50 bg-[#f5f4ed]/95 backdrop-blur-sm">
      <div className="max-w-[90rem] mx-auto">
        <Card className="bg-white shadow-md border-none rounded-2xl sm:rounded-[2rem]">
          <div className="px-4 sm:px-10 py-0 sm:py-0 flex items-center justify-between lg:grid lg:grid-cols-3">
            {/* LOGO */}
            <Link href="/" className="flex h-14 items-center" aria-label="Olefi home">
              <Image
                src="/brand/olefi-wordmark.png"
                alt="Olefi"
                width={138}
                height={46}
                priority
                className="h-auto w-[7.75rem] dark:hidden sm:w-[8.625rem]"
              />
              <Image
                src="/brand/olefi-wordmark-white.png"
                alt=""
                width={138}
                height={47}
                priority
                aria-hidden="true"
                className="hidden h-auto w-[7.75rem] dark:block sm:w-[8.625rem]"
              />
            </Link>

            {/* NAV LINKS - DESKTOP - CENTERED */}
            <ul className="hidden lg:flex gap-6 xl:gap-8 font-medium text-gray-700 justify-center">
              <li>
                <Link href="/" className="cursor-pointer hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="cursor-pointer hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="cursor-pointer hover:text-gray-900">
                  Services
                </Link>
              </li>
            </ul>

            {/* MOBILE MENU BUTTON - RIGHT ALIGNED */}
            <div className="flex items-center justify-end">
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t px-6 py-4">
              <ul className="space-y-4 font-medium text-gray-700">
                <li>
                  <Link href="/" className="cursor-pointer hover:text-gray-900 block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="cursor-pointer hover:text-gray-900 block">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="cursor-pointer hover:text-gray-900 block">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Card>
      </div>
    </nav>
  );
}
