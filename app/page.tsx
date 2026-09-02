"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Zap,
  Globe,
  BarChart3,
  RefreshCw,
  Headphones,
  UserPlus,
  Wallet,
  Send,
  ListChecks,
  FileText,
  ArrowRightLeft,
  PieChart,
  Tag,
  Layers,
  Calendar,
  Download,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AppStoreBadges from "./components/AppStoreBadges";

export default function Home() {
  const trustBadges = ["Bank-Level Security", "Instant Settlement", "190+ Countries"];

  const stats = [
    { value: "$2B+", label: "Processed annually" },
    { value: "1.2M+", label: "Active users" },
    { value: "< 3s", label: "Settlement time" },
  ];

  const rails = ["M-Pesa", "Airtel Money", "MTN MoMo", "Equity Bank", "NCBA", "Absa"];

  const features = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Instant Settlement",
      desc: "Funds move in under 3 seconds. Our real-time payment rails settle transactions faster than any traditional correspondent banking network.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Zero-Trust Security",
      desc: "Military-grade encryption, biometric authentication, and AI-powered fraud scoring protect every transaction — 24 hours a day, 7 days a week.",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Global Reach",
      desc: "Send and receive in 60+ currencies across 190 countries. Local payment rails, global scale — with transparent, mid-market exchange rates.",
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Smart Financial Analytics",
      desc: "Live dashboards give you a complete view of cash flow, transaction history, and spending patterns — so every financial decision is data-driven.",
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: "Auto Reconciliation",
      desc: "Payments, invoices, and records sync automatically. Spend less time on manual accounting — more time growing your business.",
    },
    {
      icon: <Headphones className="w-7 h-7" />,
      title: "24/7 Human Support",
      desc: "A real person picks up whenever you need help — across chat, phone, and email. No bots, no wait queues for urgent payment issues.",
    },
  ];

  const steps = [
    {
      icon: <UserPlus className="w-7 h-7" />,
      title: "Create your account",
      desc: "Sign up in under 2 minutes. Complete KYC once — then you're cleared to send, receive, and hold funds across borders.",
    },
    {
      icon: <Wallet className="w-7 h-7" />,
      title: "Fund your wallet",
      desc: "Add money via bank transfer, card, or mobile money (M-Pesa, Airtel Money). Funds are available in your wallet instantly.",
    },
    {
      icon: <Send className="w-7 h-7" />,
      title: "Send or request payment",
      desc: "Pay anyone with a phone number or email — locally or internationally. Split expenses, pay suppliers, or send payroll in one click.",
    },
    {
      icon: <ListChecks className="w-7 h-7" />,
      title: "Track every transaction",
      desc: "Every payment is logged, categorised, and exportable. Full financial visibility — always — with real-time notifications.",
    },
  ];

  const paymentFeatures = [
    {
      icon: <Send className="w-6 h-6" />,
      title: "Send to anyone",
      desc: "Transfer to any phone number, email address, or bank account — locally or internationally across 190 countries.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Request & invoicing",
      desc: "Generate payment requests with a link. Clients pay in one tap; you get notified and funds settle instantly.",
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6" />,
      title: "Currency conversion",
      desc: "Send in KES, receive in USD, EUR, GBP, or NGN. Live interbank rates with transparent conversion fees.",
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Split payments",
      desc: "Divide bills, projects, or expenses among multiple parties. Everyone pays their share; totals reconcile automatically.",
    },
  ];

  const payrollSteps = [
    {
      title: "Build your recipient list",
      desc: "Import employees, contractors, or agents. Group them however your org is structured.",
    },
    {
      title: "Tag & categorise",
      desc: "Assign payment categories — Payroll, Commission, Bonus — so every payout is traceable.",
    },
    {
      title: "Disburse & reconcile",
      desc: "Trigger one payout; Olefi fans out to every recipient and auto-generates reports.",
    },
  ];

  const payrollFeatures = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Bulk recipient management",
      desc: "Add unlimited recipients — employees, contractors, suppliers, or agents. Organise them into groups for fast batch disbursement.",
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Payment category tagging",
      desc: "Tag every payment with a category: Payroll, Supplier Invoice, Commission, Bonus, Refund. Filter, report, and reconcile by tag in seconds.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Group & beneficiary payouts",
      desc: "Define named beneficiary groups — Sales Team Kenya, Field Agents, Remote Contractors — and trigger a single payout that fans out to every member simultaneously.",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Business wallet separation",
      desc: "Keep operations, payroll, and reserve funds in dedicated sub-wallets. Authorise payouts only from the designated payroll wallet with dual-approval controls.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Scheduled & recurring runs",
      desc: "Set weekly, bi-weekly, or monthly payroll runs. Olefi auto-executes on schedule and sends receipts to each recipient — zero manual intervention.",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Exportable payroll reports",
      desc: "Download full disbursement reports in CSV or PDF, pre-formatted for accounting software and statutory filings.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f4ed] text-gray-800">
      {/* ---------- HERO ---------- */}
      <section className="pt-6 sm:pt-10 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-green-dark rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Financial freedom,
                <br />
                <span className="text-brand-green">built for Africa.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-gray-600 sm:text-lg">
                Olefi gives individuals, businesses, and developers a smarter way to send, receive, and settle money — across borders, in real time, with zero hidden fees.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="#payments"
                  className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-3.5 rounded-full font-medium text-center transition"
                >
                  Open free account
                </Link>
              </div>

              <AppStoreBadges />

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {trustBadges.map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full px-3.5 py-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Olefi product interface */}
            <div className="overflow-hidden rounded-2xl border border-emerald-900/15 bg-[#0b1d16] shadow-2xl dark:border-emerald-400/20">
              <Image
                src="/product/dashboard.png"
                alt="Olefi account dashboard showing wallets, cash-flow metrics and recent transactions"
                width={1210}
                height={1536}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST / RAILS ---------- */}
      <section className="py-10 sm:py-14 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-500 mb-6">Trusted by teams across Africa</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {rails.map((name, i) => (
              <span key={i} className="text-gray-400 font-semibold text-lg">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section id="features" className="py-14 sm:py-24 bg-[#f5f4ed] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-brand-green font-semibold mb-3">Everything you need</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
            Infrastructure built for modern finance.
          </h2>
          <p className="mx-auto mb-12 mt-4 max-w-2xl text-center text-gray-600">
            Olefi combines the speed of modern payment rails with bank-level compliance — giving individuals and businesses the best of both worlds.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="p-6 bg-white border shadow-sm hover:shadow-md transition">
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-brand-green text-white">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-brand-green font-semibold mb-3 text-center">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            From sign-up to settled in four steps.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-2">
                  Step {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PAYMENTS ---------- */}
      <section id="payments" className="py-14 sm:py-24 bg-[#f5f4ed] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-brand-green font-semibold mb-3">Payments</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
            Move money the way your business demands.
          </h2>
          <p className="mx-auto mb-12 mt-4 max-w-2xl text-center text-gray-600">
            From one-click transfers to high-volume batch disbursements, Olefi handles every payment scenario with the same instant rails and zero friction.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {paymentFeatures.map((p, i) => (
              <Card key={i} className="p-6 bg-white border shadow-sm hover:shadow-md transition">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white border border-gray-200 text-brand-green">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Link
            href="#payroll"
            className="inline-flex items-center justify-center bg-brand-green hover:bg-brand-green-dark text-white px-8 py-3.5 rounded-full font-medium transition"
          >
            Start sending money
          </Link>
        </div>
      </section>

      {/* ---------- BUSINESS PAYROLL ---------- */}
      <section id="payroll" className="py-14 sm:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-brand-green font-semibold mb-3">Business Payroll</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl">
            Pay your entire team in one click.
          </h2>
          <p className="mx-auto mb-12 mt-4 max-w-2xl text-center text-gray-600">
            Olefi's payroll engine lets you manage recipients, organise them into groups, tag every disbursement by category, and execute bulk payouts to hundreds of beneficiaries simultaneously — all from your business account.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
            {payrollSteps.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-semibold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {payrollFeatures.map((f, i) => (
              <Card key={i} className="p-6 bg-gray-50 border shadow-sm hover:shadow-md transition">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-green text-white">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-3.5 rounded-full font-medium text-center transition"
            >
              Set up business payroll
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-full font-medium text-center border border-gray-300 hover:border-gray-400 transition"
            >
              Learn about Olefi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
