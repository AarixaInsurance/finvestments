'use client'

import React, { useState } from 'react'
import {
  X,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  Globe,
  Clock,
  Briefcase
} from 'lucide-react'

interface QuickInvestModalProps {
  isOpen: boolean
  onClose: () => void
  prefillCategory?: string
  onSubmitSuccess?: () => void
}

const SOLUTIONS_OPTIONS = [
  'Mutual Funds & Wealth Creation',
  'PMS, AIFs & SIF Distribution',
  'GIFT City (IFSC) & SIF Investments',
  'Corporate Deposits & Bonds',
  'Unlisted Shares & Private Equity',
  'Life, Health & General Insurance',
  'Loans & Financial Solutions'
]

export default function QuickInvestModal({
  isOpen,
  onClose,
  prefillCategory = 'Mutual Funds & Wealth Creation',
  onSubmitSuccess,
}: QuickInvestModalProps) {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [investorType, setInvestorType] = useState('Resident Indian')
  const [category, setCategory] = useState(prefillCategory)
  const [horizon, setHorizon] = useState('3-5 Years')
  const [budget, setBudget] = useState('₹10,000 - ₹25,000 / month')
  const [isDone, setIsDone] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsDone(true)
    setTimeout(() => {
      setIsDone(false)
      onClose()
      onSubmitSuccess?.()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051937]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-5">
          <div className="grid size-12 place-items-center rounded-xl bg-[#0B2545] text-[#D4AF37] border border-[#D4AF37]/30 shadow-md">
            <Sparkles className="size-5 text-[#E5B869]" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#0B2545]">Start Your Wealth Journey</h3>
            <p className="text-xs text-slate-500">
              Personalized asset allocation by FINVESTMENTS · ARN-129236
            </p>
          </div>
        </div>

        {isDone ? (
          <div className="py-8 text-center space-y-3">
            <div className="grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mx-auto animate-bounce">
              <CheckCircle2 className="size-8" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900">Allocation Request Received!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Our senior AMFI certified portfolio manager will reach out to you at <strong>{mobile}</strong> with a curated proposal.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Investor Type */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Investor Profile
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Resident Indian', 'NRI / Overseas', 'HNI Family', 'Corporate'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInvestorType(type)}
                    className={`py-2 px-2 text-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      investorType === type
                        ? 'border-[#0B2545] bg-[#0B2545] text-white shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Solution */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Solution Required
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0B2545] focus:bg-white focus:outline-none"
              >
                {SOLUTIONS_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Mobile Number
                </label>
                <input
                  required
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="+91 98101 21834"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Email Address
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rajesh@gmail.com"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Target Time Horizon
                </label>
                <select
                  value={horizon}
                  onChange={(e) => setHorizon(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                >
                  <option value="1-3 Years">1 - 3 Years (Short-Term)</option>
                  <option value="3-5 Years">3 - 5 Years (Medium-Term)</option>
                  <option value="5-10 Years">5 - 10 Years (Wealth Creation)</option>
                  <option value="10+ Years">10+ Years (Retirement/Estate)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Planned Allocation
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                >
                  <option value="₹5,000 - ₹10,000 / mo">₹5,000 - ₹10,000 / mo SIP</option>
                  <option value="₹10,000 - ₹25,000 / mo">₹10,000 - ₹25,000 / mo SIP</option>
                  <option value="₹25,000 - ₹1 Lakh / mo">₹25,000 - ₹1 Lakh / mo SIP</option>
                  <option value="₹5 Lakhs - ₹25 Lakhs (Lumpsum)">₹5L - ₹25L Lumpsum</option>
                  <option value="₹25 Lakhs - ₹50 Lakhs (Lumpsum/FD)">₹25L - ₹50L Lumpsum / FD</option>
                  <option value="₹50 Lakhs+ (PMS / AIF)">₹50 Lakhs+ (PMS / AIF Mandate)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#C59B27] py-3 text-xs sm:text-sm font-extrabold text-[#0B2545] shadow-lg hover:brightness-105 transition cursor-pointer"
              >
                <span>Request Custom Wealth Plan</span>
                <ArrowRight className="size-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-3 text-emerald-600" /> AMFI Reg. ARN-129236
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe className="size-3 text-blue-600" /> 10+ Countries Served
              </span>
              <span>•</span>
              <span>Zero Consulting Fee</span>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
