import { cn } from "cn"

/**
 * Shared eyebrow + title + lede block. Keeps every section on the page
 * rhythmically identical instead of each one inventing its own scale.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="font-heading text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-[clamp(1.75rem,5vw,2.75rem)] leading-tight font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
