import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AppStoreBadges from "./AppStoreBadges";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4 sm:px-6">
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
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-8 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">Get the Olefi app</p>
        <AppStoreBadges />
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-white/10 px-4 pt-8 text-sm text-gray-500 sm:flex-row sm:px-6">
        <span>© {new Date().getFullYear()} Olefi. All rights reserved.</span>
        <ThemeToggle />
      </div>
    </footer>
  );
}
