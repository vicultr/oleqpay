export default function AppStoreBadges() {
  const storeClass =
    "group inline-flex w-full max-w-[11rem] items-center gap-3 rounded-xl border border-gray-800 bg-[#0b0b0b] px-3.5 py-2.5 text-left text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-brand-green hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2";

  return (
    <div className="flex flex-col items-start gap-2.5" aria-label="Download the Olefi mobile app">
      <a
        href="https://apps.apple.com/us/app/oleq-pay/id6781711391"
        target="_blank"
        rel="noopener noreferrer"
        className={storeClass}
        aria-label="Download Olefi on the App Store (opens in a new tab)"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span className="flex flex-col leading-none">
          <span className="text-[0.65rem] font-medium tracking-wide text-gray-300">Download on the</span>
          <span className="mt-1 text-lg font-semibold tracking-tight">App Store</span>
        </span>
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.oleqpay.app"
        target="_blank"
        rel="noopener noreferrer"
        className={storeClass}
        aria-label="Get Olefi on Google Play (opens in a new tab)"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="none" aria-hidden="true">
          <path d="M3.18 23.76c.3.17.64.22.99.14l.11-.06 11.08-6.4-2.39-2.39-9.79 8.71z" fill="#EA4335" />
          <path d="M20.1 9.4l-2.44-1.41-2.7 2.7 2.7 2.7 2.46-1.42c.7-.4.7-1.56-.02-1.97z" fill="#FBBC04" />
          <path d="M2.08 3.06A1.48 1.48 0 002 3.93v16.14c0 .45.18.85.48 1.14L3.57 20l9.77-9.77-.06-.07L3.57 1.5 2.08 3.06z" fill="#4285F4" />
          <path d="M4.17.32l-.11-.06A1.2 1.2 0 002.93.4L13.34 10.8l2.39-2.39L4.17.32z" fill="#34A853" />
        </svg>
        <span className="flex flex-col leading-none">
          <span className="text-[0.65rem] font-medium uppercase tracking-wide text-gray-300">Get it on</span>
          <span className="mt-1 text-lg font-semibold tracking-tight">Google Play</span>
        </span>
      </a>
    </div>
  );
}
