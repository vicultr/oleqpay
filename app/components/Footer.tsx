import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AppStoreBadges from "./AppStoreBadges";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:gap-10 sm:px-6 lg:grid-cols-[1.35fr_0.75fr_0.9fr_0.9fr_1.2fr]">
        <div>
          <Image
            src="/brand/olefi-wordmark-white.png"
            alt="Olefi"
            width={132}
            height={45}
            className="mb-4 h-auto w-[8.25rem]"
          />
          <p className="text-sm sm:text-base">
            Your trusted partner for global digital payments.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 sm:mb-4">Company</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 sm:mb-4">Support</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/help-center" className="hover:text-white transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/report-issue" className="hover:text-white transition-colors">
                Report Issue
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 sm:mb-4">Legal</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white sm:mb-4">Get the app</h4>
          <AppStoreBadges />
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-white/10 px-4 pt-8 text-sm text-gray-500 sm:flex-row sm:px-6">
        <span>© {new Date().getFullYear()} Olefi. All rights reserved.</span>
        <ThemeToggle />
      </div>
    </footer>
  );
}
