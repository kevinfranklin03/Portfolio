import 'tailwindcss/tailwind.css'
import Transition from "./components/transition"
import { Space_Grotesk } from 'next/font/google';

export const metadata = {
  title: 'Kevin',
  description: "Kevin's Portfolio",
}

const pixelify_sans =  Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Space_Grotesk-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pixelify_sans.variable}`}>
      <body suppressHydrationWarning={true} className="bg-black">
        <Transition> {children}</Transition>
      </body>
    </html>
  )
}
