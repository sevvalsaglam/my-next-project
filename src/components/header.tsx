import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">TaskFlow</span>
            <span role="img" aria-label="task icon">📟</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/tasks" className="transition-colors hover:text-foreground/80">
              Tasks
            </Link>
            <Link href="/add-task" className="transition-colors hover:text-foreground/80">
              Add Task
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

