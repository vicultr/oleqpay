export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 sm:py-16 mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4 sm:px-6">
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">OleqPay</h3>
          <p className="text-sm sm:text-base">Your trusted partner for global digital payments.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 sm:mb-4">Company</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="cursor-pointer hover:text-white">About</li>
            <li className="cursor-pointer hover:text-white">Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 sm:mb-4">Support</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="cursor-pointer hover:text-white">Help Center</li>
            <li className="cursor-pointer hover:text-white">Report Issue</li>
            <li className="cursor-pointer hover:text-white">API Docs</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 sm:mb-4">Legal</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="cursor-pointer hover:text-white">Privacy Policy</li>
            <li className="cursor-pointer hover:text-white">Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 sm:mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} OleqPay. All rights reserved.
      </div>
    </footer>
  );
}