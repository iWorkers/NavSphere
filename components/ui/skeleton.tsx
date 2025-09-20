import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "card" | "avatar" | "title" | "text" | "button"
}

function Skeleton({
  className,
  variant = "default",
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted",
        {
          "h-4 w-full": variant === "text",
          "h-6 w-3/4": variant === "title",
          "h-12 w-12 rounded-full": variant === "avatar",
          "h-10 w-20": variant === "button",
          "h-[180px] w-full": variant === "card",
        },
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
