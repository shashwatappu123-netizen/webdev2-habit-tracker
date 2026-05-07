import type { ComponentProps } from "react"

type Variant = "primary" | "secondary" | "ghost-destructive"

type ButtonProps = {
  variant?: Variant
} & ComponentProps<"button">

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  function twMerge(base: string, variantStyles: string, extraClassName: string | undefined) {
    return [base, variantStyles, extraClassName].filter(Boolean).join(" ")
  }

  return (
    <button
      {...props}
      type={type}
      className={twMerge(
        "transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
        getVariantStyles(variant),
        className,
      )}
    />
  )
}

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
    case "secondary":
      return "bg-white/10 hover:bg-white/20 text-white/90 border border-white/20 backdrop-blur-sm"
    case "ghost-destructive":
      return "hover:bg-red-500/20 text-red-300 hover:text-red-200 border border-red-500/30"
    default:
      throw new Error(`Invalid variant: ${variant satisfies never}`)
  }
}