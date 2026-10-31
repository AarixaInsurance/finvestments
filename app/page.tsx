'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  BarChart3,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  FileText,
  HeartPulse,
  LineChart,
  LockKeyhole,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  ExternalLink,
  Award,
  ChevronRight,
  ShieldAlert,
  DownloadCloud,
  Layers,
  Percent,
  CheckCheck,
  Globe,
  Building,
  Smartphone,
  Briefcase,
  HelpCircle,
  Landmark,
  BadgePercent,
  Compass,
  ArrowUpRight
} from 'lucide-react'

import MarketTicker from '@/components/MarketTicker'
import FinancialCalculators from '@/components/FinancialCalculators'
import PortfolioLoginModal from '@/components/PortfolioLoginModal'
import QuickInvestModal from '@/components/QuickInvestModal'
import GlobalPresenceSection from '@/components/GlobalPresenceSection'

interface SolutionItem {
  icon: React.ElementType
  title: string
  subtitle: string
  text: string
  tag: string
  features: string[]
  category: string
}

const solutions: SolutionItem[] = [
  {
    icon: LineChart,
    title: 'Mutual Funds & Wealth Creation',
    subtitle: 'Systematic Equity, Debt & Multi-Asset Allocation',
    text: 'Build long-term wealth through carefully selected equity, debt, hybrid, index and multi-asset mutual fund solutions. We offer goal-based investment planning, SIPs, portfolio reviews and regular rebalancing.',
    tag: 'Long-Term Growth',
    features: [
      'Goal-based Systematic Investment Plans (SIP)',
      'Regular portfolio reviews and rebalancing',
      'Tax saving under Section 80C & LTCG optimization',
      'Direct tie-ups with leading AMCs across India'
    ],
    category: 'Mutual Funds & Wealth Creation',
  },
  {
    icon: BarChart3,
    title: 'PMS, AIFs & SIF Distribution',
    subtitle: 'Bespoke Strategies for HNIs, SIFs & Family Offices',
    text: 'Access specialised investment strategies and professionally managed portfolios designed for HNIs and sophisticated investors. Our solutions include Portfolio Management Services, Alternative Investment Funds, Specialised Investment Funds (SIF) distribution, private equity opportunities and unlisted investments.',
    tag: 'SIF & HNIs',
    features: [
      'Discretionary & Non-Discretionary PMS',
      'Authorized SIF (Specialised Investment Fund) distribution',
      'Category II & III Alternative Investment Funds (AIFs)',
      'Unlisted equity and pre-IPO deal access'
    ],
    category: 'PMS, AIFs & SIF Distribution',
  },
  {
    icon: Globe,
    title: 'GIFT City (IFSC) & SIF Investments',
    subtitle: 'Cross-Border Wealth Structuring & Offshore Funds',
    text: 'Authorized distribution for GIFT City (Gujarat International Finance Tec-City IFSC) global funds and Specialised Investment Funds (SIF). Facilitating foreign currency (USD) overseas investments, inbound India allocations with full tax efficiency, and bespoke offshore structures for HNIs, NRIs and family offices.',
    tag: 'GIFT City & SIF',
    features: [
      'Authorized Specialised Investment Fund (SIF) distribution',
      'GIFT City (IFSC) USD-denominated global fund access',
      'Tax-optimized inbound & outbound cross-border wealth structures',
      'Bespoke offshore AIFs & international family office capital'
    ],
    category: 'GIFT City & SIF Investments',
  },
  {
    icon: Landmark,
    title: 'Corporate Deposits & Bonds',
    subtitle: 'High-Yield Fixed Income & Sovereign Debt Securities',
    text: 'Preserve capital and generate predictable cash flows through curated corporate fixed deposits and fixed-income debt securities. Access AAA & AA+ rated corporate FDs, Government Securities (G-Sec), RBI Floating Rate Savings Bonds, and listed Non-Convertible Debentures (NCDs).',
    tag: 'Deposits & Bonds',
    features: [
      'Crisil / ICRA AAA & AA+ rated corporate fixed deposits',
      '100% sovereign-backed Government Securities (G-Sec) & RBI Bonds',
      'Monthly, quarterly, cumulative and semi-annual coupon payouts',
      'Special interest rate benefits for senior citizens and high yields'
    ],
    category: 'Corporate Deposits & Bonds',
  },
  {
    icon: Briefcase,
    title: 'Unlisted Shares & Private Equity',
    subtitle: 'Pre-IPO Opportunities & Late-Stage Venture Growth',
    text: 'Access high-growth unlisted enterprises, tech unicorn pre-IPOs, and private equity deals before they hit public stock exchanges. We provide access to thoroughly vetted unlisted equity shares with transparent depository transfer directly into your demat account.',
    tag: 'Pre-IPO & Growth',
    features: [
      'Access to leading tech unicorns & mature pre-IPO companies',
      'Direct demat transfer (CDSL / NSDL) with full regulatory compliance',
      'Research-backed valuation and fundamentals screening',
      'Liquidity assistance and exit structuring support'
    ],
    category: 'Unlisted Shares & Private Equity',
  },
  {
    icon: HeartPulse,
    title: 'Life, Health & General Insurance',
    subtitle: 'Comprehensive Family Risk, Medical & Asset Protection',
    text: "Protect your family's future and safeguard commercial assets with all-inclusive insurance solutions. From high-cover term insurance and 100% cashless family mediclaim to commercial fire, marine, plant machinery, and vehicle insurance.",
    tag: '360° Risk Protection',
    features: [
      'Pure risk high-coverage term life insurance plans',
      '100% cashless family mediclaim, critical illness & top-up covers',
      'Commercial fire, marine cargo, machinery breakdown & transit covers',
      'Dedicated claim settlement assistance desk across all insurers'
    ],
    category: 'Life, Health & General Insurance',
  },
  {
    icon: BadgePercent,
    title: 'Loans & Financial Solutions',
    subtitle: 'Tailored Financing, Advisory & Debt Syndication',
    text: 'Access customised lending solutions, loan advisory and debt syndication services to meet personal and business financing requirements with optimal repayment structures.',
    tag: 'Capital Solutions',
    features: [
      'Home loans, loan against property (LAP) & business credit',
      'Loan against mutual funds & securities (LAMF)',
      'Competitive rate comparisons across major NBFCs & banks',
      'End-to-end documentation assistance & swift sanctions'
    ],
    category: 'Loans & Financial Solutions',
  },
]

