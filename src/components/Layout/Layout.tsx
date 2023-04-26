import { Navigation } from '../Navigation'
import { navigationItems } from '@/config/navigation'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const year = new Date().getFullYear()
  return (
    <>
      <header>
        <Navigation items={navigationItems} />
      </header>
      <main>{children}</main>
      <footer>Vasyl Mykhaniv - {year}</footer>
    </>
  )
}
