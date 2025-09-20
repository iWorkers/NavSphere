import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { BackgroundGradient } from '@/components/ui/background-gradient'

interface LayoutProps {
  children: ReactNode
  hideHeader?: boolean
  hideFooter?: boolean
  backgroundVariant?: "default" | "subtle" | "blue" | "green" | "purple" | "none"
  className?: string
}

export default function Layout({ 
  children, 
  hideHeader = false, 
  hideFooter = false,
  backgroundVariant = "none",
  className
}: LayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen">
      {backgroundVariant !== "none" && (
        <BackgroundGradient variant={backgroundVariant} />
      )}
      
      {!hideHeader && <Header />}
      
      <main className={cn("flex-grow", className)}>
        {children}
      </main>
      
      {!hideFooter && <Footer />}
    </div>
  )
}

// 需要在文件顶部添加
import { cn } from "@/lib/utils"
