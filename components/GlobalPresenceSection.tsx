'use client'

import React, { useState } from 'react'
import {
  Globe2,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ArrowRight,
  Plane,
  BadgeCheck,
  PhoneCall,
  Clock
} from 'lucide-react'
import Image from 'next/image'

interface CountryDetail {
  code: string
  name: string
  flag: string
  city: string
  popularServices: string[]
  timezone: string
}

const COUNTRIES: CountryDetail[] = [
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    city: 'New York, SF, Dallas',
    popularServices: ['FATCA Compliant Mutual Funds', 'GIFT City / SIF Alternatives', 'Repatriation Guidance'],
    timezone: 'EST / PST Desk',
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    city: 'Toronto, Vancouver',
    popularServices: ['NRE/NRO Banking Integration', 'Long-term Equity SIPs', 'Real Estate Liquidity Planning'],
    timezone: 'EST Desk',
  },
  {
    code: 'UK',
    name: 'United Kingdom',
    flag: '🇬🇧',
    city: 'London, Manchester',
    popularServices: ['GIFT City (IFSC) Portfolio Planning', 'Alternative Investment Funds (AIFs & SIFs)', 'Fixed Income Bonds'],
    timezone: 'GMT Desk',
  },
  {
    code: 'UAE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    city: 'Dubai, Abu Dhabi',
    popularServices: ['GIFT City (IFSC) Tax-Free Repatriation', 'Specialised Investment Funds (SIF)', 'High-Yield Corporate FDs'],
    timezone: 'GST Desk',
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    city: 'Singapore Central',
    popularServices: ['GIFT City USD Inbound Allocation', 'Specialised Investment Funds (SIF)', 'Multi-Asset PMS'],
    timezone: 'SGT Desk',
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    city: 'Sydney, Melbourne',
    popularServices: ['DTAA Tax Benefit Advisory', 'Goal SIPs for Retirement in India', 'Health Insurance in India'],
    timezone: 'AEST Desk',
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    flag: '🇳🇿',
    city: 'Auckland, Wellington',
    popularServices: ['Direct AMFI Allocation', 'Inheritance & Estate Planning', 'Capital Gains Auditing'],
    timezone: 'NZST Desk',
  },
  {
    code: 'ES',
    name: 'Spain',
    flag: '🇪🇸',
    city: 'Madrid, Barcelona',
    popularServices: ['EU Regulatory NRI Desk', 'Equities & Debt Advisory', 'Sovereign Securities'],
    timezone: 'CET Desk',
  },
  {
    code: 'SE',
    name: 'Sweden',
    flag: '🇸🇪',
    city: 'Stockholm',
    popularServices: ['Nordic NRI Wealth Desk', 'Index & Multi-Asset Strategies', 'Family Mediclaim in India'],
    timezone: 'CET Desk',
  },
  {
    code: 'ZA',
    name: 'South Africa',
    flag: '🇿🇦',
    city: 'Johannesburg, Cape Town',
    popularServices: ['FEMA Compliant Remittances', 'Corporate Fixed Deposits', 'Term Life Cover in India'],
    timezone: 'SAST Desk',
  },
]

