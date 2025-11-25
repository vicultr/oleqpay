"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Zap, Users, Target, Award, TrendingUp, Heart, CheckCircle2, Rocket } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      desc: "We implement advanced encryption, fraud monitoring, and global compliance standards to protect every transaction.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Access",
      desc: "OleqPay enables borderless payments, helping businesses reach customers in 150+ countries with local payment methods.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      desc: "From instant processing to quick payouts, speed is integrated into every part of our platform with sub-second response times.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer-Centered",
      desc: "Every feature is designed with your business in mind — simplicity, clarity, and reliability backed by 24/7 support.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Founded",
      desc: "OleqPay was established with a vision to revolutionize digital payments",
    },
    {
      year: "2020",
      title: "Global Expansion",
      desc: "Expanded to 50+ countries, processing millions in transactions",
    },
    {
      year: "2022",
      title: "10M+ Transactions",
      desc: "Reached milestone of processing 10 million transactions daily",
    },
    {
      year: "2024",
      title: "Industry Leader",
      desc: "Recognized as a top payment gateway with 150+ country coverage",
    },
  ];

  const team = [
    {
      role: "Leadership",
      desc: "Our executive team brings decades of experience in fintech, security, and global commerce.",
    },
    {
      role: "Engineering",
      desc: "World-class developers building scalable, secure infrastructure that handles billions in transactions.",
    },
    {
      role: "Support",
      desc: "Dedicated teams providing 24/7 multilingual support across all time zones.",
    },
    {
      role: "Security",
      desc: "Experts in fraud prevention, compliance, and data protection keeping your business safe.",
    },
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, text: "PCI DSS Level 1 Certified" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "99.99% Uptime SLA" },
    { icon: <Globe className="w-6 h-6" />, text: "150+ Countries Supported" },
    { icon: <Shield className="w-6 h-6" />, text: "Bank-Level Encryption" },
    { icon: <Users className="w-6 h-6" />, text: "50,000+ Active Merchants" },
    { icon: <Zap className="w-6 h-6" />, text: "Sub-Second Processing" },
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            About <span className="text-[#a3e635]">OleqPay</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            OleqPay is a modern payment gateway built to power fast, seamless,
            and secure digital transactions for businesses worldwide. We're on a mission to make global commerce accessible to everyone.
          </p>
        </div>
      </section>

      {/* ---------- STATS BANNER ---------- */}
      <section className="py-12 bg-gradient-to-r from-[#a3e635] to-[#84cc16]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Active Merchants" },
              { value: "$5B+", label: "Processed Annually" },
              { value: "150+", label: "Countries" },
              { value: "99.99%", label: "Uptime" },
            ].map((stat, i) => (
              <div key={i} className="text-gray-900">
                <div className="text-3xl sm:text-4xl font-bold mb-2">
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

      {/* ---------- OUR STORY ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                OleqPay was created with a simple mission:
                <strong> make digital payments effortless for everyone.</strong>
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                From startups to large enterprises, we provide the tools needed to
                accept payments, manage revenue, and scale globally — all in one
                unified platform. We saw how complex and fragmented payment systems were holding businesses back from reaching their full potential.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                We believe payments should be fast, secure, and borderless. That's
                why we built a system powered by modern infrastructure, intelligent
                routing, and world-class security protocols. Today, we're proud to serve thousands of businesses across six continents.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl h-64 sm:h-96 flex items-center justify-center relative overflow-hidden shadow-xl">
              <Rocket className="w-32 h-32 text-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MISSION & VISION ---------- */}
      <section className="py-12 sm:py-20 bg-[#f5f4ed]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white shadow-sm hover:shadow-md transition">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#a3e635]">
                  <Target className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses of all sizes with accessible, secure, and intelligent payment solutions that remove barriers to global commerce. We're committed to making financial technology simple, transparent, and available to everyone, everywhere.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-sm hover:shadow-md transition">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#a3e635]">
                  <Heart className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the world's most trusted payment infrastructure, enabling seamless transactions across borders, currencies, and platforms. We envision a future where businesses can focus on growth while we handle the complexity of global payments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What We Stand For
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our core values guide every decision we make and every feature we build
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Card
                key={i}
                className="p-6 bg-gray-50 shadow-sm border hover:shadow-md transition-transform hover:scale-105 duration-300"
              >
                <CardContent className="p-0 text-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-[#a3e635] mx-auto">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- JOURNEY/MILESTONES ---------- */}
      <section className="py-12 sm:py-20 bg-[#f5f4ed]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Our Journey
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            From startup to global payment leader - key milestones in our growth
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#a3e635]"></div>

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {i % 2 === 0 && (
                      <Card className="p-6 bg-white shadow-sm inline-block max-w-md">
                        <CardContent className="p-0">
                          <div className="text-3xl font-bold text-[#a3e635] mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {milestone.desc}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="hidden md:flex w-8 h-8 rounded-full bg-[#a3e635] border-4 border-white shadow-lg z-10 flex-shrink-0"></div>

                  <div className="flex-1 text-center md:text-left">
                    {i % 2 !== 0 && (
                      <Card className="p-6 bg-white shadow-sm inline-block max-w-md">
                        <CardContent className="p-0">
                          <div className="text-3xl font-bold text-[#a3e635] mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {milestone.desc}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ACHIEVEMENTS ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Our Achievements
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Recognition and certifications that showcase our commitment to excellence
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, i) => (
              <Card
                key={i}
                className="p-6 bg-gray-50 shadow-sm border hover:shadow-md transition"
              >
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#a3e635] flex items-center justify-center flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <p className="font-semibold text-gray-800">
                    {achievement.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section className="py-12 sm:py-20 bg-[#f5f4ed]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Talented individuals working together to build the future of payments
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((dept, i) => (
              <Card
                key={i}
                className="p-6 bg-white shadow-sm border hover:shadow-md transition"
              >
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3 text-[#a3e635]">
                    {dept.role}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dept.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Why Businesses Choose OleqPay
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We're more than just a payment gateway - we're your partner in growth
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Built for Scale",
                desc: "Our infrastructure handles everything from your first transaction to billions in volume without missing a beat.",
              },
              {
                title: "Developer-Friendly",
                desc: "Comprehensive APIs, detailed documentation, and SDKs that make integration simple and fast.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden fees, no surprises. Clear, competitive pricing that grows with your business.",
              },
              {
                title: "Always Available",
                desc: "24/7 support, 99.99% uptime SLA, and instant failover systems keep you running smoothly.",
              },
              {
                title: "Global Compliance",
                desc: "We handle regulatory requirements across 150+ countries so you can focus on expansion.",
              },
              {
                title: "Continuous Innovation",
                desc: "Regular updates, new features, and cutting-edge security to keep you ahead of the curve.",
              },
            ].map((reason, i) => (
              <Card
                key={i}
                className="p-6 bg-gray-50 shadow-sm border hover:shadow-md transition"
              >
                <CardContent className="p-0 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#a3e635] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{reason.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#a3e635] to-[#84cc16]">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Ready to Accept Payments Seamlessly?
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            Join thousands of businesses using OleqPay to process safe and
            reliable payments globally. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium shadow-lg transition">
              Get Started Free
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium border-2 border-gray-900 transition">
              Contact Sales
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-700">
            No credit card required • Setup in minutes • 24/7 support
          </p>
        </div>
      </section>
    </main>
  );
}