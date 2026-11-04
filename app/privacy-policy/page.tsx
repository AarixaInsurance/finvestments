import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  FileText,
  Mail,
  Phone,
  Building,
  CheckCircle2,
  ExternalLink
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection | FINVESTMENTS',
  description:
    'Privacy Policy and Personal Data Protection Notice under the Digital Personal Data Protection (DPDP) Act 2023 for FINVESTMENTS (AMFI Registered Mutual Fund Distributor ARN-129236 | ARN-186693).',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Header / Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-44">
              <Image
                src="/finvestments-logo.png"
                alt="FINVESTMENTS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-[#0B2545] transition"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B2545] via-[#08203e] to-[#051937] px-4 py-14 text-white text-center">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 border border-amber-400/20 mb-3">
            <Lock className="size-3.5 text-amber-300" />
            <span>Data Protection & Privacy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm sm:text-base text-blue-200 max-w-2xl mx-auto">
            Digital Personal Data Protection (DPDP) Act 2023 & SEBI / AMFI Regulatory Compliance Notice
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-amber-200 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <span>FINVESTMENTS · ARN-129236 | ARN-186693</span>
          </div>
        </div>
      </section>

      {/* Main Legal Content Container */}
      <main className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl space-y-8 text-sm leading-relaxed text-slate-700">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-4 text-xs text-slate-500 font-medium">
            <span>Last Updated: November 2026</span>
            <span>Applicable Law: DPDP Act 2023 (India)</span>
          </div>

          <p className="text-base text-slate-800 font-medium leading-relaxed">
            <strong>FINVESTMENTS</strong> (AMFI Registered Mutual Fund Distributor, <strong>ARN-129236</strong> & <strong>ARN-186693</strong>, APRN: APRN00822) respects your privacy and is firmly committed to protecting your personal, financial, and transactional data in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act), Prevention of Money Laundering Act (PMLA), and regulatory guidelines prescribed by SEBI and AMFI.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0B2545] border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="text-amber-600">1.</span> Information We Collect
            </h2>
            <p>
              When you interact with our website, submit an investment consultation request, or enroll for mutual fund distribution services, we collect necessary information strictly for legitimate regulatory and KYC purposes:
            </p>
            <ul className="space-y-2 list-disc list-inside text-slate-600 pl-2">
              <li>
                <strong>Identity & Contact Information:</strong> Full Name, Email Address, Mobile Number, Date of Birth, and Residential / Tax Status (Resident Indian / NRI).
              </li>
              <li>
                <strong>Statutory KYC & Regulatory Data:</strong> Permanent Account Number (PAN), KYC verification status, Aadhaar verification (via authorized UIDAI / CAMS / KFintech gateways), and Bank Account Details for dividend and redemption mandates.
              </li>
              <li>
                <strong>Investment Preferences:</strong> Investment horizon, risk appetite, preferred asset classes (Equity, Debt, Hybrid, Corporate FDs, PMS), and target financial milestones.
              </li>
              <li>
                <strong>Technical Logs:</strong> IP address, device metadata, and consultation timestamps captured solely for statutory record-keeping and cyber security.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0B2545] border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="text-amber-600">2.</span> Purpose of Data Processing
            </h2>
            <p>Your personal and financial information is processed strictly for:</p>
            <div className="grid gap-3 sm:grid-cols-2 pt-1">
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                <div className="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" /> Mutual Fund Execution & KYC
                </div>
                <p className="text-xs text-slate-600">
                  Facilitating folios, SIP registrations, and KYC processing directly through Asset Management Companies (AMCs) and RTAs (CAMS & KFintech).
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                <div className="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" /> Suitability Assessment
                </div>
                <p className="text-xs text-slate-600">
                  Ensuring suggested mutual fund scheme categories align with your stated risk profile and horizon as mandated by AMFI Code of Conduct.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                <div className="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" /> Portfolio Servicing & Reporting
                </div>
                <p className="text-xs text-slate-600">
                  Generating consolidated portfolio valuations, capital gains tax reports, and periodic rebalancing statements via secure platforms.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                <div className="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" /> Regulatory Compliance & Audit
                </div>
                <p className="text-xs text-slate-600">
                  Maintaining audit logs, commission disclosures, and investor communication records under SEBI (Mutual Funds) Regulations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0B2545] border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="text-amber-600">3.</span> Zero Commercial Data Sharing
            </h2>
            <div className="rounded-xl bg-emerald-50 p-4 border border-emerald-200 text-emerald-900 text-xs sm:text-sm">
              <strong>Strict Guarantee:</strong> FINVESTMENTS strictly does <strong>NOT</strong> sell, rent, lease, or monetize your personal or financial data with any third-party marketers, advertisers, or unauthorized lead aggregators.
            </div>
            <p>
              We disclose client information solely to regulated and legally authorized entities:
            </p>
            <ul className="space-y-1.5 list-disc list-inside text-slate-600 pl-2">
              <li>Registered Asset Management Companies (AMCs) and RTAs (CAMS, KFintech).</li>
              <li>Statutory and Regulatory Bodies: SEBI, AMFI, FIU-India, and Tax authorities when required by law.</li>
              <li>Certified Technology Partners: Secure portfolio reporting systems (e.g., InvestWell) operating under non-disclosure agreements.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0B2545] border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="text-amber-600">4.</span> Bank-Grade Data Security & Storage
            </h2>
            <p>
              We implement comprehensive technical, administrative, and physical safeguards:
            </p>
            <ul className="space-y-1.5 list-disc list-inside text-slate-600 pl-2">
              <li>End-to-end Transport Layer Security (TLS 1.3 / HTTPS encryption) across all web channels.</li>
              <li>Strict role-based access controls limiting client data visibility exclusively to certified advisors.</li>
              <li>Regular security patching, access log audits, and secure credential handling.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0B2545] border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="text-amber-600">5.</span> Data Retention
            </h2>
            <p>
              Client records, transaction confirmations, and KYC logs are retained for statutory periods mandated under SEBI regulations, AMFI norms, and the Prevention of Money Laundering Act (PMLA) — typically 8 years following the cessation of distributor relationship.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0B2545] border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="text-amber-600">6.</span> Your Rights Under the DPDP Act 2023
            </h2>
            <p>As a data principal under Indian law, you have the right to:</p>
            <ul className="space-y-1.5 list-disc list-inside text-slate-600 pl-2">
              <li>Request confirmation and summary of personal data processed by us.</li>
              <li>Request correction or updating of outdated or inaccurate personal records.</li>
              <li>Seek redressal of any grievance regarding personal data processing.</li>
            </ul>
          </section>

          {/* Section 7 - Grievance Desk */}
          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0B2545] border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="text-amber-600">7.</span> Compliance & Grievance Redressal Desk
            </h2>
            <p>
              For any queries, data update requests, or privacy concerns, please contact our Compliance & Grievance Desk:
            </p>

            <div className="rounded-2xl bg-gradient-to-br from-[#0B2545] to-[#051937] p-6 text-white space-y-3">
              <div className="font-extrabold text-amber-300 text-base">
                FINVESTMENTS Grievance & Compliance Desk
              </div>
              <p className="text-xs text-blue-200">
                AMFI Registered Mutual Fund Distributor · ARN-129236 | ARN-186693
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Building className="size-4 text-amber-400 shrink-0" />
                  <span>511, 5th Floor, I-Thum Heights, A-16, A Block, Sector 62, Noida, UP – 201309</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="size-4 text-emerald-400 shrink-0" />
                  <span>Official WhatsApp / Helpline: +91 98101 21834</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="size-4 text-amber-400 shrink-0" />
                  <span>Email: advice@finvestments.net</span>
                </div>
              </div>
            </div>
          </section>

          {/* Regulatory Portal Links */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              For regulatory filings and complaints, visit SEBI SCORES portal.
            </div>
            <a
              href="https://scores.sebi.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] hover:text-amber-600 transition"
            >
              <span>Visit SEBI SCORES 2.0</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <p>© 2016 - 2026 FINVESTMENTS. All Rights Reserved. Invest | Grow | Protect.</p>
        <p className="mt-1 text-[11px] text-slate-400">
          Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
        </p>
      </footer>
    </div>
  )
}

