import React from 'react'
import { Logo } from './logo'
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  LifeBuoy,
  Search,
  Settings,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export const Sidebar = () => {
  return (
    <aside className="mx-1 flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 focus:outline-none"
          placeholder="Search"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto">
        <nav className="space-y-0.5">
          <NavItem title="Suport" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Settings} />
        </nav>
        <UsedSpaceWidget />
      </div>
    </aside>
  )
}