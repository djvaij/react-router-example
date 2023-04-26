import { FC } from 'react'
import { Link } from 'react-router-dom'

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
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
