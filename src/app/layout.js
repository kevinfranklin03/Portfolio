import Navbar from "./components/navbar"
import 'tailwindcss/tailwind.css'
import Transition from "./components/transition"

export const metadata = {
  title: 'Kevin',
  description: "Kevin's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-black">
        <Transition> {children}</Transition>
      </body>
    </html>
  )
}
