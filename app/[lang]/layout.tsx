import type { Metadata } from 'next'
import './globals.css'
import Navigation from './ui/Navigation/Navigation'
import Providers from '../lib/Providers/providers';
import { Locale, i18n } from '@/i18n.config';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
  params
}: {
    children: React.ReactNode,
  params: {lang: Locale}
}) {
  return (
    <html lang={params.lang}>
      <body>
        <Providers>
          <Navigation lang={params.lang}/>
          <main>
        {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
