import { SealCheckIcon, UserIcon } from "@phosphor-icons/react"

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { cn } from "cn"

/**
 * Profile card. Width is always 100% — the carousel and the roster grid each
 * decide how wide a slot is, so one card works in both.
 */
export default function TeamMemberCard({ member, className, onSelect }) {
  if (!member) return null

  const interactive = typeof onSelect === "function"

  return (
    <Card
      size="sm"
      onClick={interactive ? () => onSelect(member) : undefined}
      className={cn(
        "h-full gap-0 py-0 text-center transition-shadow",
        interactive && "cursor-pointer hover:shadow-md",
        className
      )}
    >
      {/* Banner */}
      <div className="h-16 shrink-0 bg-gradient-to-r from-primary/25 via-primary/10 to-muted" />

      <CardContent className="-mt-10 items-center gap-2 pb-5">
        <Avatar size="lg" className="size-20 ring-4 ring-card">
          <AvatarImage src={member.photo ?? undefined} alt={member.name} />
          <AvatarFallback className="text-base font-medium">
            {member.initials || <UserIcon className="size-7" />}
          </AvatarFallback>
          {member.isLead && (
            <AvatarBadge className="size-5 ring-card">
              <SealCheckIcon className="size-3!" weight="fill" />
            </AvatarBadge>
          )}
        </Avatar>

        <h3 className="mt-1 line-clamp-2 font-heading text-sm leading-snug font-medium text-balance">
          {member.name}
        </h3>

        <Badge variant="secondary" className="max-w-full">
          <span className="truncate">{member.role}</span>
        </Badge>

        <p className="text-xs text-muted-foreground">
          {member.domainLabel}
        </p>
      </CardContent>
    </Card>
  )
}
