import * as React from "react"

import { AspectRatio } from "./ui/aspect-ratio"
import { Skeleton } from "./ui/skeleton"
import { cn } from "cn"

/**
 * Image in a fixed aspect box with a Skeleton placeholder.
 *
 * A cached image can finish decoding before React attaches `onLoad`, which
 * would leave the skeleton up forever — so the ref is also checked on mount.
 */
export function SmartImage({ src, alt, ratio = 16 / 10, className, imgClassName, fit = "cover" }) {
  const ref = React.useRef(null)
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    if (ref.current?.complete) setLoaded(true)
  }, [src])

  return (
    <AspectRatio ratio={ratio} className={cn("overflow-hidden", className)}>
      {!loaded && <Skeleton className="absolute inset-0 rounded-none" />}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn(
          "size-full transition-opacity duration-500",
          fit === "contain" ? "object-contain" : "object-cover",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName
        )}
      />
    </AspectRatio>
  )
}
