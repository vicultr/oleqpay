"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingBag,
  Globe,
  CreditCard,
  Shield,
  Smartphone,
  Calendar,
  Wallet,
  Banknote,
  ArrowRight,
  CheckCircle2,
  Zap,
  Lock,
  BarChart3,
  Code,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <ShoppingBag className="w-7 h-7" />,
      title: "Ecommerce Integrations",
      desc: "Connect your online store with frictionless payment solutions and real-time checkout experiences. Compatible with Shopify, WooCommerce, Magento, and custom platforms.",
      features: ["One-click integration", "Custom checkout flows", "Cart abandonment recovery"],
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Online Payments",
      desc: "Accept global payments with support for cards, digital wallets, and multi-currency transactions. Process payments in 135+ currencies with automatic conversion.",
      features: ["135+ currencies", "Local payment methods", "Real-time exchange rates"],
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      title: "Automatic Transfers",
      desc: "Schedule payouts, distribute funds, and automate settlements without manual work. Set custom rules for fund distribution and automated reconciliation.",
      features: ["Scheduled transfers", "Split payments", "Auto-reconciliation"],
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Secure Transactions",
      desc: "End-to-end encryption and advanced fraud monitoring keep your customers and business safe. PCI DSS Level 1 certified with machine learning fraud detection.",
      features: ["PCI DSS certified", "AI fraud detection", "3D Secure 2.0"],
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile Payment Support",
      desc: "Optimized for mobile apps and browsers for seamless in-app or mobile web payments. Native SDKs for iOS and Android with biometric authentication support.",
      features: ["Native mobile SDKs", "Biometric auth", "Mobile-optimized UI"],
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Recurring Billing",
      desc: "Automated subscription payments with smart retries and full billing cycle management. Handle trials, upgrades, downgrades, and prorations effortlessly.",
      features: ["Smart retries", "Dunning management", "Proration support"],
    },
    {
      icon: <Wallet className="w-7 h-7" />,
      title: "Multiple Payment Options",
      desc: "Enable customers to pay using cards, wallets, mobile money, or bank transfers. Support for Apple Pay, Google Pay, PayPal, and 50+ local methods.",
      features: ["Digital wallets", "Bank transfers", "Buy now, pay later"],
    },
    {
      icon: <Banknote className="w-7 h-7" />,
      title: "Seamless Payment Flow",
      desc: "Fast, intuitive, and frictionless payment experiences from checkout to confirmation. Optimized conversion rates with intelligent routing and one-click payments.",
      features: ["One-click checkout", "Smart routing", "Instant confirmations"],
    },
  ];

  const additionalServices = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      desc: "Get deep insights into your payment data with real-time dashboards, custom reports, and revenue forecasting. Track conversion rates, identify trends, and optimize your payment strategy.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developer APIs",
      desc: "Build custom payment experiences with our comprehensive REST APIs, webhooks, and SDKs. Complete documentation, sandbox environments, and dedicated developer support.",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Dispute Management",
      desc: "Automated chargeback handling with evidence collection and submission. Real-time alerts and comprehensive dispute analytics to minimize losses.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Compliance Support",
      desc: "Stay compliant across global markets with built-in regulatory support. We handle PCI DSS, GDPR, PSD2, and local payment regulations automatically.",
    },
  ];

  const industries = [
    {
      name: "Ecommerce",
      desc: "Power your online store with fast, secure checkout experiences that boost conversions.",
    },
    {
      name: "SaaS & Subscriptions",
      desc: "Manage recurring billing, trials, and subscription lifecycle with automated tools.",
    },
    {
      name: "Marketplaces",
      desc: "Handle complex multi-party payments with split settlements and vendor management.",
    },
    {
      name: "Digital Services",
      desc: "Accept payments for digital products, downloads, and online services globally.",
    },
    {
      name: "Travel & Hospitality",
      desc: "Process bookings and reservations with support for holds, captures, and refunds.",
    },
    {
      name: "Retail & POS",
      desc: "Unify online and offline payments with omnichannel solutions and inventory sync.",
    },
  ];

  const benefits = [
    "Fast integration with pre-built plugins and SDKs",
    "99.99% uptime with redundant infrastructure",
    "24/7 multilingual customer support",
    "Transparent pricing with no hidden fees",
    "Real-time reporting and analytics",
    "Automatic updates and security patches",
  ];

  return (
    <main className="min-h-screen bg-[#f5f4ed] text-gray-800">
      {/* ---------- HERO ---------- */}
      <section className="pt-12 sm:pt-20 pb-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#a3e635] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#84cc16] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Our Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            OleqPay provides a complete suite of payment solutions designed to
            help businesses grow, scale, and operate globally with ease. From startups to enterprises, we have the tools you need.
          </p>
        </div>
      </section>

      {/* ---------- SERVICES GRID ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Core Payment Solutions
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Everything you need to accept, process, and manage payments globally
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Card
                key={i}
                className="p-6 bg-gray-50 border shadow-sm hover:shadow-md hover:scale-[1.03] transition duration-300"
              >
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-xl bg-[#a3e635] flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#a3e635] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ADDITIONAL SERVICES ---------- */}
      <section className="py-12 sm:py-20 bg-[#f5f4ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Advanced Features
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Powerful tools to optimize, secure, and scale your payment operations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, i) => (
              <Card
                key={i}
                className="p-8 bg-white shadow-sm hover:shadow-md transition"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-xl bg-[#a3e635] flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Industries We Serve
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Tailored payment solutions for every business vertical
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <Card
                key={i}
                className="p-6 bg-gray-50 border shadow-sm hover:shadow-md transition"
              >
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-2 text-[#a3e635]">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {industry.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BENEFITS ---------- */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#a3e635] to-[#84cc16]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Why Choose OleqPay Services
          </h2>
          <p className="text-center text-gray-800 max-w-2xl mx-auto mb-12">
            Built with your success in mind
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle2 className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                <p className="text-gray-900 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            How Our Services Work
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Simple integration, powerful results
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Services",
                desc: "Select the payment solutions that fit your business needs",
              },
              {
                step: "2",
                title: "Integrate Quickly",
                desc: "Use our APIs, plugins, or no-code solutions to get started",
              },
              {
                step: "3",
                title: "Customize & Configure",
                desc: "Set up payment methods, currencies, and workflows",
              },
              {
                step: "4",
                title: "Go Live & Scale",
                desc: "Start processing payments and grow without limits",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#a3e635] text-gray-900 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURE COMPARISON ---------- */}
      <section className="py-12 sm:py-20 bg-[#f5f4ed]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Service Capabilities
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Everything included to power your payment infrastructure
          </p>

          <Card className="p-8 bg-white shadow-sm">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#a3e635]" />
                    Performance
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Sub-second transaction processing",
                      "99.99% uptime guarantee",
                      "Intelligent payment routing",
                      "Auto-scaling infrastructure",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#a3e635] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#a3e635]" />
                    Security
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "PCI DSS Level 1 compliance",
                      "End-to-end encryption",
                      "AI-powered fraud detection",
                      "Real-time risk monitoring",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#a3e635] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-[#a3e635]" />
                    Global Reach
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "150+ countries supported",
                      "135+ currencies accepted",
                      "Local payment methods",
                      "Multi-language support",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#a3e635] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-[#a3e635]" />
                    Business Growth
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Conversion optimization tools",
                      "Advanced analytics & insights",
                      "Revenue forecasting",
                      "Custom reporting",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#a3e635] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-16 sm:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Build With OleqPay Today
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Start accepting fast, secure, and global payments in minutes. Join thousands of businesses already powered by OleqPay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a3e635] hover:bg-[#84cc16] text-gray-900 px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 transition">
              Create Account <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-medium border-2 border-gray-900 transition">
              View Documentation
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            No credit card required • Free integration support • 24/7 assistance
          </p>
        </div>
      </section>
    </main>
  );
}