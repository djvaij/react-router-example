import { FC } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

interface NavigationItem {
  title: string
  path: string
}

interface NavigationProps {
  items: NavigationItem[]
}
export const Navigation: FC<NavigationProps> = ({ items }) => {
  return (
    <nav>
      <ul className={cn('flex items-center gap-4')}>
        {items.map((item) => (
          <li key={item.title}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
