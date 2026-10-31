'use client'

import React, { useState, useEffect } from 'react'
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Sparkles,
  ShieldCheck
} from 'lucide-react'

interface TickerData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  currency: string
  digits?: number
}

const INITIAL_DATA: TickerData[] = [
  { symbol: 'SENSEX', name: 'BSE SENSEX', price: 81845.20, change: 482.60, changePercent: 0.59, currency: '₹', digits: 2 },
  { symbol: 'NIFTY 50', name: 'NSE NIFTY 50', price: 25012.75, change: 145.30, changePercent: 0.58, currency: '₹', digits: 2 },
  { symbol: 'BANK NIFTY', name: 'NIFTY BANK', price: 51920.40, change: 320.15, changePercent: 0.62, currency: '₹', digits: 2 },
  { symbol: 'NIFTY IT', name: 'NIFTY IT', price: 42350.10, change: -110.45, changePercent: -0.26, currency: '₹', digits: 2 },
  { symbol: 'GOLD (10g)', name: '24K Gold 999', price: 76420.00, change: 280.00, changePercent: 0.37, currency: '₹', digits: 0 },
  { symbol: 'SILVER (1kg)', name: 'Silver 999', price: 92150.00, change: 650.00, changePercent: 0.71, currency: '₹', digits: 0 },
  { symbol: 'USD / INR', name: 'US Dollar', price: 84.08, change: -0.04, changePercent: -0.05, currency: '₹', digits: 2 },
  { symbol: 'CRUDE OIL', name: 'Brent Crude', price: 74.30, change: -0.85, changePercent: -1.13, currency: '$', digits: 2 },
  { symbol: 'NIFTY MIDCAP', name: 'Midcap 150', price: 21450.80, change: 185.20, changePercent: 0.87, currency: '₹', digits: 2 },
  { symbol: '10Y G-SEC', name: 'Govt Bond Yield', price: 6.82, change: 0.01, changePercent: 0.15, currency: '%', digits: 2 },
]

export default function MarketTicker() {
  const [data, setData] = useState<TickerData[]>(INITIAL_DATA)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))

    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => {
          const deltaFactor = (Math.random() - 0.48) * 0.002
          const newPrice = Math.max(1, item.price * (1 + deltaFactor))
          const diff = newPrice - (item.price - item.change)
          const newPct = (diff / (item.price - item.change)) * 100

          return {
            ...item,
            price: newPrice,
            change: diff,
            changePercent: newPct,
          }
        })
      )
      setLastUpdated(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }, 3800)

    return () => clearInterval(interval)
  }, [])

  const displayItems = [...data, ...data]

  return (
    <div className="relative border-y border-[#0B2545]/30 bg-[#051937] text-white shadow-inner overflow-hidden select-none">
      <div className="flex items-center">
        {/* Live Badge */}
        <div className="z-10 flex shrink-0 items-center gap-2 bg-[#0B2545] px-3.5 py-2 text-[11px] font-bold border-r border-[#D4AF37]/30 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          <span className="tracking-wider uppercase text-amber-300 text-[10px] flex items-center gap-1.5 font-extrabold">
            <Activity className="size-3 text-amber-300" /> LIVE INDICES
          </span>
        </div>

        {/* Marquee ticker track */}
        <div className="overflow-hidden py-1.5 whitespace-nowrap">
          <div className="animate-marquee inline-flex items-center gap-7">
            {displayItems.map((item, idx) => {
              const isPositive = item.change >= 0
              return (
                <div
                  key={`${item.symbol}-${idx}`}
                  className="inline-flex items-center gap-2 text-xs font-medium cursor-default hover:bg-white/5 px-2 py-0.5 rounded transition"
                >
                  <span className="font-bold text-slate-200 tracking-tight">{item.symbol}</span>
                  <span className="text-white font-semibold">
                    {item.currency === '₹' && '₹'}
                    {item.currency === '$' && '$'}
                    {item.price.toLocaleString('en-IN', {
                      minimumFractionDigits: item.digits ?? 2,
                      maximumFractionDigits: item.digits ?? 2,
                    })}
                    {item.currency === '%' && '%'}
                  </span>
                  <span
                    className={`inline-flex items-center gap-0.5 text-[11px] font-bold ${
                      isPositive ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {isPositive ? (
                      <TrendingUp className="size-3" />
                    ) : (
                      <TrendingDown className="size-3" />
                    )}
                    {isPositive ? '+' : ''}
                    {item.changePercent.toFixed(2)}%
                  </span>
                  <span className="text-slate-600 ml-1">·</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right time indicator */}
        <div className="hidden lg:flex shrink-0 items-center gap-2 bg-[#0B2545] px-3 py-2 text-[10px] text-amber-200/80 border-l border-[#D4AF37]/30">
          <span className="size-1.5 rounded-full bg-amber-400"></span>
          <span>Updated: {lastUpdated || 'Live'}</span>
        </div>
      </div>
    </div>
  )
}