const stats = [
  ['16+ Years', 'Financial services expertise & lineage', Award],
  ['500+ Families', 'Trusted across India and worldwide', Users],
  ['₹200+ Crore', 'Assets guided with prudence & care', TrendingUp],
  ['10+ Countries', 'Cross-border NRI investor network', Globe],
]

const whyReasons = [
  {
    title: 'Experience That Matters',
    desc: 'Over 16 years of hands-on experience navigating multiple market cycles and economic transitions.',
    icon: Award,
  },
  {
    title: 'A Growing Client Community',
    desc: 'Proudly trusted by 500+ families across India and globally who rely on our thoughtful counsel.',
    icon: Users,
  },
  {
    title: 'Cross-Border Reach',
    desc: 'Serving NRI investors across 10+ countries with specialized FEMA, tax, and repatriation desk support.',
    icon: Globe,
  },
  {
    title: 'Comprehensive Financial Solutions',
    desc: 'Investments, insurance, bonds, and structured financing solutions harmonized under one trusted roof.',
    icon: Layers,
  },
  {
    title: 'Personalised Wealth Management',
    desc: 'Customized strategies strictly aligned with your life goals, investment horizons, and risk comfort.',
    icon: Target,
  },
  {
    title: 'Long-Term Relationships',
    desc: 'A relationship-driven ethos built on total transparency, unwavering ethics, and proactive engagement.',
    icon: ShieldCheck,
  },
  {
    title: 'Technology-Enabled Services',
    desc: 'Seamless, real-time portfolio tracking and instant transactions through the FINVESTMENTS mobile application.',
    icon: Smartphone,
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [investModalOpen, setInvestModalOpen] = useState(false)
  const [selectedSolution, setSelectedSolution] = useState<string>('Mutual Funds & Wealth Creation')

  // Consultation Form state
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('Mutual Funds & Wealth Creation')
  const [investorLocation, setInvestorLocation] = useState('India (Resident)')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Download Brochure simulation
  const [downloadingBrochure, setDownloadingBrochure] = useState(false)

  const handleOpenInvest = (cat?: string) => {
    if (cat) setSelectedSolution(cat)
    setInvestModalOpen(true)
  }

  const handleBrochureDownload = () => {
    setDownloadingBrochure(true)
    setTimeout(() => {
      setDownloadingBrochure(false)
      const element = document.createElement('a')
      const file = new Blob(
        [
          `FINVESTMENTS
One Trusted Partner. Every Opportunity.
AMFI Registered Mutual Fund Distributor
ARN-129236 | ARN-186693 | APRN: APRN00822
Established in 2016 | 16+ Years Experience

Website: www.finvestments.in
Email: advice@finvestments.net
Official WhatsApp: +91 98101 21834
Office: 511, 5th Floor, I-Thum Heights, A-16, A Block, Industrial Area, Sector 62, Noida, Uttar Pradesh – 201309.

Our Core Financial Solutions:
1. Mutual Funds & Wealth Creation (Goal SIPs, Portfolio Reviews, Rebalancing)
2. PMS, AIFs & SIF Distribution (Authorized SIF Distributor, Category II/III AIFs, Unlisted Equities)
3. GIFT City (IFSC) & SIF Investments (Offshore Funds, USD Global Assets, Inbound/Outbound Tax Structures)
4. Corporate Deposits & Bonds (Crisil AAA/AA+ Rated FDs, G-Sec, RBI Floating Rate Bonds)
5. Unlisted Shares & Private Equity (Pre-IPO Deals, Unicorn Shares, Demat Transfer)
6. Life, Health & General Insurance (Term Plans, Cashless Mediclaim, Fire, Marine, Fleet)
7. Loans & Financial Solutions (Home Loans, LAP, LAMF, Debt Syndication)

Why FINVESTMENTS:
• 500+ Satisfied Families
• ₹200+ Crore Assets Under Guidance
• Serving NRI Investors in 10+ Countries
• State-of-the-art FINVESTMENTS Mobile Application

Our Philosophy:
Understand your goals, create the right financial strategy, and stay committed to your wealth journey.
`
        ],
        { type: 'text/plain' }
      )
      element.href = URL.createObjectURL(file)
      element.download = 'FINVESTMENTS_Company_Profile_2026.txt'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }, 800)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-[#0B2545] selection:text-[#E5B869]">
      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2.5 gap-4">
          {/* Brand Logo - High Resolution with removed background */}
          <a href="#home" className="flex items-center shrink-0 group">
            <div className="relative h-10 w-44 sm:h-11 sm:w-52 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/finvestments-logo.png"
                alt="FINVESTMENTS - Invest | Grow | Protect"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links - Single line without SVGs */}
          <nav className="hidden items-center gap-5 xl:gap-7 text-sm font-semibold text-slate-700 lg:flex whitespace-nowrap">
            <a href="#home" className="hover:text-[#0B2545] transition whitespace-nowrap">Home</a>
            <a href="#about" className="hover:text-[#0B2545] transition whitespace-nowrap">Why Us</a>
            <a href="#solutions" className="hover:text-[#0B2545] transition whitespace-nowrap">Our Solutions</a>
            <a href="#calculators" className="hover:text-[#0B2545] transition whitespace-nowrap">Calculators</a>
            <a href="#global-presence" className="hover:text-[#0B2545] transition font-bold text-[#0B2545] whitespace-nowrap">NRI Global Desk</a>
            <a href="#promise" className="hover:text-[#0B2545] transition whitespace-nowrap">Our Promise</a>
            <a href="#contact" className="hover:text-[#0B2545] transition whitespace-nowrap">Contact</a>
          </nav>

          {/* Desktop CTA Action Buttons - Clean typography without SVGs */}
          <div className="hidden items-center gap-2.5 sm:flex shrink-0 whitespace-nowrap">
            <a
              href="https://finvestments.investwell.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#0B2545] px-4 py-2 text-xs font-bold text-[#0B2545] hover:bg-blue-50/70 transition shadow-xs cursor-pointer whitespace-nowrap inline-block text-center"
            >
              Investor Login
            </a>
            <button
              onClick={() => handleOpenInvest()}
              className="rounded-xl bg-gradient-to-r from-[#0B2545] via-[#133E87] to-[#0B2545] px-5 py-2 text-xs font-bold text-white shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-[#D4AF37]/40 whitespace-nowrap"
            >
              Start Investing
            </button>
          </div>

          {/* Mobile hamburger menu toggle - Pure CSS without SVG */}
          <button
            aria-label="Toggle navigation menu"
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-0.5 w-5 bg-slate-800 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-slate-800 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-slate-800 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="flex flex-col gap-3 border-t border-slate-200 bg-white px-5 py-5 text-sm font-semibold lg:hidden shadow-xl animate-in slide-in-from-top-2">
            <a href="#home" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#0B2545]">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#0B2545]">Why Us</a>
            <a href="#solutions" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#0B2545]">Our Solutions</a>
            <a href="#calculators" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#0B2545] text-[#0B2545] font-bold">Financial Calculators</a>
            <a href="#global-presence" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#0B2545] font-bold">NRI Global Desk</a>
            <a href="#promise" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#0B2545]">Our Promise</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#0B2545]">Contact Us</a>
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="https://finvestments.investwell.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-full py-3 rounded-xl border border-[#0B2545] text-[#0B2545] font-bold text-center block"
              >
                Investor Login
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false)
                  handleOpenInvest()
                }}
                className="w-full py-3 rounded-xl bg-[#0B2545] text-white font-bold text-center shadow-md"
              >
                Start Investing Now
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Live Market Indices Ticker */}
      <MarketTicker />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-b from-[#0B2545] via-[#08203e] to-[#051937] px-4 py-10 sm:py-14 text-white"
      >
        {/* Subtle decorative gold & sapphire halos */}
        <div className="absolute -right-24 -top-24 size-[380px] rounded-full border-[50px] border-[#D4AF37]/10 blur-[2px] pointer-events-none" />
        <div className="absolute -left-20 bottom-0 size-[320px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            {/* AMFI Badge Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#F59E0B]/15 to-transparent px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur mb-4 border border-[#D4AF37]/35">
              <Sparkles className="size-3 text-amber-300" />
              <span>AMFI Registered Mutual Fund, SIF, PMS Distributor</span>
            </div>

            <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight text-white">
              One Trusted Partner. <br />
              <span className="gold-gradient-text">
                Every Opportunity.
              </span>
            </h1>

            <div className="mt-2 text-sm sm:text-base font-bold text-amber-200/90 tracking-wide">
              Invest · Grow · Protect
            </div>

            <p className="mt-3.5 max-w-xl text-sm sm:text-base leading-relaxed text-blue-100/90">
              At <strong className="text-white font-bold">FINVESTMENTS</strong>, wealth creation is not just about investing money; it is about making informed financial decisions, protecting what you have built, and creating an enduring financial future for your family and business.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenInvest()}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#C59B27] px-5 py-3 text-xs sm:text-sm font-extrabold text-[#0B2545] shadow-lg hover:brightness-105 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Financial Solutions</span>
                <ArrowRight className="size-4" />
              </button>

              <a
                href="#calculators"
                className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-xs sm:text-sm font-bold text-white backdrop-blur hover:bg-white/20 transition cursor-pointer"
              >
                <Calculator className="size-4 text-amber-300" />
                <span>Calculate SIP & Returns</span>
              </a>

              <a
                href="https://wa.me/919810121834?text=Hello%20FINVESTMENTS,%20I%20would%20like%20to%20book%20a%20discovery%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-200 hover:text-white underline underline-offset-4 ml-1"
              >
                Connect on WhatsApp Desk (+91 98101 21834) →
              </a>
            </div>

            {/* Certifications and Key Registrations */}
            <div className="mt-7 pt-5 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-blue-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-400" /> AMFI ARN-129236
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-400" /> AMFI ARN-186693
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-400" /> APRN: APRN00822
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-amber-400" /> Estd. 2016 · 16+ Yrs Expertise
              </span>
            </div>
          </div>

          {/* Stats highlight card grid */}
          <div className="grid grid-cols-2 gap-3.5">
            {stats.map(([big, small, Icon]) => {
              const IconComp = Icon as React.ElementType
              return (
                <div
                  key={big as string}
                  className="rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#0B2545]/80 via-[#0F3460]/70 to-[#051937]/90 p-4 sm:p-5 backdrop-blur-md hover:border-[#D4AF37]/50 transition-all shadow-lg group"
                >
                  <div className="mb-3 inline-flex p-2.5 rounded-xl bg-amber-400/15 text-amber-300 border border-amber-400/20 group-hover:scale-110 transition-transform">
                    <IconComp className="size-5" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    {big as string}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-blue-200">
                    {small as string}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AMFI Banner Showcase Strip */}
      <section className="bg-gradient-to-r from-[#051937] via-[#0B2545] to-[#051937] py-6 px-4 border-b border-[#D4AF37]/30 text-white shadow-md">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F59E0B] text-[#0B2545] font-black text-xl shadow-md shrink-0">
              ★
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                AMFI Registered Mutual Fund, SIF, PMS & GIFT City (IFSC) Distributor
                <span className="text-[10px] bg-amber-400 text-[#0B2545] font-black px-2 py-0.5 rounded-full uppercase">
                  ARN-129236
                </span>
              </div>
              <div className="text-xs text-amber-200/90 font-medium mt-0.5">
                Your Partner in Long-Term Wealth Creation · Trust · Expertise · Sustainable Growth
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleBrochureDownload}
              disabled={downloadingBrochure}
              className="flex items-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-white/10 hover:bg-white/15 px-4 py-2.5 text-xs font-bold text-amber-200 transition shadow-xs cursor-pointer"
            >
              <DownloadCloud className="size-4 text-amber-300" />
              <span>{downloadingBrochure ? 'Preparing Profile...' : 'Download Company Profile'}</span>
            </button>
            <button
              onClick={() => handleOpenInvest()}
              className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-4 py-2.5 text-xs font-extrabold text-[#0B2545] shadow-md hover:brightness-105 transition cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Why FINVESTMENTS */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 text-amber-900 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-300">
              <Award className="size-3.5 text-amber-600" /> About FINVESTMENTS
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Comprehensive Financial & <br />
              <span className="text-[#0B2545]">
                Investment Consultancy Under One Roof.
              </span>
            </h2>
            <p className="mt-3.5 text-sm md:text-base leading-relaxed text-slate-600">
              Established in 2016, <strong>FINVESTMENTS</strong> brings together over 16 years of financial services experience, investment expertise, personalised advice and a client-first approach to help individuals, families, HNIs, NRIs and businesses achieve their financial objectives.
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Today, we proudly serve over <strong>500 families</strong>, manage assets exceeding <strong>₹200 crore</strong>, and work with NRI investors across more than <strong>10 countries</strong>.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1">
                Our Guiding Philosophy
              </div>
              <blockquote className="text-sm font-semibold text-slate-800 italic">
                “Understand your goals, create the right financial strategy, and stay committed to your wealth journey.”
              </blockquote>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenInvest()}
                className="flex items-center gap-2 rounded-xl bg-[#0B2545] text-white px-5 py-2.5 text-xs font-bold hover:bg-[#071c35] transition shadow-md cursor-pointer"
              >
                <span>Schedule a Portfolio Review</span>
                <ArrowRight className="size-3.5" />
              </button>
              <a
                href="#contact"
                className="text-xs font-bold text-[#0B2545] hover:underline px-3 py-2"
              >
                Visit Our Noida Office →
              </a>
            </div>
          </div>

          {/* Theme Banner Card showcasing Image 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl overflow-hidden group">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 shadow-md">
              <Image
                src="/finvestments-amfi-banner.jpg"
                alt="FINVESTMENTS AMFI Registered Distributor Banner"
                fill
                className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>
            <div className="mt-3.5 p-2 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-[#0B2545]">AMFI Registered Distributor ARN-129236</span>
              <span className="text-slate-500">Mutual Funds · SIF · PMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why FINVESTMENTS - The 7 Pillars Grid */}
      <section className="bg-slate-100/70 px-4 py-12 md:py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 text-[#0B2545] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2.5">
              <CheckCheck className="size-3.5 text-blue-700" /> Distinct Advantages
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Why Choose <span className="text-[#0B2545]">FINVESTMENTS?</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              We stand apart through seasoned guidance, institutional rigor, personalized allocation, and technology-backed client access.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whyReasons.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between ${
                    idx === 0
                      ? 'sm:col-span-2 lg:col-span-1 border-[#D4AF37]/50 shadow-md ring-1 ring-[#D4AF37]/30'
                      : 'border-slate-200/80 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="size-11 rounded-xl bg-blue-50 text-[#0B2545] grid place-items-center mb-3.5 font-bold border border-blue-100">
                      <IconComp className="size-5 text-[#0B2545]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-[#0B2545]">
                    <span>FINVESTMENTS Standard</span>
                    <Check className="size-3 text-emerald-600" />
                  </div>
                </div>
              )
            })}

            {/* Mobile App Highlight Card */}
            <div className="rounded-2xl border border-[#D4AF37] bg-gradient-to-br from-[#0B2545] to-[#051937] p-5 text-white shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-amber-400 text-[#0B2545] grid place-items-center mb-3.5 font-bold shadow-md">
                  <Smartphone className="size-5" />
                </div>
                <h3 className="font-extrabold text-amber-300 text-sm leading-snug">
                  FINVESTMENTS Mobile App
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-blue-100/90">
                  Track your mutual funds, check SIP status, review asset allocation, and access capital gains tax reports on mobile 24x7.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/15">
                <a
                  href="https://finvestments.investwell.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-amber-400 text-[#0B2545] py-2 text-xs font-bold hover:brightness-105 transition cursor-pointer"
                >
                  <span>Access App Portal</span>
                  <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - 7 Financial Solutions */}
      <section id="solutions" className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 text-[#0B2545] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
                <Layers className="size-3.5 text-[#0B2545]" /> Our Financial Solutions
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                An Integrated Spectrum.{' '}
                <span className="text-[#0B2545]">Every Stage of Life.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-slate-600">
              We offer an integrated range of financial products and services designed to address every stage of your wealth creation and protection journey.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {solutions.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#0B2545]/60 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="grid size-12 place-items-center rounded-xl bg-blue-50 text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-[#D4AF37] transition-all shadow-xs">
                        <IconComp className="size-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full group-hover:bg-[#0B2545] group-hover:text-amber-300 transition">
                        {item.tag}
                      </span>
                    </div>

                    <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wide">
                      Solution {idx + 1}
                    </div>

                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0B2545] transition mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2">
                      {item.subtitle}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {item.text}
                    </p>

                    <div className="mt-4 space-y-2 pt-3.5 border-t border-slate-100">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-100">
                    <button
                      onClick={() => handleOpenInvest(item.category)}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-50 group-hover:bg-[#0B2545] py-2.5 text-xs font-bold text-slate-800 group-hover:text-white transition-all cursor-pointer shadow-xs"
                    >
                      <span>Inquire About {item.title.split('&')[0]}</span>
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform text-amber-400" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Presence Section (Image 2 Theme Integration) */}
      <GlobalPresenceSection
        onConnectNRI={(country) => {
          setSelectedSolution(`NRI Wealth Desk - ${country}`)
          setInvestorLocation(`NRI (${country})`)
          setInvestModalOpen(true)
        }}
      />

      {/* Interactive Financial Calculators */}
      <FinancialCalculators
        onBookConsultation={(detail) => {
          setService(detail.includes('SIP') ? 'Mutual Funds & Wealth Creation' : 'PMS & Alternative Investment Funds (AIFs)')
          setMessage(`Inquiry regarding calculation: ${detail}`)
          const contactEl = document.getElementById('contact')
          contactEl?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* Vision & Promise Section */}
      <section id="promise" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Our Vision Card */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/40 p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 text-[#0B2545] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                <Target className="size-3.5 text-[#0B2545]" /> Our Vision
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                Empowering Generations with Accessible Financial Guidance
              </h3>
              <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                To become a trusted financial partner for individuals, families and businesses by making professional financial guidance accessible, simplifying complex investment decisions and helping clients build, preserve and protect wealth across generations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-[#0B2545] text-amber-300 font-bold text-xs">
                FI
              </div>
              <div className="text-xs text-slate-600">
                <strong>FINVESTMENTS</strong> · Guided by 16+ Years Experience
              </div>
            </div>
          </div>

          {/* Our Promise Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#0F3460] to-[#051937] p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-[#D4AF37]/30">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 size-48 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 text-amber-300 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
                <Award className="size-3.5 text-amber-300" /> Our Promise
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Your wealth. Your goals. Our commitment.
              </h3>
              <blockquote className="mt-3.5 text-xs sm:text-sm text-blue-100/90 leading-relaxed italic border-l-2 border-amber-400 pl-3">
                “At FINVESTMENTS, your financial journey deserves more than just products. It deserves thoughtful advice, a well-defined strategy and a partner who stands with you through changing market conditions and evolving life goals.”
              </blockquote>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-amber-300">FINVESTMENTS – Invest | Grow | Protect</div>
                <div className="text-[11px] text-blue-200">AMFI ARN-129236 · Noida, Delhi NCR & Pan-India</div>
              </div>
              <button
                onClick={() => handleOpenInvest()}
                className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-4 py-2 text-xs font-bold text-[#0B2545] shadow-md hover:brightness-105 transition cursor-pointer"
              >
                Join 500+ Families
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-br from-[#0B2545] via-[#08203e] to-[#051937] px-4 py-12 md:py-16 text-white relative border-t border-[#D4AF37]/30"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 border border-amber-400/30 mb-3">
              <Mail className="size-3.5 text-amber-300" /> Direct Advisory Desk
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Begin Your Wealth Chapter. <br />
              <span className="gold-gradient-text">
                Speak With an Expert Advisor.
              </span>
            </h2>

            <p className="mt-3.5 max-w-md text-xs sm:text-sm leading-relaxed text-blue-100/90">
              Whether you wish to evaluate your existing mutual fund portfolio, structure a high-yield corporate FD, plan retirement cashflows, or explore NRI desk solutions, our senior AMFI advisors are ready to assist.
            </p>

            <div className="mt-7 space-y-4 text-xs sm:text-sm text-blue-100">
              <a
                href="https://wa.me/919810121834?text=Hello%20FINVESTMENTS,%20I%20would%20like%20to%20inquire%20about%20your%20investment%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 hover:text-emerald-300 transition group"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <Smartphone className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">Official WhatsApp Desk</div>
                  <div className="font-extrabold text-white text-sm sm:text-base">+91 98101 21834</div>
                </div>
              </a>

              <a
                href="mailto:advice@finvestments.net"
                className="flex items-center gap-3.5 hover:text-amber-300 transition group"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-amber-400/15 text-amber-300 border border-amber-400/20 group-hover:scale-105 transition-transform">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">Official Email</div>
                  <div className="font-extrabold text-white text-sm sm:text-base">advice@finvestments.net</div>
                </div>
              </a>

              <div className="flex items-start gap-3.5">
                <div className="grid size-10 place-items-center rounded-xl bg-amber-400/15 text-amber-300 border border-amber-400/20 shrink-0 mt-0.5">
                  <Building className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">Noida Registered Office</div>
                  <div className="font-semibold text-white leading-relaxed text-xs sm:text-sm">
                    511, 5th Floor, I-Thum Heights, A-16, A Block, Industrial Area, Sector 62, Noida, Uttar Pradesh – 201309.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="grid size-10 place-items-center rounded-xl bg-amber-400/15 text-amber-300 border border-amber-400/20">
                  <Globe className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">Official Web Portal</div>
                  <div className="font-semibold text-white">www.finvestments.in</div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form Card */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 text-slate-800 shadow-2xl border border-slate-100">
            <h3 className="text-lg sm:text-xl font-black text-slate-900">Book Priority Wealth Consultation</h3>
            <p className="text-xs text-slate-500 mt-1">Get an expert portfolio audit with no initial obligation</p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-3">
                <div className="grid size-14 place-items-center rounded-full bg-emerald-100 text-emerald-600 mx-auto animate-bounce">
                  <Check className="size-8" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Thank You, {fullName || 'Valued Investor'}!</h4>
                <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                  Your consultation request has been prioritized. Our certified wealth specialist will contact you at <strong>{phone || 'your phone number'}</strong> within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#0B2545] underline cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="mt-5 space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ramesh@gmail.com"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98101 21834"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Your Location / Residency
                    </label>
                    <select
                      value={investorLocation}
                      onChange={(e) => setInvestorLocation(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                    >
                      <option value="India (Resident)">India (Resident)</option>
                      <option value="USA (NRI)">USA (NRI)</option>
                      <option value="Canada (NRI)">Canada (NRI)</option>
                      <option value="UK (NRI)">UK (NRI)</option>
                      <option value="UAE / GCC (NRI)">UAE / GCC (NRI)</option>
                      <option value="Singapore (NRI)">Singapore (NRI)</option>
                      <option value="Australia / NZ (NRI)">Australia / NZ (NRI)</option>
                      <option value="Other Overseas">Other Overseas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Financial Solution
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                    >
                      <option value="Mutual Funds & Wealth Creation">Mutual Funds & Wealth Creation</option>
                      <option value="PMS, AIFs & SIF Distribution">PMS, AIFs & SIF Distribution</option>
                      <option value="GIFT City (IFSC) & SIF Investments">GIFT City (IFSC) & SIF Investments</option>
                      <option value="Corporate Deposits & Bonds">Corporate Deposits & Bonds</option>
                      <option value="Unlisted Shares & Private Equity">Unlisted Shares & Private Equity</option>
                      <option value="Life, Health & General Insurance">Life, Health & General Insurance</option>
                      <option value="Loans & Financial Solutions">Loans & Financial Solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Requirements or Investment Goals (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your target goals, portfolio questions, or preferred timelines..."
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2545] via-[#133E87] to-[#0B2545] py-3 px-5 text-xs font-bold text-white shadow-md hover:brightness-110 transition cursor-pointer disabled:opacity-75"
                  type="submit"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Request Priority Consultation</span>
                      <ArrowRight className="size-4 text-amber-300" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-slate-400 pt-1">
                  🔒 AMFI Registered Distributor ARN-129236 · Strict Confidentiality Assured
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Mandatory Statutory & Regulatory Disclosures Section */}
      <footer id="disclosures" className="bg-[#031127] px-4 py-10 text-xs text-white border-t border-[#D4AF37]/20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-amber-500/50 bg-[#051937] p-6 sm:p-7 shadow-2xl">
          <div className="flex items-center gap-2.5 text-amber-400 font-bold text-xs sm:text-sm mb-3.5">
            <ShieldAlert className="size-4 shrink-0 text-amber-400" />
            <span>MANDATORY STATUTORY RISK DISCLOSURES & AMFI NOTICE</span>
          </div>

          <div className="space-y-3 text-[11px] sm:text-xs leading-relaxed text-blue-100/90 border-b border-white/10 pb-5">
            <p>
              <strong>Risk Factors:</strong> Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Mutual Fund schemes do not assure or guarantee any returns. Past performance of any mutual fund scheme may or may not be sustained in the future. There is no guarantee that the investment objective of any suggested scheme shall be achieved. All existing and prospective investors are advised to check and evaluate exit loads, tax implications and expense ratios (TER) applicable at the time of making the investment before finalizing any investment decision.
            </p>
            <p>
              <strong>Distributor Disclosure:</strong> FINVESTMENTS is an AMFI Registered Mutual Fund Distributor holding <strong>ARN-129236</strong> and <strong>ARN-186693</strong> (APRN: APRN00822). We deal in Regular Plans for Mutual Fund Schemes and earn trailing commission from Asset Management Companies (AMCs). Disclosure for commission earnings is provided to clients in accordance with SEBI/AMFI guidelines. Direct Plans for mutual fund schemes are also available directly through AMCs which have lower expense ratios. We do not distribute direct plans and do not earn commissions on direct plans.
            </p>
            <p>
              <strong>Fixed Deposits, PMS, Insurance & Loans Disclaimer:</strong> Corporate Fixed Deposits, Bonds, and PMS/AIFs are subject to issuer credit ratings, liquidity factors, and market risks. Insurance products are underwritten by respective IRDAI-registered insurance companies. Lending solutions are facilitated through partnered RBI-registered banks and NBFCs.
            </p>
          </div>

          {/* AMFI Accreditation Badges */}
          <div className="mt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="relative size-12 shrink-0">
                <Image
                  src="/finvestments-mark.png"
                  alt="FINVESTMENTS Mark"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-extrabold text-white">
                  FINVESTMENTS · AMFI Registered Mutual Fund Distributor
                </p>
                <p className="text-[11px] text-amber-300 font-semibold mt-0.5">
                  ARN-129236 <span className="mx-1 text-slate-400">|</span> ARN-186693 <span className="mx-1 text-slate-400">|</span> APRN: APRN00822
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-blue-200">
              <a href="#disclosures" className="hover:text-amber-300 underline">SID / KIM Guidelines</a>
              <span>•</span>
              <a href="#disclosures" className="hover:text-amber-300 underline">AMFI Code of Conduct</a>
              <span>•</span>
              <a href="#disclosures" className="hover:text-amber-300 underline">SEBI Investor Charter</a>
              <span>•</span>
              <a href="#disclosures" className="hover:text-amber-300 underline">Privacy & Security Policy</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-3 text-[11px] text-blue-300/80 md:flex-row border-t border-white/5 pt-4">
          <span>
            © 2016 - 2026 FINVESTMENTS. All Rights Reserved. Invest | Grow | Protect.
          </span>
          <span>
            Office: 511, 5th Floor, I-Thum Heights, Sector 62, Noida, UP – 201309 · WhatsApp: +91 98101 21834 · Email: advice@finvestments.net
          </span>
        </div>
      </footer>

      {/* Interactive Modals */}
      <PortfolioLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSwitchToContact={() => {
          const contactEl = document.getElementById('contact')
          contactEl?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      <QuickInvestModal
        isOpen={investModalOpen}
        onClose={() => setInvestModalOpen(false)}
        prefillCategory={selectedSolution}
        onSubmitSuccess={() => {
          alert('Thank you! Your personalized wealth allocation request has been registered with FINVESTMENTS. Our team will contact you shortly.')
        }}
      />
    </main>
  )
}