export default function GlobalPresenceSection({
  onConnectNRI,
}: {
  onConnectNRI?: (country: string) => void
}) {
  const [selectedCountry, setSelectedCountry] = useState<CountryDetail>(COUNTRIES[0])

  return (
    <section id="global-presence" className="bg-[#051937] text-white px-4 py-12 md:py-16 relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 size-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 size-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 text-amber-300 px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-400/20">
              <Globe2 className="size-3.5 text-amber-300" /> Cross-Border NRI Wealth Management
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Our Global Presence.{' '}
              <span className="gold-gradient-text">Across 10 Countries.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-blue-200/90 leading-relaxed">
            From the Americas to Europe, Middle East, and Asia-Pacific. Dedicated NRI desks helping expatriates grow and repatriate wealth in India with seamless FEMA & tax compliance.
          </p>
        </div>

        {/* Global Banner Visual Showcase - Full 2:1 Uncropped Display with 3200x1600 Enhanced Quality */}
        <div className="mb-6">
          <div className="relative aspect-[2/1] w-full rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#031127] group">
            <Image
              src="/finvestments-global-presence.png"
              alt="FINVESTMENTS Global Presence - Serving Investors Across 10 Countries"
              fill
              className="object-contain object-center"
              priority
            />
          </div>

          {/* Dedicated NRI Advisory Desk Action Card (Cleanly below the map to prevent cutting any content) */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-[#0B2545] via-[#0F3460] to-[#0B2545] p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/35 shadow-lg">
            <div className="flex items-center gap-3.5">
              <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F59E0B] text-[#0B2545] font-black shrink-0 shadow-md">
                <Plane className="size-5 text-[#0B2545]" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm sm:text-base tracking-tight">
                  Dedicated Cross-Border NRI Advisory Desk
                </h4>
                <p className="text-[11px] sm:text-xs text-blue-200 mt-0.5">
                  NRE · NRO · FCNR · FEMA Compliance · Direct AMFI Registered Portfolio Management
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onConnectNRI?.(selectedCountry.name)}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-5 py-2.5 text-xs font-extrabold text-[#0B2545] shadow-md hover:brightness-105 transition cursor-pointer"
              >
                <span>Book NRI Consultation</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Country Selector Grid */}
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8">
          {COUNTRIES.map((c) => {
            const isSelected = selectedCountry.code === c.code
            return (
              <button
                key={c.code}
                onClick={() => setSelectedCountry(c)}
                className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all text-left cursor-pointer ${
                  isSelected
                    ? 'border-[#D4AF37] bg-gradient-to-br from-[#0B2545] to-[#133E87] shadow-lg ring-1 ring-[#D4AF37]'
                    : 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300'
                }`}
              >
                <span className="text-2xl">{c.flag}</span>
                <div className="overflow-hidden">
                  <div className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {c.name}
                  </div>
                  <div className="text-[10px] text-blue-300/80 truncate">{c.city}</div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Country Insight Card */}
        <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#0B2545] via-[#0F3460] to-[#0B2545] p-6 sm:p-8 shadow-xl">
          <div className="grid gap-6 md:grid-cols-12 items-center">
            <div className="md:col-span-4 space-y-2 border-b md:border-b-0 md:border-r border-white/15 pb-4 md:pb-0 md:pr-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedCountry.flag}</span>
                <div>
                  <h3 className="text-xl font-extrabold text-white">{selectedCountry.name}</h3>
                  <p className="text-xs text-amber-300 font-semibold">NRI Wealth & Advisory Desk</p>
                </div>
              </div>
              <p className="text-xs text-blue-200 pt-1">
                Major hubs served: <strong>{selectedCountry.city}</strong>
              </p>
              <div className="flex items-center gap-2 text-[11px] text-blue-300 bg-white/5 p-2 rounded-lg border border-white/10">
                <Clock className="size-3.5 text-amber-400 shrink-0" />
                <span>Synchronized Desk: {selectedCountry.timezone}</span>
              </div>
            </div>

            <div className="md:col-span-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Tailored Wealth Solutions For {selectedCountry.name} NRIs:
              </h4>
              <div className="space-y-1.5">
                {selectedCountry.popularServices.map((service) => (
                  <div key={service} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col justify-center gap-2.5">
              <button
                onClick={() => onConnectNRI?.(selectedCountry.name)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] py-3 px-4 text-xs font-bold text-[#0B2545] shadow-md hover:brightness-105 transition cursor-pointer"
              >
                <span>Connect With {selectedCountry.name} Desk</span>
                <ArrowRight className="size-4" />
              </button>
              <a
                href="https://wa.me/919810121834?text=Hello%20FINVESTMENTS,%20I%20am%20an%20NRI%20looking%20for%20portfolio%20advisory%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 py-2.5 text-xs font-semibold text-white transition text-center"
              >
                <PhoneCall className="size-3.5 text-emerald-400" />
                <span>WhatsApp Desk (+91 98101 21834)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
