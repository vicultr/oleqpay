"use client";

import Link from "next/link";
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
  ArrowRight,
  CheckCircle2,
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
      <section className="pt-8 sm:pt-16 pb-12 sm:pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#a3e635] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#84cc16] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Your Trusted Gateway to <br className="hidden sm:block" /> Global
            Transactions
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            An innovative payment gateway solution, designed to facilitate
            digital transactions safely, quickly and efficiently. Join thousands of businesses worldwide who trust OleqPay to power their payment infrastructure with enterprise-grade security and lightning-fast processing.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Trusted by businesses worldwide • Enterprise-grade security
          </p>
        </div>
      </section>

      {/* ---------- TRUST SECTION ---------- */}
      <section className="py-12 sm:py-16 bg-[#f5f4ed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base text-gray-500 mb-6">
            TRUSTED BY LEADING COMPANIES WORLDWIDE
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BRAND</span>
            </div>
            <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">COMPANY</span>
            </div>
            <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RETAIL</span>
            </div>
            <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">STORE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section id="services" className="py-12 sm:py-20 bg-white">
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
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
            A Smarter Way to Manage Payments
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12">
            Our intuitive dashboard gives you complete visibility and control over your payment operations. Monitor transactions, track analytics, and manage your business finances all in one place.
          </p>
          <div className="rounded-2xl shadow-xl border bg-white overflow-hidden p-4 sm:p-8">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg h-64 sm:h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <CreditCard className="w-24 h-24 text-gray-300" />
              </div>
              <p className="text-gray-500 relative z-10">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="py-12 sm:py-20 bg-[#f5f4ed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
            How OleqPay Works
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 sm:mb-16">
            Get started in minutes with our streamlined integration process. From signup to your first transaction, we make it simple.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                step: "01",
                title: "Sign Up & Integrate",
                desc: "Create your account in minutes and integrate our API with comprehensive documentation and developer tools. Our technical team is ready to assist you every step of the way.",
                icon: <Smartphone className="w-8 h-8" />,
              },
              {
                step: "02",
                title: "Configure Settings",
                desc: "Customize payment methods, currencies, and security preferences to match your business needs. Set up automated workflows and notification systems.",
                icon: <Shield className="w-8 h-8" />,
              },
              {
                step: "03",
                title: "Start Accepting",
                desc: "Begin processing payments instantly with real-time monitoring. Access detailed analytics and reports to track your business growth.",
                icon: <Banknote className="w-8 h-8" />,
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#a3e635] flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold text-gray-200 mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
            Why OleqPay?
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 sm:mb-16">
            Built for businesses of all sizes, from startups to enterprises. Experience the difference with our cutting-edge payment technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            {[
              {
                title: "Fast Payments",
                desc: "Process transactions instantly with our globally optimized routing. Our infrastructure ensures 99.99% uptime and sub-second response times for the smoothest checkout experience.",
                icon: <Globe className="w-8 h-8" />,
              },
              {
                title: "Highly Secure",
                desc: "End-to-end encryption protects your business & customers. We're PCI DSS Level 1 certified and employ advanced fraud detection powered by machine learning.",
                icon: <Shield className="w-8 h-8" />,
              },
              {
                title: "Global Reach",
                desc: "Accept payments from anywhere in the world. Support for 135+ currencies and local payment methods ensures you never miss a sale, regardless of customer location.",
                icon: <Banknote className="w-8 h-8" />,
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-5 sm:p-6 border bg-gray-50 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 duration-300"
              >
                <CardContent>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-[#a3e635]">
                    {item.icon}
                  </div>
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

      {/* ---------- STATS ---------- */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#a3e635] to-[#84cc16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.99%", label: "Uptime" },
              { value: "150+", label: "Countries" },
              { value: "10M+", label: "Transactions/Day" },
              { value: "<1s", label: "Processing Time" },
            ].map((stat, i) => (
              <div key={i} className="text-gray-900">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="py-12 sm:py-20 bg-[#f5f4ed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 sm:mb-16">
            Join thousands of satisfied businesses who have transformed their payment operations with OleqPay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote:
                  "OleqPay has transformed how we handle international transactions. The integration was seamless and support has been exceptional.",
                author: "Sarah Mitchell",
                role: "CEO, TechStore Global",
              },
              {
                quote:
                  "The fraud detection features have saved us countless headaches. We've seen zero chargebacks since switching to OleqPay.",
                author: "James Chen",
                role: "CFO, Digital Marketplace",
              },
              {
                quote:
                  "Best payment gateway we've used. Fast, reliable, and the analytics dashboard gives us insights we never had before.",
                author: "Maria Rodriguez",
                role: "Founder, Boutique Online",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 bg-white shadow-sm">
                <CardContent>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#a3e635] text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12">
            Have questions? We've got answers. Find everything you need to know about getting started with OleqPay.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>Is OleqPay secure?</AccordionTrigger>
              <AccordionContent>
                Yes, we use banking-level encryption and advanced fraud
                detection. OleqPay is PCI DSS Level 1 certified, the highest level of payment security certification. We employ end-to-end encryption, tokenization, and machine learning-powered fraud detection to protect every transaction.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>How fast are payouts?</AccordionTrigger>
              <AccordionContent>
                Most payouts complete within minutes, depending on your region. For standard transfers, funds typically arrive in 1-2 business days. Enterprise customers can access instant payouts with real-time settlement options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>
                Do you support international payments?
              </AccordionTrigger>
              <AccordionContent>
                Yes — OleqPay works in 150+ countries and supports 135+ currencies. We handle automatic currency conversion, local payment methods, and compliance requirements, making global expansion seamless for your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
              <AccordionTrigger>
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent>
                We support all major credit and debit cards (Visa, Mastercard, American Express), digital wallets (Apple Pay, Google Pay, PayPal), bank transfers, and region-specific payment methods to maximize your conversion rates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="5">
              <AccordionTrigger>How long does integration take?</AccordionTrigger>
              <AccordionContent>
                Most businesses complete integration in under a day. Our comprehensive API documentation, SDKs for popular platforms, and dedicated technical support team ensure a smooth setup process regardless of your technical expertise.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#a3e635] to-[#84cc16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join thousands of businesses already using OleqPay. Start accepting payments in minutes with transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg font-medium shadow-none">
              Contact Sales
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-700">
            Setup in minutes • 24/7 support • Enterprise-grade security
          </p>
        </div>
      </section>
    </main>
  );
}