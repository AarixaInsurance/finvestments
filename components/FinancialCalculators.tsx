'use client'

import React, { useState } from 'react'
import {
  Calculator,
  TrendingUp,
  PieChart as PieChartIcon,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  AlertCircle,
  Coins
} from 'lucide-react'

type CalcType = 'sip' | 'lumpsum' | 'goal' | 'delay'

export default function FinancialCalculators({
  onBookConsultation,
}: {
  onBookConsultation?: (detail: string) => void
}) {
  const [activeTab, setActiveTab] = useState<CalcType>('sip')

  // SIP State
  const [sipMonthly, setSipMonthly] = useState<number>(15000)
  const [sipRate, setSipRate] = useState<number>(12)
  const [sipYears, setSipYears] = useState<number>(15)

  // Lumpsum State
  const [lumpAmount, setLumpAmount] = useState<number>(250000)
  const [lumpRate, setLumpRate] = useState<number>(12)
  const [lumpYears, setLumpYears] = useState<number>(10)

  // Goal Planner State
  const [targetGoal, setTargetGoal] = useState<number>(5000000) // ₹50 Lakhs
  const [goalYears, setGoalYears] = useState<number>(10)
  const [goalRate, setGoalRate] = useState<number>(12)

  // Delay Cost State
  const [delayMonthly, setDelayMonthly] = useState<number>(10000)
  const [delayMonths, setDelayMonths] = useState<number>(24) // 2 years delay
  const [delayTotalYears, setDelayTotalYears] = useState<number>(20)
  const [delayRate, setDelayRate] = useState<number>(12)

  const formatINR = (val: number) => {
    return '₹' + Math.round(val).toLocaleString('en-IN')
  }

  // Calculate SIP: M = P * ((1 + i)^n - 1) / i * (1 + i)
  const calculateSIP = () => {
    const P = sipMonthly
    const i = sipRate / 100 / 12
    const n = sipYears * 12
    const invested = P * n
    const total = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
    const gains = Math.max(0, total - invested)
    return { invested, gains, total }
  }

  // Calculate Lumpsum: A = P * (1 + r)^t
  const calculateLumpsum = () => {
    const P = lumpAmount
    const r = lumpRate / 100
    const t = lumpYears
    const total = P * Math.pow(1 + r, t)
    const gains = Math.max(0, total - P)
    return { invested: P, gains, total }
  }

  // Calculate Required SIP for Target Goal
  const calculateGoalSIP = () => {
    const M = targetGoal
    const i = goalRate / 100 / 12
    const n = goalYears * 12
    const factor = ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
    const monthlyNeeded = M / factor
    const totalInvested = monthlyNeeded * n
    return { monthlyNeeded, totalInvested, targetGoal: M }
  }

  // Calculate Cost of Delay
  const calculateDelayCost = () => {
    const P = delayMonthly
    const i = delayRate / 100 / 12
    const nOriginal = delayTotalYears * 12
    const nDelayed = Math.max(12, delayTotalYears * 12 - delayMonths)

    const totalOriginal = P * ((Math.pow(1 + i, nOriginal) - 1) / i) * (1 + i)
    const totalDelayed = P * ((Math.pow(1 + i, nDelayed) - 1) / i) * (1 + i)
    const loss = Math.max(0, totalOriginal - totalDelayed)
    return { totalOriginal, totalDelayed, loss }
  }

  const sipResult = calculateSIP()
  const lumpResult = calculateLumpsum()
  const goalResult = calculateGoalSIP()
  const delayResult = calculateDelayCost()

  return (
    <section id="calculators" className="bg-slate-50 px-4 py-12 md:py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 text-amber-900 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-300">
            <Coins className="size-3.5 text-amber-600" /> Goal-Based Wealth Simulators
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Plan Your Future with{' '}
            <span className="text-[#0B2545]">Data-Driven Clarity.</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            See the compounding potential of your investments. Calculate SIP growth, goal-based targets, or the tangible financial cost of waiting.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'sip', label: 'SIP Calculator', icon: TrendingUp },
            { id: 'lumpsum', label: 'Lumpsum Growth', icon: PieChartIcon },
            { id: 'goal', label: 'Target Goal Planner', icon: Calculator },
            { id: 'delay', label: 'Cost of Delay', icon: Clock },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CalcType)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#0B2545] text-white shadow-md shadow-blue-950/20 ring-2 ring-[#C59B27]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`size-4 ${isActive ? 'text-[#E5B869]' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab 1: SIP Calculator */}
        {activeTab === 'sip' && (
          <div className="grid gap-8 lg:grid-cols-12 items-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Monthly Investment (SIP)
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {formatINR(sipMonthly)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={200000}
                  step={1000}
                  value={sipMonthly}
                  onChange={(e) => setSipMonthly(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹1,000</span>
                  <span>₹50,000</span>
                  <span>₹2,00,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Expected Return Rate (p.a.)
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {sipRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={20}
                  step={0.5}
                  value={sipRate}
                  onChange={(e) => setSipRate(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>6% (Conservative)</span>
                  <span>12% (Balanced)</span>
                  <span>20% (Aggressive)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Investment Time Horizon
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {sipYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={sipYears}
                  onChange={(e) => setSipYears(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B2545] via-[#0F3460] to-[#051937] p-6 sm:p-7 rounded-2xl text-white shadow-xl relative overflow-hidden border border-[#D4AF37]/30">
              <div className="absolute top-0 right-0 size-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-amber-300" /> Projected Maturity Corpus
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1">
                {formatINR(sipResult.total)}
              </div>

              <div className="mt-5 space-y-2.5 text-xs border-t border-white/15 pt-4">
                <div className="flex justify-between items-center text-blue-200">
                  <span>Total Amount Invested:</span>
                  <span className="font-bold text-white text-sm">{formatINR(sipResult.invested)}</span>
                </div>
                <div className="flex justify-between items-center text-emerald-300">
                  <span>Estimated Wealth Gain:</span>
                  <span className="font-bold text-sm text-emerald-400">+{formatINR(sipResult.gains)}</span>
                </div>
                <div className="flex justify-between items-center text-amber-200">
                  <span>Compounding Ratio:</span>
                  <span className="font-bold">
                    {(sipResult.total / (sipResult.invested || 1)).toFixed(1)}x Growth
                  </span>
                </div>
              </div>

              {/* Visual Breakdown Bar */}
              <div className="mt-5">
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex shadow-inner">
                  <div
                    className="bg-blue-400 h-full"
                    style={{
                      width: `${(sipResult.invested / sipResult.total) * 100}%`,
                    }}
                    title="Invested Amount"
                  />
                  <div
                    className="bg-gradient-to-r from-amber-400 to-amber-300 h-full"
                    style={{
                      width: `${(sipResult.gains / sipResult.total) * 100}%`,
                    }}
                    title="Estimated Gains"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-blue-200 mt-2">
                  <span className="flex items-center gap-1">
                    <span className="size-2 rounded-full bg-blue-400"></span> Principal Invested ({Math.round((sipResult.invested / sipResult.total) * 100)}%)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-2 rounded-full bg-amber-400"></span> Capital Appreciation ({Math.round((sipResult.gains / sipResult.total) * 100)}%)
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  onBookConsultation?.(`SIP of ${formatINR(sipMonthly)}/mo for ${sipYears} Years`)
                }
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] py-3 text-xs sm:text-sm font-extrabold text-[#0B2545] shadow-lg hover:brightness-105 transition cursor-pointer"
              >
                <span>Start This SIP with Finvestments</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Lumpsum Growth */}
        {activeTab === 'lumpsum' && (
          <div className="grid gap-8 lg:grid-cols-12 items-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Total Lumpsum Investment
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {formatINR(lumpAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={25000}
                  max={5000000}
                  step={25000}
                  value={lumpAmount}
                  onChange={(e) => setLumpAmount(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹25,000</span>
                  <span>₹25 Lakhs</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Expected Return Rate (p.a.)
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {lumpRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={20}
                  step={0.5}
                  value={lumpRate}
                  onChange={(e) => setLumpRate(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>6%</span>
                  <span>12%</span>
                  <span>20%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Holding Period (Years)
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {lumpYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={25}
                  step={1}
                  value={lumpYears}
                  onChange={(e) => setLumpYears(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 Year</span>
                  <span>10 Years</span>
                  <span>25 Years</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B2545] via-[#0F3460] to-[#051937] p-6 sm:p-7 rounded-2xl text-white shadow-xl relative overflow-hidden border border-[#D4AF37]/30">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-amber-300" /> Future Value of Lumpsum
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1">
                {formatINR(lumpResult.total)}
              </div>

              <div className="mt-5 space-y-2.5 text-xs border-t border-white/15 pt-4">
                <div className="flex justify-between items-center text-blue-200">
                  <span>Initial Principal:</span>
                  <span className="font-bold text-white text-sm">{formatINR(lumpResult.invested)}</span>
                </div>
                <div className="flex justify-between items-center text-emerald-300">
                  <span>Wealth Generated:</span>
                  <span className="font-bold text-sm text-emerald-400">+{formatINR(lumpResult.gains)}</span>
                </div>
                <div className="flex justify-between items-center text-amber-200">
                  <span>Wealth Multiplier:</span>
                  <span className="font-bold">
                    {(lumpResult.total / (lumpResult.invested || 1)).toFixed(2)}x
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  onBookConsultation?.(`Lumpsum of ${formatINR(lumpAmount)} for ${lumpYears} Years`)
                }
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] py-3 text-xs sm:text-sm font-extrabold text-[#0B2545] shadow-lg hover:brightness-105 transition cursor-pointer"
              >
                <span>Deploy Lumpsum with FINVESTMENTS</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Goal Planner */}
        {activeTab === 'goal' && (
          <div className="grid gap-8 lg:grid-cols-12 items-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Target Goal Amount
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {formatINR(targetGoal)}
                  </span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={50000000}
                  step={500000}
                  value={targetGoal}
                  onChange={(e) => setTargetGoal(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹5 Lakhs</span>
                  <span>₹1 Crore</span>
                  <span>₹5 Crore</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Years Left to Achieve Goal
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {goalYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={goalYears}
                  onChange={(e) => setGoalYears(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Expected Portfolio CAGR
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {goalRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={16}
                  step={0.5}
                  value={goalRate}
                  onChange={(e) => setGoalRate(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B2545] via-[#0F3460] to-[#051937] p-6 sm:p-7 rounded-2xl text-white shadow-xl relative overflow-hidden border border-[#D4AF37]/30">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-amber-300" /> Required Monthly SIP
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-emerald-400 mt-1">
                {formatINR(goalResult.monthlyNeeded)}
                <span className="text-sm font-medium text-blue-200"> / month</span>
              </div>

              <div className="mt-5 space-y-2.5 text-xs border-t border-white/15 pt-4">
                <div className="flex justify-between items-center text-blue-200">
                  <span>Desired Target Goal:</span>
                  <span className="font-bold text-white text-sm">{formatINR(goalResult.targetGoal)}</span>
                </div>
                <div className="flex justify-between items-center text-blue-200">
                  <span>Total Principal Outlay:</span>
                  <span className="font-bold text-white text-sm">{formatINR(goalResult.totalInvested)}</span>
                </div>
                <div className="flex justify-between items-center text-amber-300">
                  <span>Compounding Contribution:</span>
                  <span className="font-bold text-sm">
                    {formatINR(Math.max(0, goalResult.targetGoal - goalResult.totalInvested))}
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  onBookConsultation?.(`Goal target of ${formatINR(targetGoal)} in ${goalYears} Years`)
                }
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] py-3 text-xs sm:text-sm font-extrabold text-[#0B2545] shadow-lg hover:brightness-105 transition cursor-pointer"
              >
                <span>Structure My Goal Plan</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Cost of Delay */}
        {activeTab === 'delay' && (
          <div className="grid gap-8 lg:grid-cols-12 items-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Planned Monthly Investment
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {formatINR(delayMonthly)}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={100000}
                  step={5000}
                  value={delayMonthly}
                  onChange={(e) => setDelayMonthly(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Delay Period (Months)
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-rose-600 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">
                    {delayMonths} Months ({(delayMonths / 12).toFixed(1)} Yrs)
                  </span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={60}
                  step={6}
                  value={delayMonths}
                  onChange={(e) => setDelayMonths(Number(e.target.value))}
                  className="w-full accent-rose-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>6 Months</span>
                  <span>2 Years</span>
                  <span>5 Years</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">
                    Overall Investment Horizon
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#0B2545] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {delayTotalYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={30}
                  step={1}
                  value={delayTotalYears}
                  onChange={(e) => setDelayTotalYears(Number(e.target.value))}
                  className="w-full accent-[#0B2545] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B2545] via-[#0F3460] to-[#051937] p-6 sm:p-7 rounded-2xl text-white shadow-xl relative overflow-hidden border border-rose-500/30">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-1 flex items-center gap-1.5">
                <AlertCircle className="size-3.5 text-rose-400" /> Wealth Lost Due to Delay
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-rose-400 mt-1">
                -{formatINR(delayResult.loss)}
              </div>

              <div className="mt-5 space-y-2.5 text-xs border-t border-white/15 pt-4">
                <div className="flex justify-between items-center text-blue-200">
                  <span>Corpus if Started Today:</span>
                  <span className="font-bold text-emerald-400 text-sm">
                    {formatINR(delayResult.totalOriginal)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-blue-200">
                  <span>Corpus if Delayed {delayMonths} Months:</span>
                  <span className="font-bold text-white text-sm">
                    {formatINR(delayResult.totalDelayed)}
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  onBookConsultation?.(`Stop delaying: ${formatINR(delayMonthly)}/mo SIP inquiry`)
                }
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:brightness-105 transition cursor-pointer"
              >
                <span>Don't Wait - Start Investing Today</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
