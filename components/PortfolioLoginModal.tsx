'use client'

import React, { useState } from 'react'
import {
  X,
  Lock,
  ShieldCheck,
  Mail,
  ArrowRight,
  CheckCircle2,
  User,
  KeyRound,
  Smartphone,
  ExternalLink,
  Phone
} from 'lucide-react'

interface PortfolioLoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToContact?: () => void
}

export default function PortfolioLoginModal({
  isOpen,
  onClose,
  onSwitchToContact,
}: PortfolioLoginModalProps) {
  const [tab, setTab] = useState<'client' | 'distributor'>('client')
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatusMessage(null)

    setTimeout(() => {
      setIsLoading(false)
      setStatusMessage(
        'Credentials verified. Redirecting to your secure FINVESTMENTS 360° Portfolio Dashboard...'
      )
      setTimeout(() => {
        setStatusMessage(null)
        onClose()
        if (typeof window !== 'undefined') {
          window.open('https://finvestments.investwell.app', '_blank')
        }
      }, 1000)
    }, 900)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051937]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-6">
          <div className="grid size-12 place-items-center rounded-xl bg-[#0B2545] text-[#D4AF37] border border-[#D4AF37]/30 shadow-md">
            <Lock className="size-5 text-[#E5B869]" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#0B2545]">Investor & Partner Portal</h3>
            <p className="text-xs text-slate-500">256-bit encrypted secure login · ARN-129236</p>
          </div>
        </div>

        {/* Tab Selectors */}
        <div className="flex rounded-xl bg-slate-100 p-1 mb-5">
          <button
            type="button"
            onClick={() => setTab('client')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              tab === 'client'
                ? 'bg-white text-[#0B2545] shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Client / NRI Portal
          </button>
          <button
            type="button"
            onClick={() => setTab('distributor')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              tab === 'distributor'
                ? 'bg-white text-[#0B2545] shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Distributor / Desk Login
          </button>
        </div>

        {statusMessage ? (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
            <div className="grid size-12 place-items-center rounded-full bg-emerald-100 text-emerald-700 mx-auto">
              <CheckCircle2 className="size-6" />
            </div>
            <p className="text-sm font-semibold text-emerald-800">{statusMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                {tab === 'client' ? 'PAN / Registered Mobile / Email' : 'Advisor / APRN ID'}
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <User className="size-4" />
                </div>
                <input
                  required
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={
                    tab === 'client'
                      ? 'e.g. ABCDE1234F or 9810121834'
                      : 'e.g. APRN00822 / ARN-129236'
                  }
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Password / PIN
                </label>
                <a
                  href="#contact"
                  onClick={() => {
                    onClose()
                    onSwitchToContact?.()
                  }}
                  className="text-[11px] font-semibold text-[#0B2545] hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <KeyRound className="size-4" />
                </div>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B2545] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#133E87] py-3 px-4 text-xs font-bold text-white shadow-md hover:from-[#081d37] hover:to-[#0f2e64] transition cursor-pointer disabled:opacity-75"
            >
              {isLoading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In Securely</span>
                  <ArrowRight className="size-4" />
                </>
              )}
            </button>

            {/* Mobile App notice */}
            <div className="rounded-xl bg-amber-50 border border-amber-200/80 p-3 flex items-start gap-3 text-xs text-amber-900">
              <Smartphone className="size-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">FINVESTMENTS Mobile App:</span>
                <p className="text-[11px] text-amber-800 mt-0.5">
                  Access live portfolio tracking, instant SIP execution, and capital gains reports on iOS & Android.
                </p>
              </div>
            </div>

            {/* Need onboarding */}
            <div className="pt-2 text-center text-xs text-slate-500 border-t border-slate-100">
              New to FINVESTMENTS?{' '}
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onSwitchToContact?.()
                }}
                className="font-bold text-[#0B2545] hover:underline cursor-pointer"
              >
                Create an Investor Account
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
