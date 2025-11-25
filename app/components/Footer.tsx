import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 sm:py-16 mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4 sm:px-6">
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            OleqPay
          </h3>
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
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
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
            <li>
              <Link href="/api-docs" className="hover:text-white transition-colors">
                API Docs
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
      <div className="text-center mt-8 sm:mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} OleqPay. All rights reserved.
      </div>
    </footer>
  );
}