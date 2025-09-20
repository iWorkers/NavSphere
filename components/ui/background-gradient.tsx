import { cn } from "@/lib/utils"

interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "blue" | "green" | "purple"
}

export function BackgroundGradient({
  className,
  variant = "default",
  ...props
}: BackgroundGradientProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 opacity-40",
        {
          "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500": variant === "default",
          "bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800": variant === "subtle",
          "bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500": variant === "blue",
          "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500": variant === "green",
          "bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500": variant === "purple",
        },
        className
      )}
      {...props}
    />
  )
}
