import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'FINVESTMENTS | One Trusted Partner. Every Opportunity. | AMFI Registered',
  description:
    'FINVESTMENTS - Comprehensive wealth consultancy established in 2016. Managing ₹200+ Cr AUM for 500+ families & NRI investors across 10+ countries. Mutual Funds, PMS, AIF, Insurance, Bonds, and Corporate FDs. ARN-129236 | ARN-186693.',
  keywords: [
    'Finvestments',
    'Mutual Funds Noida',
    'AMFI Registered Distributor ARN-129236',
    'PMS and AIF Noida',
    'Wealth Management India',
    'NRI Investment Desk',
    'Life and Health Insurance',
    'Corporate Fixed Deposits',
    'Sovereign Gold Bonds'
  ],
  authors: [{ name: 'FINVESTMENTS Consultancy' }],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/finvestments-mark.png', type: 'image/png' },
    ],
    apple: '/icon-192.png',
  },
  openGraph: {
    title: 'FINVESTMENTS | Invest · Grow · Protect',
    description: 'One Trusted Partner. Every Opportunity. Serving 500+ families and NRIs across 10+ countries.',
    url: 'https://www.finvestments.in',
    siteName: 'FINVESTMENTS',
    locale: 'en_IN',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0B2545',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased text-slate-800 bg-[#f8fafc]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
