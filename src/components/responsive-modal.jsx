import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer"
import { cn } from "cn"
import { useIsMobile } from "@/hooks/use-media-query"

/**
 * A centred Dialog on desktop, a swipe-to-dismiss Drawer on phones.
 * Same props either way, so callers never branch on viewport themselves.
 */
export function ResponsiveModal({
  open,
  onOpenChange,
  title,
  description,
  className,
  children,
}) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange} showSwipeHandle>
        <DrawerContent className="max-h-[92dvh]">
          <DrawerHeader className="text-left">
            <DrawerTitle className="font-heading text-base">{title}</DrawerTitle>
            {description && <DrawerDescription>{description}</DrawerDescription>}
          </DrawerHeader>
          <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn("max-h-[88dvh] gap-0 overflow-hidden p-0 sm:max-w-3xl", className)}>
        <DialogHeader className="p-6 pb-3 text-left">
          <DialogTitle className="font-heading text-xl">{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="min-h-0 overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
