"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShoppingBag,
  Globe,
  CreditCard,
  Shield,
  Smartphone,
  Calendar,
  Wallet,
  Banknote,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Ecommerce Integrations",
      desc: "Seamlessly connect your online store with other platforms and tools.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Online Payments",
      desc: "Accept various payment methods including credit cards, digital wallets, and bank transfers.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Automatic Transfers",
      desc: "Automatically move funds between accounts at scheduled intervals for smooth operations.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Transactions",
      desc: "Protect sensitive information through encryption and advanced security protocols.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Support",
      desc: "Full mobile compatibility ensures seamless payment experiences on any device.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Recurring Billing",
      desc: "Automated subscription and recurring payment management for your business.",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Multiple Payment",
      desc: "Support for multiple payment methods and currencies for global reach.",
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Seamless Payment",
      desc: "Smooth and uninterrupted payment flow for the best customer experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f4ed] text-gray-800">
      {/* ---------- HERO ---------- */}
      <section className="pt-8 sm:pt-16 pb-12 sm:pb-20 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Your Trusted Gateway to <br className="hidden sm:block" /> Global
            Transactions
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            An innovative payment gateway solution, designed to facilitate
            digital transactions safely, quickly and efficiently.
          </p>

          <Button className="mt-6 sm:mt-8 bg-[#a3e635] hover:bg-[#84cc16] text-gray-900 rounded-full px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-medium shadow-none">
            Get Started
          </Button>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-2xl">
            Powerful solutions engineered for global payments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-16">
            {services.map((service, i) => (
              <Card
                key={i}
                className="p-5 sm:p-6 border bg-gray-50 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 duration-300"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 bg-white border border-gray-200">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MOCKUP ---------- */}
      <section className="bg-[#f5f4ed] py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
            A Smarter Way to Manage Payments
          </h2>
          <div className="rounded-2xl shadow-xl border bg-white overflow-hidden p-4 sm:p-8">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64 sm:h-96 flex items-center justify-center">
              <p className="text-gray-500">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
            Why OleqPay?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            {[
              {
                title: "Fast Payments",
                desc: "Process transactions instantly with our globally optimized routing.",
              },
              {
                title: "Highly Secure",
                desc: "End-to-end encryption protects your business & customers.",
              },
              {
                title: "Global Reach",
                desc: "Accept payments from anywhere in the world.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-5 sm:p-6 border bg-gray-50 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 duration-300"
              >
                <CardContent>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRICING ---------- */}
      <section className="py-12 sm:py-20 bg-[#f5f4ed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            {[
              {
                plan: "Starter",
                price: "Free",
                benefits: [
                  "Basic dashboard",
                  "Email support",
                  "500 transactions/mo",
                ],
              },
              {
                plan: "Pro",
                price: "$29/mo",
                benefits: [
                  "Advanced tools",
                  "Priority support",
                  "Unlimited transactions",
                ],
              },
              {
                plan: "Enterprise",
                price: "Custom",
                benefits: [
                  "Full API access",
                  "Dedicated manager",
                  "Custom features",
                ],
              },
            ].map((p, i) => (
              <Card
                key={i}
                className="p-6 sm:p-8 shadow-lg bg-white border hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
              >
                <CardContent>
                  <h3 className="text-xl sm:text-2xl font-bold">{p.plan}</h3>
                  <p className="text-3xl sm:text-4xl font-bold mt-3 sm:mt-4">
                    {p.price}
                  </p>
                  <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                    {p.benefits.map((b, j) => (
                      <li key={j}>✔ {b}</li>
                    ))}
                  </ul>
                  <Button className="mt-4 sm:mt-6 w-full bg-[#a3e635] hover:bg-[#84cc16] text-gray-900 font-medium shadow-none py-2">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>Is OleqPay secure?</AccordionTrigger>
              <AccordionContent>
                Yes, we use banking-level encryption and advanced fraud
                detection.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>How fast are payouts?</AccordionTrigger>
              <AccordionContent>
                Most payouts complete within minutes, depending on your region.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>
                Do you support international payments?
              </AccordionTrigger>
              <AccordionContent>
                Yes — OleqPay works in 100+ countries.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}